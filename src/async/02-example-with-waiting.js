const { hello, world } = require("./common/helloWorld");

console.info("# example with waiting:");
async function exampleWithWaiting() {
  await hello();
  world();
}

exampleWithWaiting();
// returns:
// Hello
// World
