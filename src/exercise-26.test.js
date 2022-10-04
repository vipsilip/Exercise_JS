import { isStrongPassword } from './exercise-26';
describe('check strong password', () => {
  it('should return false when input empty', () => {
    expect(isStrongPassword('')).toBe(false);
    expect(isStrongPassword(123)).toBe(false);
    expect(isStrongPassword({})).toBe(false);
    expect(isStrongPassword([])).toBe(false);
    expect(isStrongPassword(true)).toBe(false);
  });
  it('should return false when weak password', () => {
    expect(isStrongPassword('super strong')).toBe(false);
    expect(isStrongPassword('123abc')).toBe(false);
    expect(isStrongPassword('1aBc23de')).toBe(false);
    expect(isStrongPassword('abcdef1!')).toBe(false);
  });
  it('should return true when strong pasword', () => {
    expect(isStrongPassword('Sup3rC0o!')).toBe(true);
  });
});
