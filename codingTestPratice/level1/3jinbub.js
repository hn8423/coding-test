//

function solution(n) {
  var answer = 0;
  let sam = n.toString(3);
  let reverse = sam.split("").reverse().join("");
  answer = Number.parseInt(reverse, 3);

  return answer;
}
