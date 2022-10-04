const K500_QUANTITY = 2;
const K200_QUANTITY = 5;
const K100_QUANTITY = 10;
const K50_QUANTITY = 100;

const K500_VALUE = 500000;
const K200_VALUE = 200000;
const K100_VALUE = 100000;
const K50_VALUE = 50000;

const BASE_UNIT = 50000;
// export function withdraw(amount) {
//     if (!Number(amount)) return undefined;
//     if (amount > 8000000) return 'Insufficient balance from ATM';
//     if (amount / BASE_UNIT !== Math.trunc(amount / BASE_UNIT)) return 'Invalid balance';
//       const resultObj = {};
//       const k500 = amount / K500_VALUE > K500_QUANTITY ? 2 : Math.trunc(amount / K500_VALUE);
//       const k200 =
//         amount / K200_VALUE > K200_QUANTITY ? 5 : Math.trunc((amount - k500 * K500_VALUE) / K200_VALUE);
//       const k100 =
//         amount / K100_VALUE > K100_QUANTITY
//           ? 10
//           : Math.trunc((amount - (k500 * K500_VALUE + k200 * K200_VALUE)) / K100_VALUE);
//       const k50 =
//         Math.trunc(amount - (k500 * K500_VALUE + k200 * K200_VALUE + k100 * K100_VALUE)) / K50_VALUE;

//       resultObj.k50 = k50;
//       resultObj.k100 = k100;
//       resultObj.k200 = k200;
//       resultObj.k500 = k500;
//       return resultObj;
// }

export function withdraw(amount) {
  const totalAmount =
    K500_QUANTITY * K500_VALUE +
    K200_QUANTITY * K200_VALUE +
    K100_QUANTITY * K100_VALUE +
    K50_QUANTITY * K50_VALUE;
  if (!Number(amount)) return undefined;
  if (amount > totalAmount) return 'Insufficient balance from ATM';
  if (amount % BASE_UNIT !== 0) return 'Invalid balance';
  let remaining = amount;
  const a =
    remaining / K500_VALUE > K500_QUANTITY ? K500_QUANTITY : Math.trunc(remaining / K500_VALUE);
  remaining -= a * K500_VALUE;
  const b =
    remaining / K200_VALUE > K200_QUANTITY ? K200_QUANTITY : Math.trunc(remaining / K200_VALUE);
  remaining -= b * K200_VALUE;
  const c =
    remaining / K100_VALUE > K100_QUANTITY ? K100_QUANTITY : Math.trunc(remaining / K100_VALUE);
  remaining -= c * K100_VALUE;
  const d = Math.trunc(remaining / K50_VALUE);

  return {
    k500: a,
    k200: b,
    k100: c,
    k50: d,
  };
}
