export function isStrongPassword(password) {
  if (password.length === 0 || typeof password !== 'string') return false;
  if (password.length < 8) return false;
  const specialStr = '!@#$%^&*()';
  let isflagUpperCase = false;
  let isflagLowerCase = false;
  let isflagNumber = false;
  let isflagSpecialChar = false;
  for (let i = 0; i < password.length; i++) {
    const letter = password[i];
    if (letter >= 'A' && letter <= 'Z') isflagUpperCase = true;
    if (letter >= 'a' && letter <= 'z') isflagLowerCase = true;
    if (letter >= '0' && letter <= '9') isflagNumber = true;
    for (let j = 0; j < specialStr.length; j++) {
      const specialLetter = specialStr[j];
      if (letter === specialLetter) isflagSpecialChar = true;
    }
  }
  return isflagUpperCase && isflagLowerCase && isflagNumber && isflagSpecialChar;
}
