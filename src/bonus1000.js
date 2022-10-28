function bai1(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(bai1(5));
function bai2(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
}
console.log(bai2(3));
function bai3(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / i;
  }
  return sum;
}
console.log(bai3(3));
function bai4(n) {
  let sum = 0;
  for (let i = 2; i <= 2 * n; i++) {
    if (i % 2 === 0) sum += 1 / i;
  }
  return sum;
}
console.log(bai4(3));
function bai5(n) {
  let sum = 0;
  for (let i = 1; i <= 2 * n + 1; i++) {
    if (i % 2 === 1) sum += 1 / i;
  }
  return sum;
}
console.log(bai5(3));
function bai6(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / (i * (i + 1));
  }
  return sum;
}
console.log(bai6(3));
function bai7(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i / (i + 1);
  }
  return sum;
}
console.log(bai7(3));
function bai8(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += (2 * i + 1) / (2 * i + 2);
  }
  return sum;
}
console.log(bai8(2));
function bai9(n) {
  let multip = 1;
  for (let i = 1; i <= n; i++) {
    multip *= i;
  }
  return multip;
}
console.log(bai9(4));
function bai10(x, n) {
  let multip = 1;
  for (let i = 1; i <= n; i++) {
    multip *= x;
  }
  return multip;
}
// console.log(bai10(1,5));
function bai11(n) {
  let sum = 0;
  let multip = 1;
  for (let i = 1; i <= n; i++) {
    multip *= i;
    sum += multip;
  }
  return sum;
}
console.log(bai11(4));
function bai12(n) {
  let sum = 0;
  let multip = 1;
  for (let i = 1; i <= n; i++) {
    multip *= 2;
    sum += multip;
  }
  return sum;
}
console.log(bai12(5));
function bai13(n) {
  let sum = 0;
  let multip = 1;
  for (let i = 2; i <= n * 2; i += 2) {
    multip = Math.pow(2, i);
    sum += multip;
  }
  return sum;
}
console.log(bai13(3));
function bai14(n) {
  let sum = 0;
  let multip = 1;
  for (let i = 1; i <= n * 2 + 1; i += 2) {
    multip = Math.pow(2, i);
    sum += multip;
  }
  return sum;
}
console.log(bai14(3));
function bai15(n) {
  let S = 0;
  let T = 0;
  for (let i = 1; i <= n; i++) {
    T += i;
    S += 1 / T;
  }
  return S;
}
console.log(bai15(3));
function bai16(n) {
  let S = 0;
  let T = 0;
  for (let i = 1; i <= n; i++) {
    T += i;
    S += Math.pow(2, i) / T;
  }
  return S;
}
console.log(bai16(3));
function bai17(n) {
  let S = 0;
  let T = 0;
  let F = 1;
  for (let i = 1; i <= n; i++) {
    F *= i;
    T = Math.pow(2, i);
    S += T / F;
  }
  return S;
}
console.log(bai17(3));
function bai18(n) {
  let S = 1;
  let T = 0;
  let F = 1;
  let temp = 1;
  for (let i = 1; i <= n; i++) {
    temp = i * 2;
    F *= temp * (temp - 1);
    T = Math.pow(2, i * 2);
    S += T / F;
  }
  return S;
}
console.log(bai18(3));
function bai19(n) {
  let S = 3;
  let T = 0;
  let F = 1;
  let temp = 1;
  for (let i = 1; i <= n; i++) {
    temp = i * 2;
    F *= temp * (temp + 1);
    T = Math.pow(2, 2 * i + 1);
    S = S + T / F;
  }
  return S;
}
console.log(bai19(2));
function bai20(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) console.log(i);
  }
}
console.log(bai20(10));
function bai21(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum;
}
console.log(bai21(10));
function bai22(n) {
  let multip = 1;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) multip *= i;
  }
  return multip;
}
console.log(bai22(10));
function bai23(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count += 1;
  }
  return count;
}
console.log(bai23(10));
function bai24(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) console.log(i);
  }
}
console.log(bai24(100));
function bai25(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 0) sum += i;
  }
  return sum;
}
console.log(bai25(10));
function bai26(n) {
  let multip = 1;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) multip *= i;
  }
  return multip;
}
console.log(bai26(10));
function bai27(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 0) count += 1;
  }
  return count;
}
console.log(bai27(10));
function bai28(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum;
}
console.log(bai28(10));
function bai29(n) {
  let max = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) max = i;
  }
  return max;
}
console.log(bai29(100));
function bai30(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n ? true : false;
}
console.log(bai30(28));
function bai31(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(bai31(6));
function bai32(n) {
  return Math.sqrt(n) * Math.sqrt(n) === n ? true : false;
}
console.log(bai32(4));
function bai33(n) {
  let sum = Math.sqrt(2);
  for (let i = 1; i < n; i++) {
    sum = Math.sqrt(2 + sum);
  }
  return sum;
}
console.log(bai33(4));
function bai34(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = Math.sqrt(i + sum);
  }
  return sum;
}
console.log(bai34(4));
console.log(Math.sqrt(4 + Math.sqrt(3 + Math.sqrt(2 + Math.sqrt(1)))));
function bai36(n) {
  let sum = 0;
  let gt = 1;
  for (let i = 1; i <= n; i++) {
    gt *= i;
    sum = Math.sqrt(gt + sum);
  }
  return sum;
}
console.log(bai36(4));
console.log(Math.sqrt(24 + Math.sqrt(6 + Math.sqrt(2 + Math.sqrt(1)))));
function bai40(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = Math.sqrt(Math.pow(2, i) + sum);
  }
  return sum;
}
console.log(bai40(4));
console.log(
  Math.sqrt(
    Math.pow(2, 4) +
      Math.sqrt(Math.pow(2, 3) + Math.sqrt(Math.pow(2, 2) + Math.sqrt(Math.pow(2, 1))))
  )
);
function bai41(n) {
  let sum = 1;
  for (let i = 0; i <= n; i++) {
    sum = 1 + 1 / sum;
  }
  return sum;
}
console.log(bai41(4));
function bai42(n) {
  let sum = 0;
  let k = 0;
  for (let i = 1; i < n; i++) {
    sum += i;
    if (sum >= n) return (k = i - 1);
  }
}
console.log(bai42(20));
function bai43(n) {
  let count = 0;
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    count += 1;
  }
  return count;
}
console.log(bai43(123456));
function bai44(n) {
  let sum = 0;
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    sum += +str[i];
  }
  return sum;
}
console.log(bai44(123456));
function bai45(n) {
  let multip = 1;
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    multip *= +str[i];
  }
  return multip;
}
console.log(bai45(123456));
function bai46(n) {
  const str = n.toString();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (+str[i] % 2 === 1) count += 1;
  }
  return count;
}
console.log(bai46(13578));
function bai47(n) {
  const str = n.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (+str[i] % 2 === 0) sum += +str[i];
  }
  return sum;
}
console.log(bai47(135782));
function bai48(n) {
  const str = n.toString();
  let multip = 1;
  for (let i = 0; i < str.length; i++) {
    if (+str[i] % 2 === 1) multip *= +str[i];
  }
  return multip;
}
console.log(bai48(135782));
function bai49(n) {
  const str = n.toString();
  return +str[0];
}
console.log(bai49(135782));
function bai50(n) {
  const str = n.toString();
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return +result;
}
console.log(bai50(123));
function bai51(n) {
  const str = n.toString();
  let min = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] < min) min = str[i];
  }
  return min;
}
console.log(bai51(123));
function bai52(n) {
  const str = n.toString();
  let max = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] > max) max = str[i];
  }
  return max;
}
console.log(bai52(123));
function bai53(n) {
  const str = n.toString();
  let max = str[0];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] > max) {
      max = str[i];
      count += 1;
    }
  }
  return count;
}
console.log(bai53(12323));
function bai54(n) {
  const str = n.toString();
  let min = str[0];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] <= min) {
      min = str[i];
      count += 1;
    }
  }
  return count;
}
console.log(bai54(123231));
function bai56(n) {
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    if (+str[i] % 2 === 0) return false;
  }
  return true;
}
console.log(bai56(131132));
function bai57(n) {
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    if (+str[i] % 2 === 1) return false;
  }
  return true;
}
console.log(bai57(224466));
function bai59(n) {
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}
console.log(bai59(123211));
function bai60(n) {
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    if (str[i] > str[i + 1]) return false;
  }
  return true;
}
console.log(bai60(123211));
console.log(bai60(123456));
function bai61(n) {
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    if (str[i] < str[i + 1]) return false;
  }
  return true;
}
console.log(bai61(123211));
console.log(bai61(654789));
function uocSo(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result.push(i);
  }
  return result;
}

function bai62(a, b) {
  let result = 0;
  const arrA = uocSo(a);
  const arrB = uocSo(b);
  arrA.forEach((number) => {
    if (arrB.includes(number)) result = number;
  });
  return result;
}
console.log(bai62(12, 30));
function boiSo(n) {
  const result = [];
  let sum = 0;
  for (let i = 1; sum < 100; i++) {
    result.push((sum += n));
  }
  result.pop();
  return result;
}
function bai63(a, b) {
  const arrA = boiSo(a);
  const arrB = boiSo(b);
  for (const num of arrA) {
    if (arrB.includes(num)) return num;
  }
}
console.log(bai63(5, 8));

// for(let i= 'A'.charCodeAt(0);i<= 'Z'.charCodeAt(0);i++){
//   result.push(String.fromCharCode(i))
// }
// console.log(result) ;
function bai85(month) {
  switch (month) {
    case 1:
    case 2:
    case 3:
      console.log('Quy 1');
      break;
    case 4:
    case 5:
    case 6:
      console.log('Quy 2');
      break;
    case 7:
    case 8:
    case 9:
      console.log('Quy 3');
      break;
    case 10:
    case 11:
    case 12:
      console.log('Quy 4');
      break;
    default:
      console.log('ko hop le');
  }
}
console.log(bai85(13));
function bai101(month, year) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      if (year % 400 === 0) return 29;
      if (year % 100 !== 0 && year % 4 === 0) return 29;
      return 28;
    default:
      return 'ko hop le';
  }
}
console.log(bai101(2, 1900));
function bai122(arr) {
  return Math.max(...arr);
}
console.log(bai122([1, 2, 3, 4, 5]));
function bai123(arr) {
  return arr.indexOf(Math.min(...arr));
}
console.log(bai123([9, 2, 3, 4, 1, 5]));
function bai124(arr) {
  return arr.some((x) => x % 2 === 0 && x < 2004);
}
console.log(bai124([9, 2, 3, 4, 1, 5]));
console.log(bai124([2006, 3]));
function soNguyenTo(n) {
  if (n === 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function bai125(arr) {
  let count = 0;
  for (const number of arr) {
    if (soNguyenTo(number) && number < 100) count += 1;
  }
  return count;
}
console.log(bai125([1, 2, 3, 4, 5, 6, 9, 101]));
function bai135(arr) {
  return arr.find((x) => x > 0);
}
console.log(bai135([-1, -3, 4, -9, 2]));
function bai136(arr) {
  return arr.filter((x) => x % 2 === 0).reverse()[0];
}
console.log(bai136([1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log([...new Set([1, 1, 2, 3, 3])]);
console.log([1, 2, 3].reverse().join(''));

// [[1,2],[3],[5,4],[1,2,3]]
function checkIncreasing(arr) {
  if (arr.length < 2) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}
function bai293(numberList) {
  // return numberList.filter(x=>x.length>2)
  return numberList.filter((x) => checkIncreasing(x));
}
console.log(bai293([[1, 2], [3], [5, 4], [1, 2, 3]]));
