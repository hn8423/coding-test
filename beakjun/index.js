let m = 4;
let section = [2, 3, 6];

let cur = section[0];
let count = 0;
while (section.length) {
  section.filter((v) => {
    if (cur <= v && v < cur + m) {
      return false;
    } else {
      return true;
    }
  });
  count++;

  cur += m;
}
console.log(count);
