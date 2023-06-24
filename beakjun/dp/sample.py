# dp 푸는 순서
# 1.완전탐색 
# - 하위문제로 나누기
# - 계산결과 저장/재활용
# - 체계적, 효율성 따지기
# 2. DP
# - topdown(구현속도 빠름) or bottom up(실행속도 빠름 추천)결정 
# - Overlapping subproblem(작은 문제로 분해) 체크
# - Optimal substructure 작은 문제로 전체 문제 해결 체크
# 3. 문제적용
# - 재귀 체크 and base case 체크
# - 최대, 최소 개수 구할때 dp사용
# - 미래의 계산이 앞선 계산 결과에 영향을 받을 때 DP이용

cost = [10,15,20,17,1]
def dp_top_down(n):
  memo = {} 
  if n == 0 or n == 1:
    return 0
  if n not in memo:
    memo[n] = min(dp_top_down(n-1)+cost[n-1],dp_top_down(n-2)+cost[n-2])
  return memo[n]


def dp_bottom_up(n):
  memo = [-1]*(n+1)
  memo[0] = 0
  memo[1] = 0
  for i in range(2,n+1):
    memo[i] = min(memo[i-1]+cost[i-1],memo[i-2]+cost[i-2])
  return memo[n]

print(dp_bottom_up(5))