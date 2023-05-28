const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .split("\n");

let [N, K] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let on = [];
let answer = 0;

for (let i = 0; i < K; i++) {
  let cur = arr[i];
  if (on.includes(cur)) continue;
  if (on.length < N) {
    on.push(cur);
  } else {
    let target;
    let value = 0;

    on.forEach((v) => {
      let next = Infinity;
      for (let j = i + 1; j < K; j++) {
        if (arr[j] === v) {
          next = j;
          break;
        }
      }
      if (value < next) {
        target = v;
        value = next;
      }
    });
    on = on.filter((v) => v !== target);
    on.push(cur);
    answer++;
  }
}

console.log(answer);
