export const rateToClassSuffix = (rate: number): string => {
  const tenfold = rate * 10;
  const ten = Math.floor(tenfold / 10);
  const one = tenfold % 10;
  if (one <= 2) {
    return `${ten}`;
  } else if (one <= 7) {
    return `${ten}-5`;
  } else {
    return `${ten + 1}`;
  }
};
