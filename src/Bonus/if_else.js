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

const a = 18;
for (let i = 1; i <= a; i++) {
  if (a % i === 0) console.log(i);
}
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${j}`);
  }
  console.log('\n');
}

let i = 10;
let s = 0;
while (i > 0) {
  if (i % 2 === 0) s += i;
  else {
    if (i > 5) s += 2 * i;
  }
  i--;
}
console.log(`s= ${s}`);

let a = 18;
let i = 1;
do {
  if (a % i === 0) console.log(i);
  i++;
} while (i <= a);

let a = 11,
  b = 16,
  i = a;
while (i < b) {
  if (i % 2 === 0) {
    console.log(i);
    break;
  }
  i++;
}

let a = 10,
  s = 0,
  i = 0;
while (i < a) {
  i++;
  if (i % 2 === 0) continue;
  else s += i;
}
console.log(s);

let i = 1,
  s = 0;
while (1) {
  s += i++;
  if (i % 2) i += 2;
  else i += 1;
  if (i > 20) break;
}
console.log(s);

function bai23(m, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      process.stdout.write(`* `);
    }
    process.stdout.write(`\n`);
  }
}
bai23(5, 4);
function bai24(m, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 || i === n - 1) process.stdout.write(`* `);
      else {
        if (j === 0 || j === m - 1) process.stdout.write(`* `);
        else process.stdout.write(`  `);
      }
    }
    process.stdout.write(`\n`);
  }
}
bai24(5, 4);

function bai25(h) {
  for (let i = 0; i < h; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write('* ');
    }
    process.stdout.write('\n');
  }
}
bai25(5);
function bai26(h) {
  for (let i = 0; i < h; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) process.stdout.write('* ');
      else {
        if (i === 0 || i === h - 1) process.stdout.write('* ');
        else process.stdout.write('  ');
      }
    }
    process.stdout.write('\n');
  }
}
bai26(5);
function bai27(h) {
  for (i = 1; i <= h; i++) {
    for (j = 0; j < h - i; j++) {
      process.stdout.write('  ');
    }
    for (j = 1; j <= 2 * i - 1; j++) {
      process.stdout.write('* ');
    }
    process.stdout.write('\n');
  }
}
bai27(4);
function bai28(h) {
  for (i = 1; i <= h; i++) {
    for (j = 0; j < h - i; j++) {
      process.stdout.write('  ');
    }
    for (j = 1; j <= 2 * i - 1; j++) {
      if (i === 1 || i === h) process.stdout.write('* ');
      else {
        if (j === 1 || j >= 2 * i - 1) process.stdout.write('* ');
        else process.stdout.write('  ');
      }
    }
    process.stdout.write('\n');
  }
}
bai28(4);
