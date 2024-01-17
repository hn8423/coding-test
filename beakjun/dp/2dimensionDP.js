const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

let [N, K] = input[0].split(" ").map(Number);
let dp = [];

for (let i = 1; i <= K; i++) {
  dp[i] = new Array(N + 1).fill(i === 1 ? 1 : 0);
  dp[i][0] = 1;
}

for (let i = 2; i <= K; i++) {
  for (let j = 1; j <= N; j++) {
    dp[i][j] =
      dp[i - 1].slice(0, j + 1).reduce((acc, cur) => acc + cur, 0) % 1000000000;
  }
}

// console.log(dp[K][N]);
