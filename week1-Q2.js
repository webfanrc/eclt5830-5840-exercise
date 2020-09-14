/*

Q2.
Write a segment of JS code to make a DEEP copy of array "fruits" and sort the elements in
the cloned array by "id" in ascending order.

const fruits = [
  {id:43, title:'Apple', price:12}, {id:21, title:'Banana', price:5},
  {id:13, title:'Orange', price:8}, {id:55, title:'Mango', price:15},
  {id:44, title:'Grape', price:10}, {id:6, title:'Peach', price: 14}
]

 */

function Deep(arr) {
  let outcome = [];

  arr.sort(function(x,y) {
    return x.id - y.id;
  });



  return arr;
}

const fruits = [
  {id:43, title:'Apple', price:12}, {id:21, title:'Banana', price:5},
  {id:13, title:'Orange', price:8}, {id:55, title:'Mango', price:15},
  {id:44, title:'Grape', price:10}, {id:6, title:'Peach', price: 14}
];

console.log(
  Deep(fruits)
);

