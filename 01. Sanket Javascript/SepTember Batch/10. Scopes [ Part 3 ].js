/**
 * SCOPES III
 */

// Auto Globals

var teacher = "Sanket";
function fun() {
  var teacher = "Pulkit";
  teachingAssistant = "Vaibhav"; // Eligible for autoGlobals
  console.log({ teacher, teachingAssistant }, "Functional Scope");
}
console.log({ teacher }, "Global Scope");
fun();

function gun() {
  console.log({ subject }, "Functional Scope");
  var subject = "Js";
  console.log({ teacher }, "Functional Scope");
}

console.log({ teacher }, "Global Scope");
gun();

// Ex - AutoGlobals being overrided

function fun2() {
  teaching = "karan";
  console.log({ teaching }, "Functional Scope");
  var teaching = "Negi";
}
fun2();
// console.log({ teaching }, "Global Scope"); will give Error Since, AutoGlobals were not created in above fun2

var number = 10;
function scope() {
  console.log("Hello world !");
}

scope();
// number(); Will result in TypeError
