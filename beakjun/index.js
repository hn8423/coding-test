function hanoiTower(n, from, to, aux) {
  if (n === 1) {
    console.log(`Move disk 1 from ${from} to ${to}`);
    return;
  }

  hanoiTower(n - 1, from, aux, to);
  console.log(`Move disk ${n} from ${from} to ${to}`);
  hanoiTower(n - 1, aux, to, from);
}

// 예시
const numDisks = 3; // 탑의 개수
console.log(hanoiTower(numDisks, "1번 막대", "3번 막대", "2번 막대"));
