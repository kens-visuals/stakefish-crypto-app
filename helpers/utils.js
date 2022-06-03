export const formatNumToUSCurrency = (num) =>
  new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(num);
