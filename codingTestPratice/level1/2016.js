function solution(a, b) {
  var answer = "";
  return new Date(`2016-${a}-${b}`).toString().slice(0, 3).toUpperCase();
}
