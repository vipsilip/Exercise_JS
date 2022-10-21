import {
  countPositiveEvenNumbers,
  countNumbers,
  countWords,
  countUniqueNumbers,
  countNumbersNotInB,
  countStudents,
} from './array-count';
describe('countPositiveEvenNumbers(numberList)', () => {
  it('nen return 0 khi mang rong hoac khong phai mang', () => {
    expect(countPositiveEvenNumbers([])).toBe(0);
    expect(countPositiveEvenNumbers({})).toBe(0);
    expect(countPositiveEvenNumbers()).toBe(0);
    expect(countPositiveEvenNumbers('')).toBe(0);
    expect(countPositiveEvenNumbers(123)).toBe(0);
  });
  it('nen return 0 khi danh sach khong co so duong chan', () => {
    expect(countPositiveEvenNumbers([-1, -2])).toBe(0);
  });
  it('nen return dung khi danh sach co so duong chan', () => {
    expect(countPositiveEvenNumbers([-2, -1, 1, 2, 4])).toBe(2);
  });
});
describe('countNumbers(numberList)', () => {
  it('nen return 0 khi mang rong hoac khong phai mang', () => {
    expect(countNumbers([])).toBe(0);
    expect(countNumbers({})).toBe(0);
    expect(countNumbers()).toBe(0);
    expect(countNumbers('')).toBe(0);
    expect(countNumbers(123)).toBe(0);
  });
  it('nen return 0 khi danh sach khong co so nho hon so lien truoc', () => {
    expect(countNumbers([1, 2, 3])).toBe(0);
  });
  it('nen return dung khi danh sach co so nho hon so lien truoc', () => {
    expect(countNumbers([1, 2, 3, 10, 9, 8])).toBe(2);
    expect(countNumbers([6, 5, 4, 3, 2, 1])).toBe(5);
  });
});
describe('countWords(wordList,n)', () => {
  it('nen return 0 khi mang rong hoac khong phai mang', () => {
    expect(countWords([])).toBe(0);
    expect(countWords({})).toBe(0);
    expect(countWords()).toBe(0);
    expect(countWords('')).toBe(0);
    expect(countWords(123)).toBe(0);
  });
  it('nen return 0 khi danh sach khong co chuoi lon hon n', () => {
    expect(countWords(['easy', 'frontend'], 10)).toBe(0);
  });
  it('nen return dung khi danh sach co chuoi lon hon n', () => {
    expect(countWords(['easy', 'frontend'], 4)).toBe(2);
    expect(countWords(['easy', 'frontend'], 5)).toBe(1);
  });
});
describe('countUniqueNumbers(numberList)', () => {
  it('nen return 0 khi mang rong hoac khong phai mang', () => {
    expect(countUniqueNumbers([])).toBe(0);
    expect(countUniqueNumbers({})).toBe(0);
    expect(countUniqueNumbers()).toBe(0);
    expect(countUniqueNumbers('')).toBe(0);
    expect(countUniqueNumbers(123)).toBe(0);
  });
  it('nen return dung khi danh sach co so khac nhau trong mang', () => {
    expect(countUniqueNumbers([1, 1, 1])).toBe(1);
    expect(countUniqueNumbers([1, 2, 3])).toBe(3);
    expect(countUniqueNumbers([1, 2, 2, 3, 1])).toBe(3);
  });
});
describe('countNumbersNotInB(a,b)', () => {
  it('nen return 0 khi mang rong hoac khong phai mang', () => {
    expect(countNumbersNotInB([])).toBe(0);
    expect(countNumbersNotInB({})).toBe(0);
    expect(countNumbersNotInB()).toBe(0);
    expect(countNumbersNotInB('')).toBe(0);
    expect(countNumbersNotInB(123)).toBe(0);
  });
  it('nen return 0 khi mang b trung voi mang a', () => {
    expect(countNumbersNotInB([1, 2, 3], [1, 2, 3])).toBe(0);
  });
  it('nen return dung khi mang b khong co so cua mang a', () => {
    expect(countNumbersNotInB([1, 2, 3], [4, 5])).toBe(3);
    expect(countNumbersNotInB([1, 2, 3], [3, 4, 5])).toBe(2);
  });
});
describe('countStudents(studentList,avgMark)', () => {
  it('nen return 0 khi mang rong hoac khong phai mang', () => {
    expect(countStudents([])).toBe(0);
    expect(countStudents({})).toBe(0);
    expect(countStudents()).toBe(0);
    expect(countStudents('')).toBe(0);
    expect(countStudents(123)).toBe(0);
  });
  const studentList = [
    { id: 1, name: 'Alice', marks: { math: 8 } },
    { id: 2, name: 'Bob', marks: { math: 9 } },
  ];
  const studentList2 = [
    { id: 1, name: 'Alice', marks: { math: 5, english: 6 } },
    { id: 2, name: 'Bob', marks: { math: 9, english: 8 } },
  ];
  it('nen return dung khi co diem trung binh lon hon avgMark', () => {
    expect(countStudents(studentList, 7)).toBe(2);
    expect(countStudents(studentList2, 7)).toBe(1);
  });
});
