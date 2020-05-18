export const scaleBetween = (
  value: number,
  min: number,
  max: number,
  scaledMin: number,
  scaledMax: number,
) => {
  const values = [min, value, max];
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);
  const scaledValues = values.map(
    num => ((scaledMax - scaledMin) * (num - minValue)) / (maxValue - minValue) + scaledMin,
  );

  return {
    min: scaledValues[0],
    value: scaledValues[1],
    max: scaledValues[2],
  };
};
