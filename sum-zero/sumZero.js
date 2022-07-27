// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

const array1 = [-3, -2, -1, 0, 1, 2, 3]
const array2 = [-2, 0, 1, 3]
const array3 = [1, 2, 3]
const array4 = [-6, -2, -1, 0, 1, 2, 6, 10]
const array5 = [-25, 5, 6, 25, 99, 1000]
// time = O(n)
// space = O(1)

function sumZero(nums) {
  let leftIndex = 0
  let rightIndex = nums.length - 1
  console.log("initial indexes", leftIndex, rightIndex)
  while (leftIndex < rightIndex) {
    let sum = nums[leftIndex] + nums[rightIndex]
    if (sum === 0) {
      return [nums[leftIndex], nums[rightIndex]]
    } else if (sum > 0) {
      rightIndex--
    } else {
      leftIndex++
    }
  }
  return undefined
}

console.log(sumZero(array1), "[-3, 3]")
console.log(sumZero(array2), "undefined")
console.log(sumZero(array3), "undefined")
console.log(sumZero(array4), "[-6, 6]")
console.log(sumZero(array5), "[-25, 25]")