const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

let [N, K] = input[0].split(" ").map(Number);

const coin = [
  ...new Set(
    input
      .slice(1)
      .map(Number)
      .filter((v) => v <= K)
  ),
];
const dp = new Array(10001).fill(Infinity);
dp[0] = 0;
coin.forEach((v) => {
  for (let i = v; i <= K; i++) {
    dp[i] = Math.min(dp[i], dp[i - v] + 1);
  }
});
console.log(dp[K] == Infinity ? -1 : dp[K]);
