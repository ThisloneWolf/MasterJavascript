/**
 * Await doesn't wait for promise to be resolved, but it will move ahead won't stop Js exectuion !
 */

function fetchData() {
  console.log("negi");
}

function uploadData() {
  console.log("baby");
}

async function processing() {
  let download = await fetchData();
  let upload = await uploadData();
}

console.log("Start");
processing();
console.log("end");
