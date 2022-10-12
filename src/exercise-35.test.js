import { findSumPair } from './exercise-35';
describe('findSumPair(numberList, targetSum)', () => {
  it('should return empty array when list not array ', () => {
    expect(findSumPair({})).toEqual([]);
    expect(findSumPair([], 10)).toEqual([]);
  });
  it('should return empty array when no sum equal to 2 number', () => {
    expect(findSumPair([1, 2], 2)).toEqual([]);
    expect(findSumPair([1, 2], 2)).toEqual([]);
  });
  it('should return correct when there are sum is equal 2 number', () => {
    expect(findSumPair([1, 2, 3], 5)).toEqual([2, 3]);
    expect(findSumPair([3, 3, 1, 2], 6)).toEqual([3, 3]);
    expect(findSumPair([1, 3, 3, 4], 6)).toEqual([3, 3]);
  });
});
