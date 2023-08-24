const { sleepWithError } = require("./common/sleep");

sleepWithError(100).catch((err) => console.error("Error received", err));
