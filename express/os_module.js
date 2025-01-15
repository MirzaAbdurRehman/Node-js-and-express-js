const os = require('os')

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Hostname:", os.hostname());
console.log("Home Directory:", os.homedir());
console.log("Machine Type:", os.machine()); // `os.machine()` may not work in some Node.js versions.
console.log("User Info:", os.userInfo());
console.log("Free Memory (in GB):", os.freemem() / (1024 * 1024 * 1024));
console.log("Total Memory (in GB):", os.totalmem() / (1024 * 1024 * 1024));
