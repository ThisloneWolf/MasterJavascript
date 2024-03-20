// Always declare function expression like this

var totalCount = function sum(num1, num2) {
  return num1 + num2;
};

console.log(totalCount(2, 5));

// Guess the output [ Trick !] [ Not sure how this is working !! ]
a = 10;
console.log(a);
// let a;

// Guess the output

a1 = 101;
console.log(a1);
var a1;
// let a1; Doing so will give Syntax Error i.e Indentifier 'a1' has already been declared

var player = "Virat";
function fun() {
  if (player === "VK") {
    var player = "VK";
    console.log(player);
    console.log("I am in If");
  }
  console.log(player);
}
fun();
