/**
 * Promise Fundamentals
 * NOTE: console.log [ Synchronous in Browser runtime Enviornment, Asynchronous in node run time Enviornment [ Debatable ] ]
 */

/**
 * Tasks:
 * 1. Write a function to download data from a url
 * 2. Write a function to save that downloaded data in a file and return the filename
 * 3. Write a function to update the file written in previous step to a new url
 */

function fetchCustom(url, fn) {
  /**
   * Download the content of the url
   * This downloading can take some time
   * we will download the content from url, and then whatever is the result
   * we will pass to the callback
   */
  console.log("Starting downloading from the url", url);
  setTimeout(function process() {
    console.log("Download completed");
    let response = "Dummy data";
    fn(response);
    console.log("Ending the function...");
  }, 3000);
}

function writeFile(data, fn) {
  // this function writes data to a new file
  console.log("Started writing data...", data);
  setTimeout(function process() {
    console.log("Writing completed");
    let fileName = "output.txt";
    fn(fileName);
    console.log("Writing ended");
  }, 4000);
}

function uploadFile(filename, newurl, fn) {
  console.log("Upload Started");
  setTimeout(function process() {
    console.log("File", filename, "uploaded successfully on", newurl);
    let uploadResponse = "SUCCESS";
    fn(uploadResponse);
    console.log("Upload Ended");
  }, 2000);
}

fetchCustom("www.google.com", function downloadCallback(response) {
  console.log("Response : ===>", response);
  writeFile(response, function writeCallback(filenameResponse) {
    console.log("new file written is ", filenameResponse);
    uploadFile(
      filenameResponse,
      "www.yahoo.com",
      function uploadCallback(uploadResponse) {
        console.log("Successfully uploaded", uploadResponse);
      }
    );
  });
});
