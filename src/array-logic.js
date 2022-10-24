// logic-01
export function findSumPair(numberList, tagerSum) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const result = [];
  for (let i = 0; i < numberList.length - 1; i++) {
    for (let j = 1; j < numberList.length; j++) {
      if (numberList[j] + numberList[i] === tagerSum) result.push(numberList[i], numberList[j]);
    }
  }
  return result.sort();
}
// logic-02
export function findMissingNumber(numberList, n) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  const arr = [];
  for (let i = 5; i <= n; i++) {
    arr.push(i);
  }
  let result = 0;
  arr.forEach((x) => {
    if (!numberList.includes(x)) result = x;
  });
  return result;
}
// logic-03
export function statisticsNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return {};
  return numberList.reduce((obj, number) => {
    obj[number] = obj[number] === undefined ? 1 : obj[number] + 1;
    return obj;
  }, {});
}
// logic-04
export function findMostFrequenNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  // const obj = numberList.reduce((obj, number) => {
  //   obj[number] = obj[number] === undefined ? 1 : obj[number] + 1;
  //   return obj;
  // }, {});
  // let maxKey = undefined;
  // for (const key in obj) {
  //   if (maxKey === undefined || obj[key] > obj[maxKey]) maxKey = key;
  // }
  // return +maxKey;
  const obj = {};
  let maxKey = undefined;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    obj[number] = obj[number] === undefined ? 1 : obj[number] + 1;
    if (maxKey === undefined || obj[number] > obj[maxKey]) maxKey = number;
  }
  return +maxKey;
}
