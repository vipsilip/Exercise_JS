function getUniqueWords(sentence) {
  if (sentence.length === 0 || typeof sentence !== 'string') return [];
  const wordsArray = sentence.split(' ').filter((x) => x !== '');
  const uniqueWordsSet = new Set(wordsArray);
  return [...uniqueWordsSet];
}
describe('getUniqueWords(sentence)', () => {
  it('nen tra ve mang rong neu sentence la rong hoac khong phai la chuoi', () => {
    expect(getUniqueWords('')).toEqual([]);
    expect(getUniqueWords([])).toEqual([]);
    expect(getUniqueWords({})).toEqual([]);
    expect(getUniqueWords(123)).toEqual([]);
  });
  it('nen tra ve duy nhat neu sentence la chuoi co cac tu trung nhau', () => {
    expect(getUniqueWords('frontend is easy but easy to die')).toEqual([
      'frontend',
      'is',
      'easy',
      'but',
      'to',
      'die',
    ]);
  });
});
