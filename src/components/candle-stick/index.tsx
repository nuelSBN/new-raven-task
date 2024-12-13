import React from "react";
import ReactApexChart from "react-apexcharts";
import { useCandleStick } from "../../hooks/useCandleStick";

const CandlestickComboChart: React.FC = () => {
  const { state } = useCandleStick();

  return (
    <div className="chart-box">
      <div id="chart-candlestick">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="candlestick"
          height={290}
        />
      </div>
      <div id="chart-bar">
        <ReactApexChart
          options={state.optionsBar}
          series={state.seriesBar}
          type="bar"
          height={160}
        />
      </div>
    </div>
  );
};

export default CandlestickComboChart;
