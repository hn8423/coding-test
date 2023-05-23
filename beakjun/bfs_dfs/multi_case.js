const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";
let data = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .split("\n");

let input = [];
let M = 0;
let N = 0;

const main = () => {
  const graph = [];
  const visited = [];

  for (let i = 0; i < N; i++) {
    graph[i] = input[i].split(" ").map(Number);
    visited[i] = new Array(M).fill(false);
  }

  const bfs = (yPos, xPos) => {
    const xMove = [0, 0, -1, 1, -1, -1, 1, 1];
    const yMove = [1, -1, 0, 0, 1, -1, 1, -1];
    const queue = [];
    queue.push({ yPos: yPos, xPos: xPos });
    visited[yPos][xPos] = true;

    while (queue.length) {
      const { yPos, xPos } = queue.shift();
      for (let i = 0; i < 8; i++) {
        const nextY = yPos + yMove[i];
        const nextX = xPos + xMove[i];
        if (nextY >= 0 && nextY < N && nextX >= 0 && nextX < M) {
          if (!visited[nextY][nextX] && graph[nextY][nextX]) {
            visited[nextY][nextX] = true;
            queue.push({ yPos: nextY, xPos: nextX });
          }
        }
      }
    }
  };

  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j] && graph[i][j]) {
        count++;
        bfs(i, j);
      }
    }
  }
  console.log(count);
};

data.forEach((line) => {
  if (!N) {
    if (line === "0 0") {
      return;
    }
    [M, N] = line.split(" ").map(Number);
  } else {
    input.push(line);
    if (input.length === N) {
      main();
      N = 0;
      input = [];
    }
  }
});
