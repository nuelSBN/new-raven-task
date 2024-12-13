const generateCandlestickData = (): {
  x: Date;
  y: [number, number, number, number];
}[] => {
  const data: { x: Date; y: [number, number, number, number] }[] = [];
  const startDate = new Date("2024-01-01").getTime();
  const oneDay = 24 * 60 * 60 * 1000;

  for (let i = 0; i < 30; i++) {
    const timestamp = new Date(startDate + i * oneDay);
    const open = Math.random() * 100 + 100;
    const close = open + (Math.random() * 20 - 10);
    const high = Math.max(open, close) + Math.random() * 10;
    const low = Math.min(open, close) - Math.random() * 10;

    data.push({
      x: timestamp,
      y: [
        parseFloat(open.toFixed(2)),
        parseFloat(high.toFixed(2)),
        parseFloat(low.toFixed(2)),
        parseFloat(close.toFixed(2)),
      ],
    });
  }

  return data;
};

const generateBarData = (
  candlestickData: { x: Date; y: [number, number, number, number] }[]
): { x: Date; y: number; fillColor: string }[] => {
  const data: { x: Date; y: number; fillColor: string }[] = [];

  candlestickData.forEach((candle) => {
    const volume = Math.floor(Math.random() * 1000 + 100);
    const isUpward = candle.y[3] > candle.y[0];
    data.push({
      x: candle.x,
      y: volume,
      fillColor: isUpward ? "#00B770" : "#FF6838",
    });
  });

  return data;
};

export { generateCandlestickData, generateBarData };
