/**
 *  Js Fundamentals
 *  prompt and confirm browser mini modal
 *  Type Conversion !
 */

let age = prompt("How old are you ?", 100);
console.log(age);

let result = comfirm("Do you think you will become Rich ?");
console.log(result);

// A simple page

let userName = prompt("What's your name ?", "loneWolf");
console.log(userName);
alert(userName);

// Type Conversions

console.log(Number("  786 ")); // 786
console.log(Number("123a")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// EDGE CASES TO REMEBER

console.log(Number(undefined)); // NaN
console.log(Number(NaN)); // NaN
console.log(Number(null)); // 0

// String Concatenation

console.log("my" + "string"); // "mystring"
console.log("1" + 2); // "12"
console.log(2 + "1"); // "21"
console.log(4 + 1 + "3" + "2"); // "532"

// Assignment = returns a value

let num1 = 1;
let num2 = 2;

let num3 = 3 - (num1 = num2 + 1);
console.log(num3); // 0

// Comma Operator : Only the last value is always evaulated and returned

const value = (1 + 5, 8 + 1);
console.log(value); // 9

// Advance Type Conversion

console.log("" + 1 + 0); // "10"
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / "3"); //2
console.log(4 + 5 + "px"); // "45px"
console.log(" 9 " + 5); // " 9 5"
console.log(undefined + 1); // NaN
