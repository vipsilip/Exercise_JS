import { uniqueLetters } from './exercise-27';
describe('uniqueLetters(str)', () => {
  it('should return empty string when input is empty', () => {
    expect(uniqueLetters('')).toBe('');
    expect(uniqueLetters({})).toBe('');
    expect(uniqueLetters([])).toBe('');
    expect(uniqueLetters()).toBe('');
    expect(uniqueLetters(123)).toBe('');
  });
  it('should return correct when unique letter', () => {
    expect(uniqueLetters('abc')).toBe('abc');
    expect(uniqueLetters('easy frontend')).toBe('asy frotd');
    expect(uniqueLetters('aabccddeff')).toBe('be');
    expect(uniqueLetters('aabccddeffacdf')).toBe('be');
  });
});
