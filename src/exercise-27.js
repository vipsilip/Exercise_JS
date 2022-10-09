export function uniqueLetters(str) {
  if (typeof str !== 'string' || str.length === 0) return '';
  let newStr = '';
  const countObj = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    countObj[letter] = countObj[letter] === undefined ? 1 : countObj[letter] + 1;
  }
  for (const key in countObj) {
    if (countObj[key] < 2) newStr += key;
  }
  return newStr;
}
