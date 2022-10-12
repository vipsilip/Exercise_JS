import { calcCartTotal } from './exercise-32';
describe('calcCartTotal(cartItemList)', () => {
  it('should return 0 when array empty or not array', () => {
    expect(calcCartTotal([])).toBe(0);
    expect(calcCartTotal()).toBe(0);
    expect(calcCartTotal({})).toBe(0);
    expect(calcCartTotal(true)).toBe(0);
    expect(calcCartTotal(123)).toBe(0);
  });
  it('should return 0 when price or quantity equal zero', () => {
    expect(
      calcCartTotal([
        { id: 1, product: { id: 1, price: 0 }, quantity: 4 },
        { id: 2, product: { id: 2, price: 0 }, quantity: 2 },
      ])
    ).toBe(0);
    expect(
      calcCartTotal([
        { id: 1, product: { id: 1, price: 100000 }, quantity: 0 },
        { id: 2, product: { id: 2, price: 50000 }, quantity: 0 },
      ])
    ).toBe(0);
  });
  it('should return correct when item has full parameters ', () => {
    expect(
      calcCartTotal([
        { id: 1, product: { id: 1, price: 100000 }, quantity: 4 },
        { id: 2, product: { id: 2, price: 50000 }, quantity: 2 },
      ])
    ).toBe(500000);
  });
});
