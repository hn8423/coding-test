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

let building = new Array(f + 1);
for (let i = 0; i < building.length; i++) {
  building[i] = [];
}

let visited = new Array(f + 1).fill(0);
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
      answer = cnt;
      break;
    }
    visited[x] = 1;
    //올라갈지 말지 결정
    for (let i = 0; i < button.length; i++) {
      let next;

      if (i === 0 && x + button[i] <= f) {
        next = x + button[i];
        queue.push([next, cnt + 1]);
        continue;
      }
      if (i === 1 && x - button[i] > 0) {
        next = x - button[i];
        queue.push([next, cnt + 1]);
        continue;
      }
    }
  }
}

BFS(s);
console.log(answer || "use the stairs");
