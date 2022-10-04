const DEFAULT_LANGUAGE = 'en';
const SUPPORTED_LANGUAGE_LIST = ['en', 'cn', 'vi'];
// export function getLanguageCodeFromURL(url) {
//   if (typeof url !== 'string' || url.length === 0) return DEFAULT_LANGUAGE;
//   const arrUrl = url.split('/');
//   for (let i = 0; i < arrUrl.length; i++) {
//     for (let j = 0; j < SUPPORTED_LANGUAGE_LIST.length; j++) {
//       const wordList = SUPPORTED_LANGUAGE_LIST[j];
//       const wordUrl = arrUrl[i];
//       if (wordUrl === wordList) return wordList;
//     }
//   }
//   return DEFAULT_LANGUAGE;
// }

export function getLanguageCodeFromURL(url) {
  if (typeof url !== 'string' || url.length === 0) return DEFAULT_LANGUAGE;
  let result = DEFAULT_LANGUAGE;
  url = url.slice(-3).replace('/', '');
  SUPPORTED_LANGUAGE_LIST.forEach((wordList) => {
    if (url === wordList) result = wordList;
  });
  return result;
}
