/**
 * Doubt Class on Coercion
 * Abstact Operations: ToNumber, ToString, ToBoolean, ToPrimitive
 */

// ToNumber Abstract Operation happening internally by Javascript

console.log(12 - 4); // 8
console.log(undefined - 3); // NaN
console.log(null - 1); // -1

console.log("123" - 10); // 122
console.log("12fb" - 1); // NaN
console.log("0xf" - 1); // [ Hexadecimal value ] - 1 ---> 14
console.log([1, 2, 3] - 1);

console.log(typeof [], "[ Type of array ]");

// ToString Abstract Operations on Addition
console.log("karan" + "Negi");
console.log(undefined + "node");
console.log(5 + "null");
console.log("panda" + true);
console.log([1, 2, 3] + 1);
console.log([] + "karan");
console.log([null] + 1);
console.log([null] + "negi");
console.log([, , ,] + "panda");

// ToPrimitive Abstract Operation in Action

let obj = { english: 90, maths: 100 };
console.log(obj.toString());
console.log(obj.valueOf());

const arr = [1, 2, 3];
console.log(arr.toString());
console.log(arr.valueOf());

console.log("karan" + { name: "karan" });
