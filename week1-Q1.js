/*
Q1.
Let X be a variable that stores a positive integer in which its last digit
is not zero. Write a segment of JS code to reverse its digits.

e.g. if X = 13579; X should become 97531.

 */

// 了解JS的基本数据模式

function reverse(input) {
	let num;

	let arr = input.toString().split('');

	num = Number(arr.reverse().join(''));

	return num;
}