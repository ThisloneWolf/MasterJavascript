/***
 * Coercion Part II
 * ToBoolean
 * Abstract and Strict Equality Operators
 */

console.log({} + "hello");
console.log("hello" + {}); // "hello[object Object]"

/**
 * ToBoolean(0) ---> true
 * Hence !0 ---> false
 */

console.log(!0);
console.log(!{});

// == and ===

console.log(NaN === 3);
console.log(NaN === NaN); // False [Edge case]
console.log(0 === -0); // true
console.log(undefined === undefined); // true
console.log(null === null); // true
console.log("karan" === "karan"); // true
console.log({} === {}); // false
