/**
 * Introduction to Js Part - 2 Continued
 * Bitwise Operators: &, | , ^, ~ , << , >>
 * Loops
 * Functions
 */

// Bitwise AND opertor, Converts it to Binary then perform AND and throws result
console.log(5 & 3); // 1

// Bitwise OR
console.log(5 | 4); // 5

// Left shitf << Take binary of 2 [first operand] i.e 0010 and shift 1 to it ---> 100
console.log(2 << 1); // 4

// Right shift >> Take binary of 5 [first operand] i.e 0101 and loose the last bit 1 i.e 0010
console.log(5 >> 1);

// More examples on bitwsise operator

console.log(5 & 3);
console.log(8 | 1);
console.log(3 ^ 3);
console.log(5 << 2);

// String concatenation

console.log("Karan" + "Negi"); // KaranNegi
console.log(1 + "1"); // "11 "

// loops

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// functions

function sum(a, b) {
  return a + b;
}
