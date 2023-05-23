const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(readFileSyncAddress).toString().trim();

let [N, ...arr] = input.split("\n");
let [n, m, v] = N.split(" ").map(Number);

let graph = new Array(n + 1);
for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}

for (let i = 0; i < m; i++) {
  let [from, to] = arr[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}
graph.forEach((element) => {
  element.sort((a, b) => a - b);
});
let visited = new Array(n + 1).fill(0);
let answer_dfs = [];
//DFS
function DFS(v) {
  if (visited[v]) return;
  visited[v] = 1;
  answer_dfs.push(v);
  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    if (visited[next] === 0) {
      DFS(next);
    }
  }
}

DFS(v);
console.log(answer_dfs.join(" "));
//BFS
let answer_bfs = [];
visited.fill(0);
function BFS(v) {
  let queue = [v];
  while (queue.length) {
    let x = queue.shift();
    if (visited[x] === 1) {
      continue;
    }
    visited[x] = 1;
    answer_bfs.push(x);
    for (let i = 0; i < graph[x].length; i++) {
      let next = graph[x][i];
      if (visited[next] === 0) {
        queue.push(next);
      }
    }
  }
}

BFS(v);
console.log(answer_bfs.join(" "));
