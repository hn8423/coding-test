function solution(expression) {
  function calculator(a, b, oper) {
    if (oper === "+") return a + b;
    if (oper === "*") return a * b;
    if (oper === "-") return a - b;
  } // 문자열 형태의 연산자를 입력받아 해당 연산을 수행한다.

  const combinations = [
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["-", "*", "+"],
    ["-", "+", "*"],
  ]; // 6가지 경우의 수를 선언

  let answer = Number.MIN_SAFE_INTEGER;

  combinations.forEach((combination) => {
    const operands = expression.match(/[0-9]+/g).map(Number); // operands에 피연산자를 담고 문자열을 숫자로 형변환
    const operators = expression.match(/[\*\+\-]/g); // operators에 연산자를 담는다.
    combination.forEach((c) => {
      // 모든 경우의 수에 대해 작업을 수행한다.
      let idx = operators.indexOf(c);
      while (idx !== -1) {
        operands[idx] = calculator(operands[idx], operands[idx + 1], c);
        operands.splice(idx + 1, 1);
        operators.splice(idx, 1);
        idx = operators.indexOf(c);
      } // 더이상 operators 배열에 해당하는 연산자가 없을 때 까지 반복한다.
      // 0번 인덱스에서 연산자가 발견되었을 때 피연산자 배열의 0,1번 피연산자로 계산을 한다.
      // 피연산자 배열의 0번 인덱스에 연산 결과를 넣고, 연산자 0번 인덱스, 피연산자 1번 인덱스에 있는 원소를 제거한다.
      // 작업이 끝나면 연산자 배열에 찾으려는 연산자가 더 존재하는지 검사하고 존재한다면 위의 작업을 반복수행한다.
    });
    // 마지막 연산은 피연산자의 0,1번 인덱스 + 연산자의 0번 인덱스가 사용되며 피연산자 인덱스 0번에 최종 연산 결과가 담긴다.
    if (answer < Math.abs(operands[0])) answer = Math.abs(operands[0]); // 절댓값을 취해서 최댓값 갱신 여부를 판단한다.
  });
  return answer;
}

console.log(solution("100-200*300-500+20"));
