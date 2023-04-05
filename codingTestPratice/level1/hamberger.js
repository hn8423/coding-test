function solution(ingredient) {
  var answer = 0;
  let stk = [];
  ingredient.forEach((int) => {
    stk.push(int);
    if (stk.length >= 4) {
      let find = stk.slice(-4).join("");
      if (find === "1231") {
        stk.pop();
        stk.pop();
        stk.pop();
        stk.pop();
        answer++;
      }
    }
  });

  return answer;
}
