import {
  findMinPositive,
  findLongestWord,
  findFirstPositiveEven,
  findLastNegativeOdd,
  findSecondLargestNumber,
  findLastPerfectSquare,
  findFirstEmail,
  findLastUrl,
  findStudentById,
  findProductByCode,
  findStudentHavingHighestMark,
  findLastStudentHavingMinAvg,
  findStudent,
  findProductHavingFreeShip,
  findFirstIPhone,
} from './array-find';
describe('findMinPositive(numberList)', () => {
  it('should return undefine when list no array or empty array', () => {
    expect(findMinPositive([])).toBe(undefined);
    expect(findMinPositive({})).toBe(undefined);
    expect(findMinPositive(123)).toBe(undefined);
    expect(findMinPositive('abc')).toBe(undefined);
    expect(findMinPositive()).toBe(undefined);
  });
  it('should return undefined when list no min positive number', () => {
    expect(findMinPositive([-1, -5])).toBe(undefined);
  });
  it('should return correct when list has min positive number ', () => {
    expect(findMinPositive([-1, 1, 5])).toBe(1);
    expect(findMinPositive([-1, -5, 2, 6])).toBe(2);
    expect(findMinPositive([-1, -5, 6, 2, 0, 1])).toBe(0);
  });
});
describe('findLongestWord(wordList)', () => {
  it('should return "" when list no array or empty array', () => {
    expect(findLongestWord([])).toBe('');
    expect(findLongestWord({})).toBe('');
    expect(findLongestWord(123)).toBe('');
    expect(findLongestWord('abc')).toBe('');
    expect(findLongestWord()).toBe('');
  });
  it('should return "" when list no longest word', () => {
    expect(findLongestWord(['frontend', 'easy abc'])).toBe('');
  });
  it('should return correct when list has longest word ', () => {
    expect(findLongestWord(['super', 'super cool'])).toBe('super');
    expect(findLongestWord(['super', 'cool'])).toBe('super');
    expect(findLongestWord(['cool', 'end', 'abcde'])).toBe('abcde');
    expect(findLongestWord(['cool', 'abcd'])).toBe('cool');
  });
});
describe('findFirstPositiveEven(numberList)', () => {
  it('should return undefined when list no array or empty array', () => {
    expect(findFirstPositiveEven([])).toBe(undefined);
    expect(findFirstPositiveEven({})).toBe(undefined);
    expect(findFirstPositiveEven(123)).toBe(undefined);
    expect(findFirstPositiveEven('abc')).toBe(undefined);
    expect(findFirstPositiveEven()).toBe(undefined);
  });
  it('should return undefined when list no even positive number', () => {
    expect(findFirstPositiveEven([1, 3, 5])).toBe(undefined);
  });
  it('should return correct when list has first even positive number ', () => {
    expect(findFirstPositiveEven([1, 4, 5])).toBe(4);
    expect(findFirstPositiveEven([1, 2, 4, 5, 7])).toBe(2);
    expect(findFirstPositiveEven([-2, 1, 2, 4, 5, 7])).toBe(2);
  });
});
describe('findLastNegativeOdd(numberList)', () => {
  it('should return undefined when list no array or empty array', () => {
    expect(findLastNegativeOdd([])).toBe(undefined);
    expect(findLastNegativeOdd({})).toBe(undefined);
    expect(findLastNegativeOdd(123)).toBe(undefined);
    expect(findLastNegativeOdd('abc')).toBe(undefined);
    expect(findLastNegativeOdd()).toBe(undefined);
  });
  it('should return undefined when list no negative odd', () => {
    expect(findLastNegativeOdd([1, 3, 5])).toBe(undefined);
    expect(findLastNegativeOdd([1, 3, -2])).toBe(undefined);
  });
  it('should return correct when list has last negative odd ', () => {
    expect(findLastNegativeOdd([-1, -3, -5])).toBe(-5);
    expect(findLastNegativeOdd([-1, 4, 7, -9, 3])).toBe(-9);
  });
});
describe('findSecondLargestNumber(numberList)', () => {
  it('should return undefined when list no array or empty array', () => {
    expect(findSecondLargestNumber([])).toBe(undefined);
    expect(findSecondLargestNumber({})).toBe(undefined);
    expect(findSecondLargestNumber(123)).toBe(undefined);
    expect(findSecondLargestNumber('abc')).toBe(undefined);
    expect(findSecondLargestNumber()).toBe(undefined);
  });
  it('should return undefined when list has 1 number', () => {
    expect(findSecondLargestNumber([1])).toBe(undefined);
  });
  it('should return correct when list has second largest number ', () => {
    expect(findSecondLargestNumber([1, 2])).toBe(1);
    expect(findSecondLargestNumber([1, 2, 3, 4])).toBe(3);
  });
});
describe('findLastPerfectSquare(numberList)', () => {
  it('should return undefined when list no array or empty array', () => {
    expect(findLastPerfectSquare([])).toBe(undefined);
    expect(findLastPerfectSquare({})).toBe(undefined);
    expect(findLastPerfectSquare(123)).toBe(undefined);
    expect(findLastPerfectSquare('abc')).toBe(undefined);
    expect(findLastPerfectSquare()).toBe(undefined);
  });
  it('should return undefined when list no perfect square number', () => {
    expect(findLastPerfectSquare([2, 3, 5])).toBe(undefined);
  });
  it('should return correct when list has last perfect square number ', () => {
    expect(findLastPerfectSquare([4, 16, 25, 36, 40])).toBe(36);
    expect(findLastPerfectSquare([4])).toBe(4);
  });
});
describe('findFirstEmail(strList)', () => {
  it('should return undefined when list no array or empty array', () => {
    expect(findFirstEmail([])).toBe(undefined);
    expect(findFirstEmail({})).toBe(undefined);
    expect(findFirstEmail(123)).toBe(undefined);
    expect(findFirstEmail('abc')).toBe(undefined);
    expect(findFirstEmail()).toBe(undefined);
  });
  it('should return undefined when list no valid email', () => {
    expect(findFirstEmail(['abc@easy.frontend'])).toBe(undefined);
  });
  it('should return correct when list has first valid email ', () => {
    expect(findFirstEmail(['abc@easy.frontend', 'abc@gmail.com'])).toBe('abc@gmail.com');
    expect(findFirstEmail(['abc@yahoo.com', 'cdf@gmail.com'])).toBe('abc@yahoo.com');
  });
});
describe('findLastUrl(strList)', () => {
  it('should return undefined when list no array or empty array', () => {
    expect(findLastUrl([])).toBe(undefined);
    expect(findLastUrl({})).toBe(undefined);
    expect(findLastUrl(123)).toBe(undefined);
    expect(findLastUrl('abc')).toBe(undefined);
    expect(findLastUrl()).toBe(undefined);
  });
  it('should return undefined when list no valid URL', () => {
    expect(findLastUrl(['httpss://google.com'])).toBe(undefined);
  });
  it('should return correct when list has last valid URL ', () => {
    expect(findLastUrl(['https://google.com', 'wss://chat.sample.com'])).toBe(
      'wss://chat.sample.com'
    );
  });
});
describe('findStudentById(studentList,studentId)', () => {
  it('should return -1 when list no array or empty array', () => {
    expect(findStudentById([])).toBe(-1);
    expect(findStudentById({})).toBe(-1);
    expect(findStudentById(123)).toBe(-1);
    expect(findStudentById('abc')).toBe(-1);
    expect(findStudentById()).toBe(-1);
  });
  const studentList = [
    { id: 1, name: 'Easy' },
    { id: 2, name: 'Frontend' },
  ];
  it('should return -1 when list no studentid same id of studentList ', () => {
    expect(findStudentById(studentList, 3)).toBe(-1);
  });
  it('should return correct when list has studentid same id of studentList  ', () => {
    expect(findStudentById(studentList, 1)).toBe(0);
  });
});
describe('findProductByCode(productList,code)', () => {
  it('should return -1 when list no array or empty array', () => {
    expect(findProductByCode([])).toBe(-1);
    expect(findProductByCode({})).toBe(-1);
    expect(findProductByCode(123)).toBe(-1);
    expect(findProductByCode('abc')).toBe(-1);
    expect(findProductByCode()).toBe(-1);
  });
  const productList = [
    { id: 1, code: 'ip01', name: 'IPhone 16' },
    { id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
  ];
  it('should return -1 when list no code same code of productList ', () => {
    expect(findProductByCode(productList, 'ip03')).toBe(-1);
  });
  it('should return correct when list has code same code of productList  ', () => {
    expect(findProductByCode(productList, 'ip01')).toBe(0);
  });
});
describe('findStudentHavingHighestMark(studentList)', () => {
  it('should return {} when list no array or empty array', () => {
    expect(findStudentHavingHighestMark([])).toEqual({});
    expect(findStudentHavingHighestMark({})).toEqual({});
    expect(findStudentHavingHighestMark(123)).toEqual({});
    expect(findStudentHavingHighestMark('abc')).toEqual({});
    expect(findStudentHavingHighestMark()).toEqual({});
  });
  const studentList1 = [
    { id: 1, name: 'Alice', english: 9 },
    { id: 2, name: 'Bob', english: 10 },
    { id: 3, name: 'John', english: 10 },
  ];
  const studentList2 = [
    { id: 1, name: 'Alice', math: 9 },
    { id: 2, name: 'Bob', math: 10 },
    { id: 3, name: 'John', math: 10 },
  ];
  // it('should return {} when list no student has mark of math highest ', () => {
  //   expect(findStudentHavingHighestMark(studentList1)).toEqual({});
  // });
  it('should return correct when list has student has mark of math highest  ', () => {
    expect(findStudentHavingHighestMark(studentList2)).toEqual({ id: 2, name: 'Bob', math: 10 });
  });
});
describe('findLastStudentHavingMinAvg(studentList)', () => {
  it('should return {} when list no array or empty array', () => {
    expect(findLastStudentHavingMinAvg([])).toEqual({});
    expect(findLastStudentHavingMinAvg({})).toEqual({});
    expect(findLastStudentHavingMinAvg(123)).toEqual({});
    expect(findLastStudentHavingMinAvg('abc')).toEqual({});
    expect(findLastStudentHavingMinAvg()).toEqual({});
  });
  const studentList = [
    { id: 2, name: 'Bob', math: 5, english: 5 },
    { id: 1, name: 'Alice', math: 9, english: 9 },
    { id: 3, name: 'John', math: 5, english: 5 },
  ];
  it('should return correct when list student has last min mark avegare', () => {
    expect(findLastStudentHavingMinAvg(studentList)).toEqual({
      id: 3,
      name: 'John',
      math: 5,
      english: 5,
    });
  });
});
describe('findStudent(studentList)', () => {
  it('should return {} when list no array or empty array', () => {
    expect(findStudent([])).toEqual({});
    expect(findStudent({})).toEqual({});
    expect(findStudent(123)).toEqual({});
    expect(findStudent('abc')).toEqual({});
    expect(findStudent()).toEqual({});
  });
  const studentList = [
    { id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 } },
    { id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 5 } },
    { id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } },
    { id: 4, name: 'Sarah', marks: { math: 2, english: 8, programming: 10 } },
  ];
  it('should return correct when list student has all points are big more than or equal to 5, but one subject is less than 5', () => {
    expect(findStudent(studentList)).toEqual({
      id: 3,
      name: 'John',
      marks: { math: 4, english: 7, programming: 9 },
    });
  });
});
describe('findProductHavingFreeShip(productList)', () => {
  it('should return {} when list no array or empty array', () => {
    expect(findProductHavingFreeShip([])).toEqual({});
    expect(findProductHavingFreeShip({})).toEqual({});
    expect(findProductHavingFreeShip(123)).toEqual({});
    expect(findProductHavingFreeShip('abc')).toEqual({});
    expect(findProductHavingFreeShip()).toEqual({});
  });
  const productList = [
    { id: 1, name: 'IPhone 5', isFreeShip: false },
    { id: 2, name: 'IPhone X', isFreeShip: true },
    { id: 3, name: 'IPhone 12 Pro', isFreeShip: true },
  ];
  it('should return correct when list product has first product freeship', () => {
    expect(findProductHavingFreeShip(productList)).toEqual({
      id: 2,
      name: 'IPhone X',
      isFreeShip: true,
    });
  });
});
describe('findFirstIPhone(productList)', () => {
  it('should return {} when list no array or empty array', () => {
    expect(findFirstIPhone([])).toEqual({});
    expect(findFirstIPhone({})).toEqual({});
    expect(findFirstIPhone(123)).toEqual({});
    expect(findFirstIPhone('abc')).toEqual({});
    expect(findFirstIPhone()).toEqual({});
  });
  const productList = [
    { id: 1, name: 'Samsung' },
    { id: 2, name: 'IPHONE X' },
    { id: 3, name: 'iPhone 12 Pro' },
  ];
  it('should return correct when list product has first product freeship', () => {
    expect(findFirstIPhone(productList)).toEqual({ id: 2, name: 'IPHONE X' });
  });
});
