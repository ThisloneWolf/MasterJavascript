/**
 * SCOPES in Javascript
 * Three Scopes - Global, Functional and Block Scope
 * let vs var vs const
 */

// Global scope understanding [ Acessible everywhere in the file ]

var name = "Karan";
function greet() {
  console.log("greetings", name);

  function test() {
    // Not present globally i.e test fucntion !
    console.log("test");
  }
}

function fun() {
  console.log("Have fun baby !", name);
}

greet();
fun();

// Functional Scope Understanding [ Accessible only inside functions ]

function sum() {
  var num = 1; // Accessible here only, outside it will give error !
  console.log(num, "Functional Scope");
}
sum();

// Block Scope Understanding

{
  var firstName = "loneWolf"; // NOTE: This will be accessible outside the block too !
  let sirName = "Radha"; // This will be accessible only inside this block, since created by let
  console.log({ firstName });
}

console.log(firstName); // Accessible outside, since it was created with var !

// Var doesn't care about block scope !

{
  console.log({ x });
  var x = 10; // this will become global due to var
  console.log(x);
}

console.log({ x });

{
  if (true) {
    var z = false;
  }
}

console.log({ z });

// Let understanding

{
  let number1 = 99;
  console.log({ number1 }); // only accessible here
}
