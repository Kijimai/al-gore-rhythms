// Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values my be the same

//same([1, 2, 3], [4, 1, 9]) true
//same([1, 2, 3], [1, 9]) false
//same([1, 2, 1], [4, 4, 1]) false (must be the same frequency)

// Naive Approach
// time - O(n^2)
// space - O(n^2)
// function same(arr1, arr2) {
//   //Short circuit to false if the arrays lengths are different
//   if(arr1.length !== arr2.length) {
//     return false
//   }
//   for(let i = 0; i < arr1.length; i++) {
//     // IndexOf returns -1 if the index does not exist
//     let correctIndex = arr2.indexOf(arr1[i] ** 2)
//     if(correctIndex === -1) {
//       return false
//     }
//     arr2.splice(correctIndex, 1)
//   }
//   return true
// }

//REFACTORED
// time - O(n)
// space - O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let freqCount1 = {}
  let freqCount2 = {}

  for (let value of arr1) {
    freqCount1[value] = (freqCount1[value] || 0) + 1
  }
  for (let value of arr2) {
    freqCount2[value] = (freqCount2[value] || 0) + 1
  }

  for (let key in freqCount1) {
    if (!(key ** 2 in freqCount2)) {
      return false
    }
    if (freqCount2[key ** 2] !== freqCount1[key]) {
      return false
    }
  }
  return true
}

console.log(same([1, 2, 3], [4, 1, 9]), true)
console.log(same([1, 2, 3], [4, 4, 1]), false)
console.log(same([1, 2, 2, 4, 5], [4, 4, 1, 9, 11]), false)
console.log(same([1, 2, 2, 4, 5], [4, 4, 1, 16, 25]), true)
console.log(same([1, 2, 2, 4, 5], [4, 4, 1, 25]), false)
