const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "../example.txt";
let input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");
  

let [N, M] = input[0].split(" ").map(Number);
const arr = Array(N)
  .fill()
  .map((_, i) => input[i + 1].split(" ").map(Number));
const dp = Array(N)
  .fill()
  .map((_) => Array(M).fill(0));
// f;sdajfa

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    const top = i > 0 ? dp[i - 1][j] : 0;
    const left = j > 0 ? dp[i][j - 1] : 0;
    const corner = i > 0 && j > 0 ? dp[i - 1][j - 1] : 0;
    dp[i][j] = arr[i][j] + Math.max(top, left, corner);
  }
}

console.log(dp[N - 1][M - 1]);
