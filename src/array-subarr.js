// array-subarr-01
export function findAllIncreasingSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const result = [];
  let subArr = [];
  for (let i = 0; i < numberList.length; i++) {
    subArr.push(numberList[i]);
    if (numberList[i] >= numberList[i + 1] || i === numberList.length - 1) {
      subArr.length > 1 && result.push(subArr);
      subArr = [];
    }
  }
  return result;
}
// array-subarr-02
export function findAllDecreasingSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const result = [];
  let subArr = [];
  for (let i = 0; i < numberList.length; i++) {
    subArr.push(numberList[i]);
    if (numberList[i] <= numberList[i + 1] || i === numberList.length - 1) {
      subArr.length > 2 && result.push(subArr);
      subArr = [];
    }
  }
  return result;
}
// array-subarr-03
export function isSubArray(a, b) {
  if (
    !Array.isArray(a) ||
    !Array.isArray(b) ||
    (a.length === 0 && b.length === 0) ||
    a.length > b.length
  )
    return false;
  if (a.length === 0 && b.length !== 0) return true;
  return b.join(',').includes(a.join(','));
}
// array-subarr-04
export function findAllPositiveEvenSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const result = [];
  let subArr = [];
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) subArr.push(number);
    if (subArr.length > 0 && (number % 2 === 1 || i === numberList.length - 1)) {
      result.push(subArr);
      subArr = [];
    }
  }
  return result;
}
// array-subarr-05
function calcSumSubArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
export function findMaxSumArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  const result = [];
  let subArr = [];
  for (let i = 0; i < numberList.length; i++) {
    subArr.push(numberList[i]);
    if (numberList[i] > numberList[i + 1] || i === numberList.length - 1) {
      subArr.length > 1 && result.push(subArr);
      subArr = [];
    }
  }
  return result.reduce(
    (max, number) => (calcSumSubArr(number) > max ? calcSumSubArr(number) : max),
    0
  );
}
// array-subarr-06
export function findMaxSumArray2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const result = [];
  let subArr = [];
  for (let i = 0; i < numberList.length; i++) {
    subArr.push(numberList[i]);
    if (numberList[i] > numberList[i + 1] || i === numberList.length - 1) {
      subArr.length > 1 && result.push(subArr);
      subArr = [];
    }
  }
  if (result.length !== 0) {
    return result.reduce((max, number) =>
      calcSumSubArr(number) > calcSumSubArr(max) ? number : max
    );
  }
  return result;
}
