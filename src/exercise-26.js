// tao list tu A den Z
console.log(Array.from({ length: 26 }, (v, i) => String.fromCharCode('A'.charCodeAt(0) + i)));
export function isStrongPassword(password) {
  if (password.length === 0 || typeof password !== 'string') return false;
  if (password.length < 8) return false;
  const specialStr = '!@#$%^&*()';
  let isflagUpper = false;
  let isflagLower = false;
  let isflagNumber = false;
  let isflagSpecial = false;
  for (let i = 0; i < password.length; i++) {
    const letter = password[i];
    if (letter >= 'A' && letter <= 'Z') isflagUpper = true;
    if (letter >= 'a' && letter <= 'z') isflagLower = true;
    if (letter >= '0' && letter <= '9') isflagNumber = true;
    for (let j = 0; j < specialStr.length; j++) {
      const specialLetter = specialStr[j];
      if (letter === specialLetter) isflagSpecial = true;
    }
  }
  return isflagUpper && isflagLower && isflagNumber && isflagSpecial;
}
