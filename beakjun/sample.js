function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // 피벗을 선택합니다. 일반적으로 배열의 가운데 요소를 선택하거나 랜덤하게 선택할 수도 있습니다.
  const pivot = arr[Math.floor(arr.length / 2)];

  // 피벗보다 작은 요소들과 큰 요소들을 담을 빈 배열을 생성합니다.
  const left = [];
  const right = [];

  // 피벗을 기준으로 배열을 분할합니다.
  for (const element of arr) {
    if (element < pivot) {
      left.bpush(element);
    } else if (element > pivot) {
      right.push(element);
    }
    // 피벗과 같은 경우에는 무시합니다.
  }

  // 분할된 배열들을 재귀적으로 정렬하고, 피벗과 함께 합쳐서 정렬된 배열을 반환합니다.
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// 예시
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // [11, 12, 22, 25, 34, 64, 90]
