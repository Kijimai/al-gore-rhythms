// Binary Search
// Accept a sorted array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes before the right pointer:
//   Create a pointer in the middle
//   If you find the value you want, return the index
//   If the value is too small, move the left pointer up
//   If the value is too large, move the right pointer down
// If you never find the value, return -1

function binarySearch(arr, val) {
  let left = 0
  let right = arr.length - 1
  let middle = Math.floor((left + right) / 2)
  while (arr[middle] !== val && left <= right) {
    if (arr[middle] > val) {
      right = middle - 1
    } else {
      left = middle + 1
    } 
    middle = Math.floor((left + right) / 2)
  }
  return arr[middle] === val ? middle : -1
}


// function binarySearch(arr, val) {
//   let left = 0,
//     right = arr.length - 1
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2)
//     if (val === arr[mid]) return mid
//     else if (val < arr[mid]) right = mid - 1
//     else left = mid + 1
//   }
//   return -1
// }

console.log(binarySearch([1, 3, 4, 5, 8, 9, 10, 11, 13, 14, 15, 18], 15))
