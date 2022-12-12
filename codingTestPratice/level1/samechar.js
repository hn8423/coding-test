function solution(s) {
  const charobj = {};
  var answer = [];
  for (let i = 0; i < s.length; i++) {
    if (charobj[s[i]] === undefined) {
      answer.push(-1);
    } else {
      answer.push(i - charobj[s[i]]);
    }
    charobj[s[i]] = i;
  }
  return answer;
}
