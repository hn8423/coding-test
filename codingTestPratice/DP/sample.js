//dp 없이 진행
let fibo = (n) => (n > 2 ? fibo(n - 2) + fibo(n - 1) : 1);

//use dp top down
let fiboArr = [0];
let fiboWithMemoization = (n) => {
  if (n < 3) {
    fiboArr[n] = 1;
  }
  //  이미 계산한 적 있다면 그대로 반환
  if (d[x] !== 0) {
    return d[x];
  }

  if (!fiboArr[n]) {
    // 내가 저장한 값 중에 없다면 ...
    // 재귀를 이용해 구하고 저장
    fiboArr[n] = fiboWithMemoization(n - 1) + fiboWithMemoization(n - 2);
  }

  return fiboArr[n];
};

// bottom-up의 예제
let d = new Array(100).fill(0);
function fibonacci(n) {
  d[0] = 0;
  d[1] = 1;

  for (let i = 2; i <= n; i++) {
    d[i] = d[i - 1] + d[i - 2];
  }

  return d[n];
}
