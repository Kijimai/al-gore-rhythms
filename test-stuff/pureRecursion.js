function collectOddValues(arr) {
  let result = []

  if(arr.length === 0) {
    return result
  }

  if(arr[0] % 2 !== 0) {
    result.push(arr[0])
  }
  console.log(arr)
  result = result.concat(collectOddValues(arr.slice(1)))
  return result
}

console.log(collectOddValues([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))