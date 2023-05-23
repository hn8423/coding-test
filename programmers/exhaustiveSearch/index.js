function findSubset(arr, sum) {
  const n = arr.length;

  function search(curr, i) {
    if (curr == sum) return true;
    if (i == n || curr > sum) return false;

    return search(curr + arr[i], i + 1) || search(curr, i + 1);
  }

  return search(0, 0);
}
