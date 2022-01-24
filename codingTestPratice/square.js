const input = [17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7];
const input2 = [7, 6, 4, 1, 7, -2, 3, 12];
const input3 = [37, 6, 4, 1, 7, -2, 3, 12];
function ArrayChallenge(arr) {
  var sum = [];
  for (var i = 1; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === arr[0]) {
        sum.push([arr[i], arr[j]].join());
      }
    }
  }
  return sum.length > 0 ? sum.join(" ") : -1;
}
//not good`
console.log(ArrayChallenge(input));
console.log(ArrayChallenge(input2));
console.log(ArrayChallenge(input3));
