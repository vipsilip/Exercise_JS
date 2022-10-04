import { getLanguageCodeFromURL } from './exercise-25';
describe('getLanguageCodeFromURL(url)', () => {
  it('should return empty string when input empty', () => {
    expect(getLanguageCodeFromURL('')).toBe('en');
    expect(getLanguageCodeFromURL(123)).toBe('en');
    expect(getLanguageCodeFromURL({})).toBe('en');
    expect(getLanguageCodeFromURL([])).toBe('en');
  });
  it('should return "en" when input language unsupport', () => {
    expect(getLanguageCodeFromURL('http://abc.com')).toBe('en');
    expect(getLanguageCodeFromURL('http://abc.com/abc')).toBe('en');
  });
  it('should return correct when language support', () => {
    expect(getLanguageCodeFromURL('http://abc.com/en')).toBe('en');
    expect(getLanguageCodeFromURL('http://abc.com/cn')).toBe('cn');
    expect(getLanguageCodeFromURL('https://vietnam.com/cn')).toBe('cn');
    expect(getLanguageCodeFromURL('http://abc.com/vi/')).toBe('vi');
  });
});
