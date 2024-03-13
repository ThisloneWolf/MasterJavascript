/**
 * SCOPES Continued
 * Lexical Scoping
 * Auto Globals Concept
 */

console.log(sum);

function sum() {
  return "loneWolf";
}

var sum = "panda";

/**
 * Lexical Scoping Concept
 * Phase I - Parsing
 * Phase II - Executing
 * Auto Globals
 */

var teacher = "Sanket";
function fun() {
  var teacher = "Pulkit";
  teachingAssistant = "Vaibhav"; // Auto globals phenomena happens here [ This happens during execution phase !! ]
  console.log({ teacher }, "Functional Scope");
  console.log({ teachingAssistant });
}

console.log({ teacher }, "Global Scope I");
// console.log({ teachingAssistant });   It will give error since auto global creaton happnes only at executon !
fun();

console.log({ teacher }, "Global Scope");
console.log({ teachingAssistant });
