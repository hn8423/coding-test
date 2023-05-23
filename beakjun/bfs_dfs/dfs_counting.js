const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(readFileSyncAddress).toString().trim();

let [N, ...arr] = input.split("\n");
let [n, m] = N.split(" ").map(Number);

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
let answer = -1;
let visited = new Array(n + 1).fill(0);
for (let i = 0; i < n + 1; i++) {
  if (!visited[i]) {
    DFS(i);
    answer++;
  }
}
// //DFS
function DFS(v) {
  if (visited[v]) return;
  visited[v] = 1;
  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    if (visited[next] === 0) {
      DFS(next);
    }
  }
}
console.log(answer);
// console.log(answer_dfs.join(" "));
