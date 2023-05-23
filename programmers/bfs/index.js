function bfs(graph, start) {
  const queue = [start];
  const visited = new Set(queue);

  while (queue.length > 0) {
    const curr = queue.shift();

    for (let neighbor of graph[curr]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return visited;
}
