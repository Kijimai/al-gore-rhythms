// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// Solution using two pointers:
// Create a variable to keep track of uniqueCount
// Create two pointers
// Pointing to IndexOne
// Pointing to IndexTwo
// while the two value of both index are equal to each other, Add 1 to indexTwo
// if the values are no longer the same, increase the count of uniqueCount by 1
// return the uniqueCount
let startTime = Date.now()
// 
// time = O(n)
// space = O(1)
// function countUniqueValues(sortedArray) {
//   let indexOne = 0
//   let indexTwo = 1
//   let uniqueCount = 0
//   while (indexOne < sortedArray.length) {
//     if (sortedArray[indexOne] === sortedArray[indexTwo]) {
//       indexTwo++
//     } else if (sortedArray[indexOne] !== sortedArray[indexTwo]) {
//       indexOne = indexTwo
//       uniqueCount++
//     }
//   }
//   return uniqueCount
// }

// console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]), 2)
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]), 7)
// console.log(countUniqueValues([]), 0)
// console.log(countUniqueValues([-2, -1, -1, 0, 1]), 4)

// Solution using a Frequency Map
// time = O(n)
// space = O(1)

function countUniqueValues(sortedArray) {
  const numMap = new FreqMap(sortedArray)
  let uniqueCount = Object.keys(numMap).length
  return uniqueCount
}

function FreqMap(nums) {
  for (const number of nums) {
    this[number] ??= 0
    this[number]++
  }
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]), 2)
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]), 7)
console.log(countUniqueValues([]), 0)
console.log(countUniqueValues([-2, -1, -1, 0, 1]), 4)


console.log(Date.now() - startTime + 'ms', `Starting Time: ${startTime}, End Time: ${Date.now()}`)