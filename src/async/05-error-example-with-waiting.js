const { sleepWithError } = require("./common/sleep");

async function errorExampleWithWaiting() {
  try {
    await sleepWithError(100);
  } catch (err) {
    console.error("Error received", err);
  }
}

errorExampleWithWaiting();
