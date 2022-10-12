//Number-01
export function isIncreasingNumber(n) {
  if (typeof n !== 'number' || n >= 1000000 || n < 10) return false;
  const nToStr = n.toString();
  if (nToStr[1] <= nToStr[0]) return false;
  let result = false;
  for (let i = 0; i < nToStr.length - 1; i++) {
    if (nToStr[i] > nToStr[i + 1]) return false;
    else result = true;
  }
  return result;
}
//Number-02
export function isDecreasingNumber(n) {
  if (typeof n !== 'number' || n >= 1000000 || n < 10) return false;
  const nToStr = n.toString();
  if (nToStr[1] >= nToStr[0]) return false;
  let result = false;
  for (let i = 0; i < nToStr.length - 1; i++) {
    if (nToStr[i] < nToStr[i + 1]) return false;
    else result = true;
  }
  return result;
}
// Number-03
export function isIncreasingNumberByDistance(n, x) {
  if (typeof n !== 'number' || typeof x !== 'number' || n < 10 || n >= 1000000 || x <= 0 || x >= 5)
    return false;
  const nToStr = n.toString();
  let result = false;
  if (nToStr[1] <= nToStr[0]) return false;
  for (let i = 0; i < nToStr.length - 1; i++) {
    if (nToStr[i] > nToStr[i + 1] || nToStr[i + 1] - nToStr[i] !== x) return false;
    else result = true;
  }
  return result;
}
// Number-04
export function isPrime(n) {
  if (typeof n !== 'number' || n <= 1 || n >= 100000) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
// Number-05
export function isPerfectSquare(n) {
  if (typeof n !== 'number' || n <= 1 || n >= 100000) return false;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (i * i === n) return true;
  }
  return false;
}
// Number-06
