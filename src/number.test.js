import {
  isIncreasingNumber,
  isDecreasingNumber,
  isIncreasingNumberByDistance,
  isPrime,
  isPerfectSquare,
  isPerfectNumber,
  isSymetricNumber,
  isDivisibleBy10,
  hasTwoDigitsWithSum,
} from './number';
describe('isIncreasingNumber(n)', () => {
  it('should return false when n is not a number or 0 < n < 1000000', () => {
    expect(isIncreasingNumber('')).toBe(false);
    expect(isIncreasingNumber({})).toBe(false);
    expect(isIncreasingNumber([])).toBe(false);
    expect(isIncreasingNumber()).toBe(false);
    expect(isIncreasingNumber(-1)).toBe(false);
    expect(isIncreasingNumber(1000000)).toBe(false);
  });
  it('should return false when n is one digit', () => {
    expect(isIncreasingNumber(1)).toBe(false);
    expect(isIncreasingNumber(5)).toBe(false);
    expect(isIncreasingNumber(9)).toBe(false);
    expect(isIncreasingNumber(3)).toBe(false);
  });
  it('should return false when n is not an increasing number', () => {
    expect(isIncreasingNumber(11)).toBe(false);
    expect(isIncreasingNumber(12321)).toBe(false);
  });
  it('should return correct when n is an increasing number', () => {
    expect(isIncreasingNumber(123)).toBe(true);
    expect(isIncreasingNumber(678)).toBe(true);
    expect(isIncreasingNumber(12345)).toBe(true);
  });
});
describe('isDecreasingNumber(n)', () => {
  it('should return false when n is not a number or 0 < n < 1000000', () => {
    expect(isDecreasingNumber('')).toBe(false);
    expect(isDecreasingNumber({})).toBe(false);
    expect(isDecreasingNumber([])).toBe(false);
    expect(isDecreasingNumber()).toBe(false);
    expect(isDecreasingNumber(-1)).toBe(false);
    expect(isDecreasingNumber(1000000)).toBe(false);
  });
  it('should return false when n is one digit', () => {
    expect(isDecreasingNumber(1)).toBe(false);
    expect(isDecreasingNumber(5)).toBe(false);
    expect(isDecreasingNumber(9)).toBe(false);
    expect(isDecreasingNumber(3)).toBe(false);
  });
  it('should return false when n is not an decreasing number', () => {
    expect(isDecreasingNumber(11)).toBe(false);
    expect(isDecreasingNumber(12321)).toBe(false);
  });
  it('should return correct when n is an decreasing number', () => {
    expect(isDecreasingNumber(321)).toBe(true);
    expect(isDecreasingNumber(876)).toBe(true);
    expect(isDecreasingNumber(54321)).toBe(true);
  });
});
describe('isIncreasingNumberByDistance(n,x)', () => {
  it('should return false when n is not a number or 0 < n < 1000000 or x is not number or 0<x<5', () => {
    expect(isIncreasingNumberByDistance('', '')).toBe(false);
    expect(isIncreasingNumberByDistance({}, {})).toBe(false);
    expect(isIncreasingNumberByDistance([], [])).toBe(false);
    expect(isIncreasingNumberByDistance()).toBe(false);
    expect(isIncreasingNumberByDistance(0, 0)).toBe(false);
    expect(isIncreasingNumberByDistance(1000000, 5)).toBe(false);
  });
  it('should return false when n is one digit', () => {
    expect(isIncreasingNumberByDistance(1, 1)).toBe(false);
    expect(isIncreasingNumberByDistance(5, 1)).toBe(false);
    expect(isIncreasingNumberByDistance(9, 1)).toBe(false);
    expect(isIncreasingNumberByDistance(3, 1)).toBe(false);
  });
  it('should return false when n is not an increasing number by distance', () => {
    expect(isIncreasingNumberByDistance(11, 1)).toBe(false);
    expect(isIncreasingNumberByDistance(12321, 1)).toBe(false);
    expect(isIncreasingNumberByDistance(12345, 2)).toBe(false);
  });
  it('should return correct when n is an increasing number by distance', () => {
    expect(isIncreasingNumberByDistance(123, 1)).toBe(true);
    expect(isIncreasingNumberByDistance(135, 2)).toBe(true);
    expect(isIncreasingNumberByDistance(159, 4)).toBe(true);
  });
});
describe('isPrime(n)', () => {
  it('should return false if n not a number and 0<n<100000', () => {
    expect(isPrime()).toBe(false);
    expect(isPrime({})).toBe(false);
    expect(isPrime([])).toBe(false);
    expect(isPrime('123')).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(100000)).toBe(false);
  });
  it('should return false if n is not prime', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(6)).toBe(false);
  });
  it('should return correct if n is prime', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(3)).toBe(true);
  });
});
describe('isPerfectSquare(n)', () => {
  it('should return false if n not a number and 0<n<100000', () => {
    expect(isPerfectSquare()).toBe(false);
    expect(isPerfectSquare({})).toBe(false);
    expect(isPerfectSquare([])).toBe(false);
    expect(isPerfectSquare('123')).toBe(false);
    expect(isPerfectSquare(0)).toBe(false);
    expect(isPerfectSquare(100000)).toBe(false);
  });
  it('should return false if n is not perfect square', () => {
    expect(isPerfectSquare(3)).toBe(false);
    expect(isPerfectSquare(1)).toBe(false);
    expect(isPerfectSquare(6)).toBe(false);
  });
  it('should return correct if n is perfect square', () => {
    expect(isPerfectSquare(4)).toBe(true);
    expect(isPerfectSquare(64)).toBe(true);
    expect(isPerfectSquare(16)).toBe(true);
  });
});
describe('isPerfectNumber(n)', () => {
  it('should return false if n not a number and 1<n<1000', () => {
    expect(isPerfectNumber()).toBe(false);
    expect(isPerfectNumber({})).toBe(false);
    expect(isPerfectNumber([])).toBe(false);
    expect(isPerfectNumber('123')).toBe(false);
    expect(isPerfectNumber(1)).toBe(false);
    expect(isPerfectNumber(1000)).toBe(false);
  });
  it('should return false if n is not perfect number', () => {
    expect(isPerfectNumber(3)).toBe(false);
    expect(isPerfectNumber(55)).toBe(false);
    expect(isPerfectNumber(10)).toBe(false);
  });
  it('should return correct if n is perfect number', () => {
    expect(isPerfectNumber(6)).toBe(true);
    expect(isPerfectNumber(28)).toBe(true);
    expect(isPerfectNumber(496)).toBe(true);
  });
});
describe('isSymetricNumber(n)', () => {
  it('should return false if n not a number and 1 < n < 1000000', () => {
    expect(isSymetricNumber()).toBe(false);
    expect(isSymetricNumber({})).toBe(false);
    expect(isSymetricNumber([])).toBe(false);
    expect(isSymetricNumber('123')).toBe(false);
    expect(isSymetricNumber(1)).toBe(false);
    expect(isSymetricNumber(1000000)).toBe(false);
  });
  it('should return false if n is not symetric number', () => {
    expect(isSymetricNumber(57168)).toBe(false);
    expect(isSymetricNumber(123)).toBe(false);
    expect(isSymetricNumber(10)).toBe(false);
  });
  it('should return correct if n is symetric number', () => {
    expect(isSymetricNumber(11)).toBe(true);
    expect(isSymetricNumber(12321)).toBe(true);
    expect(isSymetricNumber(131)).toBe(true);
  });
});
describe('isDivisibleBy10(n)', () => {
  it('should return false if n not a number and 1 < n < 1000000', () => {
    expect(isDivisibleBy10()).toBe(false);
    expect(isDivisibleBy10({})).toBe(false);
    expect(isDivisibleBy10([])).toBe(false);
    expect(isDivisibleBy10('123')).toBe(false);
    expect(isDivisibleBy10(1)).toBe(false);
    expect(isDivisibleBy10(1000000)).toBe(false);
  });
  it('should return false if n is total number not divisible 10', () => {
    expect(isDivisibleBy10(54321)).toBe(false);
    expect(isDivisibleBy10(123)).toBe(false);
    expect(isDivisibleBy10(10)).toBe(false);
  });
  it('should return correct if n is total number divisible 10', () => {
    expect(isDivisibleBy10(1234)).toBe(true);
    expect(isDivisibleBy10(123455)).toBe(true);
  });
});
describe('hasTwoDigitsWithSum(n,sum)', () => {
  it('should return false if n not a number and 9 < n < 1000000', () => {
    expect(hasTwoDigitsWithSum()).toBe(false);
    expect(hasTwoDigitsWithSum({})).toBe(false);
    expect(hasTwoDigitsWithSum([])).toBe(false);
    expect(hasTwoDigitsWithSum('123')).toBe(false);
    expect(hasTwoDigitsWithSum(1)).toBe(false);
    expect(hasTwoDigitsWithSum(1000000)).toBe(false);
  });
  it('should return false if sum not a number or 0 < sum < 19', () => {
    expect(hasTwoDigitsWithSum(0)).toBe(false);
    expect(hasTwoDigitsWithSum(19)).toBe(false);
    expect(hasTwoDigitsWithSum([])).toBe(false);
  });
  it('should return false if total n not equal 2 numbers', () => {
    expect(hasTwoDigitsWithSum(101, 3)).toBe(false);
    expect(hasTwoDigitsWithSum(123, 6)).toBe(false);
    expect(hasTwoDigitsWithSum(10, 2)).toBe(false);
  });
  it('should return correct if total n to 2 numbers', () => {
    expect(hasTwoDigitsWithSum(10, 1)).toBe(true);
    expect(hasTwoDigitsWithSum(11, 2)).toBe(true);
    expect(hasTwoDigitsWithSum(123, 5)).toBe(true);
    expect(hasTwoDigitsWithSum(1562, 11)).toBe(true);
  });
});
