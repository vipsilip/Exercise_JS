import {
  generateNumberInRange,
  findNumbers,
  generateFibonaci,
  generatePrimeNumbers,
  findAllNumbers,
  findAllNumbers2,
  findAllStudents,
  findAllProducts,
  findAllIphones,
} from './array-filter';
describe('generateNumberInRange(a,b)', () => {
  it('nen return mang rong khi mang rong hoac khong phai la mang', () => {
    expect(generateNumberInRange('')).toEqual([]);
    expect(generateNumberInRange([])).toEqual([]);
    expect(generateNumberInRange({})).toEqual([]);
    expect(generateNumberInRange()).toEqual([]);
  });
  it('nen return mang rong khi a > b', () => {
    expect(generateNumberInRange(7, 5)).toEqual([]);
  });
  it('nen return dung khi a < b', () => {
    expect(generateNumberInRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(generateNumberInRange(5, 7)).toEqual([5, 6, 7]);
  });
});
describe('findNumbers(numberList)', () => {
  it('nen return mang rong khi mang rong hoac khong phai la mang', () => {
    expect(findNumbers('')).toEqual([]);
    expect(findNumbers([])).toEqual([]);
    expect(findNumbers({})).toEqual([]);
    expect(findNumbers()).toEqual([]);
    expect(findNumbers(23)).toEqual([]);
  });
  it('nen return mang rong khi mang co 1 phan tu', () => {
    expect(findNumbers([7])).toEqual([]);
  });
  it('nen return dung khi so ke tiep lon hon so truoc do', () => {
    expect(findNumbers([1, 5])).toEqual([5]);
    expect(findNumbers([2, 5, 3, 7])).toEqual([5, 7]);
    expect(findNumbers([2, 5, 6, 7])).toEqual([5, 6, 7]);
  });
});
describe('generateFibonaci(n)', () => {
  it('nen return mang rong khi n khong phai la so hoac rong', () => {
    expect(generateFibonaci('')).toEqual([]);
    expect(generateFibonaci([])).toEqual([]);
    expect(generateFibonaci({})).toEqual([]);
    expect(generateFibonaci()).toEqual([]);
    expect(generateFibonaci(0)).toEqual([]);
    expect(generateFibonaci(1000)).toEqual([]);
  });
  it('nen return dung khi 0<n<1000', () => {
    expect(generateFibonaci(5)).toEqual([0, 1, 1, 2, 3]);
    expect(generateFibonaci(10)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
});
describe('generatePrimeNumbers(n)', () => {
  it('nen return mang rong khi n khong phai la so hoac rong', () => {
    expect(generatePrimeNumbers('')).toEqual([]);
    expect(generatePrimeNumbers([])).toEqual([]);
    expect(generatePrimeNumbers({})).toEqual([]);
    expect(generatePrimeNumbers()).toEqual([]);
    expect(generatePrimeNumbers(0)).toEqual([]);
    expect(generatePrimeNumbers(1000)).toEqual([]);
  });
  it('nen return dung khi 0<n<1000', () => {
    expect(generatePrimeNumbers(10)).toEqual([2, 3, 5, 7]);
    expect(generatePrimeNumbers(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});
describe('findAllNumbers(numberList)', () => {
  it('nen return mang rong khi danh sach khong phai la mang hoac rong', () => {
    expect(findAllNumbers('')).toEqual([]);
    expect(findAllNumbers([])).toEqual([]);
    expect(findAllNumbers({})).toEqual([]);
    expect(findAllNumbers()).toEqual([]);
    expect(findAllNumbers(123)).toEqual([]);
  });
  it('nen return mang rong khi khong co so duong chan hoac co duy nhat 1 so duong chan', () => {
    expect(findAllNumbers([1, 2, 3])).toEqual([]);
    expect(findAllNumbers([1, 3, 5])).toEqual([]);
  });
  it('nen return dung khi co so duong chan bang voi so duong chan dau tien', () => {
    expect(findAllNumbers([1, 4, 5, -6, 4, 5, 4])).toEqual([4, 4]);
  });
});
describe('findAllNumbers2(numberList)', () => {
  it('nen return mang rong khi danh sach khong phai la mang hoac rong', () => {
    expect(findAllNumbers2('')).toEqual([]);
    expect(findAllNumbers2([])).toEqual([]);
    expect(findAllNumbers2({})).toEqual([]);
    expect(findAllNumbers2()).toEqual([]);
    expect(findAllNumbers2(123)).toEqual([]);
  });
  it('nen return mang rong khi khong co chu so dau tien la chu so le', () => {
    expect(findAllNumbers2([2, 4, 6])).toEqual([]);
  });
  it('nen return dung khi co chu so dau tien la chu so le', () => {
    expect(findAllNumbers2([1, 5, 6])).toEqual([1, 5]);
    expect(findAllNumbers2([123, 234, 421])).toEqual([123]);
  });
});
describe('findAllStudents(studentList)', () => {
  it('nen return mang rong khi danh sach khong phai la mang hoac rong', () => {
    expect(findAllStudents('')).toEqual([]);
    expect(findAllStudents([])).toEqual([]);
    expect(findAllStudents({})).toEqual([]);
    expect(findAllStudents()).toEqual([]);
    expect(findAllStudents(123)).toEqual([]);
  });
  const studentList = [
    { id: 1, name: 'Alice', english: 9 },
    { id: 2, name: 'Bob', english: 4 },
    { id: 3, name: 'John', english: 0 },
  ];
  const studentList2 = [
    { id: 1, name: 'Alice', math: 9 },
    { id: 2, name: 'Bob', math: 4 },
    { id: 3, name: 'John', math: 0 },
  ];
  it('nen return mang rong khi danh sach khong co diem mon toan', () => {
    expect(findAllStudents(studentList)).toEqual([]);
  });
  it('nen return dung khi danh sach co diem mon toan < 5', () => {
    expect(findAllStudents(studentList2)).toEqual([
      { id: 2, name: 'Bob', math: 4 },
      { id: 3, name: 'John', math: 0 },
    ]);
  });
});
describe('findAllProducts(productList)', () => {
  it('nen return mang rong khi danh sach khong phai la mang hoac rong', () => {
    expect(findAllProducts('')).toEqual([]);
    expect(findAllProducts([])).toEqual([]);
    expect(findAllProducts({})).toEqual([]);
    expect(findAllProducts()).toEqual([]);
    expect(findAllProducts(123)).toEqual([]);
  });
  const productList = [
    { id: 1, name: 'iphone X', isFreeShip: false },
    { id: 2, name: 'iphone 16 Pro', isFreeShip: false },
    { id: 3, name: 'iphone 20 Pro', isFreeShip: false },
  ];
  const productList2 = [
    { id: 1, name: 'iphone X', isFreeShip: true },
    { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
    { id: 3, name: 'iphone 20 Pro', isFreeShip: false },
  ];
  it('nen return mang rong khi khong co chu so dau tien la chu so le', () => {
    expect(findAllProducts(productList)).toEqual([]);
  });
  it('nen return dung khi co chu so dau tien la chu so le', () => {
    expect(findAllProducts(productList2)).toEqual([
      { id: 1, name: 'iphone X', isFreeShip: true },
      { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
    ]);
  });
});
describe('findAllIphones(productList)', () => {
  it('nen return mang rong khi danh sach khong phai la mang hoac rong', () => {
    expect(findAllIphones('')).toEqual([]);
    expect(findAllIphones([])).toEqual([]);
    expect(findAllIphones({})).toEqual([]);
    expect(findAllIphones()).toEqual([]);
    expect(findAllIphones(123)).toEqual([]);
  });
  const productList = [
    { id: 1, name: 'Luxury IPhone X', amount: 0 },
    { id: 2, name: 'Super Cool iphone 16 Pro', amount: 0 },
    { id: 3, name: 'iphone 20 Pro', amount: 0 },
  ];
  const productList2 = [
    { id: 1, name: 'Luxury IPhone X', amount: 1 },
    { id: 2, name: 'Super Cool iphone 16 Pro', amount: 0 },
    { id: 3, name: 'iphone 20 Pro', amount: 2 },
  ];
  it('nen return mang rong khi khong co san pham la iphone hoac khong co hang', () => {
    expect(findAllIphones(productList)).toEqual([]);
  });
  it('nen return dung khi co san pham la iphone va con hang', () => {
    expect(findAllIphones(productList2)).toEqual([
      { id: 1, name: 'Luxury IPhone X', amount: 1 },
      { id: 3, name: 'iphone 20 Pro', amount: 2 },
    ]);
  });
});
