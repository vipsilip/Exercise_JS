export function filterProducts(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];
  const result = [];
  productList.filter((product) => (product.price > 100000 ? result.push(product) : result));
  return result;
}
