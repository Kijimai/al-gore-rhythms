/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12]
const sum1 = 16
/*
expected1 = [
  [2, 5, 3, 6],    
  [3, 6, 7], // 3+6+7 =16
];
*/

const nums2 = []
const sum2 = 5
// expected2 = [];

const nums3 = [10, 15, 20, 35, 30]
const sum3 = 5
// expected3 = [];

const nums4 = [2, 5, 3, 6, 7, 0, 0, 23, 12]
const sum4 = 16
/* expected4 = [
  [2, 5, 3, 6], // 2+5+3+6 = 16
  [3, 6, 7], // 3+6+7 = 16
  [3, 6, 7, 0], // 3+6+7+0 = 16
  [3, 6, 7, 0, 0], // 3+6+7+0+0 = 16
]; */

// const nums5 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
// const sum5 = -16;
/* expected5 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
]; */

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
 function sumArray(arr) {
  let total = 0
  for (let i in arr) {
    total += arr[i]
  }
  return total
}

function findConsqSums(nums, targetSum) {
  let currSet = []
  const returnedArr = []
  if (!nums) return returnedArr
  for (let i = 0; i < nums.length; i++) {
    currSet = []
    for (let j = i; j < nums.length; j++) {
      currSet.push(nums[j])
      if (sumArray(currSet) === targetSum) {
        returnedArr.push(currSet)
        currSet = []
      }
    }
  }
  return returnedArr
}

console.log(findConsqSums(nums1, sum1))
console.log(findConsqSums(nums2, sum2))
console.log(findConsqSums(nums3, sum3))
console.log(findConsqSums(nums4, sum4))