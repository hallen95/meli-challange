export function formatPrice(priceObj) {
  const { amount, currency, decimals } = priceObj;
  const numberFormat = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: decimals,
  });

  return numberFormat.format(amount);
}

export default formatPrice;
