function solution(sequence, k) {
  //2포인터로 진행
  let right = 0;
  let left = 0;
  let sum = sequence[0];
  let result = [];
  while (right < sequence.length) {
    if (sum < k) {
      right++;
      sum += sequence[right];
    } else if (sum > k) {
      sum -= sequence[left];
      left++;
    } else if (sum === k) {
      result.push([left, right]);
      right++;
      sum += sequence[right];
    }
  }

  return result.sort(condition)[0];
}
//중복값 정렬방법
function condition(a, b) {
  const lenDiff = Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1]);
  if (lenDiff !== 0) return lenDiff; // 길이에 따라 정렬
  return a[0] - b[0]; // 그 외는 0번째 원소 index가 낮은 순서로 정렬
}
