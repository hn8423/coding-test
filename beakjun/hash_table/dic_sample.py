def two_sum(nums,target):
  memo ={}
  for v in nums:
    memo[v] = True
  for v in nums:
    needed_number = target -v
    if needed_number in memo:
      return True
  return False

two_sum(nums=[4,1,9,7,8,2],target=14)

def longestConsecutive(nums):
  longest = 0
  num_dict = {}
  for num in nums:
    num_dict[num] = True
  for num in num_dict:
    if num -1 not in num_dict:
      cnt =1
      target = num + 1
      while target in num_dict:
        target +=1
        cnt += 1
      longest = max(longest,cnt)
  return longest

longestConsecutive([6,7,100,5,4,4])