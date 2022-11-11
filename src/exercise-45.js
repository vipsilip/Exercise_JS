const PIN_LENGTH = 6;
function isValidPIN(pin) {
  //PIN khong qua 6 ky tu
  if (pin.length !== PIN_LENGTH) return false;
  //PIN chua toan so
  const hasNonDigit = Array.from(pin).every((x) => x >= '0' && x <= '9');
  if (!hasNonDigit) return false;
  //PIN khong duoc la chuoi tang hoac giam lien tiep
  const increasingNumber = '0123456789';
  const decresingNumber = '9876543210';
  if (increasingNumber.includes(pin) || decresingNumber.includes(pin)) return false;
  //PIN 1 chu so khong xuat hien qua 2 lan
  const digitSet = new Set(pin);
  const hasDigitMoreThanTwice = [...digitSet].some(
    (x) => Array.from(pin).filter((y) => y === x).length > 2
  );
  if (hasDigitMoreThanTwice) return false;
  return true;
}
console.log(isValidPIN('433221'));
