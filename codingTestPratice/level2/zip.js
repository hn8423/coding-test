function solution(msg) {
  const answer = [];
  let nextWord = "";
  let lastCount = 27;

  var list = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var dir = list.reduce((d, a, i) => ((d[a] = i + 1), d), {});
  const s = msg.split("").reduce((acc, cur) => {
    nextWord = acc + cur;
    if (dir[nextWord] === undefined) {
      dir[nextWord] = lastCount++;
    } else {
      return acc + cur; //27,28
    }
    if (dir[acc] !== undefined) answer.push(dir[acc]);
    return cur; //하나의 문자만 넣을때
  });

  answer.push(dir[s]);

  return answer;
}
