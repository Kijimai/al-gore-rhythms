function sumRange(num) {
  if(num === 1) return 1
  console.log(`adding ${num} to ${num - 1}`)
  return num + sumRange(num - 1)
}

console.log(sumRange(10))