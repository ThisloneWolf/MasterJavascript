// Custom Map Functions Implemented

function mapper(arr, fn) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    let res = fn(arr[i]);
    result.push(res);
  }
  return result;
}

const arr = [1, 2, 3, 4, 5];
const answer = mapper(arr, function cuber(number, index) {
  console.log(number, number * number * number);
  return number * number * number;
});

console.log(answer);
