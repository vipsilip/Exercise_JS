import { countWords } from './exercise-28';
describe('countWords(str)', () => {
  it('should return 0 if input empty', () => {
    expect(countWords('')).toBe(0);
    expect(countWords({})).toBe(0);
    expect(countWords([])).toBe(0);
    expect(countWords()).toBe(0);
    expect(countWords(123)).toBe(0);
  });
  it('should return 0 when words with special character or number', () => {
    expect(countWords('!@#$')).toBe(0);
    expect(countWords('1234')).toBe(0);
  });
  it('should return number of word when correct ', () => {
    expect(countWords('easy')).toBe(1);
    expect(countWords('easy frontend')).toBe(2);
    expect(countWords('   easy   frontend   ')).toBe(2);
  });
});
