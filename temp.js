let nums = [4,1,9,7,5,3,16]
let target = 14
let dic = {}

for (let i = 0; i < nums.length; i++) {
   dic[nums[i]] = true
}

for (let key in dic) {
    let other = target - key
    if(other in dic) {
        console.log(true)
        return
    }
}

//console.log(false)
return
