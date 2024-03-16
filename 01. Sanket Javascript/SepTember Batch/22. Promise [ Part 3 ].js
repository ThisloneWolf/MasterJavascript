function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Going to start the download");
    setTimeout(function process() {
      let data = "Dummy download data";
      console.log("download complete");
      resolve(data);
    }, 4000);
    console.log("Timer to mimic download started");
  });
}

console.log("Starting the program");
console.log("We are expecting to mimic a downloader");
x = fetchData("www.google.com");
console.log(
  "New promise object created successfully, but downloading still going on"
);
