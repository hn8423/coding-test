function solution(stones, k) {
  let max = Math.max(...stones);
  let min = 0;
  let count = parseInt((max + min) / 2);

  //while문으로 한사람씩 가는것으로 진행
  while (true) {
    let zeroCount = 0;
    let zeroArr = [];
    for (let i = 0; i < stones.length; i++) {
      if (stones[i] - count > 0) {
        zeroArr.push(zeroCount);
        zeroCount = 0;
      } else {
        zeroCount++;
      }
    }

    let zeroMax = Math.max(...zeroArr);

    if (k === zeroMax) {
      break;
    } else if (k > zeroMax) {
      min = count;
      count = parseInt((count + max) / 2);
    } else {
      max = count;
      count = parseInt(min + count / 2);
    }
  }

  return count;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
