//Number-01
// cach 1
// 123
export function isIncreasingNumber(n) {
  if (typeof n !== 'number' || n >= 1000000 || n < 10) return false;
  let remaining = n;
  let lastDigit = 10;
  while (remaining > 0) {
    const prevDigit = remaining % 10;
    if (prevDigit >= lastDigit) return false;
    lastDigit = prevDigit;
    remaining = Math.trunc(remaining / 10);
  }
  return true;
}
// cach 2
// export function isIncreasingNumber(n) {
//   if (typeof n !== 'number' || n >= 1000000 || n < 10) return false;
//   const nToStr = n.toString();
//   for (let i = 0; i < nToStr.length - 1; i++) {
//     if (nToStr[i] >= nToStr[i + 1]) return false;
//   }
//   return true;
// }
//Number-02
// 321
export function isDecreasingNumber(n) {
  if (typeof n !== 'number' || n >= 1000000 || n < 10) return false;
  let remaining = n;
  let lastDigit = -1;
  while (remaining > 0) {
    const prevDigit = remaining % 10;
    if (lastDigit >= prevDigit) return false;
    lastDigit = prevDigit;
    remaining = Math.trunc(remaining / 10);
  }
  return true;
}

// export function isDecreasingNumber(n) {
//   if (typeof n !== 'number' || n >= 1000000 || n < 10) return false;
//   const nToStr = n.toString();
//   for (let i = 0; i < nToStr.length - 1; i++) {
//     if (nToStr[i] <= nToStr[i + 1]) return false;
//   }
//   return true;
// }
// Number-03
export function isIncreasingNumberByDistance(n, x) {
  if (typeof n !== 'number' || typeof x !== 'number' || n < 10 || n >= 1000000 || x <= 0 || x >= 5)
    return false;
  const nToStr = n.toString();
  for (let i = 0; i < nToStr.length - 1; i++) {
    if (nToStr[i] >= nToStr[i + 1] || nToStr[i + 1] - nToStr[i] !== x) return false;
  }
  return true;
}
// Number-04
export function isPrime(n) {
  if (typeof n !== 'number' || n <= 1 || n >= 100000) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
// Number-05
// export function isPerfectSquare(n) {
//   if (typeof n !== 'number' || n <= 1 || n >= 100000) return false;
//   for (let i = 1; i <= Math.sqrt(n); i++) {
//     if (i * i === n) return true;
//   }
//   return false;
// }
export function isPerfectSquare(n) {
  if (typeof n !== 'number' || n <= 1 || n >= 100000) return false;
  return Math.sqrt(n) * Math.sqrt(n) === n ? true : false;
}
// Number-06
export function isPerfectNumber(n) {
  if (typeof n !== 'number' || n <= 1 || n >= 1000) return false;
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n ? true : false;
}
// Number-07
export function isSymetricNumber(n) {
  if (typeof n !== 'number' || n < 10 || n >= 1000000) return false;
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    const endNumber = str.length - 1;
    if (str[i] !== str[endNumber - i]) return false;
  }
  return true;
}
// Number-08
export function isDivisibleBy10(n) {
  if (typeof n !== 'number' || n < 10 || n >= 1000000) return false;
  let sum = 0;
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    sum += +str[i];
  }
  return sum % 10 === 0 ? true : false;
}
// Number-09
export function hasTwoDigitsWithSum(n, sum) {
  if (typeof n !== 'number' || n <= 9 || n >= 1000000) return false;
  if (typeof sum !== 'number' || sum <= 0 || sum >= 19) return false;
  let total = 0;
  const str = n.toString();
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      total = Number(str[i]) + Number(str[j]);
      if (total === sum) return true;
    }
  }
  return false;
}
// -------------------------------------------END-------------------------------------------
