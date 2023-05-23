const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(readFileSyncAddress).toString().trim();

let [n, ...arr] = input.split("\n");

let [N, M] = n.split(" ").map(Number);
let adjM = [];
for (let i = 0; i <= N - 1; i++) {
  adjM.push(arr[i].split("").map(Number));
}
const check = Array.from({ length: N }, () => Array(M).fill(0)); //체크

function bfs(row, col) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1]; //동서남북 조회
  const queue = [];
  queue.push([row, col]);
  check[row][col] = 1;
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (adjM[nx][ny] && !check[nx][ny]) {
        check[nx][ny] = check[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}
bfs(0, 0);
console.log(check[N - 1][M - 1]);
