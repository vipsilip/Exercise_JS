// array-sum-01
export function sumEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  const filterList = numberList.filter((x) => x % 2 === 0);
  if (filterList[1] < filterList[0] || filterList.length === 1) return 0;
  let sum = filterList[0];
  for (let i = 0; i < filterList.length; i++) {
    const currentNum = filterList[i];
    const nextNum = filterList[i + 1];
    if (nextNum > currentNum) sum += nextNum;
  }
  return sum;
}
// array-sum-02
export function sumAllDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  const str = numberList.join('');
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += +str[i];
  }
  return sum;
}
// array-sum-03
function findMinNumber(n) {
  const str = n.toString();
  let min = str[0];
  for (let i = 0; i < str.length; i++) {
    const number = str[i];
    if (number < min) min = number;
  }
  return +min;
}
export function sumAllMinDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  return numberList.reduce((sum, number) => (sum += findMinNumber(number)), 0);
}
// array-sum-04
export function calcCartTotal(cartItemList) {
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;
  return cartItemList.reduce((sum, item) => (sum += item.product.price * item.quantity), 0);
}
