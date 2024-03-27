/**
 * Js Object has a hidden property named [[Prototype]]
 * This hidden property stores either null or reference to another object.
 * That reference object is called prototype
 */

// Example - 1
const obj = {
  name: "karan",
  age: 29,
};
console.log(obj.hasOwnProperty("constructor"));
console.log(obj.constructor);
console.log(obj.__proto__);

// Example - 2
let animal = { eats: true };
let rabbit = { jumps: true };
rabbit.__proto__ = animal; // setting, rabbit.[[Prototype]] = animal
console.log(rabbit.eats);

// Example - 3
let getName = { name: "panda" };
let sirName = { sirName: "sagar" };
Object.setPrototypeOf(sirName, getName);
console.log(sirName.name);
console.log(Object.getPrototypeOf(sirName));

// Example - 4 [For in Loop iterates over inherited properties too]

const obj1 = {
  name: "karan",
  sex: "Male",
  krishna: "friend",
};

const obj2 = {
  mother: "love",
  __proto__: obj1,
};

for (let props in obj2) {
  console.log(props);
  console.log(obj2[props]);
}

console.log("----------------");
console.log(Object.keys(obj2));
console.log(Object.values(obj2));
console.log("----------------");
console.log(Object.keys(obj1));
console.log(Object.values(obj1));

// object.hasOwnProperty(key)

for (let key in obj2) {
  if (obj2.hasOwnProperty(key)) {
    console.log(key, ": Own Key");
  } else {
    console.log(key, ": Inherited Key");
  }
}

// Example Question - 5

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;
