import os from "os"
console.info(os.platform());
console.info(os.arch());
console.table(os.freemem());
console.info(os.totalmem());
console.info(os.homedir());
console.info(os.hostname());

console.table(os.cpus());