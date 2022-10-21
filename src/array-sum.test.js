import { sumEvenNumbers, sumAllDigits, sumAllMinDigits, calcCartTotal } from './array-sum';
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
    expect(sumEvenNumbers([10])).toBe(0);
  });
  it('nen return dung khi co so chan lon hon so truoc do', () => {
    expect(sumEvenNumbers([-10, -4, 2, 8, 5])).toBe(-4);
    expect(sumEvenNumbers([2, 8, 5, 4])).toBe(10);
  });
});
describe('sumAllDigits(numberList)', () => {
  it('nen return 0 khi mang rong hoac khong phai mang', () => {
    expect(sumAllDigits([])).toBe(0);
    expect(sumAllDigits({})).toBe(0);
    expect(sumAllDigits()).toBe(0);
    expect(sumAllDigits(123)).toBe(0);
    expect(sumAllDigits('')).toBe(0);
  });
  it('nen return dung khi cac chu so duoc cong lai', () => {
    expect(sumAllDigits([4])).toBe(4);
    expect(sumAllDigits([123, 4])).toBe(10);
    expect(sumAllDigits([1234, 55])).toBe(20);
  });
});
describe('sumAllMinDigits(numberList)', () => {
  it('nen return 0 khi mang rong hoac khong phai mang', () => {
    expect(sumAllMinDigits([])).toBe(0);
    expect(sumAllMinDigits({})).toBe(0);
    expect(sumAllMinDigits()).toBe(0);
    expect(sumAllMinDigits(123)).toBe(0);
    expect(sumAllMinDigits('')).toBe(0);
  });
  it('nen return dung khi chu so nho nhat cua tung so duoc cong lai', () => {
    expect(sumAllMinDigits([123])).toBe(1);
    expect(sumAllMinDigits([123, 532])).toBe(3);
  });
});
describe('calcCartTotal(cartItemList)', () => {
  it('nen return 0 khi mang rong hoac khong phai mang', () => {
    expect(calcCartTotal([])).toBe(0);
    expect(calcCartTotal({})).toBe(0);
    expect(calcCartTotal()).toBe(0);
    expect(calcCartTotal(123)).toBe(0);
    expect(calcCartTotal('')).toBe(0);
  });
  const cartItemList = [
    { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
    { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
  ];
  it('nen return dung khi co price va quantity', () => {
    expect(calcCartTotal(cartItemList)).toBe(250000);
  });
});
