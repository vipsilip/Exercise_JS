export function findFirstDuplicate(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;
  let result = -1;
  const obj = {};
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (obj[number] === undefined) obj[number] = 1;
    else return number;
  }
  return result;
}
