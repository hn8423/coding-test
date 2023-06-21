const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .split("\n");
let N = Number(input[0]);
let level = input.slice(1).map(Number).reverse();
let count = 0;

for (let i = 0; i < N - 1; i++) {
  if (level[i] <= level[i + 1]) {
    count += level[i + 1] - level[i] + 1;
    level[i + 1] = level[i] - 1;
  }
}
console.log(count);
