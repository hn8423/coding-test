let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim();

input = Number(input);
let count = 0;
while (true) {
  if (input < 0) {
    console.log(-1);
    break;
  }
  if (input % 5 === 0) {
    count += input / 5;
    console.log(count);
    break;
  }

  input = input - 2;
  count++;
}
