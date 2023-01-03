// 소수 판별하는 함수
const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // 처음에 i를 2로 써서 계속 틀렸었다..ㅎㅎ 다들 오타 조심
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const solution = (n, k) => {
  // n을 k진수로 변경하는 부분에서 n % k를 담을 배열
  const remainArr = [];
  // 0을 기준으로 분리된 숫자들을 담을 배열
  let numberArr;
  let answer = 0;
  // n을 k진수로 바꿈
  while (n > 0) {
    // 추후 split 사용하기 위해 나머지 값은 문자열로 넣어줌
    remainArr.unshift((n % k).toString());
    n = Math.floor(n / k);
  }
  // remainArr을 하나의 문자열로 만든 상태에서 0을 기준으로 문자열 자름
  // (0은 여러개 있을 수 있음 => {1, })
  numberArr = [...remainArr.join("").split(/0{1,}/g)];
  // 분리된 숫자들을 확인
  numberArr.forEach((x) => {
    const num = parseInt(x);
    // num이 1보다 크고 소수일 때 answer 증가
    if (num > 1 && isPrime(num)) {
      answer++;
    }
  });

  return answer;
};
