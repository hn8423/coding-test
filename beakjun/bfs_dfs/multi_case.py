import sys
from collections import deque
input = sys.stdin.readline

n,m = map(int,input().split())
graph = []
for i in range(n):
    graph.append(list(map(int,input().split())))


dx = [1,-1,0,0]
dy = [0,0,1,-1]
ans = []

pic_count =0
max_count = 0
visited = [[0]*m for _ in range(n)]

def bfs(graph,x,y):
    q= deque()
    q.append([x,y])
    graph[x][y] =0
    cnt =1
    
    while q:
        x,y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0<=nx<n and 0<=ny<m and visited[nx][ny]==0:
                if graph[nx][ny] == 1:
                    graph[nx][ny] = 0
                    q.append([nx,ny])
                    cnt += 1
    return cnt

paint = []
for i in range(n):
    for j in range(m):
        if(graph[i][j] == 1):
            paint.append(bfs(graph,i,j))
            
if len(paint) == 0:
    print(len(paint))
    print(0)
else:
    print(len(paint))
    print(max(paint))