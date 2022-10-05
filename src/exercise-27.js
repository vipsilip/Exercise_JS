function uniqueLetters(str) {
  if (typeof str !== 'string' || str.length === 0) return '';
  let newStr = '';
  const countObj = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    countObj[letter] = countObj[letter] === undefined ? 1 : countObj[letter] + 1;
    if (countObj[letter] !== letter) newStr += letter;
  }

  // for (const key in countObj) {
  //   if (countObj[key] < 2) newStr += key;
  // }
  return newStr;
}
console.log(uniqueLetters('easy frontend'));
/**
 * e: 1
 * a: 1
 * s: 1
 * y: 1
 * f: 1
 * r: 1
 * o: 1
 * n: 1
 * t: 1
 */
