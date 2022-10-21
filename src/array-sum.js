export function sumEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  const filterList = numberList.filter((x) => x % 2 === 0);
  let sum = 0;
  for (let i = 0; i < filterList.length; i++) {
    const currentNum = filterList[i];
    const nextNum = filterList[i + 1];
    if (nextNum > currentNum) sum += currentNum;
    if (nextNum < currentNum) sum += currentNum;
    // console.log(currentNum%2===0 && nextNum%2===0 && nextNum>currentNum);
    // console.log(sum += currentNum);
  }
  return sum;
}
console.log(sumEvenNumbers([2, 8, 5, 4]));
console.log(sumEvenNumbers([-10, -4, 2, 8, 5]));
