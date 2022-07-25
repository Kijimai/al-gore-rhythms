// Write a function which takes in a string and returns counts of each character in the string

function FreqMap(str) {

  for (const letter of str) {
    if (letter != " ") {
      this[letter] ??= 0
      this[letter]++
    }
  }
}

function stringCount(str) {
  if (!str) return null
  let lower = str.toLowerCase()
  let strMap = new FreqMap(lower)
  return strMap
}

console.log(stringCount("aaaaaa"))
console.log(stringCount("Beepbbbb"))
console.log(stringCount("Beepbbbb        "))
console.log(stringCount())
