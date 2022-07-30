// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr,...args) {
  const values = args
  console.log(values)
  return arr.filter((val, i) => {
    if(!values.includes(arr[i])) return val
  })
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);