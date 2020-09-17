/**
 * Palindrome checker
 * Return true if the given string is a palindrome. Otherwise, return false.
 * A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
 */

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

palindrome('eye'); // true
palindrome('race car'); // true
palindrome('toyota'); // false
palindrome('spinach'); // false
