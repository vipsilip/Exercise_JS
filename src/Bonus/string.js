function bai3(str) {
  return str.length;
}
console.log(bai3('thanh hai'));

function bai4(str) {
  let countSpace = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') countSpace++;
  }
  return countSpace;
}
console.log(bai4('thanh hai'));
console.log(bai4(' thanh hai '));

function bai5(str) {
  //   const arrStr = str.split(' ')
  //   return arrStr.filter(x=>x!=='').join(' ').length
  str = str.trim();
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i - 1] === ' ') {
      str = str.replace(str[i - 1], '');
    }
  }
  return str;
}
console.log(bai5(` le    nguyen   thanh      hai  `));

function bai6(str1, str2) {
  return (str1 += str2);
}
console.log(bai6('123', 'abc'));

function bai7(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      result += String.fromCharCode(str.charCodeAt(i) + 32);
    }
    if (str[i] >= 'a' && str[i] <= 'z') {
      result += String.fromCharCode(str.charCodeAt(i));
    }
  }
  return result;
}
console.log(bai7('ABCD'));
console.log(bai7('AbCd'));
console.log(bai7('ClZsOptw'));

function bai8(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      result += String.fromCharCode(str.charCodeAt(i));
    }
    if (str[i] >= 'a' && str[i] <= 'z') {
      result += String.fromCharCode(str.charCodeAt(i) - 32);
    }
  }
  return result;
}
console.log(bai8('ABCD'));
console.log(bai8('AbCd'));
console.log(bai8('ClZsOptw'));

function bai9(str) {
  const arrStr = str.split(' ').filter((x) => x !== '');
  for (let i = 0; i < arrStr.length; i++) {
    const firstChar = arrStr[i][0].toUpperCase();
    const rest = arrStr[i].slice(1).toLowerCase();
    arrStr[i] = firstChar + rest;
  }
  return arrStr.join(' ');
}
console.log(bai9('thanh hai'));
console.log(bai9('   lE NgUYen    ThANH hAi  '));

function bai10(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 1) {
      if (str[i] >= 'A' && str[i] <= 'Z') {
        result += String.fromCharCode(str.charCodeAt(i) + 32);
      }
      if (str[i] >= 'a' && str[i] <= 'z') {
        result += String.fromCharCode(str.charCodeAt(i));
      }
    } else {
      if (str[i] >= 'A' && str[i] <= 'Z') {
        result += String.fromCharCode(str.charCodeAt(i));
      }
      if (str[i] >= 'a' && str[i] <= 'z') {
        result += String.fromCharCode(str.charCodeAt(i) - 32);
      }
    }
  }
  return result;
}
console.log(bai10('ABCDEfgh'));

function bai11(str) {
  let temp;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[str.length - 1 - i];
  }
  return result;
}
console.log(bai11('ABCDE'));

function bai12(str, find) {
  for (let i = 0; i < str.length; i++) {
    if (find === str[i]) return i;
  }
  return -1;
}
console.log(bai12('ABCDE', 'F'));

function bai13(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (char === str[i]) {
      count++;
    }
  }
  return `ky tu ${char} xuat hien ${count} lan`;
}
console.log(bai13('ABCDCECBCBCBCD', 'C'));

function bai14(str, name) {
  return str.includes(name) ? 'nhap dung' : 'nhap sai';
}
console.log(bai14('le nguyen thanh hai', 'hai'));
console.log(bai14('le nguyen thanh hai', 'hien'));

function bai15(str) {
  const arrStr = str.split(' ');
  let temp;
  temp = arrStr[arrStr.length - 1];
  arrStr[arrStr.length - 1] = arrStr[0];
  arrStr[0] = temp;
  return arrStr.join(' ');
}
console.log(bai15('bo an co'));

function bai16(str) {
  let index;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ' ') {
      index = i + 1;
      break;
    }
  }
  const strFirstName = str.slice(0, index - 1);
  const strLastName = str.slice(index);
  console.log(strFirstName);
  console.log(strLastName);
}
bai16('Nguyen Van A');
bai16('Nguyen Van hai');

function bai17(str, word) {
  const arrStr = str.split(' ');
  const index = arrStr.findIndex((x) => x === word);
  return arrStr.slice(index).join(' ');
}
console.log(bai17('truong cao dang cong nghe thong tin', 'tin'));

function bai18(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}
console.log(bai18('abcdcba'));
console.log(bai18('abcdcbe'));

function bai19(str) {
  let number = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0 && str[i] <= 9) {
      number = '';
      number += str[i];
    }
  }
  return number;
}
console.log(bai19('ac123'));
console.log(bai19('acdjkgel'));

function bai23(str) {
  const arrStr = str.split(' ');
  for (let i = 0; i < arrStr.length; i++) {
    const firstChar = arrStr[i][0].toUpperCase();
    const restChar = arrStr[i].slice(1).toLowerCase();
    arrStr[i] = firstChar + restChar;
  }
  return arrStr.join(' ');
}
console.log(bai23('nGuYen vAN a'));

function bai24(str) {
  const arrStr = str.split(' ').reverse();
  return arrStr.join(' ');
}
console.log(bai24('truong CD CNTT TPHCM'));

function bai25(str) {
  const arrStr = str.split('');
  const temp = [];
  for (let i = 0; i < arrStr.length; i++) {
    let count = 1;
    for (let j = i + 1; j < arrStr.length; j++) {
      if (arrStr[i] === arrStr[j]) {
        count++;
        for (let k = j; k < arrStr.length; k++) {
          arrStr[k] = arrStr[k + 1];
        }
        j--;
        arrStr.length--;
      }
    }
    temp.push(count);
  }
  for (let i = 0; i < arrStr.length; i++) {
    console.log(`ky tu ${arrStr[i]} xuat hien ${temp[i]} lan`);
  }
}
bai25('ABCKCNABPABBA');
bai25('aabckglabbnmbc');

function bai26(str1, str2) {
  let count = 0;
  const arrStr1 = str1.split('');
  const arrStr2 = str2.split('');

  for (let i = 0; i < arrStr1.length; i++) {
    for (let j = i + 1; j < arrStr1.length; j++) {
      if (arrStr1[i] === arrStr1[j]) {
        for (let k = j; k < arrStr1.length; k++) {
          arrStr1[k] = arrStr1[k + 1];
        }
        arrStr1.length--;
        j--;
      }
    }
  }
  for (let i = 0; i < arrStr2.length; i++) {
    for (let j = i + 1; j < arrStr2.length; j++) {
      if (arrStr2[i] === arrStr2[j]) {
        for (let k = j; k < arrStr2.length; k++) {
          arrStr2[k] = arrStr2[k + 1];
        }
        arrStr2.length--;
        j--;
      }
    }
  }
  for (let i = 0; i < arrStr1.length; i++) {
    for (let j = 0; j < arrStr2.length; j++) {
      if (arrStr2[j] === arrStr1[i]) count++;
    }
  }
  return `2 chuoi co ${count} ky tu giong nhau`;
}
console.log(bai26('THANHHAI', 'ABCHIJ'));

function bai28(str, char, index) {
  const arrStr = str.split('');
  arrStr.splice(index, 0, char);
  return arrStr.join('');
}
console.log(bai28('0123456', 'A', 4));
console.log(bai28('le nguyen thanh hai', 'A', 4));

function bai29(str) {
  const arrStr = str.split(' ').filter((x) => !['', ',', ':', '.', '?', '!', ';'].includes(x));
  return arrStr.length;
}
console.log(bai29('cong    hoa , xa hoi : chu ; nghia ! viet ? nam .'));
