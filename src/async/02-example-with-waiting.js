const { hello, world } = require("./common/helloWorld");

console.info("# example with waiting:");
async function exampleWithWaiting() {
  await hello();
  world();
}

exampleWithWaiting();
// results:
// Hello
// World
