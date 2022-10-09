import { countStudents } from './exercise-31';
describe('countStudents(studentList)', () => {
  it('should return 0 when not array or array empty', () => {
    expect(countStudents({})).toBe(0);
    expect(countStudents([])).toBe(0);
    expect(countStudents(123)).toBe(0);
    expect(countStudents(true)).toBe(0);
    expect(countStudents('abc')).toBe(0);
    expect(countStudents()).toBe(0);
  });
  it('should return 0 when not male gender', () => {
    expect(
      countStudents([
        { id: 1, gender: 'female' },
        { id: 2, gender: 'female' },
      ])
    ).toBe(0);
  });
  it('should return total number of students when there are male students ', () => {
    expect(
      countStudents([
        { id: 1, gender: 'male' },
        { id: 2, gender: 'female' },
      ])
    ).toBe(1);
    expect(
      countStudents([
        { id: 1, gender: 'male' },
        { id: 2, gender: 'male' },
        { id: 3, gender: 'male' },
        { id: 4, gender: 'male' },
        { id: 5, gender: 'male' },
        { id: 2, gender: 'female' },
      ])
    ).toBe(5);
  });
});
