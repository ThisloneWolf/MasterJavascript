/**
 * Hositing: It's a direct consequence of Lexical Scoping
 */

gun();
function gun() {
  console.log("Welcome To Hositing !");
}

// Hoisting
console.log({ userName });
var userName = "karanNegi";

// autoGlobals

function fun() {
  teachingAssistant = "Negi";
  console.log({ teachingAssistant }, "Auto Global Exist here");
}
fun();
console.log({ teachingAssistant });

// Tricky Js [ Just follow How Parsing happens, you will be able to solve it ! ]

function fun1() {
  var student;
}

function run() {
  console.log({ student }, "Functional Scope of run");
}

student = 10;

function gun2() {
  console.log({ student }, "Functional Scope of gun");
  student = 100;
}

gun2();
run();

// Example: It will work, global scope is happening here !!

gun3();

function gun3() {
  console.log("Hi");
}

function gun3() {
  console.log("Hello");
}

// Example of autoGlobals

var sirName = "Negi";
function sir() {
  sirName = "Sagar";
  console.log({ sirName });
}

sir();
console.log({ sirName });

// Intresting Case Understanding

var x1 = 10;
console.log(x1);

var x1 = 100;
console.log(x1);

// IIFE - Immediately Invoked Function Expression
(function invoke() {
  console.log("Hello");
})();

// Example
var name = function () {
  console.log("Being called");
};
name();
