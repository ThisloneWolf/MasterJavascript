/**
 * This in a Constructor Invocation
 * "this" is the newly crated object in a constructor invocation
 */

function Foo() {
  // this here is the fooInstance
  this.property = "Default value";
  console.log(this);
}

// Constructor Invocation: At the time new Foo () is executed, Js creates an empty object and make it
// the context of the constructor () method. Now you can add properties to object using this keyword.
const fooInstance = new Foo();
console.log(fooInstance.property);
console.log(fooInstance instanceof Foo);
console.log(fooInstance);

// When you invoke a function without new, this will point to window object !!!
function Vehicle(type, wheelsCount) {
  (this.type = type), (this.wheelsCount = wheelsCount);
  //   console.log(this, "Vechicle"); will point to window NOT car !!!
  return this;
}

// Function invocation Not Contructor Invocation as not called with new keyword
const car = Vehicle("Car", 4);
console.log(car.type, car.wheelsCount);
console.log(this.type, this.carWheelsCount);

/**
 * Indirect Invocation - .call() and .apply()
 * this is the first argument of .call() and .apply() in an indirect invocation
 */

function Runner(name) {
  console.log(this instanceof Rabbit);
  this.name = name;
}

function Rabbit(name, countLegs) {
  console.log(this instanceof Rabbit);
  Runner.call(this, name);
  this.countLegs = countLegs;
}

const myRabbit = new Rabbit("White Rabbit", 4);
console.log(myRabbit);

/**
 * Bound Functon Invocation: .bind(thisArg, arg1, arg2 ....)
 * this is the first argument of myFunc.bind(thisArg) when invoking a bound function
 * NOTE: .bind() makes a permanent context link and will always keep it.
 * A bound function can't change its linked context when using .call() or .apply() with a different context
 * or even a rebound doesn't have any effect.
 * Only the constructor invocation of a bound function can change an already bound context.
 */

function getName() {
  "use strict";
  return this;
}

const userName = getName.bind("Krishna");
console.log(userName());
console.log(userName.call("Radha"));
console.log(userName.apply("Madhav"));
console.log(new getName("Arjum"));
