function solution(book_time) {
  //분단위로 숫자 바꾸고  시작 시간 순서대로 sorting
  let intArr = book_time
    .map((v) => {
      let result = [];
      let start = v[0].split(":");
      let end = v[1].split(":");
      return [
        Number(start[0]) * 60 + Number(start[1]),
        Number(end[0]) * 60 + Number(end[1]),
      ];
    })
    .sort((a, b) => a[0] - b[0]);
  let rooms = [];
  //for문 sorting한 예약 시간 배열 돌리기 돌리기
  for (let i = 0; i < intArr.length; i++) {
    //방 돌아가는 2중 포문 돌리기
    // 방 푸쉬 처음 시작 손님 받고 끝나는 시간 + 10분 체크
    if (i === 0) {
      rooms.push(book_time[i]);
      continue;
    }

    // 다음 손님 시작 시간이 첫 손님 끈나는 시간 + 10분 이후 라면 처음 손님 지우고 다음손님 ㄱㄱ
    rooms.forEach((room) => {
      if (book_time[i][0] >= room[1] + 10) {
        rooms = rooms.filter((v) => v !== room);
      }
    });
    // 시작 시간 이전이라면 다음 손님 방 배열에 넣고 contineu
    rooms.push(book_time[i]);
  }
  //포문 끝나면 배열 길이 체크
  var answer = 0;
  return rooms.length;
}

console.log(
  solution([
    ["09:10", "10:10"],
    ["09:10", "10:10"],
    ["10:20", "12:20"],
    ["10:20", "12:20"],
  ])
);
