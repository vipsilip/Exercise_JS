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
  let i = 0,
    j = 0,
    k = lengthA + lengthB - 1;
  for (let i = 0; i < Math.max(lengthA, lengthB); i++) {
    if (arrayListA[i] % 2 === 0 && i < lengthA) arrayListC[j++] = arrayListA[i];
    if (arrayListB[i] % 2 === 0 && i < lengthB) arrayListC[j++] = arrayListB[i];
    if (arrayListA[i] % 2 === 1 && i < lengthA) arrayListC[k--] = arrayListA[i];
    if (arrayListB[i] % 2 === 1 && i < lengthB) arrayListC[k--] = arrayListB[i];
  }
  return arrayListC;
}
console.log(bai59([3, 2, 7, 5, 9], [1, 8, 10, 4, 12, 6]));
console.log(bai59([3, 2, 7, 5, 9, 0], [1, 8, 10, 4, 12, 6]));

function bai60(arrayList) {
  const temp = [];
  let flag = true;
  arrayList.forEach((x) => {
    temp.includes(x) ? (flag = false) : temp.push(x);
  });
  return flag;
}
console.log(bai60([1, 2, 3, 4, 5, 6, 7]));

function bai61(arrayList) {
  let sum = 0;
  let subArr = [];
  for (let i = 0; i < arrayList.length; i++) {
    sum += arrayList[i];
    subArr.push(arrayList[i]);
    if (arrayList[i] <= arrayList[i + 1] || i === arrayList.length - 1) {
      if (subArr.length > 1) {
        console.log(subArr);
        console.log(sum);
      }
      subArr = [];
      sum = 0;
    }
  }
  // return result;
}
console.log(bai61([1, 3, 2, 1, 7, 5, 3]));

function bai62(arrayList, k) {
  if (
    arrayList.length === 0 ||
    arrayList.length > 30000 ||
    k > arrayList.length ||
    !Array.isArray(arrayList)
  )
    return -1;
  // return arrayList.sort((a,b)=>b-a)[k-1]
  let temp;
  for (let i = 0; i < arrayList.length; i++) {
    for (let j = i + 1; j < arrayList.length; j++) {
      if (arrayList[j] > arrayList[i]) {
        temp = arrayList[j];
        arrayList[j] = arrayList[i];
        arrayList[i] = temp;
      }
    }
  }
  return arrayList[k - 1];
}
console.log(bai62([11, 3, 1, 10, 6, 18], 2));
console.log(bai62([1, 3, 5, 10, 11, 18, 4, 99, 56, 43], 2));

function bai63(arrayListA, arrayListB) {
  if (arrayListA.length > arrayListB.length || arrayListA.length === 0 || arrayListB.length === 0)
    return false;
  if (arrayListA.length === 0 && arrayListB.length !== 0) return true;
  let index = 0;
  for (let j = 0; j < arrayListB.length; j++) {
    if (arrayListA[0] === arrayListB[j]) {
      index = j;
      for (let i = 0; i < arrayListA.length; i++) {
        if (arrayListA[i] !== arrayListB[index++]) return false;
      }
    }
  }
  return true;
}
console.log(bai63([3, 2, 4, 5], [1, 3, 2, 4, 5, 6]));

function bai64(arrayList) {
  let subArr = [];
  for (let i = 0; i < arrayList.length; i++) {
    for (let j = i + 1; j < arrayList.length; j++) {
      if (arrayList[i] + arrayList[j] === arrayList[j + 1] + arrayList[j + 2]) {
        subArr.push(arrayList[i], arrayList[j], arrayList[j + 1], arrayList[j + 2]);
        if (subArr.length === 4) {
          console.log(subArr);
          subArr = [];
        }
      }
    }
  }
}

console.log(bai64([5, 6, 10, 1, 2, 3, 4, 1, 10]));

function bai65(arrayList) {
  let sum = 0;
  let total = 0;
  let count = 0;
  for (let i = 0; i < arrayList.length; i++) {
    sum += arrayList[i];
    if (arrayList[i] > arrayList[i + 1] || i === arrayList.length - 1) {
      total += sum;
      sum = 0;
      count++;
    }
  }
  return total / count;
}
console.log(bai65([1, 2, 3, 4, 2, 3, 6, 5, 6, 4, 5, 6]));

function bai66(arrayList) {
  let sum = 0;
  for (let i = 1; i < arrayList.length; i++) {
    if (arrayList[i - 1] + arrayList[i + 1] === arrayList[i]) {
      sum += arrayList[i];
    }
  }
  return sum;
}
console.log(bai66([1, 3, 2, 6, 3, 9, 6]));

function isArmstrong(n) {
  let sum = 0;
  let k = 0;
  let remaining1 = n;
  let remaining2 = n;
  let number;
  while (remaining1 !== 0) {
    number = remaining1 % 10;
    remaining1 = Math.trunc(remaining1 / 10);
    k++;
  }
  while (remaining2 !== 0) {
    number = Math.pow(remaining2 % 10, k);
    sum += number;
    remaining2 = Math.trunc(remaining2 / 10);
  }
  return sum === n ? true : false;
}
function bai68(n) {
  let sum = 0;
  if (isArmstrong(n)) {
    while (n !== 0) {
      sum += n % 10;
      n = Math.trunc(n / 10);
    }
  }
  return sum;
}
console.log(bai68(153));
console.log(bai68(123));

// function bai69(arrayList, x) {
//   let index;
//   for (let i in arrayList) {
//     if (arrayList[i] === x) {
//       index = i;
//       arrayList.splice(index, 1);
//     }
// else return -1
//   }
//   return arrayList;
// }
function bai69(arrayList, x) {
  for (let i = arrayList.length - 1; i >= 0; i--) {
    if (arrayList[i] === x) {
      for (let j = i; j < arrayList.length; j++) {
        arrayList[j] = arrayList[j + 1];
      }
      arrayList.length--;
    }
  }
  return arrayList;
}
console.log(bai69([1, 2, 5, 4, 5, 6, 7], 5));

// function bai70(arrayList){
//   const temp=[];
//   arrayList.forEach(x=>{
//     if(!temp.includes(x)) temp.push(x)
//   })
//   return temp;
// ------------------------cach 2
// return  [...new Set (arrayList)]
// }
function bai70(arrayList) {
  const length = arrayList.length;
  for (let i = 0; i < arrayList.length; i++) {
    for (let j = arrayList.length - 1; j > i; j--) {
      if (arrayList[j] === arrayList[i]) {
        for (let k = j; k < arrayList.length; k++) {
          arrayList[k] = arrayList[k + 1];
        }
        arrayList.length--;
      }
    }
  }
  return arrayList;
}
console.log(bai70([1, 6, 2, 3, 2, 4, 2, 6, 5]));

function bai71(arrayList) {
  const length = arrayList.length;
  for (let i = 1; i < arrayList.length; i++) {
    if (arrayList[i] < arrayList[i - 1] || arrayList[i] > arrayList[i + 1]) {
      for (let j = i; j < arrayList.length; j++) {
        arrayList[j] = arrayList[j + 1];
      }
      arrayList.length--;
    }
  }
  return arrayList;
}
console.log(bai71([1, 2, 3, 6, 7, 4, 5, 6]));
console.log(bai71([1, 6, 2, 3, 2, 4, 2, 6, 5]));
