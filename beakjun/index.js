function solution(wallpaper) {
  let board = [];
  for (let i = 0; i < wallpaper.length; i++) {
    board.push(wallpaper[i].split(""));
  }

  let minx = Infinity;
  let miny = Infinity;
  let maxx = 0;
  let maxy = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "#") {
        minx = Math.min(minx, i);
        miny = Math.min(miny, j);
        maxx = Math.max(maxx, i);
        maxy = Math.max(maxy, j);
      }
    }
  }
  return [minx, miny, maxx + 1, maxy + 1];
}

console.log(
  solution([
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#.....",
  ])
);
