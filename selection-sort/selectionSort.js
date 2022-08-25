// time -- O(n^2)

const numArray = [34, 22, 10, 19, 17]

function selectionSort(arr) {
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j
      }
    }
    // Swapping only if the value of smallestIndex changed during the loop
    if (i !== smallestIndex) swap(arr, smallestIndex, i)
  }
  console.log(arr)
  return arr
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

selectionSort(numArray)
