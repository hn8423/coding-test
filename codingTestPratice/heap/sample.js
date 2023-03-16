// 기본 셋팅
const heap = [];
// 부모 노드 Index
function getParentIndex(i) {
  return Math.floor(i - 1 / 2);
}

// 자식 왼쪽 노드 Index
function getLeftChildIndex(i) {
  return i * 2 + 1;
}

// 자식 오른쪽 노드 Index
function getRightChildIndex(i) {
  return i * 2 + 2;
}

function swap(i1, i2) {
  const temp = heap[i1];
  heap[i1] = heap[i2];
  heap[i2] = temp;
}

function push(key) {
  heap[heap.length] = key;
  // 가장 큰 값일 수 있다. heap요구사항에 따라 자리를 바꿔줘야함 > hepifyUp()통해서 이뤄진다.
  heapifyUp();
}

function heapifyUp() {
  let currentIndex = heap.length - 1;

  // current요소가 상위요소보다 클 때까지 돌린다.
  // 현재 요소 (가장마지막, 밑에있던 요소) 와 부모 요소의 값을 비교 한다.
  // 현재요소가 크면 위로 올려야하기 때문에 swap()을 쓴다.
  while (heap[currentIndex] > heap[getParentIndex(currentIndex)]) {
    swap(currentIndex, getParentIndex(currentIndex));

    // currentIndex를 비교했던 부모요소로 재할당시킨다.
    currentIndex = getParentIndex(currentIndex);
  }
}

function poll() {
  // 가장 최상단 요소가 최댓값일 테고
  const maxValue = heap[0];

  // 그 최상단 요소와 가장 아래에있는 요소로 대체한다. (제거해도되는데 여기서는 대체함)
  heap[0] = heap[heap.length - 1];
  // 배열의 길이를 줄여 맨위에 할당했던 마지막 요소를 없애준다.
  heap.length--;

  // 여전히 heap의 규칙인지 확인해야한다.
  // 이때 위에서부터 제일 아래로 실행되는 heapifyDown함수 실행
  // 위에서 끝에있던 요소를 첫번째로 대체했었기 때문에
  heapifyDown();

  return maxValue;
}

function heapifyDown() {
  // index 0 최상위 요소
  let currentIndex = 0;

  // 현재 요소를 맨위에 놓고 자식이 더 크면 현재와 자식을 바꿔주는 while문 반복

  // 왼쪽 요소가 있는지 확인
  while (heap[getLeftChildIndex(currentIndex)] !== undefined) {
    let biggestChildIndex = getLeftChildIndex(currentIndex);

    if (
      heap[getRightChildIndex(currentIndex)] !== undefined &&
      heap[getRightChildIndex(currentIndex)] >
        heap[getLeftChildIndex(currentIndex)]
    ) {
      biggestChildIndex = getRightChildIndex(currentIndex);
    }

    if (heap[currentIndex] < heap[biggestChildIndex]) {
      swap(currentIndex, biggestChildIndex);
      currentIndex = biggestChildIndex;
    } else {
      return;
    }
  }
}
