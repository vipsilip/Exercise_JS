function isValidBracketPair(str) {
  if (str.length === 0) return true;
  const pair = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    switch (character) {
      case '(':
      case '[':
      case '{':
        stack.push(character);
        break;
      case ')':
      case ']':
      case '}':
        if (stack[stack.length - 1] !== pair[character]) return false;
        stack.pop();
        break;
      default:
        break;
    }
  }
  return stack.length === 0;
}
console.log(isValidBracketPair('(a + b) * (c + d)'));
console.log(isValidBracketPair('[(a + b) * c[1]'));
