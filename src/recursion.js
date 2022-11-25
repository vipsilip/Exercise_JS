function fibonacci1(n) {
  console.log(`tinh F[${n}]`);
  if (n <= 2) return 1;
  return fibonacci1(n - 1) + fibonacci1(n - 2);
}
console.log(fibonacci1(30));

// toi uu hoa de quy
const F = [];
function fibonacci2(n) {
  if (F[n] !== undefined) return F[n];
  console.log(`tinh F[${n}]`);
  if (n <= 2) {
    F[1] = 1;
    F[2] = 1;
    return 1;
  }
  F[n] = fibonacci2(n - 1) + fibonacci2(n - 2);
  return F[n];
}
console.log(fibonacci2(30));
