import {
  insert,
  remove,
  removeStudentById,
  insert2,
  removeDuplicatedNumbers,
  uniqueArray,
} from './array-cd';
describe('insert(arr, newItem, k)', () => {
  it('nen return [] khi arr la 1 mang rong hoac khong phai mang', () => {
    expect(insert([])).toEqual([]);
    expect(insert({})).toEqual([]);
    expect(insert()).toEqual([]);
    expect(insert(123)).toEqual([]);
    expect(insert('')).toEqual([]);
  });
  it('nen return dung khi input dung', () => {
    expect(insert([1, 2, 3], 0, -1)).toEqual([0, 1, 2, 3]);
    expect(insert([1, 2, 3], 4, 10)).toEqual([1, 2, 3, 4]);
    expect(insert([1, 2, 3], 10, 2)).toEqual([1, 2, 10, 3]);
  });
});
describe('remove(arr, k, n)', () => {
  it('nen return [] khi arr la 1 mang rong hoac khong phai mang', () => {
    expect(remove([])).toEqual([]);
    expect(remove({})).toEqual([]);
    expect(remove()).toEqual([]);
    expect(remove(123)).toEqual([]);
    expect(remove('')).toEqual([]);
  });
  it('nen return dung khi input dung', () => {
    expect(remove([1, 2, 3], -1, 10)).toEqual([1, 2, 3]);
    expect(remove([1, 2, 3], 3, 10)).toEqual([1, 2, 3]);
    expect(remove([1, 2, 3], 1, 2)).toEqual([1]);
    expect(remove([1, 2, 3], 0)).toEqual([]);
  });
});
describe('removeStudentById(studentList, studentId)', () => {
  it('nen return [] khi arr la 1 mang rong hoac khong phai mang', () => {
    expect(removeStudentById([])).toEqual([]);
    expect(removeStudentById({})).toEqual([]);
    expect(removeStudentById()).toEqual([]);
    expect(removeStudentById(123)).toEqual([]);
    expect(removeStudentById('')).toEqual([]);
  });
  const studentList = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
  it('nen return dung khi input dung', () => {
    expect(removeStudentById(studentList, 1)).toEqual([{ id: 2, name: 'Bob' }]);
    expect(removeStudentById(studentList, 3)).toEqual(studentList);
  });
});
describe('insert2(numberList, newNumber)', () => {
  it('nen return [] khi arr la 1 mang rong hoac khong phai mang', () => {
    expect(insert2([])).toEqual([]);
    expect(insert2({})).toEqual([]);
    expect(insert2()).toEqual([]);
    expect(insert2(123)).toEqual([]);
    expect(insert2('')).toEqual([]);
  });
  it('nen return dung khi input dung', () => {
    expect(insert2([], 3)).toEqual([3]);
    expect(insert2([1, 2, 4], 3)).toEqual([1, 2, 3, 4]);
    expect(insert2([1, 2, 3], 3)).toEqual([1, 2, 3, 3]);
  });
});
describe('removeDuplicatedNumbers(numberList)', () => {
  it('nen return [] khi arr la 1 mang rong hoac khong phai mang', () => {
    expect(removeDuplicatedNumbers([])).toEqual([]);
    expect(removeDuplicatedNumbers({})).toEqual([]);
    expect(removeDuplicatedNumbers()).toEqual([]);
    expect(removeDuplicatedNumbers(123)).toEqual([]);
    expect(removeDuplicatedNumbers('')).toEqual([]);
  });
  it('nen return dung khi input dung', () => {
    expect(removeDuplicatedNumbers([1, 1, 2, 3, 2])).toEqual([3]);
    expect(removeDuplicatedNumbers([1, 2, 4])).toEqual([1, 2, 4]);
  });
});
describe('uniqueArray(numberList)', () => {
  it('nen return [] khi arr la 1 mang rong hoac khong phai mang', () => {
    expect(uniqueArray([])).toEqual([]);
    expect(uniqueArray({})).toEqual([]);
    expect(uniqueArray()).toEqual([]);
    expect(uniqueArray(123)).toEqual([]);
    expect(uniqueArray('')).toEqual([]);
  });
  it('nen return dung khi input dung', () => {
    expect(uniqueArray([1, 1, 2, 3, 2])).toEqual([1, 2, 3]);
    expect(uniqueArray([1, 1, 1, 1])).toEqual([1]);
  });
});
