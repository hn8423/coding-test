function solution(n, k) {
  var answer = 1;
  let temp = n;
  while (true) {
    if (temp % k === 0) {
      break;
    } else {
      temp = Number(String(temp) + String(n));
      answer++;
    }
    // if (String(temp).length >= 10) {
    //   return -1;
    // }
  }
  return answer;
}

console.log(solution(22, 9));
