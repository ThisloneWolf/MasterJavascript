/**
 * Async Nature in Js   [ Callstack, EventQueue, EventLoop ]
 * Js is single threaded
 * JS is Synchronous in nature
 */

function process() {
  console.log("Starting..");
  setTimeout(function exec() {
    console.log("Executed some task");
  }, 2000);
}

process();
setTimeout(() => console.log("Timer"));

// EXAMPL - 2

function abc() {
  console.log("Abc called");
  setTimeout(function exec() {
    console.log("Inside the setTimeout 1");
  }, 7000);
  setTimeout(function process() {
    console.log("Inside the setTimeour 2");
  }, 2000);
}

abc();

for (let i = 0; i < 100000000000; i++) {
  // Yo baby
}

setTimeout(function last() {
  console.log("Last setTimeout 3");
});
