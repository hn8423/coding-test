function solution(n) {
  var answer = 0;
  //index기준으로 찾기에 0,1은 소수가 아니여서 false
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  //이미 탐색이 되었기에 루트 값까지 진행
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      //i제곱을 하는 이유는 이전에 이미 탐색이 되었기에 제곱 부터 시작
      for (let j = i * i; j <= n; j += i) {
        // 아직 탐색이 안된곳 false 반환
        arr[j] = false;
      }
    }
  }
  return arr.filter((e) => e).length;
}
