const { sleepWithError } = require("./common/sleep");
const { hello } = require("./common/helloWorld");

async function multipleCalls() {
  try {
    await hello();
    await hello();
    await hello();
    await sleepWithError();
  } catch (err) {
    console.error("Error received", err);
  }
}

multipleCalls();
// results:
// hello
// hello
// hello
// Error received: Call failed
