function fun() {
  return new Promise(function f(resolve, reject) {
    setTimeout(function process() {
      console.log("resolved");
      resolve(123);
    }, 5000);
  });
}

let x = fun();
x.then(function exec(value) {
  console.log("Value is: ", value);
  return 100;
  // Below then will not chain up on x !!, it will create a new promise
}).then(function exec1(value) {
  console.log("Value here is ", value);
});

// If you want to chain up the promises then !

let y = fun();
y.then(function exec(value) {
  console.log("Value is : ", value);
});

y.then(function exec2() {
  console.log("New value is ", value);
  return 200;
});
