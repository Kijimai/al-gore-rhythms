// Write a function which takes in a string and returns counts of each character in the string

function FreqMap(str) {
  for (const letter of str) {
    this[letter] ??= 0
    this[letter]++
  }
}

function stringCount(str) {
  let strMap = new FreqMap(str)
  return strMap
}

console.log(stringCount("aaaaaa"))
console.log(stringCount("Beep"))
