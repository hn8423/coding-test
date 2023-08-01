const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const [M, N] = input[0].split(" ").map(Number);
const dRow = [1, 0, -1, 0];
const dCol = [0, 1, 0, -1];
const board = [];

for (let i = 1; i < M + 1; i++) {
  board.push(input[i].split(" ").map(Number));
}

// 단순 DFS로 풀 때의 같은 노드 중복 재귀 호출을 피하기 위해, DP 메모이제이션 활용
// 어떤 노드의 H는 상하좌우 값 작은 노드들의 H들의 합임. 부분 문제 정의
// 중복 호출을 피하기 위해, 방문을 안 한 노드의 위치는 -1을 가지고,
// 방문을 한 노드는 연산 결과, 0이나 그 이상의 H를 가짐
// H가 0이라는 것은 그 노드 상하좌우에 내려갈 길이 없거나,
// 내려갔는데 그 내려간 노드의 H가 모두 0인 경우이므로 즉
// 마지막 노드까지 도달할 수 없는 경우라는 것이다.

const DP = [];
for (let i = 0; i < M; i++) {
  DP.push([]);
  for (let j = 0; j < N; j++) {
    DP[i].push(-1);
  }
}

function DFS(row, col) {
  if ((row === M - 1) & (col === N - 1)) {
    return 1;
  }

  if (DP[row][col] != -1) {
    return DP[row][col];
  }

  let H = 0;
  for (let i = 0; i < 4; i++) {
    let nRow = row + dRow[i];
    let nCol = col + dCol[i];
    if ((nRow >= 0) & (nRow < M) & (nCol >= 0 % nCol < N)) {
      if (board[nRow][nCol] < board[row][col]) {
        H += DFS(nRow, nCol);
      }
    }
  }

  DP[row][col] = H;
  return H;
}

console.log(DFS(0, 0));
