const { sleep } = require("./sleep");

// example hello function
async function hello(callback = null) {
  await sleep(100);
  console.info("Hello");

  if (typeof callback === "function") {
    callback();
  }
}

// world function
function world() {
  console.info("World");
}

module.exports = {
  hello,
  world,
};
