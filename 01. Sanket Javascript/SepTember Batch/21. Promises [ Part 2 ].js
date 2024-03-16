/**
 * Promises Continued
 */

function fetch(url) {
  return new Promise(function (resolve, reject) {
    console.log("Starting fetching from ", url);
    setTimeout(function process() {
      let data = "Dummy data";
      console.log("Completed fetching the data");
      // somehow we need to return the data now !
      resolve(data); // return the data on success
    }, 4000);
  });
}

const isCalled = fetch("www.google.com");
