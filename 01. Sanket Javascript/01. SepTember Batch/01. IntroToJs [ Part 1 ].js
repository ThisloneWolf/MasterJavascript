/**
 *  Introduction To Java Script
 *  Multipurpose and Multiparadim language
 *  Fundamentals of Programming - Types, Operators etc
 *  Variables - Bucket in a memory that stores values
 */

// Strings Can be defined with '', "" or ``
console.log("Hello world !, Welcome to the world of Javascript");
console.log("Master Js");
console.log(`You will be rich soon !`);

// Number
console.log(12);
console.log(12.43);
console.log(-43);

// Booleans
console.log(true);
console.log(false);

// undefined
console.log(undefined);

// null
console.log(null);

// objects
console.log({ name: "karan", sex: "M" });

// Symbol
console.log(Symbol("Panda"));

// In Js we have both 0 and -0
console.log(0, -0);

console.log(typeof 12);
console.log(typeof "Panda");
console.log(typeof -0);

// typeof returns the type of a value but note the return value is in STRING

console.log(typeof typeof 12);
console.log(typeof undefined);

// Corner Case : It will result in object !!
console.log(typeof null);

// Three ways for Initializing variables in Js
var name = "loneWolf";
let love = "Panda";
const isMarriage = false;

console.log(name, love, isMarriage);

// Arithmetic Operators
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2);
console.log(10 % 2);

// Assignment operator
let num = 16;
console.log(num);

// logical operators in Js

console.log(10 > 5 && 7 < 6);

// Short Circuit Concept
console.log(4 && 0);
console.log(4 || 0);
console.log(0 && 4);
console.log(0 || 4);
