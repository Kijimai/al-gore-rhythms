// Basis for the helper method functions
// function outer(input) {
//   var outerScopedVariable = []

//   function helper(helperInput) {
//     helper(helperInput--)
//   }

//   helper(input)
//   return outerScopedVariable
// }


function collectOddValues(arr) {
  const result = []

  function helper(helperInput) {
    if(helperInput.length === 0) {
      return
    }

    if(helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }

    helper(helperInput.slice(1))
  }
  helper(arr)
  return result
}

console.log(collectOddValues([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))