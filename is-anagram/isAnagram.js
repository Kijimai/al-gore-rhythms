// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as "cinema", formed from "iceman"

// time - O(n)
// space - O(n)
function FreqMap(str) {
  for (const letter of str) {
    this[letter] ??= 0
    this[letter]++
  }
}

function isAnagram(str1, str2) {
  if ((!str1 && str2) || (str1 && !str2)) return false
  if (str1.length !== str2.length) return false
  let str1Lower = str1.toLowerCase()
  let str2Lower = str2.toLowerCase()
  const str1Map = new FreqMap(str1Lower)
  const str2Map = new FreqMap(str2Lower)
  console.log(str1Map, str2Map)
  for (const letter in str1Map) {
    if (str1Map[letter] !== str2Map[letter]) {
      return false
    }
  }
  return true
}

console.log(isAnagram("", ""), true)
console.log(isAnagram("Racecar", ""), false)
console.log(isAnagram("Racecar", "racecar"), true)
console.log(isAnagram("racecar", "racecar"), true)
console.log(isAnagram("racecar", "dad"), false)
console.log(isAnagram("aaz", "zza"), false)
console.log(isAnagram("anagram", "nagaram"), true)
console.log(isAnagram("timetwisttext", "texttwisttime"), true)
