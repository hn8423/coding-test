function solution(nums) {
  const arr = [...new Set(nums)].length;
  const length = nums.length / 2;
  return arr < length ? arr : length;
}
