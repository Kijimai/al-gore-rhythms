// time - O(n^2)

const numArray = [5, 7, 12, 1, 2, 4, 6]

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

function bubble(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      // console.log(`[${arr}], ${arr[j]} ${arr[j + 1]}`)
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

console.log(bubble(numArray))
