/*
Q3.
Implement a function named "length" that takes one parameter and perform the
followings:

- If the parameter is an array, return its length (# of elements)
- If the parameter is a string, return its length (# of characters)
- If the parameter is a number that is neither NaN nor Infinity, return the
number of digits in its integer portion. (e.g., for -456.99, the integer
portion is -456, so return 3)
- Otherwise, return 0

 */

function length(par) {
  switch (typeof par) {
    case 'object':
      if (Array.isArray(par)) return par.length;
    case 'string':
      return par.length;
    case 'number':
      if (par !== Infinity && !isNaN(par)) return getDigits(par);
    default:
      return 0
  }
}

function getDigits(num) {
  let result = 1;
  num = Math.abs(Math.trunc(num));
   while (num > 1) {
     num = num/10;
     result++;
   }
 return result;
}

console.log(length(-100.123));