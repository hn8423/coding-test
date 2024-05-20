
function twoSum(nums: number[], target: number): number[] {
    // two pointer 
    let left = 0
    let right = nums.length
    while(left < right){
        if(nums[left] + nums[right] > target){
            right = right +1
        }
        else if(nums[left] + nums[right] < target){
            left = left -1
        }else if(nums[left] + nums[right] === target){
            return [left,right]
        }
    }
    return []
};

twoSum([2,7,11,15],9) // [0,1]