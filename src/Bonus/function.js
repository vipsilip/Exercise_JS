function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function bai4(n) {
  if (n <= 0) return -1;
  for (let i = 1; i < n; i++) {
    if (isPrime(i)) process.stdout.write(`${i} `);
  }
}
bai4(100);

function isPerfectSquare(n) {
  return Math.sqrt(n) === Math.trunc(Math.sqrt(n)) ? true : false;
}
function bai5(n) {
  if (n <= 0) return -1;
  for (let i = 1; i <= n; i++) {
    if (isPerfectSquare(i)) process.stdout.write(`${i} `);
  }
}
bai5(100);

function isPerfectNumber(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n ? true : false;
}
function bai6(n) {
  if (n <= 0) return -1;
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (isPerfectNumber(i)) count++;
  }
  return count;
}
console.log(bai6(28));

function bai7(n) {
  if (n < 0 || n >= 1000) return undefined;
  if (n === 0) process.stdout.write(`khong`);
  const hundred = Math.trunc(n / 100);
  const ten = Math.trunc(n / 10) % 10;
  const zero = n % 10;
  let result = '';
  switch (hundred) {
    case 1:
      result += `một trăm `;
      break;
    case 2:
      result += `hai trăm `;
      break;
    case 3:
      result += `ba trăm `;
      break;
    case 4:
      result += `bốn trăm `;
      break;
    case 5:
      result += `năm trăm `;
      break;
    case 6:
      result += `sáu trăm `;
      break;
    case 7:
      result += `bảy trăm `;
      break;
    case 8:
      result += `tám trăm `;
      break;
    case 9:
      result += `chín trăm `;
      break;
  }
  switch (ten) {
    case 1:
      result += `mười `;
      break;
    case 2:
      result += `hai mươi `;
      break;
    case 3:
      result += `ba mươi `;
      break;
    case 4:
      result += `bốn mươi `;
      break;
    case 5:
      result += `năm mươi `;
      break;
    case 6:
      result += `sáu mươi `;
      break;
    case 7:
      result += `bảy mươi `;
      break;
    case 8:
      result += `tám mươi `;
      break;
    case 9:
      result += `chín mươi `;
      break;
    case 0:
      hundred === 0 ? (result += '') : (result += `lẻ `);
      break;
  }
  switch (zero) {
    case 1:
      ten === 1 ? (result += `một`) : (result += `mốt`);
      break;
    case 2:
      result += `hai`;
      break;
    case 3:
      result += `ba`;
      break;
    case 4:
      result += `bốn`;
      break;
    case 5:
      result += `năm`;
      break;
    case 6:
      result += `sáu`;
      break;
    case 7:
      result += `bảy`;
      break;
    case 8:
      result += `tám`;
      break;
    case 9:
      result += `chín`;
      break;
    case 0:
      result += '';
      break;
  }

  return result;
}
console.log(bai7(105));
console.log(bai7(0));
console.log(bai7(9));
console.log(bai7(110));
console.log(bai7(91));
console.log(bai7(126));
console.log(bai7(999));

function bai8(startTime, endTime, number) {
  if (
    startTime < 6 ||
    startTime > endTime ||
    endTime > 21 ||
    !Number.isInteger(startTime) ||
    !Number.isInteger(endTime)
  )
    return undefined;
  let money = 0;
  if (endTime < 17.5) return (money = (endTime - startTime) * 2500 * number);
  if (startTime > 17.5) return (money = (endTime - startTime) * 3000 * number);
  return (money = (17.5 - startTime) * 2500 + (endTime - 17.5) * 3000) * number;
}
console.log(bai8(10, 21, 2));

function bai9(timeIn, timeOut) {
  if (timeIn < 6 || timeOut > 18) return undefined;
  let money;
  if (timeIn >= 12) return (money = (timeOut - timeIn) * 7500);
  if (timeOut < 12) return (money = (timeOut - timeIn) * 6000);
  return (money = (12 - timeIn) * 6000 + (timeOut - 12) * 7500);
}
console.log(bai9(6, 17));
console.log(bai9(6, 12));
console.log(bai9(13, 17));

function bai11(a, b, c) {
  if (a < 0 || b < 0 || c < 0) return 'khong lap thanh tam giac';
  if (a + b > c && a + c > b && b + c > a) {
    const p = (a + b + c) / 2;
    const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    const ha = (2 * s) / a;
    const hb = (2 * s) / b;
    const hc = (2 * s) / c;
    return `${s},${ha},${hb},${hc}`;
  }
  return 'khong lap thanh tam giac';
}
console.log(bai11(8, 7, 9));

function bai12(a, b, c, d, e, f) {
  let x, y, D, Dx, Dy;
  D = a * e - d * b;
  Dx = c * e - f * b;
  Dy = a * f - d * c;

  if (D === 0) {
    if (Dx === 0 && Dy === 0) console.log('PT co vo so nghiem');
    else console.log('PT vo nghiem');
  } else {
    x = Dx / D;
    y = Dy / D;
    console.log(x, y);
  }
}
bai12(-2, 1, 5, 1, 3, 1);
bai12(1, -2, 4, -3, 6, -12);
function bai13(a, b) {
  const max = Math.max(a, b);
  let bcnn;
  for (let i = max; i <= a * b; i += max) {
    if (i % a === 0 && i % b === 0) {
      bcnn = i;
      break;
    }
  }
  console.log(bcnn);
  let temp;
  while (b !== 0) {
    temp = a % b;
    a = b;
    b = temp;
  }
  console.log(`UCLN la: ${a}`);
}
console.log(bai13(5, 15));
console.log(bai13(10, 1));

function bai14(n) {
  let sum = 0;
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    sum += 1 / (factorial *= i);
  }
  return sum;
}
console.log(bai14(4));

function bai15(a, b) {
  //   let temp;
  //   temp = a;
  //   a = b;
  //   b = temp;
  //   return `${a}-${b}`;
  a = a * b;
  b = a / b;
  a = a / b;
  return `${a}-${b}`;
}
console.log(bai15(4, 9));

function bai16(n) {
  if (n >= 100000) return false;
  const tenThousand = Math.trunc(n / 10000) === 0 ? null : Math.trunc(n / 10000);
  const thousand = Math.trunc(n / 1000) % 10 === 0 ? null : Math.trunc(n / 1000) % 10;
  const hundred = Math.trunc(n / 100) % 10 === 0 ? null : Math.trunc(n / 100) % 10;
  const ten = Math.trunc(n / 10) % 10;
  const zero = n % 10;
  if (n > 9999) return tenThousand === zero && thousand === ten ? true : false;
  if (n > 999) return thousand === zero && hundred === ten ? true : false;
  if (n > 99) return hundred === zero ? true : false;
  if (n > 9) return ten === zero ? true : false;
  if (n > 0) return true;
  return false;
}
console.log(bai16(12321));
console.log(bai16(12345));
console.log(bai16(1221));
console.log(bai16(1224));
console.log(bai16(121));
console.log(bai16(129));
console.log(bai16(11));
console.log(bai16(17));
console.log(bai16(1));

function bai17(n) {
  if (n < 0 || n > 100000) return -1;
  let countOdd = 0;
  let countEven = 0;
  while (n !== 0) {
    (n % 10) % 2 === 0 ? countEven++ : countOdd++;
    n = Math.trunc(n / 10);
  }
  return `co ${countEven} so chan, co ${countOdd} so le`;
}
console.log(bai17(973));

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function bai18(n) {
  if (n < 0 || n > 100000) return -1;
  let countPrime = 0;
  while (n !== 0) {
    if (isPrime(n % 10)) countPrime++;
    n = Math.trunc(n / 10);
  }
  return `co ${countPrime} so nguyen to`;
}
console.log(bai18(9865));

function bai19(n) {
  if (n < 0 || n > 100000) return -1;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum;
}
console.log(bai19(12));

function bai20(n) {
  if (n < 0 || n > 100000) return -1;
  let maxDivisor;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) maxDivisor = i;
  }
  return maxDivisor;
}
console.log(bai20(90));

function bai21(n) {
  if (n < 0 || n > 100000) return false;
  let count = 0,
    countOdd = 0,
    countEven = 0;
  while (n !== 0) {
    if ((n % 10) % 2 === 0) {
      countEven++;
      count++;
    }
    if ((n % 10) % 2 === 1) {
      countOdd++;
      count++;
    }
    n = Math.trunc(n / 10);
  }
  return count === countEven || count === countOdd ? true : false;
}
console.log(bai21(11221));
console.log(bai21(111));
console.log(bai21(13579));
console.log(bai21(86420));

function bai23(n, x) {
  if (n < 0 || n > 100000) return -1;
  let count = 0;
  let curr = n;
  while (curr !== 0) {
    curr = Math.trunc(curr / 10);
    count++;
  }
  while (count > 0) {
    const position = n % 10;
    if (position === x) return `chu so ${x} o vi tri thu ${count}`;
    n = Math.trunc(n / 10);
    count--;
  }
  return -1;
}
console.log(bai23(12345, 5));
console.log(bai23(12345, 4));
console.log(bai23(12345, 3));
console.log(bai23(12345, 2));
console.log(bai23(12345, 1));
console.log(bai23(98364, 9));

function bai24(n) {
  if (n < 0 || n > 100000) return false;
  let remaining = n;
  let lastDigit = remaining % 10;
  let flag = 0;
  let count = 0;
  while (remaining !== 0) {
    const digit = Math.trunc(remaining / 10) % 10;
    if (digit < lastDigit) {
      lastDigit = digit;
      flag += 1;
    } else {
      lastDigit = digit;
      flag += 0;
    }
    count++;
    remaining = Math.trunc(remaining / 10);
  }
  return flag === count || flag === 1 ? true : false;
}
console.log(bai24(8521));
console.log(bai24(1569));
console.log(bai24(879));
console.log(bai24(1298));
console.log(bai24(1234));
console.log(bai24(4321));
console.log(bai24(4312));

function bai25(a, b) {
  if (Math.max(a, b) < 0 || Math.max(a, b) % 7 !== 0) console.log('nhap lai');
  else console.log('dung yeu cau');
}
bai25(2, 7);

function bai26(n) {
  if (n < 0 || n > 100000) return false;
  let sum = 0;
  let count = 0;
  while (n !== 0) {
    const digit = n % 10;
    if (digit % 2 === 0) {
      sum += digit;
      count++;
    }
    n = Math.trunc(n / 10);
  }
  return sum / count;
}
console.log(bai26(24688));
console.log(bai26(12584));

function delNearX(arrayList, x) {
  let compair = Math.abs(x - arrayList[0]);
  let length = arrayList.length;
  for (let i = 1; i < length; i++) {
    if (compair > Math.abs(x - arrayList[i])) compair = Math.abs(x - arrayList[i]);
  }
  for (let i = length - 1; i > 0; i--) {
    if (compair === Math.abs(x - arrayList[i])) {
      for (let j = i; j < length; j++) {
        if (arrayList[j + 1] === undefined) arrayList.pop();
        else arrayList[j] = arrayList[j + 1];
      }
      length--;
    }
  }
  return arrayList;
}
console.log(delNearX([2, 3, 6, 8, 7, 9], 5));
