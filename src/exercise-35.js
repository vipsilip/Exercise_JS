export function findSumPair(numberList, targetSum) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const result = [];
  for (let i = 0; i < numberList.length; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      const number1 = numberList[i];
      const number2 = numberList[j];
      number1 + number2 === targetSum ? result.push(number1, number2) : result;
    }
  }
  return result.sort((a, b) => a - b);
}
