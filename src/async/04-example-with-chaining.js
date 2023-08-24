const { hello, world } = require("./common/helloWorld");

console.info("# example with chaining:");
function exampleWithChaining() {
  hello().then(() => world());
}

exampleWithChaining();
// returns:
// Hello
// World
