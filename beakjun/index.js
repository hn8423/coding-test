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

  if (result.length === 1) {
    return result[0];
  } else {
    let sizeArr = result.map((v, i) => {
      return v[1] - v[0];
    });
    let min = Math.min(...sizeArr);

    if (result.length !== new Set(sizeArr).size) {
      return result[0];
    } else {
      return result[sizeArr.indexOf(min)];
    }
  }
}
console.log(solution([1, 1, 1, 2, 3, 4, 5], 5));
