//f = all floor count
// s = start
// g = interview floor
// u = UP
// d = DOWN
//fail = use the stair
//bfs_1차원_count
const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(readFileSyncAddress).toString().trim();

let [f, s, g, u, d] = input.split(" ").map(Number);

let visited = new Array(1000001).fill(0);
let button = [u, d];
let answer = 0;

// //BFS

function BFS(v) {
  let queue = [[v, 0]];
  while (queue.length) {
    let [x, cnt] = queue.shift();
    if (visited[x] === 1) {
      continue;
    }
    if (x === g) {
      console.log(cnt);
      break;
    }
    //올라갈지 말지 결정
    for (let stairs of [x + u, x - d]) {
      stairs >= 1 &&
        stairs <= f &&
        !visited[x] &&
        queue.push([stairs, cnt + 1]);
    }
    visited[x] = 1;
  }
  console.log("use the stairs");
}

BFS(s);
