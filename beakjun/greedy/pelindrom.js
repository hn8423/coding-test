const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(readFileSyncAddress).toString().trim();

conso;
