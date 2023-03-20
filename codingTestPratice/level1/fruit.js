function solution(k, m, score) {
  var answer = 0;
  let box = [];
  let sort = score.sort((a, b) => b - a);
  while (sort.length >= m) {
    box.push(sort.slice(0, m));
    sort = sort.slice(m);
  }
  for (let i = 0; i < box.length; i++) {
    answer += box[i][m - 1] * m;
  }
  return answer;
}
