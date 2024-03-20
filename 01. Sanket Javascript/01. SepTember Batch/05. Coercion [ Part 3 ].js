/**
 * Coercion PART - III
 * Topics - NaN and Special Types, NaN doesn't equal anything !!!
 * Doubt Class
 * Boxing
 */

// RULE: Comparison Operator give result as boolean values and convert operands to numbers !

console.log(null === undefined); // true [ Special case or we say them as Sweet Couple ]
console.log(10 == "10"); // ToNumber('10') ---> 10 ---> true
console.log("99" == 99); // ToNumber('99') ---> 99 ---> true

let a = 5;
if (a) console.log("Worked !");

if (a === true) console.log("Didn't work");

/**
 * NaN - not a number [ special type ]
 * You want to return invalid number - NaN is your goto
 * NaN doesn't equal to anything
 */

console.log(typeof NaN);
console.log(NaN == NaN); // false

/**
 * How to check if a number is NaN
 */

function toCheckNaN(num) {
  return typeof num === "number" && !num === true && num !== 0
    ? "NaN"
    : typeof num;
}

let x = toCheckNaN(10 - "leenu");
console.log("The given number is ", x);

const d = 10 - "karan";
console.log(typeof d === "number" && isNaN(d));

// isNaN - Anything which is not coerciable to [ Not a valid approach ]

console.log(isNaN("12"));
console.log(isNaN("karan"));
console.log(isNaN("karan" - 1));

// Much better way to test it Number.isNaN() which checks for NaN - This is will not do any coercion
console.log(Number.isNaN("10" - "karan"));

/**
 * Boxing in Js
 */

// Auto Boxing
console.log((9).toString());

// Manual Boxing
let x1 = "9";
console.log(Number(x1).toString());
