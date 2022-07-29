//Write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// Naive solution
// time = O(n^2)
// space = O(n)
/**
 * @param {Number} [nums] - array of numbers
 * @param {Number} n - stopping point
 */
// function maxSubArraySum(nums, n) {
//   // EDGE CASE: input number cant be greater than nums' array length
//   if (n > nums.length) {
//     return null
//   }
//   let max = -Infinity
//   // Stop before the last index of the array minus the amount of times we need to add numbers together plus 1
//   for (let i = 0; i < nums.length - n + 1; i++) {
//     // hold the current sum to compare to current max
//     let temp = 0
//     for (let j = 0; j < n; j++) {
//       temp += nums[i + j]
//     }
//     if (temp > max) {
//       max = temp
//     }
//   }
//   return max
// }

// Sliding window approach
// time - O(n)
// space - O(1)
function maxSubArraySum(nums, n) {
  let maxSum = 0
  let tempSum = 0
  if (nums.length < n) {
    return null
  }

  for (let i = 0; i < n; i++) {
    maxSum += nums[i]
  }
  // console.log('maxsum', maxSum)
  tempSum = maxSum

  for (let i = n; i < nums.length; i++) {
    tempSum = tempSum - nums[i - n] + nums[i]
    // console.log(tempSum, maxSum)
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

console.log(maxSubArraySum([1, 2, 3, 4, 5, 6, 7], 2)) // 13
console.log(maxSubArraySum([1, 2, 3], 4)) // null
console.log(maxSubArraySum([99, 2, 3, 1, 76, 32, 66], 4)) // (1 + 76 + 32 + 66) 175
