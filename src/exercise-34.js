export function chunkArray(array, size) {
  if (!Array.isArray(array) || array.length === 0 || size < 1) return [];
  if (array.length / size > 20) throw new Error('Too many chunks');
  return array.reduce((resultArray, number, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(number);
    return resultArray;
  }, []);
}
