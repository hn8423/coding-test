function solution(lottos, win_nums) {
  let correct = lottos.filter((v) => win_nums.includes(v)).length;
  let zeros = lottos.filter((v) => v === 0).length;
  let min = 7 - correct >= 6 ? 6 : 7 - correct;
  let max = min - zeros <= 1 ? 1 : min - zeros;
  return [max, min];
}
