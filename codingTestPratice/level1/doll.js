function solution(board, moves) {
  let basket = [];
  var answer = 0;

  moves.forEach((order) => {
    let doll = pickup(board, order - 1);
    if (doll) {
      if (basket[basket.length - 1] === doll) {
        basket.pop();
        answer += 2;
      } else {
        basket.push(doll);
      }
    }
  });
  return answer;
}

function pickup(board, order) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][order] !== 0) {
      let doll = board[i][order];
      board[i][order] = 0;
      return doll;
    }
  }
}
