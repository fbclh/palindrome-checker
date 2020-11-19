//  Palindrome checker
//  Return true if the given string is a palindrome. Otherwise, return false.
//  A palindrome is a word or sentence that's spelled the same way both forward 
// and backward, ignoring punctuation, case, and spacing.
 
function palindrome(str) {
  if (
    str
      .split('')
      .reverse()
      .join('')
      .toLowerCase()
      .replace(/[^0-9a-zA-Z]/g, '') ===
    str.toLowerCase().replace(/[^0-9a-zA-Z]/g, '')
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome('eye')); // true
console.log(palindrome('race car')); // true
console.log(palindrome('toyota')); // false
console.log(palindrome('spinach')); // false
console.log(palindrome('0_0 (: /- :) 0-0')); // true