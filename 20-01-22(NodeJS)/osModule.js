const os = require("os");

console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(os.freemem() / (1024 * 1024) + " MB");
console.log(os.totalmem() / (1024 * 1024) + " MB");
console.log(os.type());
console.log(os.loadavg());
console.log(os.uptime() / 3600);
console.log(os.cpus()[0].model);
console.log(os.cpus()[0].speed);
