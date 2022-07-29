// Given two positive integers, find out if the two numbers have the same frequency of digits
// time O(n)
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// function sameFrequency(n1, n2) {
//   const firstNum = new FrequencyMap(n1)
//   const secondNum = new FrequencyMap(n2)

//   if (JSON.stringify(firstNum) === JSON.stringify(secondNum)) return true

//   return false
// }

// function FrequencyMap(num) {
//   const stringed = num.toString()
//   for (const i of stringed) {
//     this[i] ??= 0
//     this[i]++
//   }
// }

function sameFrequency(n1, n2) {
  const firstNum = new FrequencyMap(n1)
  const secondNum = new FrequencyMap(n2)

  if (JSON.stringify(firstNum) === JSON.stringify(secondNum)) {
    return true
  }
  return false
}

function FrequencyMap(num) {
  const stringed = num.toString()
  for (const i of stringed) {
    this[i] = (this[i] || 0) + 1
  }
}

console.log(sameFrequency(182, 281), true)
console.log(sameFrequency(34, 14), false)
console.log(sameFrequency(3589578, 5879385), true)
console.log(sameFrequency(22, 222), false)
