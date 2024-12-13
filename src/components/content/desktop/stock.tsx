import React, { useEffect, useRef, useState } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface ApiResponse {
  [date: string]: {
    "1. open": string;
    "2. high": string;
    "3. low": string;
    "4. close": string;
    "5. volume": string;
  };
}

interface TransformedData {
  ohlc: Array<[number, number, number, number, number]>;
  volume: Array<[number, number]>;
}

const StockChart: React.FC = () => {
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>({
    title: {
      text: "Loading Data...",
    },
    series: [],
  });

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=EUR&apikey=demo"
      );
      const data: { "Time Series (Digital Currency Daily)": ApiResponse } =
        await response.json();
      const transformedData = transformData(
        data["Time Series (Digital Currency Daily)"]
      );

      setChartOptions({
        title: {
          text: "BTC Historical",
        },
        yAxis: [
          {
            labels: {
              align: "right",
              x: -3,
            },
            title: {
              text: "OHLC",
            },
            height: "60%",
            lineWidth: 2,
            resize: {
              enabled: true,
            },
          },
          {
            labels: {
              align: "right",
              x: -3,
            },
            title: {
              text: "Volume",
            },
            top: "65%",
            height: "35%",
            offset: 0,
            lineWidth: 2,
          },
        ],
        tooltip: {
          split: true,
        },
        series: [
          {
            type: "candlestick",
            name: "BTC",
            data: transformedData.ohlc,
            dataGrouping: {
              units: [
                ["week", [1]],
                ["month", [1, 2, 3, 4, 6]],
              ],
            },
          },
          {
            type: "column",
            name: "Volume",
            data: transformedData.volume,
            yAxis: 1,
            dataGrouping: {
              units: [
                ["week", [1]],
                ["month", [1, 2, 3, 4, 6]],
              ],
            },
          },
        ],
      });
    };

    const transformData = (data: ApiResponse): TransformedData => {
      const ohlc: Array<[number, number, number, number, number]> = [];
      const volume: Array<[number, number]> = [];

      Object.keys(data).forEach((date) => {
        const item = data[date];
        const timestamp = new Date(date).getTime(); // Convert date to timestamp
        ohlc.push([
          timestamp,
          parseFloat(item["1. open"]),
          parseFloat(item["2. high"]),
          parseFloat(item["3. low"]),
          parseFloat(item["4. close"]),
        ]);
        volume.push([timestamp, parseFloat(item["5. volume"])]);
      });

      return { ohlc, volume };
    };

    fetchData();
  }, []);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        ref={chartComponentRef}
      />
    </div>
  );
};

export default StockChart;
