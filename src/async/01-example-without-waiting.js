const { hello, world } = require("./common/helloWorld");

console.info("# example without waiting:");
function exampleWithoutWaiting() {
  hello();
  world();
}

exampleWithoutWaiting();
// results:
// World
// Hello
