function solution(weights) {
  var answer = 0;
  //     한번씩 확인
  //     하나 확인할때 j 랑 각각 비교 해야함
  for (let i = 0; i < weights.length - 1; i++) {
    for (let j = i + 1; j < weights.length; j++) {
      let first = weights[i];
      let next = weights[j];

      if (first === next) {
        //             22
        answer++;
      } else if (first * 2 === next * 3) {
        //             23
        answer++;
      } else if (first * 3 === next * 2) {
        //             32
        answer++;
      } else if (first * 2 === next * 4) {
        //             24

        answer++;
      } else if (first * 4 === next * 2) {
        //             42

        answer++;
      } else if (first * 4 === next * 3) {
        //             43

        answer++;
      } else if (first * 3 === next * 4) {
        //             34

        answer++;
      }
    }
  }
  return answer;
}

console.log(solution([100, 180, 360, 100, 270]));
