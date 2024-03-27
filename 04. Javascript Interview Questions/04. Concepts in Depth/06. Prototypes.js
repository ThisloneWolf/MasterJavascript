/**
 * ProtoTypes in Javascript via Frontend Master - Rahul Mishra [ YouTube ]
 * Problems why we needed them in first place
 * __proto__ vs
 * [[Prototype]] vs
 * prototype vs
 * Constructor
 */

// Example : 1 - Below Method is called FACTORY FUNCTION !

function createStudents(name, marks) {
  const obj = {};
  obj.name = name;
  obj.marks = marks;
  obj.increment = function () {
    obj.marks++;
  };
  return obj;
}

// Example - 2 //  Here the obj will become [[Prototye]] of newObj
let obj = { name: "Karan" };
let newObj = Object.create(obj);
console.log(Object.getPrototypeOf(newObj) === obj);

// Alternatively You can do is

let newObj2 = {};
newObj2.__proto__ = obj;

// hasOwnProperty(key)

let student = {
  name: "karan",
};

console.log(student.hasOwnProperty("name"));

// Example - 5
// In Js function act as objects also

function getName() {}

getName.age = 10;
console.log(getName.age);

// Example - 6
const person = {
  age: 90,
};

const animal = {};

animal.__proto__ = person;
console.log(animal.age);

// or you can do Object.setPrototypeOf(animal, person)
