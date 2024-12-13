import { useState } from "react";
import { generateBarData, generateCandlestickData } from "../utils";

interface SeriesData {
  x: string | number | Date;
  y: [number, number, number, number];
}

interface SeriesBarData {
  x: string | number | Date;
  y: number;
}

export const useCandleStick = () => {
  const candlestickData = generateCandlestickData();

  const [state] = useState<{
    series: { data: SeriesData[] }[];
    options: ApexCharts.ApexOptions;
    seriesBar: { name: string; data: SeriesBarData[] }[];
    optionsBar: ApexCharts.ApexOptions;
  }>({
    series: [
      {
        data: candlestickData,
      },
    ],
    options: {
      chart: {
        type: "candlestick",
        height: 290,
        id: "candles",
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      grid: {
        show: false,
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#00B770",
            downward: "#FF6838",
          },
        },
      },
      xaxis: {
        type: "datetime",
      },
    },
    seriesBar: [
      {
        name: "volume",
        data: generateBarData(candlestickData),
      },
    ],
    optionsBar: {
      chart: {
        height: 160,
        type: "bar",
        brush: {
          enabled: false,
          target: "candles",
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date("2024-01-01").getTime(),
            max: new Date("2024-01-30").getTime(),
          },
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          colors: {
            ranges: [
              {
                from: 0,
                to: Infinity,
                color: undefined,
              },
            ],
          },
        },
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
  });

  return {
    state,
  };
};
