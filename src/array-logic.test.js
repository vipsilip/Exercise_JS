import {
  findSumPair,
  findMissingNumber,
  statisticsNumbers,
  findMostFrequenNumber,
} from './array-logic';
describe('findSumPair(numberList, targetSum)', () => {
  it('nen return rong khi list rong hoac khong phai mang', () => {
    expect(findSumPair([])).toEqual([]);
    expect(findSumPair({})).toEqual([]);
    expect(findSumPair()).toEqual([]);
    expect(findSumPair(123)).toEqual([]);
    expect(findSumPair('')).toEqual([]);
    expect(findSumPair(true)).toEqual([]);
  });
  it('nen return khi khong tim ra 2 so co tong bang tagerSum', () => {
    expect(findSumPair([1, 2], 2)).toEqual([]);
  });
  it('nen return dung khi tim ra 2 so co tong bang tagerSum', () => {
    expect(findSumPair([3, 2, 1], 5)).toEqual([2, 3]);
    expect(findSumPair([3, 2, 6, 4], 10)).toEqual([4, 6]);
  });
});
describe('findMissingNumber(numberList, n)', () => {
  it('nen return rong khi list rong hoac khong phai mang', () => {
    expect(findMissingNumber([])).toBe(0);
    expect(findMissingNumber({})).toBe(0);
    expect(findMissingNumber()).toBe(0);
    expect(findMissingNumber(123)).toBe(0);
    expect(findMissingNumber('')).toBe(0);
    expect(findMissingNumber(true)).toBe(0);
  });
  it('nen return 0 khi khong tim thay so bi thieu trong list', () => {
    expect(findMissingNumber([5], 5)).toBe(0);
  });
  it('nen return dung khi tim thay so bi thieu trong list', () => {
    expect(findMissingNumber([5, 6, 8, 9, 10], 10)).toBe(7);
    expect(findMissingNumber([5], 6)).toBe(6);
  });
});
describe('statisticsNumbers(numberList)', () => {
  it('nen return rong khi list rong hoac khong phai mang', () => {
    expect(statisticsNumbers([])).toEqual({});
    expect(statisticsNumbers({})).toEqual({});
    expect(statisticsNumbers()).toEqual({});
    expect(statisticsNumbers(123)).toEqual({});
    expect(statisticsNumbers('')).toEqual({});
    expect(statisticsNumbers(true)).toEqual({});
  });
  it('nen return dung khi thong ke cac so trong list', () => {
    expect(statisticsNumbers([1, 1, 1, 2, 2, 3])).toEqual({ 1: 3, 2: 2, 3: 1 });
  });
});
describe('findMostFrequenNumber(numberList)', () => {
  it('nen return rong khi list rong hoac khong phai mang', () => {
    expect(findMostFrequenNumber([])).toBe(0);
    expect(findMostFrequenNumber({})).toBe(0);
    expect(findMostFrequenNumber()).toBe(0);
    expect(findMostFrequenNumber(123)).toBe(0);
    expect(findMostFrequenNumber('')).toBe(0);
    expect(findMostFrequenNumber(true)).toBe(0);
  });
  it('nen return dung khi thong ke cac so trong list', () => {
    expect(findMostFrequenNumber([1, 1, 1, 2, 2, 3])).toBe(1);
    expect(findMostFrequenNumber([1])).toBe(1);
    expect(findMostFrequenNumber([1, 2, 3, 2, 3, 4])).toBe(2);
  });
});
