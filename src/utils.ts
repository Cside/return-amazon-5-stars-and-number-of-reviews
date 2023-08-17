export const rateToClassSuffix = (rate: number) => {
  if (rate <= 0.2) return "0";
  if (rate <= 0.7) return "0-5";
  if (rate <= 1.2) return "1";
  if (rate <= 1.7) return "1-5";
  if (rate <= 2.2) return "2";
  if (rate <= 2.7) return "2-5";
  if (rate <= 3.2) return "3";
  if (rate <= 3.7) return "3-5";
  if (rate <= 4.2) return "4";
  if (rate <= 4.7) return "4-5";
  return "5";
};
