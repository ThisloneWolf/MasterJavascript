// Closures Understanding Intresting Case ?

function test() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function exec() {
      let count = i;
      console.log(`i: ${count}`);
    }, i * 1000);
  }
}
test();

// EXAMPLE - 2

const add = (function () {
  // doesn't matter here it is let or var since, var has functional scope as well
  var counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();
add();
add();
const answer = add();
console.log({ answer });
// console.log({ counter }); // This will give ReferenceError
