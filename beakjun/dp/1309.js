const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "../example.txt";
let input = require("fs").readFileSync(readFileSyncAddress).toString();
// ㅣㅗㄹㅑㅕㄴㅇ모ㅑㅕ
input = Number(input);

let dp = [1, 3];
for (let i = 2; i <= input; i++) {
  dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
}
console.log(dp[input]);
