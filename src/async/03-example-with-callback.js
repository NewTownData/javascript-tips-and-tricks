const { hello, world } = require("./common/helloWorld");

console.info("# example with callback:");
function exampleWithCallback() {
  hello(() => {
    world();
  });
}

exampleWithCallback();
// results:
// Hello
// World
