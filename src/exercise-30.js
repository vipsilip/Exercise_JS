export function mostFrequent(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  const numberObj = {};
  let numberArr = [];
  let maxNum = numberList[0];
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    numberObj['_' + number] =
      numberObj['_' + number] === undefined ? 1 : numberObj['_' + number] + 1;
  }
  let maxCount = 1;
  for (const key in numberObj) {
    if (numberObj[key] > maxCount) {
      maxCount = numberObj[key];
      numberArr = [key];
    }
    if (numberObj[key] === maxCount) {
      numberArr.push(key);
    }
  }
  return Number(numberArr[0].slice(1));
}
