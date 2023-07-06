function canVisitAllRooms(rooms) {
  let visited = new Set();

  visited = new Array(rooms.length).fill(false);

  function bfs(v) {
    let queue = [];
    queue.push(v);
    visited[v] = true;
    while (queue.length) {
      let curV = queue.shift();
      for (nextV in rooms[curV]) {
        if (!visited[nextV]) {
          queue.push(nextV);
          visited[nextV] = true;
        }
      }
    }
  }
  bfs(0);
  return visited;
}

let rooms = [[1, 3], [2, 4], [0], [4], [], [3, 4]];
console.log(canVisitAllRooms(rooms));
