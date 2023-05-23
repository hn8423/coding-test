const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";
var fs = require("fs");
var inputs = fs.readFileSync(readFileSyncAddress).toString().split("\n");
let n = Number(inputs[0]);
for (let i = 1; i <= n; i++) {
  let len = inputs[i * 2];
  console.log(len);
}
let cards = inputs[1].split(" ").map(Number);

let dp = new Array(n + 1).fill(0);

for (let i = n; i >= 1; i--) {
  for (let j = i; j >= 1; j--) {
    dp[i] = Math.max(dp[i], dp[i + 1] + cards[j + 1]);
  }
}

console.log(dp);
