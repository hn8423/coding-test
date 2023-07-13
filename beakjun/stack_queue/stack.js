function isValid(s) {
  let stack = [];
  for (let p in s) {
    if (p === "(") {
      stack.push(")");
    } else if (p === "{") {
      stack.push("}");
    } else if (p === "[") {
      stack.push("]");
    } else if (!stack || stack.pop() !== p) {
      return false;
    }
  }
  return !stack;
}

function dailyTemperatures(temperatures) {
  let ans = new Array(temperatures.length).fill(0);
  let stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (stack && stack[-1][1] < temperatures[i]) {
      let [prev_day, _] = stack.pop();
      ans[prev_day] = i - prev_day;
    }
    stack.push([i, temperatures[i]]);
  }
  return ans;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
