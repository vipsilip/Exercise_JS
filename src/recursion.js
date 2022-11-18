// DE QUY - RECURSION
// tinh giai thua
function bai1(n) {
  if (n < 1) return 1;
  return n * bai1(n - 1);
}
// tim uoc chung lon nhat
function bai2(a, b) {
  //   if (a === b) return a;
  //   if (a > b) return bai2(a - b, b);
  //   return bai2(a, b - a);
  if (!b) return a;
  return bai2(b, a % b);
}
// lay cac so nguyen trong pham vi a,b
function bai3(a, b) {
  if (a === b || a > b || b - a === 1) return [];
  if (b - a === 2) return [a + 1];
  let result = bai3(a, b - 1);
  result.push(b - 1);
  return result;
}
// tinh tong mang so nguyen
function bai4(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  return numberList[0] + bai4(numberList.slice(1));
}
// tinh so mu cua 1 so nguyen
function bai5(n, k) {
  if (k === 0) return 1;
  return n * bai5(n, k - 1);
}
// in mang day fibinacci
function bai6(n) {
  if (n === 1) return [0, 1];
  let result = bai6(n - 1);
  result.push(result[result.length - 2] + result[result.length - 1]);
  return result;
}
// kiem tra 1 so co chan hay ko
function bai7(n) {
  if (n < 0) n = Math.abs(n);
  if (n === 0) return true;
  if (n === 1) return false;
  n = n - 2;
  return bai7(n);
}
// tim so trong mang
function bai8(numberList, n) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  if (numberList[0] !== n) bai8(numberList.slice(1), n);
  else return true;
}
console.log(bai8([1, 2, 3, 4, 5], 6));

// sap xep mang
function bai9(numberList) {
  if (numberList.length === 0) return [];
  bai9(numberList.slice(1));
}
console.log(bai9([34, 7, 23, 32, 5, 62]));

function bai10(string) {
  if (string.length <= 1) return true;
  if (string[0] !== string[string.length - 1]) return false;
  return bai10(string.slice(1, string.length - 1));
}
// chuyen thap phan sang nhi phan
function bai11(n) {
  if (n === 1) return '1';
  if (n === 0) return '0';
  return bai11(Math.trunc(n / 2)).concat(String(n % 2));
}
// chuyen nhi phan sang thap phan
function binaryToDecimal(n) {
  if (String(n).length === 0) return 0;
  return String(n)[0] * Math.pow(2, String(n).length - 1) + binaryToDecimal(String(n).slice(1));
}
console.log(binaryToDecimal(1111));
// (4,6) -> 24
function abc(a, b) {
  if (a === 0 || b === 0) return 0;
  return b + abc(a - 1, b);
}
console.log(abc(4, 6));

function searchIndex(numberList, search, left = 0, right = numberList.length - 1) {
  const m = Math.trunc((left + right) / 2);
  if (left > right || numberList.length === 0) return -1;
  if (numberList[m] > search) return searchIndex(numberList, search, left, m);
  if (numberList[m] < search) return searchIndex(numberList, search, m + 1, right);
  return m;
}

console.log(searchIndex([1, 2, 3, 4, 5, 6, 7, 8], 1));
console.log(searchIndex([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(searchIndex([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(searchIndex([1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(searchIndex([1, 2, 3, 4, 5, 6, 7, 8], 5));
console.log(searchIndex([1, 2, 3, 4, 5, 6, 7, 8], 6));
console.log(searchIndex([1, 2, 3, 4, 5, 6, 7, 8], 7));
console.log(searchIndex([1, 2, 3, 4, 5, 6, 7, 8], 98));

function towerOfHanoi(n, colA, colB, colC) {
  if (n === 1) console.log(`${colA}->${colC}`);
  else {
    towerOfHanoi(n - 1, colA, colC, colB);
    towerOfHanoi(1, colA, colB, colC);
    towerOfHanoi(n - 1, colB, colA, colC);
  }
}
towerOfHanoi(3, 'A', 'B', 'C');

function tinhXn(n) {
  if (n === 0) return 1;
  let s = 0;
  for (let i = 1; i <= n; i++) {
    s += i * i * tinhXn(n - i);
  }
  return s;
}
console.log(tinhXn(3));

function TinhXn(n) {
  if (n === 0) return 1;
  return TinhXn(n - 1) + TinhYn(n - 1);
}
function TinhYn(n) {
  if (n === 0) return 1;
  return n * n * TinhXn(n - 1) + TinhYn(n - 1);
}
console.log(TinhXn(3));
console.log(TinhYn(3));

function tinhTongChan(numberList) {
  if (numberList.length === 0) return 0;
  let s = tinhTongChan(numberList.slice(1));
  if (numberList[0] % 2 === 0) s += numberList[0];
  return s;
}
console.log(tinhTongChan([2, 2, 3, 4, 5, 6, 7, 8, 9]));

function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function xuatPhanTuAm(numberList, n) {
  if (numberList.length === 0) return [];
  const result = xuatPhanTuAm(numberList.slice(0, numberList.length - 1));
  if (isPrime(numberList[numberList.length - 1]) && numberList[numberList.length - 1] < n)
    result.push(numberList[numberList.length - 1]);
  return result;
}
// const numberList = [2, 2, -3, 4, 5, -6, 7, 8, -9, 22];
const numberList2 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9];
console.log(xuatPhanTuAm(numberList2, 7));

function isPerfectSquare(n) {
  if (n === 1) return false;
  if (Math.sqrt(n) * Math.sqrt(n) === n) return true;
  return false;
}
function xuatPhanTuAm(numberList) {
  if (numberList.length === 0) return [];
  const result = xuatPhanTuAm(numberList.slice(0, numberList.length - 1));
  if (isPerfectSquare(numberList[numberList.length - 1]) && (numberList.length - 1) % 2 === 1)
    result.push(numberList[numberList.length - 1]);
  return result;
}
// const numberList = [2, 2, -3, 4, 5, -6, 7, 8, -9, 22];
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9];
console.log(xuatPhanTuAm(numberList));

function search(numberList, n) {
  if (numberList.length === 0) return -1;
  let i = search(numberList.slice(0, numberList.length - 1), n);
  if (numberList[numberList.length - 1] === n) return numberList.length - 1;
  return;
}
const numberList3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(search(numberList3, 1));
console.log(search(numberList3, 2));
console.log(search(numberList3, 3));
console.log(search(numberList3, 4));
console.log(search(numberList3, 5));
console.log(search(numberList3, 6));
console.log(search(numberList3, 7));
console.log(search(numberList3, 8));
console.log(search(numberList3, 9));
console.log(search(numberList3, 10));

function maxdigit(n) {
  if (n === 0) return 0;
  let lastNum = n % 10;
  let restNum = Math.trunc(n / 10);
  let pair = maxdigit(restNum);
  return Math.max(lastNum, pair);
}
console.log(maxdigit(18614));

function printElement(numberList, index) {
  if (index >= numberList.length || index < 0) return;
  console.log(numberList[index]);
  printElement(numberList, index + 1);
}
printElement([1, 2, 3, 4, 5, 6], 3);
function printElement(numberList, index) {
  if (index >= numberList.length || index < 0) return;
  console.log(numberList[numberList.length - 1]);
  printElement(numberList, numberList.length - 1);
}
printElement([1, 2, 3, 4, 5, 6], 3);

function calcMultipli(n) {
  if (n === 1) return 1;
  return n * calcMultipli(n - 1);
}
console.log(calcMultipli(3));
function calcSumOddNumber(n) {
  if (n === 0) return 0;
  let sum = calcSumOddNumber(n - 1);
  if (n % 2 === 1) sum += n;
  return sum;
}
console.log(calcSumOddNumber(5));

function countNumber(n) {
  const convert = String(Math.abs(n));
  if (String(n).length === 0) return 0;
  let count = countNumber(convert.slice(0, convert.length - 1));
  count++;
  return count;
}
console.log(countNumber(0));
console.log(countNumber(12345));

function UCLN(a, b) {
  if (b === 0) return a;
  return UCLN(b, a % b);
}
console.log(UCLN(12, 30));
console.log(12 % 6);

function nMuK(n, k) {
  if (k === 1) return n;
  if (k === 0) return 1;
  return n * nMuK(n, k - 1);
}
console.log(nMuK(6, 3));
