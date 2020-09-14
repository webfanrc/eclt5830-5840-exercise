/*

Q4.
Implement a function that takes one parameter and returns true if the parameter
is an object containing the following three properties:
'foo', 'bar', and 'foo-bar'. Otherwise, the function returns false.

Please note that the value of the properties can be undefined.

 */

function check(par) {

  if (typeof par == 'object') {
    let arr = Object.getOwnPropertyNames(par);

    if (arr.indexOf('foo') != -1 && arr.indexOf('bar') != -1 && arr.indexOf('foo-bar') != -1) return true;
  }

  return false;
}



console.log(check(undefined));