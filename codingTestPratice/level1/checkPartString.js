function solution(t, p) {
  let arr = [];
  let answer = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    let item = t.slice(i, i + p.length);
    if (Number(item) <= Number(p)) {
      answer++;
    }
    // arr.push(item)
  }

  return answer;
}
