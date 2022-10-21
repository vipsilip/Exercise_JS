// array-filter-01
export function generateNumberInRange(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return [];
  const result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}
// array-filter-02
export function findNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 2) return [];
  const result = [];
  for (let i = 0; i < numberList.length; i++) {
    const nextNum = numberList[i + 1];
    const number = numberList[i];
    if (nextNum > number) result.push(nextNum);
  }
  return result;
}
// array-filter-03
export function generateFibonaci(n) {
  if (typeof n !== 'number' || n <= 0 || n >= 1000) return [];
  const result = [0, 1];
  for (let i = 0; i < n; i++) {
    if (result[i] + result[i + 1] < n) result[i + 2] = result[i] + result[i + 1];
    else break;
  }
  return result;
}
// array-filter-04
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
export function generatePrimeNumbers(n) {
  if (typeof n !== 'number' || n <= 0 || n >= 1000) return [];
  const result = [];
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) result.push(i);
  }
  return result;
}
// array-filter-05
export function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  return numberList.filter((x) => x % 2 === 0 && x > 0).slice(1);
}
console.log(findAllNumbers([1, 4, 5, -6, 4, 5, 4]));
// array-filter-06
export function findAllNumbers2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  //   const result = [];
  //   for (let i = 0; i < numberList.length; i++) {
  //     if (numberList[i].toString()[0] % 2 === 1) result.push(numberList[i]);
  //   }
  //   return result;
  return numberList.reduce((result, number) => {
    if (number.toString()[0] % 2 === 1) result.push(number);
    return result;
  }, []);
}
// array-filter-07
export function findAllStudents(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];
  return studentList.filter((x) => x.math < 5);
}
// array-filter-08
export function findAllProducts(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];
  return productList.filter((x) => x.isFreeShip === true);
}
// array-filter-09
export function findAllIphones(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];
  return productList.filter((x) => x.name.toLowerCase().includes('iphone') && x.amount > 0);
}
