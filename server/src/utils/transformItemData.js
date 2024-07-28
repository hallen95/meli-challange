export function transformItemData(item) {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: Math.floor(item.price),
      decimals: parseFloat((item.price % 1).toFixed(2)),
    },
    picture: item.thumbnail || item.pictures[0].url,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    seller_address: item.address,
  };
}

export default transformItemData;
