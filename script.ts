// Palindrome Checker
const palindrome = (str) => {
  return str
    .split('')
    .reverse()
    .join('')
    .toLowerCase()
    .replace(/[^0-9a-zA-Z]/g, '') ===
    str.toLowerCase().replace(/[^0-9a-zA-Z]/g, '')
    ? true
    : false;
};

// Input/Output 
console.log(palindrome('eye')); // true
console.log(palindrome('toyota')); // false
console.log(palindrome('spinach')); // false
