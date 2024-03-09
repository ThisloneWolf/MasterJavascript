/**
 * Coercion Fudamentals in Depth [One of the pillar of Js]
 * Js able to does it with the help of Abstract Operations [ Not available for end user] Ex: ToPrimitive
 * Other Example of Abstract Operationsa are: ToNumber, OrdinaryToPrimitive
 */

// Coercion happening here
console.log("2" - 1);
console.log(undefined + "10");
console.log("123" + null);
console.log(1 - "abc");

/**
 * NOTE: Here we are doing number - object
 * By Substraction Algorithum, both are converted to number using Abstract Operation i.e ToNumber()
 * When ToNumber({}, hint: number) is called on object, hint is passed as number by Js
 * i.e first vauleOf() function will be called on object if it returns primitive value do 10 - primtivr value
 * If it doesn't call toString() on object, if it still doesn't return primitive value, then throw error
 *
 * Here, 10 - ToNumber({name: 'karan}, hint: number) will come out as first 10 - {name: 'karan'} [ same object ]
 * As it is still not primitive, toString() will called i.e 10 - toString({name: 'karan'}) which will give "[Object Object]"
 * which is a string which is a primitive value
 * hence 10 - "[object object]"  will give NaN
 *
 * NOTE: valueOf() on an object returns same {} [empty object] whereas
 *      toString() on an object returns "[object object]"
 */

console.log(10 - { name: "karan" }); //NaN
