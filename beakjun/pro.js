function solution(prices) {
  var answer = new Array(prices.length).fill(0);
  let stack = [];
  for (let i = 0; i < prices.length; i++) {
    while (stack.length !== 0 && stack[stack.length - 1][1] > prices[i]) {
      let [prev_day, _] = stack.pop();
      answer[prev_day] = i - prev_day;
    }
    stack.push([i, prices[i]]);
  }
  if (stack.length) {
    stack.forEach((v) => {
      let [prev_day, _] = v;
      answer[prev_day] = prices.length - 1 - prev_day;
    });
  }
  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
