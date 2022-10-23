// array-subarr-01
export function findAllIncreasingSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const result = [];
  let tempArr = [];
  for (let i = 0; i < numberList.length; i++) {
    tempArr.push(numberList[i]);
    if (numberList[i] >= numberList[i + 1] || i === numberList.length - 1) {
      tempArr.length > 1 && result.push(tempArr);
      tempArr = [];
    }
  }
  return result;
}
// array-subarr-01
export function findAllDecreasingSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const result = [];
  let tempArr = [];
  for (let i = 0; i < numberList.length; i++) {
    tempArr.push(numberList[i]);
    if (numberList[i] <= numberList[i + 1] || i === numberList.length - 1) {
      tempArr.length > 2 && result.push(tempArr);
      tempArr = [];
    }
  }
  return result;
}
// array-subarr-03
function subArr(arr) {
  const result = [];
  let subArr = [];
  for (let i = 0; i < arr.length; i++) {}
}
export function isSubArray(a, b) {
  if (
    !Array.isArray(a) ||
    !Array.isArray(b) ||
    (a.length === 0 && b.length === 0) ||
    a.length > b.length
  )
    return false;
  if (a.length === 0 && b.length !== 0) return true;
}
