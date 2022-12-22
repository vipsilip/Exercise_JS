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
