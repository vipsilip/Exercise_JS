function buildCategoryMapV1(categoryList) {
  if (!Array.isArray(categoryList) || categoryList.length === 0) return {};
  const categoryMap = categoryList.reduce((map, item) => {
    map[item.id] = item;
    return map;
  }, {});
  return categoryMap;
}
function buildCategoryMapV1(categoryList) {
  if (!Array.isArray(categoryList) || categoryList.length === 0) return {};
  const categoryMap = {};
  categoryList.forEach((item) => {
    categoryMap[item.id] = item;
  });

  return categoryMap;
}
const categoryListV1 = [
  { id: 1, name: 'iphone' },
  { id: 2, name: 'macbook' },
];
console.log(buildCategoryMapV1(categoryListV1));
// function buildCategoryMapV2(categoryList) {
//   if (!Array.isArray(categoryList) || categoryList.length === 0) return new Map();
//   const categoryMap = categoryList.reduce((map, item) => {
//     map.set(item.id, item);
//     return map;
//   }, new Map());
//   return categoryMap;
// }
function buildCategoryMapV2(categoryList) {
  if (!Array.isArray(categoryList) || categoryList.length === 0) return new Map();
  const categoryMap = new Map();
  categoryList.forEach((item) => {
    categoryMap.set(item.id, item);
  });
  return categoryMap;
}
const categoryList = [
  { id: 1, name: 'iphone' },
  { id: 2, name: 'macbook' },
];
console.log(buildCategoryMapV2(categoryList));
