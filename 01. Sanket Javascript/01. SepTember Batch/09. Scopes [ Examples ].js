/**
 * Lexical Scoping with Auto globals
 */

var teacher = "Sanket";
function fun() {
  /**
   * undefined will be printed, since during parsing phase subject was allocated to functional scope,
   * Hence in phase 2 i.e execution we have a scope of it,
   * but value was not assigned hence undefined
   */

  console.log({ subject });
  var teacher = "Pulkit";
  var subject = "Javascript";
  teachingAssistant = "Vaibhav"; // Auto globals phenomena happens here [ This happens during execution phase !! ]
  console.log({ teacher }, "Functional Scope");
  console.log({ teachingAssistant });
}

console.log({ teacher }, "Global Scope I");
fun();

console.log({ teacher }, "Global Scope");
console.log({ teachingAssistant });
