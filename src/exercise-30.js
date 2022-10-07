export function mostFrequent(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  const numberObj = {};
  let numberArr = [];
  let maxCount = 1;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    numberObj[number] = numberObj[number] === undefined ? 1 : numberObj[number] + 1; //{'2':4,'3':4}
    if (numberObj[number] > maxCount) {
      numberArr = [number]; //[3]
      maxCount = numberObj[number]; //4
    }
    if (numberObj[number] === maxCount) {
      numberArr.push(number); //[3,2]
    }
  }
  return numberArr[0];
}
console.log(mostFrequent([2, 2, 3, 3, 2, 3, 3, 2]));
console.log(mostFrequent([3, 3, 2, 2, 3, 2]));
