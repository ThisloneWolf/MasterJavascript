function dummyPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Timer's resolved");
    }, 10000); // change it to 0 and check output
  });
}

console.log("Start of the file");

setTimeout(function timer1() {
  console.log("Timer 1 done");
  let y = dummyPromise();
  y.then(function promiseY(value) {
    console.log("Whose promise ? ", value);
  });
}, 0);

let x = Promise.resolve();
x.then(function processPromise(value) {
  console.log("Whose promise 2 ?", value);
});

setTimeout(function timer2() {
  console.log("Timer 2 done"), 0;
});

console.log("End of the file");
