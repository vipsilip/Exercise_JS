function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function createArrayRandom(n) {
  const result = [];
  let subArr = [];
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      let random = Math.floor(Math.random() * 100) + 1;
      while (subArr.includes(random) || result.find((x) => x.includes(random))) {
        random = Math.floor(Math.random() * 100) + 1;
      }
      if (isPrime(random)) console.log(`[${i}][${j}]`);
      subArr.push(random);
      if (subArr.length > n) {
        result.push(subArr);
        subArr = [];
      }
    }
  }
  console.log(result);
}
console.log(createArrayRandom(1));
