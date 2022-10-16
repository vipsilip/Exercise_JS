import {
  hasEvenNumberGreaterThanN,
  hasOddNumberDivisibleBy3,
  hasEasyFrontend,
  hasTruthy,
  hasFalsy,
  hasStudent,
  hasAlice,
  hasFreeShip,
  isIncreasingNumberList,
  isIncreasingNumberList2,
  isSymetricList,
  hasFibonaciNumber,
} from './array-check';
describe('hasEvenNumberGreaterThanN(numberList,n)', () => {
  it('should return false when list is empty array or not array ', () => {
    expect(hasEvenNumberGreaterThanN([])).toBe(false);
    expect(hasEvenNumberGreaterThanN({})).toBe(false);
    expect(hasEvenNumberGreaterThanN('123')).toBe(false);
    expect(hasEvenNumberGreaterThanN(123)).toBe(false);
    expect(hasEvenNumberGreaterThanN()).toBe(false);
    expect(hasEvenNumberGreaterThanN([1, 2, 3])).toBe(false);
  });
  it('should return false when list with no even numbers greater than n', () => {
    expect(hasEvenNumberGreaterThanN([1, 2, 3, 4], 5)).toBe(false);
    expect(hasEvenNumberGreaterThanN([1, 2, 3, 4, 5, 6], 10)).toBe(false);
  });
  it('should return true when list with even numbers greater than n', () => {
    expect(hasEvenNumberGreaterThanN([1, 2, 3, 4, 6], 5)).toBe(true);
  });
});
describe('hasOddNumberDivisibleBy3(numberList)', () => {
  it('should return false when list is empty array or not array ', () => {
    expect(hasOddNumberDivisibleBy3([])).toBe(false);
    expect(hasOddNumberDivisibleBy3({})).toBe(false);
    expect(hasOddNumberDivisibleBy3('123')).toBe(false);
    expect(hasOddNumberDivisibleBy3(123)).toBe(false);
    expect(hasOddNumberDivisibleBy3()).toBe(false);
  });
  it('should return false when list with numbers divisible for 3', () => {
    expect(hasOddNumberDivisibleBy3([1, 5, 7])).toBe(false);
    expect(hasOddNumberDivisibleBy3([1, 2, 10, 17])).toBe(false);
  });
  it('should return true when list with numbers divisible for 3', () => {
    expect(hasOddNumberDivisibleBy3([1, 6])).toBe(true);
  });
});
describe('hasEasyFrontend(wordList)', () => {
  it('should return false when list is empty array or not array ', () => {
    expect(hasEasyFrontend([])).toBe(false);
    expect(hasEasyFrontend({})).toBe(false);
    expect(hasEasyFrontend('123')).toBe(false);
    expect(hasEasyFrontend(123)).toBe(false);
    expect(hasEasyFrontend()).toBe(false);
  });
  it('should return false when list with no word "easy frontend"', () => {
    expect(hasEasyFrontend(['easy', ''])).toBe(false);
    expect(hasEasyFrontend(['frontend'])).toBe(false);
  });
  it('should return true when list with word "easy frontend"', () => {
    expect(hasEasyFrontend(['easy frontend'])).toBe(true);
    expect(hasEasyFrontend(['easy', 'frontend', ''])).toBe(true);
  });
});
describe('hasTruthy(arr)', () => {
  it('should return false when list is empty array or not array ', () => {
    expect(hasTruthy([])).toBe(false);
    expect(hasTruthy({})).toBe(false);
    expect(hasTruthy('123')).toBe(false);
    expect(hasTruthy(123)).toBe(false);
    expect(hasTruthy()).toBe(false);
  });
  it('should return false when array with no truthy value"', () => {
    expect(hasTruthy([false, ''])).toBe(false);
  });
  it('should return true when array with truthy value"', () => {
    expect(hasTruthy([false, 123])).toBe(true);
  });
});
describe('hasFalsy(arr)', () => {
  it('should return false when list is empty array or not array ', () => {
    expect(hasFalsy([])).toBe(false);
    expect(hasFalsy({})).toBe(false);
    expect(hasFalsy('123')).toBe(false);
    expect(hasFalsy(123)).toBe(false);
    expect(hasFalsy()).toBe(false);
  });
  it('should return false when array with no falsy value"', () => {
    expect(hasFalsy([123, 'easy'])).toBe(false);
  });
  it('should return true when array with falsy value"', () => {
    expect(hasFalsy([false, 123])).toBe(true);
    expect(hasFalsy([false, ''])).toBe(true);
  });
});
describe('hasStudent(studentList,studentId)', () => {
  it('should return false when list is empty array or not array ', () => {
    expect(hasStudent([])).toBe(false);
    expect(hasStudent({})).toBe(false);
    expect(hasStudent('123')).toBe(false);
    expect(hasStudent(123)).toBe(false);
    expect(hasStudent()).toBe(false);
  });
  const studentList = [
    { id: 1, name: 'Easy' },
    { id: 2, name: 'Frontend' },
  ];
  it('should return false when list with no student ID"', () => {
    expect(hasStudent(studentList, 3)).toBe(false);
  });
  it('should return true when list with student ID"', () => {
    expect(hasStudent(studentList, 1)).toBe(true);
  });
});
describe('hasAlice(studentList)', () => {
  it('should return false when list is empty array or not array ', () => {
    expect(hasAlice([])).toBe(false);
    expect(hasAlice({})).toBe(false);
    expect(hasAlice('123')).toBe(false);
    expect(hasAlice(123)).toBe(false);
    expect(hasAlice()).toBe(false);
  });
  const studentList1 = [
    { id: 1, name: 'Alice', gender: 'male' },
    { id: 2, name: 'aliCE', gender: 'male' },
    { id: 3, name: 'Easy Frontend', gender: 'female' },
  ];
  const studentList2 = [
    { id: 1, name: 'Alice', gender: 'male' },
    { id: 2, name: 'aliCE', gender: 'female' },
    { id: 3, name: 'Easy Frontend', gender: 'male' },
  ];
  it('should return false when list with no student ID"', () => {
    expect(hasAlice(studentList1)).toBe(false);
  });
  it('should return true when list with student ID"', () => {
    expect(hasAlice(studentList2)).toBe(true);
  });
});
describe('hasFreeShip(productList,price)', () => {
  it('should return false when list is empty array or not array ', () => {
    expect(hasFreeShip([])).toBe(false);
    expect(hasFreeShip({})).toBe(false);
    expect(hasFreeShip('123')).toBe(false);
    expect(hasFreeShip(123)).toBe(false);
    expect(hasFreeShip()).toBe(false);
  });
  const productList1 = [
    { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
    { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: false, price: 1500000 },
    { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 150000000 },
  ];
  const productList2 = [
    { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
    { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 1500000 },
  ];
  it('should return false when list with no free ship and price greater than input"', () => {
    expect(hasFreeShip(productList1, 10000000)).toBe(false);
  });
  it('should return true when list with free ship and price greater than input"', () => {
    expect(hasFreeShip(productList2, 10000000)).toBe(true);
  });
});
describe('isIncreasingNumberList(numberList)', () => {
  it('should return false when list is empty array or not array ', () => {
    expect(isIncreasingNumberList([])).toBe(false);
    expect(isIncreasingNumberList({})).toBe(false);
    expect(isIncreasingNumberList('123')).toBe(false);
    expect(isIncreasingNumberList(123)).toBe(false);
    expect(isIncreasingNumberList()).toBe(false);
    expect(isIncreasingNumberList([1])).toBe(false);
  });
  it('should return false when list with no sort ascending"', () => {
    expect(isIncreasingNumberList([1, 1])).toBe(false);
    expect(isIncreasingNumberList([2, 1])).toBe(false);
  });
  it('should return true when list with sort ascending"', () => {
    expect(isIncreasingNumberList([1, 2])).toBe(true);
    expect(isIncreasingNumberList([3, 4, 5, 6])).toBe(true);
  });
});
describe('isIncreasingNumberList2(numberList)', () => {
  it('should return false when list is empty array or not array ', () => {
    expect(isIncreasingNumberList2([])).toBe(false);
    expect(isIncreasingNumberList2({})).toBe(false);
    expect(isIncreasingNumberList2('123')).toBe(false);
    expect(isIncreasingNumberList2(123)).toBe(false);
    expect(isIncreasingNumberList2()).toBe(false);
    expect(isIncreasingNumberList2([1])).toBe(false);
  });
  it('should return false when list with no sort decreasing"', () => {
    expect(isIncreasingNumberList2([1, 1])).toBe(false);
    expect(isIncreasingNumberList2([1, 2])).toBe(false);
  });
  it('should return true when list with sort decreasing"', () => {
    expect(isIncreasingNumberList2([2, 1])).toBe(true);
    expect(isIncreasingNumberList2([6, 5, 1])).toBe(true);
  });
});
describe('isSymetricList(numberList)', () => {
  it('should return false when list is empty array or not array ', () => {
    expect(isSymetricList([])).toBe(false);
    expect(isSymetricList({})).toBe(false);
    expect(isSymetricList('123')).toBe(false);
    expect(isSymetricList(123)).toBe(false);
    expect(isSymetricList()).toBe(false);
  });
  it('should return false when list with no symetric', () => {
    expect(isSymetricList([1, 2, 3])).toBe(false);
  });
  it('should return true when list with symetric"', () => {
    expect(isSymetricList([2, 1, 2])).toBe(true);
    expect(isSymetricList([1])).toBe(true);
    expect(isSymetricList([1, 1])).toBe(true);
    expect(isSymetricList([1, 2, 2, 1])).toBe(true);
  });
});
describe('hasFibonaciNumber(numberList)', () => {
  it('should return false when list is empty array or not array ', () => {
    expect(hasFibonaciNumber([])).toBe(false);
    expect(hasFibonaciNumber({})).toBe(false);
    expect(hasFibonaciNumber('123')).toBe(false);
    expect(hasFibonaciNumber(123)).toBe(false);
    expect(hasFibonaciNumber()).toBe(false);
  });
  it('should return false when list with no fibonaci < 100', () => {
    expect(hasFibonaciNumber([4, 6, 7])).toBe(false);
    expect(hasFibonaciNumber([144, 233, 377, 610, 987])).toBe(false);
  });
  it('should return true when list with fibonaci < 100', () => {
    expect(hasFibonaciNumber([0, 1, 2, 3, 4, 5])).toBe(true);
    expect(hasFibonaciNumber([89])).toBe(true);
    expect(hasFibonaciNumber([144, 233, 377, 1])).toBe(true);
  });
});
