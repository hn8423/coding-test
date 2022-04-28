//https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  let answer = true;
  let int = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arr = [...s];
  if (!(s.length === 4 || s.length === 6)) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (int.indexOf(Number(arr[i])) === -1) {
      answer = false;
      break;
    }
  }
  return answer;
  // return typeof(Number(s)) === 'number'? true :false
}
