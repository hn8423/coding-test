function solution(gems) {
  //투포인터로 진행
  let left = 0;
  let right = gems.length - 1;

  var answer = [];
  while (true) {
    let leftResult = new Set(gems.slice(left + 1, right + 1));
    let rightResult = new Set(gems.slice(left, right));
    if (rightResult.has(gems[right])) {
      right--;
    } else if (leftResult.has(gems[left])) {
      left++;
    } else {
      answer = [left + 1, right + 1];
      break;
    }
  }
  return answer;
}
console.log(solution(["XYZ", "XYZ", "XYZ"]));
