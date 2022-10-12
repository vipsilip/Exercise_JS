import { validMountainArray } from './exercise-37';
describe('validMountainArray(numberList)', () => {
  it('should return false when empty array or not a array', () => {
    expect(validMountainArray([])).toBe(false);
    expect(validMountainArray({})).toBe(false);
    expect(validMountainArray()).toBe(false);
    expect(validMountainArray('123')).toBe(false);
    expect(validMountainArray(123)).toBe(false);
  });
  it('should return false when length of array < 3', () => {
    expect(validMountainArray([1])).toBe(false);
    expect(validMountainArray([0, 1])).toBe(false);
  });
  it('should return false when list not mountain', () => {
    expect(validMountainArray([1, 2, 3])).toBe(false);
    expect(validMountainArray([3, 5, 5])).toBe(false);
  });
  it('should return correct when list is mountain', () => {
    expect(validMountainArray([0, 3, 2, 1])).toBe(true);
    expect(validMountainArray([0, 1, 2, 1])).toBe(true);
  });
});
