// array-check-01
export function hasEvenNumberGreaterThanN(numberList, n) {
  if (!Array.isArray(numberList) || numberList.length === 0 || typeof n !== 'number') return false;
  return numberList.some((number) => number % 2 === 0 && number > n);
}
// array-check-02
export function hasOddNumberDivisibleBy3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  return numberList.some((number) => number % 3 === 0);
}
// array-check-03
export function hasEasyFrontend(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return false;
  return wordList.join(' ').includes('easy frontend');
}
// array-check-04
export function hasTruthy(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return false;
  const falsyList = [0, 0n, false, '', null, undefined, NaN];
  for (let i = 0; i < arr.length; i++) {
    if (!falsyList.includes(arr[i])) {
      return true;
    }
  }
  return false;
}
// array-check-05
export function hasFalsy(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return false;
  const falsyList = [0, 0n, false, '', null, undefined, NaN];
  for (let i = 0; i < arr.length; i++) {
    if (falsyList.includes(arr[i])) {
      return true;
    }
  }
  return false;
}
// array-check-06
export function hasStudent(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0 || typeof studentId !== 'number')
    return false;
  let flag = false;
  studentList.forEach((x) => {
    if (x.id === studentId) flag = true;
  });
  return flag;
}
// array-check-07
export function hasAlice(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;
  for (const value of studentList) {
    if (value.name.toLowerCase() === 'alice' && value.gender === 'female') return true;
  }
  return false;
}
// array-check-08
export function hasFreeShip(productList, price) {
  if (!Array.isArray(productList) || productList.length === 0 || typeof price !== 'number')
    return false;
  for (const key in productList) {
    const product = productList[key];
    if (product.isFreeShip === true && product.price < price) return true;
  }
  return false;
}
// array-check-09
export function isIncreasingNumberList(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 2) return false;
  let compare = numberList[0];
  for (let i = 1; i < numberList.length; i++) {
    const number = numberList[i];
    if (compare >= number) return false;
  }
  return true;
}
// array-check-10
export function isIncreasingNumberList2(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 2) return false;
  let compare = numberList[0];
  for (let i = 1; i < numberList.length; i++) {
    const number = numberList[i];
    if (compare <= number) return false;
  }
  return true;
}
// array-check-11
export function isSymetricList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  for (let i = 0; i < numberList.length; i++) {
    const end = numberList.length - 1;
    if (numberList[i] !== numberList[end - i]) return false;
  }
  return true;
}
// array-check-12
// function generateFibonaci(n) {
//   const result = [];
//   let start = 0;
//   let current = 1;
//   for (let i = start; i < n; i++) {
//     if (start < n) {
//       const next = start + current;
//       result.push(start);
//       start = current;
//       current = next;
//     }
//   }
//   return result;
// }
function generateFibonaci(n) {
  const result = [0, 1];
  for (let i = 2; result[i - 1] < n; i++) {
    result[i] = result[i - 2] + result[i - 1];
  }
  result.pop();
  return result;
}
export function hasFibonaciNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  const fibonaciList = generateFibonaci(100);
  return numberList.some((x) => fibonaciList.includes(x));
}
