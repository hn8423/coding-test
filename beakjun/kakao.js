let text = "ba";
let prefixString = "a";
let suffixString = "b";
// let text = "engine";
// let prefixString = "raven";
// let suffixString = "ginkgo";

let score = 0;
let preCount = 0;
let sufCount = 0;
let match = "";

for (let i = prefixString.length - 1; i >= 0; i--) {
  // if()
  let cur = prefixString.substring(prefixString.length, i);
  if (text.indexOf(cur) !== -1) {
    match = cur;
  } else if (text.indexOf(cur) === -1 && match.length !== 0) {
    score += match.length;
    preCount = match.length;
    match = "";
    break;
  }
}
for (let i = 1; i <= suffixString.length; i++) {
  // if()
  let cur = suffixString.substring(0, i);

  if (text.indexOf(cur) !== -1) {
    match = cur;
  } else if (text.indexOf(cur) === -1 && match.length !== 0) {
    score += match.length;
    preCount = match.length;
    match = "";
    break;
  }
}
if (text.length > score) {
  let sort = text.split("").sort();
  let result = text.substring(0, score);
  console.log(sort);
}
let answer = "";
// console.log(score ? "somethine" : "nothing");

// let centreNodes = 6;
// let centreFrom = [1, 1, 1, 2, 3, 3, 5, 4];
// let centreTo = [2, 4, 3, 4, 4, 5, 6, 6];
// let status = [3, 2, 3, 1, 2, 1];

// let graph = new Array(centreNodes + 1);
// for (let i = 0; i < graph.length; i++) {
//   graph[i] = [];
// }

// for (let i = 0; i < centreTo.length; i++) {
//   graph[centreFrom[i]].push(centreTo[i]);
//   graph[centreTo[i]].push(centreFrom[i]);
// }
// let visited = new Array(centreNodes + 1).fill(0);
// let needCenterList = [];
// status.forEach((v, i) => {
//   if (v === 1) {
//     needCenterList.push([i + 1, 0]);
//   }
// });
// let needCenterCountSum = new Array(centreNodes).fill(0);
// console.log(needCenterCountSum);

// function bfs(v) {
//   let queue = [[v, 0]];
//   while (queue.length) {
//     let [center, cnt] = queue.shift();
//     if (visited[center] === 1) {
//       continue;
//     }

//     if (status[center - 1] === 1) {
//       needCenterList.forEach((el, idx) => {
//         if (el[0] === center) {
//           if (el[1] === 0) {
//             needCenterList[idx] = [center, cnt];
//           } else {
//             needCenterList[idx] = [
//               center,
//               Math.min(needCenterList[idx][1], cnt),
//             ];
//           }
//         }
//       });
//       let check = true;
//       needCenterList.forEach((v) => {
//         if (v[1] === 0) {
//           check = false;
//         }
//       });
//       if (check) {
//         needCenterList.forEach((v, i) => {
//           if (needCenterCountSum[i] === 0) {
//             needCenterCountSum[i] = v[1];
//           } else {
//             needCenterCountSum[i] = Math.min(needCenterCountSum[i], v[1]);
//           }
//         });

//         break;
//       }
//     }
//     visited[center] = 1;
//     for (let i = 0; i < graph[center].length; i++) {
//       let next = graph[center][i];
//       if (visited[next] === 0) {
//         queue.push([next, cnt + 1]);
//       }
//     }
//   }
// }

// for (let i = 0; i < centreNodes; i++) {
//   if (status[i] === 3) {
//     visited.fill(0);
//     bfs(i + 1);
//   }
// }

// // console.log(Math.max(...needCenterCountSum));
