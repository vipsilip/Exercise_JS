export function validMountainArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  if (numberList[1] < numberList[0]) return false;
  let maxIndex = false;
  for (let i = 0; i < numberList.length - 1; i++) {
    if (numberList[i + 1] === numberList[i]) return false;
    if (maxIndex && numberList[i + 1] > numberList[i]) return false;
    if (numberList[i] > numberList[i + 1]) maxIndex = true;
  }
  return maxIndex;
}
// console.log(validMountainArray([0, 3, 2, 1]));
