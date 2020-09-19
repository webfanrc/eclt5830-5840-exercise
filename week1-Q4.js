/*

Q4.
Implement a function that takes one parameter and returns true if the parameter
is an object containing the following three properties:
'foo', 'bar', and 'foo-bar'. Otherwise, the function returns false.

Please note that the value of the properties can be undefined.
 */

function checkKey(par) {

  if (typeof par == 'object') {
    let arr = Object.getOwnPropertyNames(par).concat(Object.getOwnPropertyNames(par.__proto__));

    if (arr.indexOf('foo') != -1 && arr.indexOf('bar') != -1 && arr.indexOf('foo-bar') != -1) return true;
  }

  return false;
}



/*
The question did not state if the properties can be inherited properties. So your solution would work if there isn't any inherited property.

Suppose I wanted to consider also inherited properties. How would you modify your solution.
 */
let A = { foo: 1, bar: 2};
A.__proto__['foo-bar'] = 12345;
console.log(A['foo-bar']); // 12345 (A has access to inherited property)
console.log(checkKey(A));  // Your current function would yield false (how to make your function to yield true?)


console.log('foo-bar' in A);