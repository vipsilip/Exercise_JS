import {
  countWords,
  statisticsWords,
  statisticsCharacters,
  countEmails,
  countURLs,
  getDisplayedAddress,
  fillPath,
} from './string';
describe('countWords(str)', () => {
  it('should return 0 when input not is string', () => {
    expect(countWords({})).toBe(0);
    expect(countWords([])).toBe(0);
    expect(countWords()).toBe(0);
    expect(countWords(123)).toBe(0);
  });
  it('should return number of word when input is string', () => {
    expect(countWords('easy frontend')).toBe(2);
    expect(countWords('cong hoa xa hoi chu nghia viet nam')).toBe(8);
  });
});
describe('statisticsWords(str)', () => {
  it('should return empty object when input not is string', () => {
    expect(statisticsWords({})).toEqual({});
    expect(statisticsWords([])).toEqual({});
    expect(statisticsWords()).toEqual({});
    expect(statisticsWords(123)).toEqual({});
  });
  it('should return correct when string has many redundant space', () => {
    expect(statisticsWords('   easy    frontend   ')).toEqual({ easy: 1, frontend: 1 });
  });
  it('should return correct when string no does redundant space', () => {
    expect(statisticsWords('easy frontend')).toEqual({ easy: 1, frontend: 1 });
    expect(statisticsWords('easy frontend easy')).toEqual({ easy: 2, frontend: 1 });
  });
});
describe('statisticsCharacters(str)', () => {
  it('should return empty object when input not is string', () => {
    expect(statisticsCharacters({})).toEqual({});
    expect(statisticsCharacters([])).toEqual({});
    expect(statisticsCharacters()).toEqual({});
    expect(statisticsCharacters(123)).toEqual({});
  });
  it('should return correct when input is string', () => {
    expect(statisticsCharacters('aa b cc')).toEqual({ a: 2, b: 1, c: 2, space: 2 });
  });
});
describe('countEmails(str)', () => {
  it('should return 0 when input not is string', () => {
    expect(countEmails({})).toBe(0);
    expect(countEmails([])).toBe(0);
    expect(countEmails()).toBe(0);
    expect(countEmails(123)).toBe(0);
  });
  it('should return 0 when invalid input', () => {
    expect(countEmails('my email should be a@a.com')).toBe(0);
    expect(countEmails('my email should be @ bla .com')).toBe(0);
  });
  it('should return correct when input is string', () => {
    expect(countEmails('my email should be abc@super.com')).toBe(1);
    expect(
      countEmails(
        'my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn'
      )
    ).toBe(3);
  });
});
describe('countURLs(str)', () => {
  it('should return 0 when input not is string', () => {
    expect(countURLs({})).toBe(0);
    expect(countURLs([])).toBe(0);
    expect(countURLs()).toBe(0);
    expect(countURLs(123)).toBe(0);
  });
  it('should return 0 when invalid input', () => {
    expect(countURLs('my website is: https://ez.com you can visit it')).toBe(0);
  });
  it('should return correct when input is string', () => {
    expect(countURLs('my website is: http://ezfrontend.com you can visit it')).toBe(1);
  });
});
describe('getDisplayedAddress(address)', () => {
  it('should return empty string when input not is object', () => {
    expect(getDisplayedAddress({})).toBe('');
    expect(getDisplayedAddress([])).toBe('');
    expect(getDisplayedAddress()).toBe('');
    expect(getDisplayedAddress(123)).toBe('');
  });
  it('should return correct when valid input', () => {
    expect(
      getDisplayedAddress({
        number: 123,
        street: 'Nguyen Cong Tru',
        ward: 'Ward 11',
        district: 'Binh Thanh District',
        city: 'HCMC',
      })
    ).toBe('123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCMC');
    expect(
      getDisplayedAddress({
        street: 'Nguyen Cong Tru',
        district: 'Binh Thanh District',
      })
    ).toBe('Nguyen Cong Tru, Binh Thanh District');
  });
});
describe('fillPath(path,params)', () => {
  it('should return empty string when path not is string', () => {
    expect(fillPath({}, {})).toBe('');
    expect(fillPath([], [])).toBe('');
    expect(fillPath()).toBe('');
    expect(fillPath(123, 123)).toBe('');
  });

  it('should return correct when valid input', () => {
    expect(fillPath('/products/:productId', { productId: 123 })).toBe('/products/123');
    expect(
      fillPath('/categories/:categoryId/products/:productId', {
        categoryId: 1,
        productId: 2,
      })
    ).toBe('/categories/1/products/2');
    expect(fillPath('/categories/:categoryId/products/:productId', { productId: 2 })).toBe(
      '/categories/:categoryId/products/2'
    );
  });
});
