const String = 'ECIT';


// input: String
// function: reverse
// e.g.: 01010011=>11001010
function f(number) {
  let string_2 = parseInt(number).toString(2);
  let l = string_2.length;

  if (l < 8) {
    for (let i = 0; i < 8 - l; i++) {
      string_2 = "0" + string_2;
    }
  }

  return string_2.split("").reverse().join("");
}


let m1 = String[0].charCodeAt();
let m2 = String[1].charCodeAt();
let m3 = String[2].charCodeAt();
let m4 = String[3].charCodeAt();

let c1 = parseInt(f(m1),2);
let c2 = parseInt(f(c1^m2), 2);
let c3 = parseInt(f(c2^m3), 2);
let c4 = f(c3^m4);



console.log(c4);