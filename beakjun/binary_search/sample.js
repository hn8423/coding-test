function solution(stones, k) {
  // 이분탐색을 사용한다.
  let left = 1;
  let right = 200000000;
  // 문제에서 주어진 조건에 따라 최대값을 설정한다.

  while (left <= right) {
    const mid = ((left + right) / 2) >> 0;

    let count = 0;
    for (let i = 0; i < stones.length; i++) {
      if (stones[i] - mid <= 0) count++;
      else count = 0;

      if (count === k) break;
    }

    if (count === k) right = mid - 1;
    else left = mid + 1;
  }

  return left;
}
