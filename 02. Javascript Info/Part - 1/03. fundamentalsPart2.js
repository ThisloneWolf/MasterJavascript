/**
 * Javascript fundamentals Continued
 * Comparison Operator: All comparison operator returns a boolean value
 * Logical Operator: Converted to Boolean, But the return result always in original form
 */

console.log(5 > 1); // true
console.log(2 == 1); // false

// String comparison uses the lexographical order to check which one is greater
console.log("A" > "Z"); // false

// Comparison of different values, Js converts the value to numbers !

console.log("2" > 1); // true
console.log(true == 1); // true

// Strict equaltiy operator checks the equality without Type Conversion

console.log(0 === false); // false

// Sweet Couple [ Edge Case ]

console.log(undefined == NaN); // true

/**
 * Note here the comparison is between same types, Hence no type conversion
 * will happen !!
 */
console.log("2" > "12"); // true

// Logical Operators : Short Circuit Evaluation

console.log(5 && 10); // true
