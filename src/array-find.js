// array-find-01
export function findMinPositive(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  return numberList.sort((a, b) => a - b).find((x) => x >= 0);
}
// array-find-02
export function findLongestWord(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return '';
  const filterList = wordList.filter((word) => word.length <= 5 && !word.includes(' '));
  return filterList.reduce((longestWord, currentWord) => {
    return currentWord.length > longestWord.length ? currentWord : longestWord;
  }, '');
}

// array-find-03
export function findFirstPositiveEven(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  return numberList.find((x) => x % 2 === 0 && x >= 0);
}
// array-find-04
export function findLastNegativeOdd(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  return numberList.reverse().find((x) => x < 0 && x % 2 === -1);
}

// array-find-05
export function findSecondLargestNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length <= 1) return undefined;
  return numberList.sort((a, b) => b - a)[1];
}
// array-find-06
export function findLastPerfectSquare(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  // return numberList.filter((x) => Math.sqrt(x) * Math.sqrt(x) === x).reverse()[0];
  return numberList.reverse().find((x) => Math.sqrt(x) * Math.sqrt(x) === x);
}
// array-find-07
function isValidEmail(str) {
  const domain = str.slice(str.indexOf('.'));
  const isDomain = ['.com', '.vn', '.com.vn'].includes(domain);
  const X = str.slice(0, str.indexOf('@'));
  const Y = str.slice(str.indexOf('@') + 1, str.indexOf('.'));
  if (!str.includes('@') || !isDomain || X.length < 3 || Y.length < 3) return false;
  return true;
}
export function findFirstEmail(strList) {
  if (!Array.isArray(strList) || strList.length === 0) return undefined;
  return strList.find((x) => isValidEmail(x));
}
// array-find-08
function isValidUrl(str) {
  const domain = str.slice(str.lastIndexOf('.'));
  const isDomain = ['.com', '.vn', '.com.vn'].includes(domain);
  const protocol = str.slice(0, str.indexOf(':'));
  const isProtocol = ['http', 'https', 'ws', 'wss'].includes(protocol);
  const nameDomain = str.slice(str.indexOf('/') + 2, str.indexOf('.'));
  if (!isDomain || !isProtocol || nameDomain.length < 3) return false;
  return true;
}
export function findLastUrl(strList) {
  if (!Array.isArray(strList) || strList.length === 0) return undefined;
  // let result = undefined;
  // strList.forEach((x) => {
  //   if (isValidUrl(x)) result = x;
  // });
  // return result;
  return strList.reverse().find((x) => isValidUrl(x));
}
// array-find-09
export function findStudentById(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return -1;
  return studentList.findIndex((x) => x.id === studentId);
}
// array-find-10
export function findProductByCode(productList, code) {
  if (!Array.isArray(productList) || productList.length === 0) return -1;
  return productList.findIndex((x) => x.code === code);
}
// array-find-11
export function findStudentHavingHighestMark(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return {};
  const filterList = studentList.filter((student) => student.math);
  return filterList.reduce(
    (maxMath, student) => (maxMath = student.math > maxMath.math ? student : maxMath)
  );
}
// array-find-12
export function findLastStudentHavingMinAvg(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return {};
  return studentList.reduce((minMark, mark) =>
    (mark.math + mark.english) / 2 <= (minMark.math + minMark.english) / 2 ? mark : minMark
  );
}
// array-find-13
export function findStudent(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return {};
  return studentList.filter(
    (x) =>
      (x.marks.math >= 5 && x.marks.english >= 5 && x.marks.programming < 5) ||
      (x.marks.math >= 5 && x.marks.english < 5 && x.marks.programming >= 5) ||
      (x.marks.math < 5 && x.marks.english >= 5 && x.marks.programming >= 5)
  )[0];
}
// array-find-14
export function findProductHavingFreeShip(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return {};
  return productList.find((x) => x.isFreeShip === true);
}
// array-find-15
export function findFirstIPhone(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return {};
  return productList.find((x) => x.name.toLowerCase().includes('iphone'));
}
