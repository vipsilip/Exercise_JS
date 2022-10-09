export function countWords(str) {
  if (typeof str !== 'string' || str.length === 0) return 0;
  str = str.trim();
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
      const strToArr = str.split(' ');
      console.log(strToArr);
      return strToArr.filter((x) => x !== '').length;
    }
    return 0;
  }
}
