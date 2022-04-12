// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
  var answer = "";
  let length = s.length;
  if (length % 2 !== 0) {
    answer = s.substr(length / 2, 1);
  } else {
    answer = s.substr(length / 2 - 1, 2);
  }
  return answer;
}
