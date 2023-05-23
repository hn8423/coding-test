const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .split("\n");
let [r, c] = input[0].split(" ").map(Number);
let arr = input.slice(1).map((v) => v.split("").filter((v) => v !== "\r"));

let check = Array.from(Array(r), () => Array(c).fill(0));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1]; //동서남북 조회

let time = 0;

function bfs(row, col) {
  const queue = [];
  //시작점 셋팅
  queue.push([row, col, 0]);
  check[row][col] = 1;
  while (queue.length) {
    const len = queue.length;

    const [x, y, cnt] = queue.shift();
    if (arr[x][y] === "도착") {
      answer = cnt;
      return;
    }
    //주위 동서남북 찾기
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      //가도 되는지 확인
      if (nx < 0 || ny < 0 || nx >= r || ny >= c) continue;
      check[nx][ny] = 1;
      queue.push([nx, ny, cnt + 1]);
    }
  }
  return;
}
bfs(0, 0);

console.log(answer || "KAKTUS");
