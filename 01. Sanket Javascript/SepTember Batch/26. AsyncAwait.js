/**
 * Async await fundamentals
 */

function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Going to start the download");
    setTimeout(function process() {
      let data = "Dummy download data";
      console.log("download complete");
      resolve(data);
    }, 4000);
    resolve(123);
    console.log("Timer to mimic download started");
  });
}

function writeFile(data) {
  return new Promise(function (resolve, reject) {
    console.log("Started writing ", data, " in a file");
    setTimeout(function processWriting() {
      let filename = "result.txt";
      console.log("File written successfully");
      resolve(filename);
    }, 3000);
  });
}

function uploadData(file, url) {
  return new Promise(function (resolve, reject) {
    console.log("Upload started on url", url, "filename is", file);
    setTimeout(function processUpload() {
      console.log("Uploading done");
      let result = "Success";
      resolve(result);
    }, 5000);
  });
}

async function processing() {
  let downloadedData = await fetchData("www.google.com");
  console.log("Downloading await completed");
  let file = await writeFile(downloadedData);
  console.log("Writing await completed");
  let uploadResponse = await uploadData(file, "www.google.com");
  console.log("Uploading await completed");
  console.log("Completed process with response: ", uploadResponse);
  return true;
}

processing();
console.log("WELCOME BABY");
