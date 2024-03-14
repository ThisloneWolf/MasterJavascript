/**
 * Fundamentals of Closures [ Last part of SCOPES ]
 * Intro To Callbacks
 * setTimeout and setInterval functions
 * clearTimeout
 */

function fun(x, fn) {
  console.log(arguments.length, typeof arguments, "Arguments Info");
  for (let i = 0; i < x; i++) {
    console.log(i);
  }

  fn(); // calling the callback function passed
}

fun(10, function log() {
  // this is the callback function
  console.log("Custom Logger");
});

// Another inbuild example of closure
const result = [1, 2, 3, 4].map((num) => console.log(num));
console.log(typeof result);

// setTimeout (taskCallback, timeinMillseconds)

const timerId = setTimeout(function execute() {
  console.log("Task completed");
}, 5000);

console.log({ timerId });

clearTimeout(timerId);
