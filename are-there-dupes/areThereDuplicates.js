// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// function FrequencyMap(array) {
//   for (const item of array) {
//     this[item] = (this[item] || 0) + 1
//   }
// }

// function areThereDuplicates(...args) {
//   const input = new FrequencyMap(args)
//   for (const item in input) {
//     if (input[item] > 1) {
//       return true
//     }
//   }
//   return false
// }

// Other solution
// function areThereDuplicates() {
//   let collection = {}
//   for(let val in arguments){
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//   }
//   for(let key in collection){
//     if(collection[key] > 1) return true
//   }
//   return false;
// }

// Multiple pointers
// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }

// One Liner
function areThereDuplicates() {
  console.log(arguments)
  console.log(new Set(arguments))
  return new Set(arguments).size !== arguments.length
}

console.log(areThereDuplicates(1, 2, 3, 4), false)
console.log(areThereDuplicates("a", "b", "d", 2), false)
console.log(areThereDuplicates("a", "b", "d", "a"), true)
