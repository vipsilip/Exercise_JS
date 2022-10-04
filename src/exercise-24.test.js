import { withdraw } from './exercise-24';
describe('withdraw(amount)', () => {
  it('should return undefined if not a number ', () => {
    expect(withdraw('')).toBe(undefined);
    expect(withdraw([])).toBe(undefined);
    expect(withdraw({})).toBe(undefined);
  });
  it('should return "invalid balance" when is not a multiple of 50000 ', () => {
    expect(withdraw(125000)).toBe('Invalid balance');
    expect(withdraw(85000)).toBe('Invalid balance');
    expect(withdraw(49000)).toBe('Invalid balance');
  });
  it('should return "insufficient balance from ATM" when input money exceed money in ATM', () => {
    expect(withdraw(9000000)).toBe('Insufficient balance from ATM');
    expect(withdraw(150000000)).toBe('Insufficient balance from ATM');
  });
  it('should return correct when valid money', () => {
    expect(withdraw(850000)).toEqual({
      k500: 1,
      k200: 1,
      k100: 1,
      k50: 1,
    });
    expect(withdraw(5050000)).toEqual({
      k500: 2,
      k200: 5,
      k100: 10,
      k50: 41,
    });
    expect(withdraw(450000)).toEqual({
      k500: 0,
      k200: 2,
      k100: 0,
      k50: 1,
    });
    expect(withdraw(200000)).toEqual({
      k500: 0,
      k200: 1,
      k100: 0,
      k50: 0,
    });
  });
});
