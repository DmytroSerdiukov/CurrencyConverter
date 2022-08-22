export const compute = (amount, currencyRate, ownRate) => {
  const result = (amount * currencyRate) / ownRate;
  return result;
};
