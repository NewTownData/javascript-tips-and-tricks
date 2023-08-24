const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const asyncDir = path.join(__dirname, "async");

const asyncDirList = fs.readdirSync(asyncDir, {
  withFileTypes: true,
  encoding: "utf-8",
});

asyncDirList
  .filter((item) => item.isFile())
  .map((item) => path.join(asyncDir, item.name))
  .forEach((exampleScript) => {
    console.info(`Running ${exampleScript} ...`);
    spawnSync("node", [exampleScript], {
      stdio: "inherit",
    });
    console.info("");
  });
