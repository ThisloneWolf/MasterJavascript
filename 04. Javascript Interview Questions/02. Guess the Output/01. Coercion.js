/**
 * Coercion Guess the output questions
 * typoof operation
 * Modal functions: alert, prompt, confirm
 * "use strict"
 * Js is dynamically types: Meaning There exist a dataType but variables values are not bond to them.
 * JS number range = 2^53 - 1
 */

console.log(typeof typeof 12); // string

// CORNER CASE: object
console.log(typeof null);

/**
 * For Logical Operatos ( && !! !), the operands are converted to Boolean values then Actual/Original values are returned
 * CONCEPT: SHORT-CIRCUIT
 * */

console.log(5 && 10 && 6); // 6

console.log(7 || 8); // 7

console.log(5 && 0 && 12); // 0

console.log(10 && console.log(12)); // 12 then print undefined since function returns a value

/**
 * Alert returns undefined
 */

console.log(alert("Welcome To Js !")); // undefined
console.log(console.log("123")); // '123' then will print undefined

/**
 * use strict makes the script behave modern way
 */

function fun() {
  "use strict";
  console.log(a); // Reference Error
  var a = 10;
}
fun();

/**
 * NaN : is Sticky Operation
 * Any operation on NaN returns NaN
 * NaN doesn't equal any value, even to itself it returns false !!
 */

console.log(NaN + 1); // NaN
console.log(NaN * 3); // NaN
console.log(NaN ** 0); // 1
console.log(NaN === NaN); // false [ CORNER CASE !] : Not equal to any value, even to itself also both in strict or abstract mode !
console.log(NaN == NaN); // false
console.log(Infinity * 0); // NaN [ CORNER CASE ]
console.log(Infinity / 0); // Infinity
