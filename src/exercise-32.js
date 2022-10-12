export function calcCartTotal(cartItemList) {
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;

  return cartItemList.reduce((result, item) => {
    if (item.product.price === 0 || item.quantity === 0) return 0;
    return (result += item.product.price * item.quantity);
  }, 0);
}
