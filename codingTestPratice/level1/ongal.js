function solution(babbling) {
  var answer = 0;
  let can = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    let value = babbling[i];
    for (let j = 0; j < can.length; j++) {
      if (value.includes(can[j].repeat(2))) {
        break;
      }
      value = value.split(can[j]).join(" ");
    }
    if (value.split(" ").join("").length === 0) {
      answer += 1;
    }
  }
  return answer;
}
