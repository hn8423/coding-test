function solution(cards) {
  var answer = 0;
  const boxList = [];
  let box = [];
  let pointer = 0;
  while (true) {
    if (cards[pointer] !== 0) {
      box.push(cards[pointer]);
      let temp = pointer;

      pointer = cards[pointer] - 1;
      cards[temp] = 0;
    } else {
      let check = [...new Set(cards)].length;
      boxList.push(box);
      if (check !== 1) {
        box = [];
        let i = 0;
        while (i < cards.length) {
          if (cards[i] !== 0) {
            pointer = i;
            break;
          }
          i++;
        }
      } else {
        break;
      }
    }
  }
  let resultApp = boxList
    .sort((a, b) => b.length - a.length)
    .map((v) => v.length);
  let result = resultApp[0] * resultApp[1];
  return result;
}

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]));
