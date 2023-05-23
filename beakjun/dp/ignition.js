const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";

var fs = require("fs");
var input = fs.readFileSync(readFileSyncAddress).toString().split("\n");

[N, ...arr] = input;
N = Number(N);
arr = arr.map(Number);

const dp = new Array(N).fill(0);
dp[0] = arr[0];
dp[1] = Math.max(arr[0] + arr[1], arr[1]);
dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);

for (let i = 3; i < N; i++) {
  dp[i] = Math.max(arr[i] + arr[i - 1] + dp[i - 3], arr[i] + dp[i - 2]);
}
console.log(dp[N - 1]);
