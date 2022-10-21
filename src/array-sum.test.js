import { sumEvenNumbers } from './array-sum';
describe('sumEvenNumbers(numberList)', () => {
  it('nen return 0 khi mang rong hoac khong phai mang', () => {
    expect(sumEvenNumbers([])).toBe(0);
    expect(sumEvenNumbers({})).toBe(0);
    expect(sumEvenNumbers()).toBe(0);
    expect(sumEvenNumbers(123)).toBe(0);
    expect(sumEvenNumbers('')).toBe(0);
  });
  it('nen return 0 khi khong co so chan lon hon so truoc do', () => {
    expect(sumEvenNumbers([10, 8, 6, 4, 2])).toBe(0);
  });
  it('nen return dung khi co so chan lon hon so truoc do', () => {
    expect(sumEvenNumbers([-10, -4, 2, 8, 5])).toBe(-4);
    expect(sumEvenNumbers([2, 8, 5, 4])).toBe(10);
  });
});
