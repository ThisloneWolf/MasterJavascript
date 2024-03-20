/**
 * How can you check a number is NaN
 */

// First Way
function checkForNaN(num) {
  return typeof num === "number" && isNaN(num) ? true : false;
}

console.log(checkForNaN("abc" - 1));

//Second Way
console.log(Number.isNaN("ABC" - 1));

// Third Way
function _checkForNaN(num) {
  return typeof num === "number" && !num === true && num !== 0 ? true : false;
}
/**
 * Basic question on Function Declarations
 */

function sum(a, b) {
  // By default a and b will be give undefined value if not passed any argument
  return a + b;
}

console.log(sum()); // NaN

[1, 2, 3].forEach(console.log);

// Questons - 1
const num = () => console.log(typeof arguments); // undefined, arrow function doesn't have arguments

// Normal function declaration have arguments object inbuilt
function f() {
  console.log(typeof arguments); // object
}
