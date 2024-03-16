function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Started downloading from", url);
    setTimeout(function processDownloading() {
      let data = "Dummy data";
      console.log("Download Complete");
      resolve(data);
    }, 7000);
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

let downloadPromise = fetchData("www.google.com");
downloadPromise
  .then(function processDownload(value) {
    console.log("downloding done with following value", value);
    return value;
  })
  .then(function processWrite(value) {
    return writeFile(value);
  })
  .then(function processUpload(value) {
    return uploadData(value, "www.google.com");
  });
