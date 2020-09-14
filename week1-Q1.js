function reverse(input) {
	let num;

	let arr = input.toString().split('');

	num = Number(arr.reverse().join(''));

	return num;
}