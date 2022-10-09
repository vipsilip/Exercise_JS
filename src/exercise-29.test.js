import { mergeArray } from './exercise-29';
describe('mergeArray(a,b)', () => {
  it('should return empty array when a and b different data type or same empty', () => {
    expect(mergeArray(1, true)).toEqual([]);
    expect(mergeArray([], [])).toEqual([]);
  });
  it('should return number array when merge two array and remove duplicate numbers ', () => {
    expect(mergeArray([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(mergeArray([2, 3, 4], [1, 2, 3])).toEqual([2, 3, 4, 1]);
  });
});
