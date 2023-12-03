const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "../example.txt";
let input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);
let A = input[1].split(" ").map(Number);

let dp = Array.from({ length: N }, () => 0);
let arr = [];

for (let i = 0; i < N; i++) {
  let max = 0;
  let maxIdx = -1;
  for (let j = 0; j < i; j++) {
    if (A[i] > A[j] && dp[j] > max) {
      max = dp[j];
      maxIdx = j;
    }
  }
  dp[i] = max + 1;
  arr[i] = maxIdx !== -1 ? arr[maxIdx].concat(A[i]) : [A[i]];
}

let answer = Math.max(...dp);

// console.log(answer);
console.log(arr[dp.indexOf(answer)].join(" "));
