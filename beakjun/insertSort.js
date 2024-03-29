function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

const array = [5, 2, 4, 6, 1, 3];
//254613
// 4 245613
// 6 245613
// 1 124563
// 3 123456
const sortedArray = insertionSort(array);
console.log(sortedArray); // [1,2,3,4,5,6]
