// array-count-01
export function countPositiveEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  let count = 0;
  numberList.forEach((x) => {
    if (x % 2 === 0 && x > 0) count += 1;
  });
  return count;
}
// array-count-02
export function countNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  let count = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i + 1] < numberList[i]) count += 1;
  }
  return count;
}
// array-count-03
export function countWords(wordList, n) {
  if (!Array.isArray(wordList) || wordList.length === 0) return 0;
  let count = 0;
  for (const word of wordList) {
    if (word.length >= n) count += 1;
  }
  return count;
}
// array-count-04
// export function countUniqueNumbers(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return 0;
//   const obj = {};
//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];
//     obj[number] = true;
//   }
//   return Object.keys(obj).length;
// }
export function countUniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  const result = [];
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (!result.includes(number)) result.push(number);
  }
  return result.length;
}
// array-count-05
export function countNumbersNotInB(a, b) {
  if (!Array.isArray(a) || a.length === 0 || !Array.isArray(b) || b.length === 0) return 0;
  let count = 0;
  for (const number of a) {
    if (!b.includes(number)) count += 1;
  }
  return count;
}
// array-count-06
function calcAvgMark(obj) {
  const countSubjects = Object.keys(obj).length;
  let sumSubjects = 0;
  for (const key in obj) {
    sumSubjects += obj[key];
  }
  const avgMark = sumSubjects / countSubjects;
  return avgMark;
}
export function countStudents(studentList, avgMark) {
  if (!Array.isArray(studentList) || studentList.length === 0) return 0;
  let count = 0;
  for (const student of studentList) {
    if (calcAvgMark(student.marks) >= avgMark) count += 1;
  }
  return count;
}
