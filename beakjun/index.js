function solution(topping = [1, 2, 1, 3, 1, 4, 1, 2]) {
  let answer = 0;
  //for 구문을 돌려서 자르는 순서 확인 o(1)
  //set을 사용하여 몇가지 토핑 맛보는지 확인 o(1)
  //두 조각이 같은 갯수의 토핑이라면 카운트
  for (let i = 0; i < topping.length; i++) {
    let cake1 = new Set(topping.slice(0, i)).size;
    let cake2 = new Set(topping.slice(i, -1)).size;
    console.log(cake1 === cake2);
    if (cake1 === cake2) {
      answer++;
    }
  }
  console.log(answer);
}
solution();
