function bai4(a, b) {
  if (a > b) console.log(a);
  console.log(b);
}
bai4(3, 6);
function bai5(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;
  return c;
}
console.log(bai5(39, 60, 100));

function bai6(a, b, c) {
  let tam;
  if (a > b) {
    tam = a;
    a = b;
    b = tam;
  }
  if (a > c) {
    tam = a;
    a = c;
    c = tam;
  }
  if (b > c) {
    tam = b;
    b = c;
    c = tam;
  }
  console.log(a, b, c);
}
bai6(10, 4, 9);
bai6(1, 41, 9);
bai6(1, 4, 97);

function bai7(n) {
  const hundred = Math.trunc(n / 100);
  const ten = Math.trunc(n / 10) % 10;
  const zero = n % 10;
  if (zero > ten && zero > hundred) return `so lon nhat la ${zero} o hang don vi`;
  if (ten > zero && ten > hundred) return `so lon nhat la ${ten} o hang chuc`;
  return `so lon nhat la ${hundred} o hang tram`;
}
console.log(bai7(123));
console.log(bai7(193));
console.log(bai7(923));

function bai8(n) {
  let hundred = Math.trunc(n / 100);
  let ten = Math.trunc(n / 10) % 10;
  let zero = n % 10;
  let temp;
  if (zero > ten) {
    temp = zero;
    zero = ten;
    ten = temp;
  }
  if (zero > hundred) {
    temp = zero;
    zero = hundred;
    hundred = temp;
  }
  if (ten > hundred) {
    temp = ten;
    ten = hundred;
    hundred = temp;
  }
  console.log(`${zero}${ten}${hundred}`);
}
bai8(123);
bai8(193);
bai8(923);

function bai9(day, month, year) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (day < 1 || day > 31) return `${day}/${month}/${year} ko hop le`;
      return `${day}/${month}/${year} hop le`;
    case 4:
    case 6:
    case 9:
    case 11:
      if (day < 1 || day > 30) return `${day}/${month}/${year} ko hop le`;
      return `${day}/${month}/${year} hop le`;
    case 2:
      if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
        if (day < 1 || day > 29) return `${day}/${month}/${year} ko hop le`;
        return `${day}/${month}/${year} hop le`;
      } else {
        if (day < 1 || day > 28) return `${day}/${month}/${year} ko hop le`;
        return `${day}/${month}/${year} hop le`;
      }
    default:
      return `${day}/${month}/${year} ko hop le`;
  }
}

console.log(bai9(29, 2, 2000));
console.log(bai9(31, 1, 2000));
console.log(bai9(30, 4, 2000));
console.log(bai9(29, 3, 2023));
console.log(bai9(32, 12, 2002));
console.log(bai9(31, 4, 2002));
console.log(bai9(32, 13, 2002));

function bai10(hours, minute, second) {
  if (hours >= 1 && hours <= 23) {
    if (minute >= 1 && minute <= 59) {
      if (second >= 1 && second <= 59) return `${hours}:${minute}:${second} hop le`;
    }
  }
  return `${hours}:${minute}:${second} ko hop le`;
}
console.log(bai10(1, 59, 59));
console.log(bai10(1, 60, 30));
console.log(bai10(1, 30, 60));
console.log(bai10(24, 30, 60));

function bai11(day, month, year) {
  if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0))
    return `${day}/${month}/${year} la nam nhuan`;
  return `${day}/${month}/${year} ko la nam nhuan`;
}

console.log(bai11(28, 4, 2000));
console.log(bai11(28, 4, 2001));
console.log(bai11(28, 4, 2024));
console.log(bai11(28, 4, 2023));

function dtTamGiac(a, b, c, h) {
  const S = (a * h) / 2;
  const P = a + b + c;
  return `chu vi: ${P} - dien tich: ${S}`;
}
console.log(dtTamGiac(2, 5, 3, 9));

function bai13(km) {
  if (km <= 0) return 'ko hop le';
  if (km <= 1) return 5000;
  if (km <= 30) return 5000 + Math.ceil((km - 1) / 0.2) * 1000;
  return 5000 + (29 / 0.2) * 1000 + Math.ceil(km - 30) * 3000;
}
console.log(bai13(12.5));
console.log(bai13(1.5));
console.log(bai13(31.5));

function bai14(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) return '3 canh lap thanh tam giac va la tam giac deu';
    if (a === b || a === c || b === c) return '3 canh lap thanh tam giac va la tam giac can';
    if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b)
      return '3 canh lap thanh tam giac va la tam giac vuong';
  }
  return '3 canh ko lap thanh tam giac';
}
console.log(bai14(1, 2, 3));
console.log(bai14(2, 2, 2));
console.log(bai14(3, 4, 5));
console.log(bai14(16, 16, 1));

function bai15(n) {
  if (n <= 0) return `ko la so chinh phuong`;
  if (Number.isInteger(Math.sqrt(n))) return 'la so chinh phuong';
  return 'ko la so chinh phuong';
}
console.log(bai15(4));
console.log(bai15(16));
console.log(bai15(9));
console.log(bai15(8));
console.log(18 % 2);

// const a = 18;
// for (let i = 1; i <= a; i++) {
//   if (a % i === 0) console.log(i);
// }
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(`${j}`);
//   }
//   console.log('\n');
// }

// let i = 10;
// let s = 0;
// while (i > 0) {
//   if (i % 2 === 0) s += i;
//   else {
//     if (i > 5) s += 2 * i;
//   }
//   i--;
// }
// console.log(`s= ${s}`);

// let a = 18;
// let i = 1;
// do {
//   if (a % i === 0) console.log(i);
//   i++;
// } while (i <= a);

// let a = 11,
//   b = 16,
//   i = a;
// while (i < b) {
//   if (i % 2 === 0) {
//     console.log(i);
//     break;
//   }
//   i++;
// }

// let a = 10,
//   s = 0,
//   i = 0;
// while (i < a) {
//   i++;
//   if (i % 2 === 0) continue;
//   else s += i;
// }
// console.log(s);

// let i = 1,
//   s = 0;
// while (1) {
//   s += i++;
//   if (i % 2) i += 2;
//   else i += 1;
//   if (i > 20) break;
// }
// console.log(s);
// ------------------------------------------------------------------------------------

function hinhChuNhat(m, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      process.stdout.write(`* `);
    }
    process.stdout.write('\n');
  }
}
hinhChuNhat(5, 4);

function hinhChuNhatRong(m, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 || i === n - 1) process.stdout.write('* ');
      else {
        j === 0 || j === m - 1 ? process.stdout.write('* ') : process.stdout.write('  ');
      }
    }
    process.stdout.write('\n');
  }
}
hinhChuNhatRong(5, 4);

function hinhTamGiacVuong(h) {
  for (let i = 0; i < h; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write('* ');
    }
    process.stdout.write('\n');
  }
}
hinhTamGiacVuong(4);

function hinhTamGiacVuongRong(h) {
  for (let i = 0; i < h; i++) {
    for (let j = 0; j <= i; j++) {
      if (i === 0 || i === h - 1) process.stdout.write(`* `);
      else {
        j === 0 || j === i ? process.stdout.write(`* `) : process.stdout.write(`  `);
      }
    }
    process.stdout.write('\n');
  }
}
hinhTamGiacVuongRong(4);

function hinnhTamGiacCan(h) {
  for (let i = 1; i <= h; i++) {
    for (let j = i; j <= h - 1; j++) {
      process.stdout.write(`  `);
    }
    for (j = 1; j <= i * 2 - 1; j++) {
      process.stdout.write('* ');
    }
    process.stdout.write('\n');
  }
}
hinnhTamGiacCan(4);

function hinnhTamGiacCanRong(h) {
  for (let i = 1; i <= h; i++) {
    for (let j = i; j <= h - 1; j++) {
      process.stdout.write(`  `);
    }
    for (j = 1; j <= i * 2 - 1; j++) {
      if (i === 1 || i === h) process.stdout.write('* ');
      else {
        j === 1 || j === i * 2 - 1 ? process.stdout.write(`* `) : process.stdout.write(`  `);
      }
    }
    process.stdout.write('\n');
  }
}
hinnhTamGiacCanRong(4);

function TGC1(h) {
  for (let i = 1; i <= h; i++) {
    for (let j = 1; j < i; j++) {
      process.stdout.write(`  `);
    }
    for (let k = h - i; k >= 0; k--) {
      process.stdout.write(`* `);
    }
    process.stdout.write('\n');
  }
}
TGC1(5);

function TGC2(h) {
  for (let i = 1; i <= h; i++) {
    for (let j = h - i; j > 0; j--) {
      process.stdout.write('  ');
    }
    for (let k = 0; k < i; k++) {
      process.stdout.write('* ');
    }
    process.stdout.write('\n');
  }
}
TGC2(5);
function TGC3(h) {
  for (let i = 1; i <= h; i++) {
    for (let j = 0; j <= h - i; j++) {
      process.stdout.write('* ');
    }
    process.stdout.write('\n');
  }
}
TGC3(5);
function TGC4(h) {
  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write('* ');
    }
    process.stdout.write('\n');
  }
}
TGC4(5);
function hinhCanhQuat(h) {
  for (let i = 1; i <= h; i++) {
    for (let a = 1; a < i; a++) {
      process.stdout.write(`  `);
    }
    for (let b = h - i; b >= 0; b--) {
      process.stdout.write(`* `);
    }
    for (let c = h - i; c > 0; c--) {
      process.stdout.write('  ');
    }
    for (let d = 0; d < i; d++) {
      process.stdout.write('* ');
    }
    process.stdout.write('\n');
  }
  for (i = 1; i <= h; i++) {
    for (let e = 0; e <= h - i; e++) {
      process.stdout.write('* ');
    }
    for (let f = 1; f < i; f++) {
      process.stdout.write('  ');
    }
    for (let g = 1; g <= i; g++) {
      process.stdout.write('* ');
    }
    process.stdout.write('\n');
  }
}
hinhCanhQuat(2);

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2 || n === 3) return true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function bai29(n) {
  let count = 0;
  let i = 2;
  while (count < n) {
    if (isPrime(i)) {
      console.log(i);
      count++;
    }
    i++;
  }
}
bai29(10);

function divisorList(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result.push(i);
  }
  return result;
}

function bai30(a, b) {
  let bcnn;
  const max = Math.max(a, b);
  for (let i = max; i <= a * b; i += max) {
    if (i % a === 0 && i % b === 0) {
      bcnn = i;
      break;
    }
  }
  console.log(`BCNN: ${bcnn}`);

  let temp;
  while (b !== 0) {
    temp = a % b;
    a = b;
    b = temp;
  }
  console.log(`UCLN: ${a}`);
}
bai30(12, 25);

function bai31(n) {
  if (n <= 0 || n > 10000000000) return undefined;
  let binaryList = [];
  for (let i = 0; n > 0; i++) {
    binaryList[i] = n % 2;
    n = Math.trunc(n / 2);
  }
  for (let i = binaryList.length - 1; i >= 0; i--) {
    // process.stdout.write(`${binaryList[i]}`);
    console.log(binaryList[i]);
  }
}
bai31(1234567890);

function bai32(n) {
  if (n <= 0) return -1;
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }
  return count;
}
console.log(bai32(25));

function isPerfectNum(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n ? true : false;
}
function bai33(n) {
  // if (n > 5000) return undefined;
  for (let i = 1; i <= n; i++) {
    if (isPerfectNum(i)) console.log(i);
  }
}
bai33(10000);

function bai34(day, month, year) {
  let countDay = 0;
  for (let i = 1; i < month; i++) {
    switch (i) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        countDay += 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        countDay += 30;
        break;
      case 2:
        if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
          countDay += 29;
        } else {
          countDay += 28;
        }
        break;
    }
  }
  return (countDay += day);
}
console.log(bai34(21, 3, 2022));

function fibonacci(n) {
  let f0 = 0;
  let f1 = 1;
  let fn = 1;
  if (n < 0) return 0;
  if (n === 1 || n === 0) return n;
  for (let i = 2; i < n; i++) {
    f0 = f1;
    f1 = fn;
    fn = f0 + f1;
  }
  return fn;
}
console.log(fibonacci(2));
function bai35(n) {
  // if (n === 1 || n === 0) return 1;
  // const fiboList = [1, 1];
  // for (let i = 2; i < n; i++) {
  //   fiboList[i] = fiboList[i - 1] + fiboList[i - 2];
  // }
  // return fiboList.join(',');
  for (let i = 0; i < n; i++) {
    process.stdout.write(`${fibonacci(i)} `);
  }
}
bai35(10);

function bai37(day, month, year) {
  if (day < 1 || day > 31 || month < 1 || month > 12) return 'ko hop le';
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      if (day === 30) {
        day = 1;
        month++;
        break;
      }
      day++;
      break;
    case 2:
      if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
        if (day === 29) {
          day = 1;
          month++;
          break;
        }
        day++;
        break;
      } else {
        if (day === 28) {
          day = 1;
          month++;
          break;
        }
        day++;
        break;
      }
    default:
      if (day === 31 && month === 12) {
        day = 1;
        month = 1;
        year++;
        break;
      }
      if (day === 31) {
        day = 1;
        month++;
        break;
      }
      day++;
      break;
  }
  return `${day}/${month}/${year}`;
}
console.log(bai37(31, 12, 2003));
console.log(bai37(28, 2, 2000));
console.log(bai37(28, 2, 2003));

function isLeapYear(year) {
  return year % 4 === 0 || (year % 100 === 0 && year % 400 === 0) ? true : false;
}
function lastOfDay(day, month, year) {
  // let lastDay;
  switch (month) {
    case 1:
    case 2:
    case 4:
    case 6:
    case 9:
    case 11:
      if (day === 1) day = 31;
      else day--;
      break;
    case 3:
      if (day === 1) {
        if (isLeapYear(year)) day = 29;
        else day = 28;
      } else day--;
      break;
    default:
      if (day === 1) day = 30;
      else day--;
      break;
  }
  return day;
}
function lastOfMonth(day, month) {
  // let lastDay;
  switch (month) {
    case 1:
      if (day === 1) {
        month = 12;
        break;
      }
    default:
      if (day === 1) {
        month--;
        break;
      }
  }
  return month;
}
function lastOfYear(day, month, year) {
  // let lastDay;
  if (day === 1 && month === 1) year--;
  return year;
}
function bai38(day, month, year) {
  if (day < 1 || day > 31 || month < 1 || month > 12) return 'ko hop le';
  return (
    lastOfDay(day, month, year) + '/' + lastOfMonth(day, month) + '/' + lastOfYear(day, month, year)
  );
}
console.log(bai38(1, 1, 2003));
console.log(bai38(1, 3, 2000));
console.log(bai38(1, 3, 2003));
console.log(bai38(31, 12, 2003));

// CACH 1
function bai39(day, month, year) {
  let countDay = 0;
  for (let i = 1; i < month; i++) {
    switch (i) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        countDay += 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        countDay += 30;
        break;
      case 2:
        if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
          countDay += 29;
        } else {
          countDay += 28;
        }
        break;
    }
  }
  countDay += day;
  while (countDay > 7) {
    countDay = countDay - 7;
  }

  switch (countDay) {
    case 1:
      console.log(`${day}/${month}/${year} la ngay thu 7`);
      break;
    case 2:
      console.log(`${day}/${month}/${year} la ngay CN`);
      break;
    case 3:
      console.log(`${day}/${month}/${year} la ngay thu 2`);
      break;
    case 4:
      console.log(`${day}/${month}/${year} la ngay thu 3`);
      break;
    case 5:
      console.log(`${day}/${month}/${year} la ngay thu 4`);
      break;
    case 6:
      console.log(`${day}/${month}/${year} la ngay thu 5`);
      break;
    case 7:
      console.log(`${day}/${month}/${year} la ngay thu 6`);
      break;
  }
}
// CACH 2
function bai39(day, month, year) {
  let countDay = 0;
  for (let i = 1; i < month; i++) {
    switch (i) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        countDay += 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        countDay += 30;
        break;
      case 2:
        if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
          countDay += 29;
        } else {
          countDay += 28;
        }
        break;
    }
  }
  countDay += day;
  const S = Math.trunc(
    (year - 1 + (year - 1) / 4 - (year - 1) / 100 + (year - 1) / 400 + countDay) % 7
  );
  console.log(S);
  switch (S) {
    case 0:
      console.log(`${day}/${month}/${year} la ngay CN`);
      break;
    case 1:
      console.log(`${day}/${month}/${year} la ngay thu 2`);
      break;
    case 2:
      console.log(`${day}/${month}/${year} la ngay thu 3`);
      break;
    case 3:
      console.log(`${day}/${month}/${year} la ngay thu 4`);
      break;
    case 4:
      console.log(`${day}/${month}/${year} la ngay thu 5`);
      break;
    case 5:
      console.log(`${day}/${month}/${year} la ngay thu 6`);
      break;
    case 6:
      console.log(`${day}/${month}/${year} la ngay thu 7`);
      break;
  }
}
bai39(24, 1, 2003);
bai39(28, 2, 2022);
bai39(2, 3, 2022);
bai39(30, 4, 2022);
bai39(15, 5, 2022);
bai39(30, 6, 2022);
bai39(31, 7, 2022);
bai39(4, 8, 2022);
bai39(21, 9, 2022);
bai39(10, 10, 2022);
bai39(21, 11, 2022);
bai39(4, 12, 2022);

function bai40(hours, minutes, seconds) {
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59)
    return undefined;
  if (seconds === 59) {
    seconds = 0;
    minutes += 1;
  } else seconds += 1;
  if (minutes > 59) {
    minutes = 0;
    hours += 1;
  }
  if (hours > 23) {
    hours = 0;
    minutes = 0;
    seconds = 0;
  }
  return `0${hours}`.slice(-2) + ':' + `0${minutes}`.slice(-2) + ':' + `0${seconds}`.slice(-2);
}
console.log(bai40(23, 59, 59));
console.log(bai40(4, 59, 50));
console.log(bai40(10, 46, 18));

function bai41(hours, minutes, seconds) {
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59)
    return undefined;
  if (seconds === 0) {
    seconds = 59;
    minutes -= 1;
  } else seconds -= 1;
  if (minutes < 0) {
    minutes = 59;
    hours -= 1;
  }
  if (hours < 0) {
    hours = 23;
    minutes = 59;
    seconds = 59;
  }
  return `0${hours}`.slice(-2) + ':' + `0${minutes}`.slice(-2) + ':' + `0${seconds}`.slice(-2);
}
console.log(bai41(2, 0, 0));
console.log(bai41(4, 12, 0));
console.log(bai41(10, 0, 18));

function bai42() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 2; j <= 9; j++) {
      process.stdout.write(`${i} x ${j} = ${j * i} |`);
    }
    process.stdout.write(`\n`);
  }
}
bai42();
