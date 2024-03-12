/**
 * Functions in Js
 * Function Declaration
 * Function Expression
 * CallBack Functions
 * Arrow Functions
 */

// If an argument is not provided then, it's value becomes undefined
function showMessage(from, text = "Hare Krishna !") {
  let message = "You will be cured in next 3 months !";
  console.log({ message });
  console.log({ from, text });
  //   here showMessage doesn't return anything hence, it will return undefined default
}
showMessage("Karan", undefined);

// A funtion by default returns undefined

console.log(showMessage() === undefined);

// Function Expression

let sayHi = function () {
  console.log("Hello World !");
};

sayHi();

let copyFunc = sayHi;

console.log(sayHi === copyFunc);
copyFunc();

// Callback Functions

if (true) {
  let sayHello = function () {
    console.log("Im function Expression");
  };
  sayHello();
}

// Arrow Functions
const ask = (question, yes, no) => (console.log(question) ? yes() : no());
ask(
  "Are you ready ?",
  () => console.log("Yes"),
  () => console.log("No")
);

function customMess(...arg) {
  console.log(arg, "Arguments");
  console.log(arg[0]);
  console.log(arg[1]);
  console.log(arg[2]);
}

const arr = [1, 2, 3];
arr.forEach(console.log);
arr.forEach((item, idx, arr) => console.log(item));
arr.forEach(customMess);
