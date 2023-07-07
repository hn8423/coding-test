function twoSum(nums, target) {
  let memo = {};
  for (let v in nums) {
    memo[v] = true;
  }
  for (let v in nums) {
    let neededNumber = target - v;
    if (neededNumber in memo) {
      return true;
    }
    return false;
  }
}

twoSum((nums = [4, 1, 9, 7, 8, 2]), (target = 14));

function longestConsecutive(nums) {
  let longest = 0;
  let numDict = {};
  for (let num in nums) {
    numDict[num] = true;
  }
  for (let num in numDict) {
    if (!(num - 1 in numDict)) {
      let cnt = 1;
      let target = num + 1;
      while (target in numDict) {
        target++;
        cnt++;
      }
      longest = Math.max(longest, cnt);
    }
  }
  return longest;
}
longestConsecutive([6, 7, 100, 5, 4, 4]);
