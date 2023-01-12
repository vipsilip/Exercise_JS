function bai12(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    const subArr = arr[i];
    for (let j = 0; j < subArr.length; j++) {
      sum += subArr[j];
    }
    console.log(sum);
  }
}
bai12([
  [1, 2, 3],
  [5, 9, 3],
  [7, 20, 1],
  [9, 5, 2],
]);

function bai13(arr) {
  const lengthRow = arr.length;
  const lengthCol = arr[0].length;
  for (let i = 0; i < lengthCol; i++) {
    let sum = 0;
    for (let j = 0; j < lengthRow; j++) {
      sum += arr[j][i];
    }
    console.log(sum);
  }
}
bai13([
  [1, 2, 3],
  [5, 9, 3],
  [7, 20, 1],
  [9, 5, 2],
]);

function bai14(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const subArr = arr[i];
    for (let j = 0; j < subArr.length; j++) {
      if (subArr[j] % 2 === 0) sum += subArr[j];
    }
  }
  return sum;
}
console.log(
  bai14([
    [1, 2, 3],
    [5, 9, 3],
    [7, 20, 1],
    [9, 5, 2],
  ])
);

function bai18(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const subArr = arr[i];
    sum += Math.max(...subArr);
  }
  return sum;
}
console.log(
  bai18([
    [1, 2, 3],
    [5, 9, 3],
    [7, 20, 1],
    [9, 5, 2],
  ])
);

function bai19(arr) {
  const lengthRow = arr.length;
  const lengthCol = arr[0].length;
  let mediumValue;
  let sum = 0;
  for (let i = 0; i < lengthCol; i++) {
    let min = arr[0][i];
    for (let j = 0; j < lengthRow; j++) {
      if (min > arr[j][i]) min = arr[j][i];
    }
    sum += min;
  }
  return (mediumValue = sum / lengthCol);
}
console.log(
  bai19([
    [1, 2, 3],
    [5, 9, 3],
    [7, 20, 1],
    [9, 5, 2],
  ])
);

function bai22(arr) {
  let max = arr[0][0];
  let indexCol = 0;
  let indexRow = 0;
  for (let i in arr) {
    const subArr = arr[i];
    for (let j in subArr) {
      if (max < subArr[j]) {
        max = subArr[j];
        indexCol = j;
        indexRow = i;
      }
    }
  }
  return `[${indexRow}][${indexCol}]`;
}
console.log(
  bai22([
    [1, 2, 3],
    [5, 9, 3],
    [7, 20, 1],
    [9, 5, 2],
  ])
);

function bai24(arr) {
  let indexCol = 0;
  let indexRow = 0;
  for (let i in arr) {
    const subArr = arr[i];
    for (let j in subArr) {
      if (subArr[j] % 2 === 0) {
        indexCol = j;
        indexRow = i;
      }
    }
  }
  return `[${indexRow}][${indexCol}]`;
}
console.log(
  bai24([
    [1, 2, 3],
    [5, 9, 3],
    [7, 20, 1],
    [9, 5, 2],
  ])
);

function bai25(arr) {
  let indexCol;
  let indexRow;
  let max;
  for (let i in arr) {
    const subArr = arr[i];
    for (let j in subArr) {
      if (subArr[j] % 2 === -1 && subArr[j] < 0) {
        max = subArr[j];
        indexCol = j;
        indexRow = i;
        break;
      }
    }
  }
  for (let i in arr) {
    const subArr = arr[i];
    for (let j in subArr) {
      if (max < subArr[j] && subArr[j] % 2 === -1 && subArr[j] < 0) {
        max = subArr[j];
        indexCol = j;
        indexRow = i;
      }
    }
  }
  return `[${indexRow}][${indexCol}]`;
}
console.log(
  bai25([
    [1, 2, 3],
    [-5, 9, -3],
    [7, -20, 1],
    [9, 5, 2],
  ])
);

function bai26(arr) {
  let indexCol;
  let indexRow;
  let min;
  for (let i in arr) {
    const subArr = arr[i];
    for (let j in subArr) {
      if (subArr[j] % 2 === 0 && subArr[j] >= 0) {
        min = subArr[j];
        indexCol = j;
        indexRow = i;
        break;
      }
    }
    break;
  }
  for (let i in arr) {
    const subArr = arr[i];
    for (let j in subArr) {
      if (min > subArr[j] && subArr[j] % 2 === 0 && subArr[j] > 0) {
        min = subArr[j];
        indexCol = j;
        indexRow = i;
      }
    }
  }
  return `[${indexRow}][${indexCol}]`;
}
console.log(
  bai26([
    [1, 12, 3],
    [-5, 9, -3],
    [7, 20, 0],
    [9, 5, 8],
  ])
);

function bai34(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const subArr = arr[i];
    for (let j = 1; j <= subArr.length - 2; j++) {
      if (subArr[j] > subArr[j - 1] && subArr[j] > subArr[j + 1]) result.push(subArr[j]);
    }
  }
  return result;
}
console.log(
  bai34([
    [1, 12, 3, 5, 4, 10, 7],
    [-5, 9, -3],
    [7, 20, 0],
    [9, 5, 8],
  ])
);

function bai50(arr) {
  const temp = [];
  let inverted;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      temp.push(arr[i][j]);
    }
  }
  for (let i = 0; i < temp.length; i++) {
    for (let j = i + 1; j < temp.length; j++) {
      if (temp[i] > temp[j]) {
        inverted = temp[i];
        temp[i] = temp[j];
        temp[j] = inverted;
      }
    }
  }
  let subArr = [];
  for (let i = 0; i < temp.length; i++) {
    subArr.push(temp[i]);
    if (subArr.length === 3 || i === temp.length - 1) {
      result.push(subArr);
      subArr = [];
    }
  }
  return result;
}
console.log(
  bai50([
    [5, 6, 3],
    [1, 8, 7],
    [2, 4, 9],
  ])
);
console.log(
  bai50([
    [1, 12, 3],
    [-5, 9, -3],
    [7, 20, 0],
    [9, 5, 8],
  ])
);

function bai51(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = j + 1; k < arr[i].length; k++) {
        if (arr[i][j] > arr[i][k]) {
          temp = arr[i][j];
          arr[i][j] = arr[i][k];
          arr[i][k] = temp;
        }
      }
    }
  }
  return arr;
}
console.log(
  bai51([
    [1, 12, 3],
    [-5, 9, -3],
    [7, 20, 0],
    [9, 5, 8],
  ])
);

function bai52(arr) {
  const lengthRow = arr.length;
  const lengthCol = arr[0].length;
  let temp;
  for (let i = 0; i < lengthCol; i++) {
    for (let j = 0; j < lengthRow; j++) {
      for (let k = j + 1; k < lengthRow; k++) {
        if (arr[j][i] < arr[k][i]) {
          temp = arr[j][i];
          arr[j][i] = arr[k][i];
          arr[k][i] = temp;
        }
      }
    }
  }
  return arr;
}
console.log(
  bai52([
    [1, 12, 3],
    [-5, 9, -3],
    [7, 20, 0],
    [9, 5, 8],
  ])
);

function bai54(arr) {
  const temp = [];
  let inverted;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      temp.push(arr[i][j]);
    }
  }
  for (let i = 0; i < temp.length; i++) {
    for (let j = i + 1; j < temp.length; j++) {
      if (temp[i] > temp[j]) {
        inverted = temp[i];
        temp[i] = temp[j];
        temp[j] = inverted;
      }
    }
  }
  let subArr = [];
  for (let i = 0; i < temp.length; i++) {
    subArr.push(temp[i]);
    if (subArr.length === 3 || i === temp.length - 1) {
      result.push(subArr);
      subArr = [];
    }
  }
  return result;
}
console.log(
  bai54([
    [5, 6, 3],
    [1, 8, 7],
    [2, 4, 9],
  ])
);

function bai59(arr, del) {
  for (let i = 0; i < arr.length; i++) {
    if (del === i) arr.splice(del, 1);
  }
  return arr;
}
console.log(
  bai59(
    [
      [5, 6, 3],
      [1, 8, 7],
      [2, 4, 9],
    ],
    1
  )
);

function bai60(arr, del) {
  const rowLength = arr.length;
  const colLength = arr[0].length;
  for (let i = 0; i < colLength; i++) {
    for (let j = 0; j < rowLength; j++) {
      if (del === j) arr[i].splice(del, 1);
    }
  }
  return arr;
}
console.log(
  bai60(
    [
      [5, 6, 3],
      [1, 8, 7],
      [2, 4, 9],
    ],
    1
  )
);
