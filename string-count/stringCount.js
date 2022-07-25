// Write a function which takes in a string and returns counts of each character in the string

function FreqMap(str) {
  let lower = str.toLowerCase()
  for (const letter of lower) {
    this[letter] ??= 0
    this[letter]++
  }
}

function stringCount(str) {
  if (!str) return null
  let strMap = new FreqMap(str)
  return strMap
}

console.log(stringCount("aaaaaa"))
console.log(stringCount("Beepbbbb"))
console.log(stringCount())
