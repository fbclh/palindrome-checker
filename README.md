# Palindrome Checker

freeCodeCamp JavaScript Algorithms and Data Structure project
## Description

Return ```true``` if the given string is a palindrome. Otherwise, return ```false```.

A palindrome is a word or sentence that's spelled the same way both forward and backward, 
ignoring punctuation, case, and spacing.

## Example

```JavaScript
//  Palindrome Checker
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
```
