// Await will resolve the promise
// If await 123, it will make 123 as resolved promise value

async function fun() {
  console.log("entered");
  let x = await console.log("panda");
  console.log("existing");
  return x;
}

console.log("Start");
let val = fun();
val.then(function f(value) {
  console.log("Value is: ", value);
});

console.log("End");
