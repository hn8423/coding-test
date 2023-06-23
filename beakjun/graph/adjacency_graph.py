# 인접 리스트 adjacency list
graph ={
  1:[3,5],
  2:[4,5],
  3:[1,5],
  4:[2,5],
  5:[1,2,3,4,]
}

visited = []
from collections import deque

def bfs(start_v):
  visited.append(start_v)
  queue = deque(start_v)
  while queue:
    cur_v = queue.popleft()
    for v in graph[cur_v]:
      if v not in visited:
        visited.append(v)
        queue.append(v)
  return visited


def dfs(cur_v):
  visited.append(cur_v)
  for v in graph[cur_v]:
    if v not in visited:
      dfs(v)

# 암시적 그래프 implicit graph
graph = [
  [1,1,1,1,1],
  [1,1,1,0,1],
  [1,1,1,0,1],
  [1,1,0,0,1],
  [1,1,1,1,1],
]