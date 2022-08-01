function averagePair(nums, target) {
  // add whatever parameters you deem necessary - good luck!
  for (let i = 0; i < nums.length - 1; i++) {
    if(!nums) return false
    console.log((nums[i] + nums[i + 1]) / 2)
    if ((nums[i] + nums[i + 1]) / 2 === target) {
      return true
    }
  }
  return false
}

console.log(averagePair([1,2,3],2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19],8));
console.log(averagePair([-1,0,3,4,5,6], 4.1));
console.log(averagePair([],4));
