export function isStrongPassword(password) {
  if (password.length === 0 || typeof password !== 'string') return false;
  
  if(password.length<8 || password<'A')
}
const upperCharacterList = Array.from({length:26},(v,i)=> String.fromCharCode('A'.charCodeAt(0)+i))
const lowerCharacterList = Array.from({length:26},(v,i)=> String.fromCharCode('a'.charCodeAt(0)+i))
const specialCharacterList = Array.from({length:15},(v,i)=> String.fromCharCode('!'.charCodeAt(0)+i))
const numberList = Array.from({length:10},(v,i)=> String.fromCharCode('0'.charCodeAt(0)+i))

console.log(upperCharacterList);
console.log(lowerCharacterList);
console.log(specialCharacterList);
console.log(numberList);
