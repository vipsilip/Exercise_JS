// string-01
export function countWords(str) {
  if (typeof str !== 'string' || str.length === 0) return 0;
  return str.split(' ').length;
}
// string-02
export function statisticsWords(str) {
  if (typeof str !== 'string' || str.length === 0) return {};
  const obj = {};
  const strToArr = str.split(' ');
  for (let i = 0; i < strToArr.length; i++) {
    obj[strToArr[i]] = obj[strToArr[i]] === undefined ? 1 : obj[strToArr[i]] + 1;
  }
  return obj;
}
// string-03
export function statisticsCharacters(str) {
  if (typeof str !== 'string' || str.length === 0) return {};
  const obj = {};
  const strToArr = str.split('');
  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i] === ' ') strToArr[i] = 'space';
    obj[strToArr[i]] = obj[strToArr[i]] === undefined ? 1 : obj[strToArr[i]] + 1;
  }
  return obj;
}
// string-04
function isValidEmail(str) {
  const X = str.slice(0, str.indexOf('@'));
  const Y = str.slice(str.indexOf('@') + 1, str.indexOf('.'));
  const domain = str.slice(str.indexOf('.'));
  const isValidDomain = ['.com', '.vn', '.com.vn'].some((x) => x === domain);
  if (X.includes(' ') || Y.includes(' ')) return false;
  if (X.length < 3 || Y.length < 3 || !isValidDomain) return false;
  return true;
}

export function countEmails(str) {
  if (typeof str !== 'string' || str.length === 0) return 0;
  return str.split(' ').filter((x) => isValidEmail(x)).length;
}
// string-05
function isValidURL(str) {
  const protocol = str.slice(0, str.indexOf(':'));
  const isValidProtocol = ['http', 'https', 'ws', 'wss'].some((x) => x === protocol);
  const domain = str.slice(str.indexOf('.'));
  const isValidDomain = ['.com', '.vn', '.com.vn'].some((x) => x === domain);
  const nameDomain = str.slice(str.indexOf('/') + 2, str.indexOf('.'));
  if (nameDomain.length < 3 || !isValidDomain || !isValidProtocol) return false;
  return true;
}

export function countURLs(str) {
  if (typeof str !== 'string' || str.length === 0) return 0;
  return str.split(' ').filter((x) => isValidURL(x)).length;
}
// string-06
export function getDisplayedAddress(address) {
  if (typeof address !== 'object' || Object.keys(address).length === 0) return '';
  const KQ = Object.keys(address).reduce((result, info) => {
    result = info === 'number' ? result + address[info] + ' ' : result + address[info] + ', ';
    return result;
  }, '');
  return KQ.slice(0, -2);
}
