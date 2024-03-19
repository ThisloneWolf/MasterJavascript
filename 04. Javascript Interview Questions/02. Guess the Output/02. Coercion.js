/**
 * Boolean Values comes as a result of Comparison
 * Opertors are converted to number, if types are same
 * MYTH: In Javascript everything is OBJECT !
 **/

console.log(4 > 1); // true

/**
 * Arithmetic Operations
 * undefined becomes ------> NaN  [ CORNER CASE ]
 **/

console.log("4" / "2"); // 2
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(NaN)); // NaN
console.log("5" - 1); // 4

// Dealing with Arrays in Arithmetic operations in Substraction

console.log([null] - 91); // [null]  ---> 0   --> 0 - 91 --> -91
console.log([undefined] - 1); // [undefined] ---> 0  --> 0 - 1 --> -1
console.log([""] - 2); // [""] ---> 0  // 0 - 2 --> -2
console.log([1, 2, 3] - 4); // [1,2,3] --> NaN   --> NaN - 4 --> NaN
console.log([[]] - 9); // [[]] ---> 0  --> 0 - 9 --> -9

// Dealing with Arrays in Arithmetic operations in Addition
console.log([] + 123); // [] --> '' --> '' + 123 --> '123'
console.log([1, 2, 3] + 12); // [1,2,3] --> '1,2,3' --> '1,2,3' + 12 --> '1,2,312'
console.log([null, undefined] + 12); // [null, undefined] --> ','  --->  ',' + 12 --> ',12'
console.log([[], [], []] + 12); // [[], [], []] ---> ',,'  --> ',,' + 12 --> ',,12'
console.log([, , ,] + 123); // [,,,] --> ',,' ---> ',,' + 123 --> ',,123'

/**
 * String Concatenation: If any of the operand is string it will give a string
 */

console.log("my" + "Js"); // myJs
console.log(1 + 2 + "4" + 1); // '341'

// Assignment always returns a value !
console.log((num = 10));

/**
 * COMPARISON OPERATOR: When comparing value of "different types", JS converts the values to number first !
 * If types are same, JS won't be doing COERCION
 */

console.log("4" > 1); // true
console.log("2" > "12"); // true

/**
 * SWEET COUPLE: undefined and null are sweet couple, They are equal to each other but not any other value !!
 * [ CORNER CASE !]
 */

console.log(undefined == null); // true
console.log(undefined == undefined); // true
console.log(null == null); // true
console.log(undefined >= null); // false

/**
 * Null Coalescing Operator
 * let result = a ?? b
 * The value a is defined when it is neither null or undefined
 * The result of a ?? b will be --
 * If a is defined then a
 * If a is not defined then b
 *
 * Simply means : result = (a != null && a != undefined ? a : b)
 */

let a = undefined || null;
console.log(a ?? 12);

/**
 * Arithmetic Operations on Objects [ ADVANCE TOPIC ]
 * HINT : PASSED IS NUMBER in both case i.e - or +
 */

console.log("hello" + {}); // 'hello[object Object]'
console.log("10" + { subject: "Js", valueOf: () => 5, toString: () => 2 }); // '105
console.log(10 - { subject: "Javascript" }); // NaN'
console.log(10 + { subject: "JS" }); // '10[object Object]'
console.log(10 - { name: "Ram", valueOf: () => 12, toString: () => 1 }); // -2
console.log(10 + { name: "Ram", valueOf: () => 1, toString: () => 3 }); // 11
console.log(
  10 -
    {
      name: "Js",
      valueOf: () => {
        return {};
      },
      toString: () => 10,
    }
); // 0

console.log(
  10 -
    {
      subject: "Js",
      valueOf: () => {
        return {};
      },
      toString: () => {
        return {};
      },
    }
); // TypeError: Can't convert object to primitive value

console.log([1, 2, 3].toString()); // '1,2,3
