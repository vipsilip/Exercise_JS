import { filterProducts } from './exercise-33';
describe('filterProducts(productList)', () => {
  it('should return empty array when productList not array or empty array', () => {
    expect(filterProducts([])).toEqual([]);
    expect(filterProducts({})).toEqual([]);
    expect(filterProducts()).toEqual([]);
    expect(filterProducts(123)).toEqual([]);
    expect(filterProducts('abc')).toEqual([]);
  });
  it('should return empty array when no product having price >100000', () => {
    expect(
      filterProducts([
        { id: 1, price: 10000 },
        { id: 2, price: 50000 },
        { id: 3, price: 70000 },
      ])
    ).toEqual([]);
  });
  it('should return correct when having product > 100000', () => {
    expect(
      filterProducts([
        { id: 1, price: 100000 },
        { id: 2, price: 150000 },
        { id: 3, price: 270000 },
      ])
    ).toEqual([
      { id: 2, price: 150000 },
      { id: 3, price: 270000 },
    ]);
  });
});
