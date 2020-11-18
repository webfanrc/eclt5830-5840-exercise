Q1.
Let X be a variable that stores a positive integer in which its last digit
is not zero. Write a segment of JS code to reverse its digits.

e.g. if X = 13579; X should become 97531.



Q2.
Write a segment of JS code to make a DEEP copy of array "fruits" and sort the elements in
the cloned array by "id" in ascending order.

const fruits = [
  {id:43, title:'Apple', price:12}, {id:21, title:'Banana', price:5},
  {id:13, title:'Orange', price:8}, {id:55, title:'Mango', price:15},
  {id:44, title:'Grape', price:10}, {id:6, title:'Peach', price: 14}
]


Q3.
Implement a function named "length" that takes one parameter and perform the
followings:

- If the parameter is an array, return its length (# of elements)
- If the parameter is a string, return its length (# of characters)
- If the parameter is a number that is neither NaN nor Infinity, return the
number of digits in its integer portion. (e.g., for -456.99, the integer
portion is -456, so return 3)
- Otherwise, return 0


Q4.
Implement a function that takes one parameter and returns true if the parameter
is an object containing the following three properties:
'foo', 'bar', and 'foo-bar'. Otherwise, the function returns false.

Please note that the value of the properties can be undefined.