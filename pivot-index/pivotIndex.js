// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.


/** 
* @param {number[]} nums 
* @return {number}
* 
*/

var pivotIndex = function(nums) {
  let total = 0
  let leftSum = 0
  
  // get total sum of array
  nums.forEach(num => {
      total += num
  })
  
  //loop through array and increment leftSum based on nums[i]
  // during each loop, check if total - leftSum - currentNum in array is equal to the leftSum, 
  // if true -- return index i, otherwise -1 if the pivot does not exist
  for(let i = 0; i < nums.length; i++) {
      if(total - leftSum - nums[i] === leftSum) {
          return i
      }
      leftSum += nums[i]
  }    
  return -1
};