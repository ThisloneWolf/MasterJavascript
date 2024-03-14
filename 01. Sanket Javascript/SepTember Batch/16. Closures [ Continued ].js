/**
 * Callbacks Continued
 * Closures Continued
 */

function toDo(task) {
  console.log("Start of toDo");
  setTimeout(function fun() {
    console.log("Completed Task", { task });
  }, 1000);
  console.log("End of toDo");
}

console.log("Staring");
toDo("Assignments Completing....");
console.log("Ending");

// Example - 2 of Closure

function toDo1(task) {
  console.log("Start of toDo 1");
  setTimeout(function fun() {
    console.log("Completed Task 1", { task });
  }, 1000);
  task = "karanNegi";
  console.log("End of toDo 1");
}

console.log("Staring 1");
toDo1("Assignments Completing.... 1");
console.log("Ending 1");

// EXAMPLE - 3

function a(name) {
  return function b() {
    console.log({ name });
  };
}

let x = a("Negi");
console.log({ x });
x();

// EXAMPLE - 4

function abc(task1, task2) {
  task1 = "paras";
  setTimeout(function gun() {
    console.log("completed", task1);
  }, 2000);
  task1 = task2;
  task2 = "assign";
}

abc(12, 34);

// EXAMPLE - 5
function test() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function exec() {
      console.log(`i: ${i}`, "EXAMPLE - 5");
    }, i * 1000);
  }
}
test();
