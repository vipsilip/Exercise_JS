import { findAllIncreasingSubArr, findAllDecreasingSubArr, isSubArray } from './array-subarr';
describe('findAllIncreasingSubArr(numberList)', () => {
  it('nen return mang rong khi list la mang rong hoac khong phai mang', () => {
    expect(findAllIncreasingSubArr([])).toEqual([]);
    expect(findAllIncreasingSubArr({})).toEqual([]);
    expect(findAllIncreasingSubArr()).toEqual([]);
    expect(findAllIncreasingSubArr('')).toEqual([]);
    expect(findAllIncreasingSubArr(123)).toEqual([]);
  });
  it('nen return rong khi khong tim ra mang con tang dan', () => {
    expect(findAllIncreasingSubArr([5, 4, 3, 2, 1])).toEqual([]);
  });
  it('nen return dung khi tim ra mang con tang dan', () => {
    expect(findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10])).toEqual([
      [1, 2, 3],
      [-10, 5, 10],
    ]);
    expect(findAllIncreasingSubArr([1, 2, 4, 5, 8, 4, 2])).toEqual([[1, 2, 4, 5, 8]]);
  });
});
describe('findAllDecreasingSubArr(numberList)', () => {
  it('nen return mang rong khi list la mang rong hoac khong phai mang', () => {
    expect(findAllDecreasingSubArr([])).toEqual([]);
    expect(findAllDecreasingSubArr({})).toEqual([]);
    expect(findAllDecreasingSubArr()).toEqual([]);
    expect(findAllDecreasingSubArr('')).toEqual([]);
    expect(findAllDecreasingSubArr(123)).toEqual([]);
  });
  it('nen return rong khi khong tim ra mang con giam dan', () => {
    expect(findAllDecreasingSubArr([1, 2, 3, 4, 5])).toEqual([]);
  });
  it('nen return dung khi tim ra mang con giam dan', () => {
    expect(findAllDecreasingSubArr([3, 2, 1, 15, 10, 20])).toEqual([[3, 2, 1]]);
  });
});
describe('isSubArray(a,b)', () => {
  it('nen return false khi list a la mang rong hoac khong phai mang', () => {
    expect(isSubArray({})).toBe(false);
    expect(isSubArray()).toBe(false);
    expect(isSubArray('')).toBe(false);
    expect(isSubArray(123)).toBe(false);
  });
  it('nen return false khi list a khong phai la mang con list b', () => {
    expect(isSubArray([1, 2], [2, 3, 4])).toBe(false);
    expect(isSubArray([1, 2], [2, 1, 4])).toBe(false);
  });
  it('nen return dung khi tim ra mang con giam dan', () => {
    expect(isSubArray([])).toBe(true);
    expect(isSubArray([1], [1, 2])).toBe(true);
    expect(isSubArray([1, 2], [4, 10, 1, 2, 3])).toBe(true);
  });
});
