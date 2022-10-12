import { chunkArray } from './exercise-34';
describe('chunkArray(array,size)', () => {
  it('should return empty array when not array or empty array ', () => {
    expect(chunkArray([])).toEqual([]);
    expect(chunkArray({})).toEqual([]);
  });
  it('should return empty array when size < 1', () => {
    expect(chunkArray([1, 2, 3], -1)).toEqual([]);
    expect(chunkArray([1, 2, 3], 0)).toEqual([]);
  });
  it('should return error message when chunk > 20', () => {
    expect(() => {
      chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], 1);
    }).toThrow();
  });
  it('should return correct when not an empty array and size > 0', () => {
    expect(chunkArray([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    expect(chunkArray([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
    expect(chunkArray([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
  });
});
