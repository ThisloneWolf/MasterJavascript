/**
 * Namaste Javascript Lecture of this keyword
 * this substitution
 * non strict mode - this will be globalObject in functional scope
 * strict - mode : this will be undefined in functional scop
 */

const obj = {
  name: "Madhab",
  x: (function abc() {
    // console.log(this); // will give globalObject
  })(),
};

const object = {
  a: 100,
  x: function () {
    // arrow function doesn't have this, it will enclose it's lexical enviornment
    const num = () => console.log(this);
    num();
  },
};

object.x();
