function recursiveRange(range) {
  if(range === 0) return 0
  console.log(range)
  return range + recursiveRange(range - 1) 
}

console.log(recursiveRange(10))
console.log(recursiveRange(6))