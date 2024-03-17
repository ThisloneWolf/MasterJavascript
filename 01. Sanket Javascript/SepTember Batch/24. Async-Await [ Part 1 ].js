/**
 * Promise Continud
 * Async Await Concept
 */

// Immedaiate Resolve promise via Promise.resolve()
const promise = Promise.resolve(123);

// Example - 1
console.log("Start of the file");
setTimeout(function timer1() {
  console.log("Timer 1 done");
}, 0);

for (let i = 0; i < 10000000; i++) {
  // something big task
}

let x = Promise.resolve("Karan's promise");
x.then(function processPromise(value) {
  console.log("Whose promise ? ", value);
});

setTimeout(function timer2() {
  console.log("Timer 2 done");
});

console.log("End of a file");
