const arr = [1, 2, 3, 10];

function productOfArray(nums) {
  if (nums.length === 0) {
    return 1
  }
  return nums.pop() * productOfArray(nums)
}

console.log(productOfArray(arr))