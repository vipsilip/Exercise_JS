// array-cd-01
export function insert(arr, newItem, k) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  if (k <= 0) {
    arr.unshift(newItem);
    return arr;
  }
  if (k > arr.length) {
    arr.push(newItem);
    return arr;
  }
  arr.splice(k, 0, newItem);
  return arr;
}
// array-cd-02
export function remove(arr, k, n) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  if (k < 0 || k > arr.length - 1) return [...arr];
  if (n === undefined) {
    arr.splice(0, arr.length);
    return [...arr];
  }
  arr.splice(k, n);
  return [...arr];
}
// array-cd-03
export function removeStudentById(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];
  for (const index in studentList) {
    if (studentList[index].id === studentId) studentList.splice(index, 1);
  }
  return [...studentList];
}
// array-cd-04
export function insert2(numberList, newNumber) {
  if (!Array.isArray(numberList) || (numberList.length === 0 && newNumber === undefined)) return [];
  numberList.push(newNumber);
  return numberList.sort((a, b) => a - b);
}
// array-cd-05
export function removeDuplicatedNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const obj = numberList.reduce((result, number) => {
    result[number] = result[number] === undefined ? 1 : result[number] + 1;
    return result;
  }, {});
  numberList.splice(0, numberList.length);
  for (const key in obj) {
    if (obj[key] === 1) numberList.push(+key);
  }
  return numberList;
}

// array-cd-06
export function uniqueArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const obj = numberList.reduce((result, number) => {
    result[number] = result[number] === undefined ? 1 : result[number] + 1;
    return result;
  }, {});
  numberList.splice(0, numberList.length);
  for (const key in obj) {
    if (obj[key]) numberList.push(+key);
  }
  return numberList;
}
