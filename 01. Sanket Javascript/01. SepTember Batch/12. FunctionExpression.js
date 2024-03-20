/**
 * Function Expression and Funtion Declaration
 * Anonymous Function
 * Named Functions
 */

abc();

function abc() {
  console.log("Abc function being called");
}

// def();  Calling the function will give error, since its a funtion expressio
var def = function () {
  console.log("Def function being called");
};

function fun() {
  console.log("fun being called");
  // For tracing function call
  console.trace();
}

function gun(fn) {
  console.log("inside gun");
  fn();
  console.log("leaving gun");
}

gun(fun);

function name(item, index, arr) {
  console.log(item, index, arr);
}

[1, 2, 3].forEach(name);

// Function Expression Scope

var scope = function sum() {
  console.log("sum");
};

scope();
