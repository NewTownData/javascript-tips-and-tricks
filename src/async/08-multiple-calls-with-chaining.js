const { sleepWithError } = require("./common/sleep");
const { hello } = require("./common/helloWorld");

hello()
  .then(() => hello())
  .then(() => hello())
  .then(() => sleepWithError())
  .catch((err) => console.error("Error received", err));
// results:
// hello
// hello
// hello
// Error received: Call failed
