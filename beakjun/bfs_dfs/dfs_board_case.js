const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .split("\n");
let [r, c] = input[0].split(" ").map(Number);
let arr = input.slice(1).map((v) => v.split("").filter((v) => v !== "\r"));

let check = Array.from(Array(r), () => Array(c).fill(0));
function dfs(x, y) {
  // let queue = [];
  // queue.push([x, y]);
  let cur = arr[x][y];
  check[x][y] = 1;
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          !check[nx][ny] &&
          cur === arr[nx][ny]
        ) {
          check[nx][ny] = 1;
          dfs(nx, ny);
        }
      }
    }
  }
}

// 적록색약 아닌 경우 dfs
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!check[i][j]) {
      dfs(i, j);
      cnt_able++;
    }
  }
}
// 적록색약인 경우 빨강,초록 색깔통합시켜주기
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === "R") arr[i][j] = "G";
  }
}
// check 배열 초기화
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    check[i][j] = 0;
  }
}
// 적록색약인 경우 dfs
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!check[i][j]) {
      dfs(i, j);
      cnt_disable++;
    }
  }
}
console.log(cnt_able, cnt_disable);
