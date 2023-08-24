// how to convert callback function to promise producing a result
function sleep(durationInMilliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, durationInMilliseconds);
  });
}

// ---------------------------------------
// how to convert callback function to promise producing an error
function sleepWithError(durationInMilliseconds) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Call failed");
    }, durationInMilliseconds);
  });
}

module.exports = {
  sleep,
  sleepWithError,
};
