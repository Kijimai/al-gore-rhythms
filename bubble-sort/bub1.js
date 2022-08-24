// time - O(n^2)

const numArray = [5, 7, 12, 1, 2, 4, 6]
const numArray2 = [1231, 42, 45, 5, 1, 43, 66, 98, 32, 11]
const numArray3 = [8, 1, 2, 3, 4, 5, 6, 7]
//unoptimized
// function bubble(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       // Swap the comparator around to change from ascending to descending, vice versa
//       console.log(`[${arr}], ${arr[j]}, ${arr[j+1]}`)
//       if (arr[j] > arr[j + 1]) {
//         swap(numArray, j, j + 1)
//       }
//     }
//   }
//   return arr
// }

// function bubble(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       // console.log(`[${arr}], ${arr[j]} ${arr[j + 1]}`)
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1)
//       }
//     }
//   }
//   return arr
// }

// More Optimized to check if a swap occured, if not -- stop
// Best for "nearly sorted" arrays -- to avoid having to re-sort
function bubble(arr) {
  let swapped
  for (let i = arr.length; i > 0; i--) {
    swapped = true
    for (let j = 0; j < i - 1; j++) {
      console.log(`[${arr}], ${arr[j]} ${arr[j + 1]}`)
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        swapped = false
      }
    }
    if (swapped) break
  }
  return arr
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

// console.log(bubble(numArray))
// console.log(bubble(numArray2))
console.log(bubble(numArray3))