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


---
With your current implementation,
length({}) yield undefined instead of 0.
=> switch的一个问题

length(null) raises an exception instead of returning 0.
=> switch的一个问题

length(9) yields 2 instead of 1.
=> 修改function

Also, Infinity can be positive and negative. There is a Math function that can check all Infinity and NaN.
=> isFinite()
 */




//用if else更好一点
function length(par) {
  switch (typeof par) {
    case 'object':
      if (Array.isArray(par)) return par.length;
      else return 0;
    case 'string':
      return par.length;
    case 'number':
      if (isFinite(par)) return getDigits(par);
      else return 0;
    default:
      return 0;
  }
}

function getDigits(num) {
  num = Math.abs(Math.floor(num));
  //  let result = 0;
  //  while (num > 0) {
  //    num = Math.trunc(num/10);
  //    result++;
  //  }
  return num.toString().length;
}

console.log(length(20000.12));