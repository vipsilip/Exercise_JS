import { mostFrequent } from './exercise-30';
describe('mostFrequent(numberList)', () => {
  it('should return undefined when not array or empty array', () => {
    expect(mostFrequent(true)).toBeUndefined(undefined);
    expect(mostFrequent()).toBeUndefined(undefined);
    expect(mostFrequent([])).toBeUndefined(undefined);
    expect(mostFrequent({})).toBeUndefined(undefined);
    expect(mostFrequent('abc')).toBeUndefined(undefined);
    expect(mostFrequent(123)).toBeUndefined(undefined);
  });
  it('should return correct when list is number integer', () => {
    expect(mostFrequent([1])).toBe(1);
    expect(mostFrequent([99])).toBe(99);
    expect(mostFrequent([1, 2, 3])).toBe(1);
    expect(mostFrequent([2, 1, 3])).toBe(2);
    expect(mostFrequent([2, 2, 3, 3, 2, 3, 3])).toBe(3);
    expect(mostFrequent([2, 2, 3, 3, 2, 3, 3, 2])).toBe(2);
  });
});
