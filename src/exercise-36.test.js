import { findFirstDuplicate } from './exercise-36';
describe('findFirstDuplicate(numberList)', () => {
  it('should return -1 if list an empty or input not array ', () => {
    expect(findFirstDuplicate([])).toBe(-1);
    expect(findFirstDuplicate({})).toBe(-1);
    expect(findFirstDuplicate()).toBe(-1);
    expect(findFirstDuplicate('123')).toBe(-1);
  });
  it('should return -1 if no duplicate number', () => {
    expect(findFirstDuplicate([1, 2, 3])).toBe(-1);
    expect(findFirstDuplicate([7, 8, 9])).toBe(-1);
  });
  it('should return correct when find duplicate number', () => {
    expect(findFirstDuplicate([1, 1, 2])).toBe(1);
    expect(findFirstDuplicate([1, 2, 2, 1])).toBe(2);
  });
});
