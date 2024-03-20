// Biggest Disadvantage of using Callback is : Inversion of control

// Consider it as a utility function made for use
function fun(inputString, fn) {
  // it executes some algorithum on the strings.
  let output = inputString.split(","); // output is an array

  for (let i = 0; i < output.length; i++) {
    fn(output[i]);
    fn(output[i]);
  }
}

// After some time we are using it

fun("name:karan, subject:javaScript", function process(input) {
  let arr = input.split(":");
  console.log("{", arr[0], "==>", arr[1], "}");
});
