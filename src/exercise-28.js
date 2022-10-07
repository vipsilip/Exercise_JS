export function countWords(str) {
  if (typeof str !== 'string' || str.length === 0) return 0;
  const strToArr = str.split(' ');
  return strToArr.filter((word) => word !== '').length;
}
