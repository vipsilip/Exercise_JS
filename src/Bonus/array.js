const { template } = require('@babel/core');

function createArray(n, length) {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(n);
  }
  return result;
}
console.log(createArray(0, 5));

function bai4(length) {
  const result = [];
  let random = Math.round(Math.random() * 10);
  result[0] = random;
  for (let i = 1; i <= length - 1; i++) {
    do {
      random = Math.round(Math.random() * 10);
    } while (random < result[i - 1]);
    result[i] = random;
  }
  return result;
}
console.log(bai4(5));
function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function bai5(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return false;
  for (let i = 0; i < arrayList.length; i++) {
    if (isPrime(Math.abs(arrayList[i]))) console.log(arrayList[i]);
  }
}
bai5([-1, 5, 9, -4]);

function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function bai9(n) {
  const result = [];
  for (let i = 1; i < n; i++) {
    if (isPrime(i)) result.push(i);
  }
  return result.length !== 0 ? result : `khong ton tai so nguyen to nao nho hon ${n}`;
}
console.log(bai9(99));
console.log(bai9(2));

function bai10(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return false;
  for (let i = 0; i < arrayList.length; i++) {
    if (Math.sqrt(arrayList[i]) === Math.trunc(Math.sqrt(arrayList[i])) && i % 2 === 1)
      console.log(arrayList[i]);
  }
}
bai10([4, 9, 12, 16, 99]);

function bai11(arrayList, x) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return false;
  let lastPosition;
  for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] === x) lastPosition = i;
  }
  return lastPosition;
}
console.log(bai11([1, 2, 3, 4, 2, 6], 2));
function bai12(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return false;
  let position = 0;
  let min = arrayList[0];
  for (let i = 1; i < arrayList.length; i++) {
    if (arrayList[i] < min) {
      min = arrayList[i];
      position = i;
    }
  }
  return position;
}
console.log(bai12([7, 2, 3, 1, 2, 9]));
function bai13(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return false;
  let position = 0;
  let max = arrayList[0];
  for (let i = 1; i < arrayList.length; i++) {
    if (arrayList[i] > max) {
      max = arrayList[i];
      position = i;
    }
  }
  return position;
}
console.log(bai13([7, 2, 3, 1, 2, 9]));

function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function bai14(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  for (let i = 0; i < arrayList.length; i++) {
    if (isPrime(arrayList[i]) && arrayList[i] > 23) {
      console.log(i);
    }
  }
  return -1;
}
console.log(bai14([7, 2, 3, 1, 2, 29, 31]));

function bai15(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  return arrayList.findIndex((x) => x < 0);
}
console.log(bai15([2, -2, 9, -6, 8, -1]));
console.log(bai15([2, 2, 9, 6, 8, 1]));

function bai16(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  let max = -Infinity;
  let index = -1;
  for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] > max && arrayList[i] < 0) {
      max = arrayList[i];
      index = i;
    }
  }
  return index;
}
console.log(bai16([2, -2, 9, -6, 8, -1]));
console.log(bai16([2, -2, -6, 8, 1]));

function bai20(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] % 3 === 0 && arrayList[i] % 5 === 0) console.log(arrayList[i]);
  }
}
bai20([15, 3, 5]);

function bai21(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  let lastEven = -1;
  for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] % 2 === 0) lastEven = arrayList[i];
  }
  return lastEven;
}
console.log(bai21([15, 3, 5]));

function bai23(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  let max = arrayList[0];
  let min = arrayList[0];
  let indexMax = 0;
  let indexMin = 0;
  let temp;
  for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] > max) {
      max = arrayList[i];
      indexMax = i;
    }
    if (arrayList[i] < min) {
      min = arrayList[i];
      indexMin = i;
    }
  }
  temp = arrayList[indexMin];
  arrayList[indexMin] = arrayList[indexMax];
  arrayList[indexMax] = temp;
  return arrayList;
}
console.log(bai23([15, 3, 5]));

function bai24(arrayList, x) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] >= 1 && arrayList[i] <= x) console.log(arrayList[i]);
  }
}
bai24([2, 6, 9, 12, 7, 55, 33, 89], 9);

function bai25(arrayListA, arrayListB) {
  if (
    arrayListA.length === 0 ||
    arrayListB.length === 0 ||
    !Array.isArray(arrayListA) ||
    !Array.isArray(arrayListB)
  )
    return -1;
  arrayListA.forEach((x) => {
    if (!arrayListB.includes(x)) console.log('1:', x);
  });
  arrayListA.forEach((x) => {
    if (arrayListB.includes(x)) console.log('2:', x);
  });
}
bai25([1, 2, 3, 4, 5], [5, 6, 7, 8, 9]);

function bai26(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  let countNegative = 0;
  let countPositive = 0;
  for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] < 0) countNegative++;
    if (arrayList[i] > 0) countPositive++;
  }
  return `so am co ${countNegative} - so duong co ${countPositive}`;
}
console.log(bai26([-1, -5, 9, 5, 3]));

function bai32(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  let count = 0;
  for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] % 3 === 0 || arrayList[i] % 5 === 0) count++;
  }
  return count;
}
console.log(bai32([3, 5, 15, 4]));

function bai33(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  return arrayList.reduce((sum, number) => {
    if (number % 2 === 0) sum += number;
    return sum;
  }, 0);
}
console.log(bai33([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function bai37(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  return arrayList.reduce((sum, number, index) => {
    if (isPrime(index)) sum += number;
    return sum;
  }, 0);
}
console.log(bai37([1, 2, 3, 4, 5, 6, 7, 8, 9]));
function bai36(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  return arrayList.reduce((sum, number, index) => {
    if (index % 2 === 0) sum += number;
    return sum;
  }, 0);
}
console.log(bai36([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(Math.sqrt(4));

function bai39(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  let sum = 0;
  for (let i = 1; i < arrayList.length; i++) {
    if (arrayList[i - 1] < arrayList[i] && arrayList[i] > arrayList[i + 1]) sum += arrayList[i];
  }
  return sum;
}
console.log(bai39([1, 5, 2, 6, 3, 5, 1, 8, 6]));

function bai44(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  let temp;

  for (let i = 0; i < arrayList.length; i++) {
    for (let j = i + 1; j < arrayList.length; j++) {
      if (arrayList[i] < arrayList[j]) {
        temp = arrayList[i];
        arrayList[i] = arrayList[j];
        arrayList[j] = temp;
      }
    }
  }
  return arrayList;
}
console.log(bai44([1, 2, 5, 9, 2, 6]));
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function bai45(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  for (let i = 0; i < arrayList.length; i++) {
    for (let j = i + 1; j < arrayList.length; j++) {
      if (arrayList[i] > arrayList[j] && isPrime(arrayList[i]) && isPrime(arrayList[j])) {
        temp = arrayList[i];
        arrayList[i] = arrayList[j];
        arrayList[j] = temp;
      }
    }
  }
  return arrayList;
}
console.log(bai45([9, 7, 5, 4, 3, 2, 1]));

function bai48(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  let temp;
  for (let i = 0; i < arrayList.length; i++) {
    for (let j = i + 1; j < arrayList.length; j++) {
      if (arrayList[i] % 2 === 1) {
        temp = arrayList[i];
        arrayList[i] = arrayList[j];
        arrayList[j] = temp;
      }
    }
  }
  for (let i = 0; i < arrayList.length; i++) {
    for (let j = i + 1; j < arrayList.length; j++) {
      if (arrayList[i] % 2 === 0 && arrayList[j] % 2 === 0 && arrayList[i] > arrayList[j]) {
        temp = arrayList[i];
        arrayList[i] = arrayList[j];
        arrayList[j] = temp;
      }
      if (arrayList[i] % 2 === 1 && arrayList[j] % 2 === 1 && arrayList[i] > arrayList[j]) {
        temp = arrayList[i];
        arrayList[i] = arrayList[j];
        arrayList[j] = temp;
      }
    }
  }
  //   for (let i = arrayList.length - 1; i > 0; i--) {
  //     for (let j = i - 1; j > 0; j--) {
  //       if (arrayList[i] % 2 === 1 && arrayList[j] % 2 === 1 && arrayList[i] > arrayList[j]) {
  //         temp = arrayList[i];
  //         arrayList[i] = arrayList[j];
  //         arrayList[j] = temp;
  //       }
  //     }
  //   }
  return arrayList;
}
console.log(bai48([9, 7, 5, 4, 3, 2, 1, 14, 98, 46, 23, 0, 17]));
console.log(bai48([9, 7, 5, 4, 3, 2, 1]));

function bai49(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  let temp;
  for (let i = 0; i < arrayList.length; i++) {
    for (let j = i + 1; j < arrayList.length; j++) {
      if (arrayList[i] > 0) {
        temp = arrayList[i];
        arrayList[i] = arrayList[j];
        arrayList[j] = temp;
      }
    }
  }
  for (let i = 0; i < arrayList.length; i++) {
    for (let j = i + 1; j < arrayList.length; j++) {
      if (arrayList[i] < 0 && arrayList[j] < 0 && arrayList[i] < arrayList[j]) {
        temp = arrayList[i];
        arrayList[i] = arrayList[j];
        arrayList[j] = temp;
      }
    }
  }
  for (let i = arrayList.length - 1; i > 0; i--) {
    for (let j = i - 1; j > 0; j--) {
      if (arrayList[i] >= 0 && arrayList[j] >= 0 && arrayList[i] > arrayList[j]) {
        temp = arrayList[i];
        arrayList[i] = arrayList[j];
        arrayList[j] = temp;
      }
    }
  }
  return arrayList;
}
console.log(bai49([-9, 7, 5, -4, 3, -2, -1, 14, -98, 46, -23, 0, 17]));
console.log(bai49([9, 7, 5, 4, 3, 2, 1]));

function bai50(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  let length = arrayList.length;
  for (let i = length - 1; i >= 0; i--) {
    if (i % 2 === 1) {
      for (let j = i; j < length; j++) {
        if (arrayList[j + 1] === undefined) arrayList.pop();
        else arrayList[j] = arrayList[j + 1];
      }
      length--;
    }
  }
  return arrayList;
}
console.log(bai50([2, 3, 4, 5, 6, 7, 8, 9]));
// function bai51(arrayList) {
//   if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
//   let length = arrayList.length;
//   let max = arrayList[0];
//   let index = 0;
//   //   for (let i = 0; i < length; i++) {
//   //     const number = arrayList[i];
//   //     if (max < number) {
//   //       max = number;
//   //       index = i;
//   //     }
//   //   }
//   //   arrayList.splice(index, 1);
//   arrayList.forEach((x, i) => {
//     if (x > max) {
//       max = x;
//       index = i;
//     }
//   });
//   arrayList.splice(index, 1);
//   return arrayList;
// }
function bai51(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  let length = arrayList.length;
  let max = arrayList[0];
  for (let i = 0; i < length; i++) {
    if (arrayList[i] > max) {
      max = arrayList[i];
    }
  }
  for (let i = length - 1; i > 0; i--) {
    if (arrayList[i] === max) {
      for (let j = i; j < length; j++) {
        if (arrayList[j + 1] === undefined) arrayList.pop();
        else arrayList[j] = arrayList[j + 1];
      }
      length--;
    }
  }
  return arrayList;
}
console.log(bai51([2, 3, 4, 5, 16, 7, 8, 9]));
function bai52(arrayList, x) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  let length = arrayList.length;
  for (let i = length - 1; i > 0; i--) {
    if (arrayList[i] < x) {
      for (let j = i; j < length; j++) {
        if (arrayList[j + 1] === undefined) arrayList.pop();
        else arrayList[j] = arrayList[j + 1];
      }
      length--;
    }
  }
  return arrayList;
}
console.log(bai52([9, 4, 5, 1, 3, 57, 23, 6], 6));

function bai52(arrayList, x) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  let length = arrayList.length;
  let delta = Math.abs(x - arrayList[0]);
  for (let i = 1; i < length; i++) {
    if (delta > Math.abs(x - arrayList[i])) delta = Math.abs(x - arrayList[i]);
  }
  for (let i = length - 1; i > 0; i--) {
    if (delta === Math.abs(x - arrayList[i])) {
      for (let j = i; j < length; j++) {
        if (arrayList[j + 1] === undefined) arrayList.pop();
        else arrayList[j] = arrayList[j + 1];
      }
      length--;
    }
  }
  return arrayList;
}
console.log(bai52([9, 4, 1, 3, 57, 23, 7], 6));

function bai54(arrayList, x) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  let length = arrayList.length;
  for (let i = length - 1; i >= 0; i--) {
    arrayList[i + 1] = arrayList[i];
  }
  arrayList[0] = x;
  return arrayList;
}
console.log(bai54([9, 4, 1, 3, 57, 23, 7], 6));

function bai55(arrayList, x) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  let max = arrayList[0];
  let index = 0;
  let length = arrayList.length;
  for (let i = 1; i < length; i++) {
    if (arrayList[i] > max) {
      max = arrayList[i];
      index = i;
    }
  }
  for (let j = length - 1; j >= index; j--) {
    if (index < j) arrayList[j + 1] = arrayList[j];
    if (index === j) arrayList[j + 1] = x;
  }
  return arrayList;
}
console.log(bai55([99, 4, 1, 3, 57, 23, 7], 6));

function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function bai56(arrayList, x) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  const index = arrayList.findIndex((x) => isPrime(x));
  //   arrayList.splice(index, 0, x);
  const length = arrayList.length;
  for (let i = length - 1; i >= 0; i--) {
    if (index < i) {
      arrayList[i + 1] = arrayList[i];
    }
    if (index === i) {
      arrayList[i + 1] = arrayList[i];
      arrayList[i] = x;
    }
  }
  return arrayList;
}
console.log(bai56([8, 1, 4, 9, 2, 23, 7], 6));

function bai57(arrayList, x) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  //   let idx = 0;
  //   let length = arrayList.length;
  //   for (let i = length - 1; i >= 0; i--) {
  //     if (arrayList[i] % 2 === 0) {
  //       idx = i;
  //       for (let j = length - 1; j >= idx; j--) {
  //         arrayList[j + 1] = arrayList[j];
  //       }
  //       length++;
  //       arrayList[idx + 1] = x;
  //     }
  //   }
  let idx = 0;
  let length = arrayList.length;
  for (let i = 0; i < length; ) {
    if (arrayList[i] % 2 === 0) {
      idx = i;
      arrayList.splice(idx + 1, 0, x);
      i += 2;
    } else i++;
  }
  return arrayList;
}
console.log(bai57([8, 1, 4, 9, 2, 23, 7], 6));

function bai58(arrayList) {
  if (arrayList.length === 0 || !Array.isArray(arrayList)) return -1;
  const subArrA = [];
  const subArrB = [];
  const length = arrayList.length;
  //   for (let i = 0; i < length; i++) {
  //     if (arrayList[i] % 2 === 0) subArrA.push(arrayList[i]);
  //     else subArrB.push(arrayList[i]);
  //   }
  let m = 0,
    n = 0;
  for (let i = 0; i < length; i++) {
    if (arrayList[i] % 2 === 0) {
      subArrA[m++] = arrayList[i];
    } else subArrB[n++] = arrayList[i];
  }
  console.log(subArrA);
  console.log(subArrB);
}
bai58([8, 1, 4, 9, 2, 23, 7]);

function bai59(arrayListA, arrayListB) {
  const arrayListC = [];
  // arrayListA.forEach(x=>{
  //     if(x%2===0) arrayListC.unshift(x)
  //     else arrayListC.push(x)
  // })
  // arrayListB.forEach(x=>{
  //     if(x%2===0) arrayListC.unshift(x)
  //     else arrayListC.push(x)
  // })
  const lengthA = arrayListA.length;
  const lengthB = arrayListB.length;
  const lengthC = arrayListC.length;
  let i = 0,
    j = 0,
    k = 0;
  while (i < lengthA && j < lengthB) {
    if (arrayListA[i] % 2 === 1) arrayListC[k++] = arrayListA[i++];
    else {
      for (let m = lengthC - 1; m >= 0; m--) {
        if (m >= 0) arrayListC[m + 1] = arrayListC[m];
        else arrayListC[0] = arrayListA[i++];
      }
    }
    if (arrayListB[j] % 2 === 1) arrayListC[k++] = arrayListB[j++];
    else {
      for (let m = lengthC - 1; m >= 0; m--) {
        if (m >= 0) {
          arrayListC[m + 1] = arrayListC[m];
        } else arrayListC[0] = arrayListB[j++];
      }
    }
  }
  return arrayListC;
}
console.log(bai59([3, 2, 7, 5, 9], [1, 8, 10, 4, 12, 6]));
