function solution(rows, columns, queries) {
  var answer = [];
  let board = Array.from({ length: rows }, () => Array(columns).fill(0)); //체크

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = board[i].length * i + j + 1;
    }
  }
  let lowValue = [];
  queries.forEach((arr) => {
    let check = Array.from({ length: rows }, () => Array(columns).fill(0));
    //값을 저장
    let curRow = arr[0] - 1;
    let curCol = arr[1] - 1;
    let curValue = board[curRow][curCol];

    while (true) {
      //오른쪽으로 갈수있는지, 왼쪽 체크 되어있는지, 꼭지점인지
      if (
        (curCol + 1 !== arr[3] && check[curRow][curCol - 1] === 1) ||
        (curRow === arr[0] - 1 && curCol === arr[1] - 1)
      ) {
        if (check[curRow][curCol + 1] === 1) {
          break;
        }
        //체크
        check[curRow][curCol] = 1;
        //값넣고
        //이동
        lowValue.push(curValue);
        let localVal = curValue;
        if (curCol + 1 <= arr[3] - 1) {
          //변환 현재 인덱스도 변환
          curCol++;
        } else {
          curRow++;
        }
        curValue = board[curRow][curCol];
        board[curRow][curCol] = localVal;
        //아래으로 갈수있는지,위쪽 체크 되어있는지,꼭지점인지
      } else if (
        (curRow - 1 >= arr[0] - 1 &&
          check[curRow - 1][curCol] === 1 &&
          curRow + 1 !== arr[2] &&
          check[curRow + 1][curCol] !== 1) ||
        (curRow === arr[0] - 1 && curCol === arr[3] - 1)
      ) {
        //체크
        check[curRow][curCol] = 1;
        //값넣고
        lowValue.push(curValue);
        //이동
        //변환
        let localVal = curValue;
        if (curRow + 1 <= arr[2] - 1) {
          curRow++;
        } else {
          curCol--;
        }
        if (curRow === arr[0] - 1 && curCol === arr[1] - 1) {
          break;
        }
        curValue = board[curRow][curCol];
        board[curRow][curCol] = localVal;
      }
      //왼쪽으로 갈수있는지,오른쪽 체크 되어있는지,꼭지점인지
      else if (
        (curCol - 1 !== arr[1] - 2 && check[curRow][curCol + 1] === 1) ||
        (curRow === arr[2] - 1 && curCol === arr[3] - 1)
      ) {
        //체크
        check[curRow][curCol] = 1;
        //값넣고
        lowValue.push(curValue);
        //이동
        //변환
        let localVal = curValue;
        if (curCol - 1 >= arr[1] - 1) {
          curCol--;
        } else {
          curRow--;
        }
        curValue = board[curRow][curCol];
        board[curRow][curCol] = localVal;
      }
      //위로 갈수있는지,아랫쪽 체크 되어있는지,꼭지점인지
      else if (
        (curRow + 1 !== arr[2] &&
          curRow - 1 !== arr[0] - 2 &&
          check[curRow + 1][curCol] === 1) ||
        (curRow === arr[2] - 1 && curCol === arr[1] - 1)
      ) {
        //체크
        check[curRow][curCol] = 1;
        //값넣고
        lowValue.push(curValue);
        //이동
        //변환
        let localVal = curValue;
        if (curRow - 1 >= arr[0] - 1) {
          curRow--;
        } else {
          break;
        }
        curValue = board[curRow][curCol];
        board[curRow][curCol] = localVal;
      }
      //변환
      //다 옮기면 break
    }
    answer.push(Math.min(...lowValue));
    lowValue = [];
  });
  return answer;
}

console.log(solution(100, 97, [[1, 1, 100, 97]]));
