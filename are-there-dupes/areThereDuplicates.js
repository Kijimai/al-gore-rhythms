// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

function FrequencyMap(array) {
  for (const item of array) {
    this[item] = (this[item] || 0) + 1
  }
}

function areThereDuplicates(...args) {
  const input = new FrequencyMap(args)
  for (const item in input) {
    if (input[item] > 1) {
      return true
    }
  }
  return false
}

console.log(areThereDuplicates(1, 2, 3, 4), false)
console.log(areThereDuplicates("a", "b", "d", 2), false)
console.log(areThereDuplicates("a", "b", "d", "a"), true)
