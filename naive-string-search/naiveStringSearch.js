function stringSearch(str, val) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < val.length; j++) {
      // break if the index value doesn't match with the str index value
      if (val[j] !== str[i + j]) {
        break
      }
      // if j counters hits the last index of the val string, increase count by 1
      if (j === val.length - 1) {
        console.log("found!")
        count++
      }
    }
  }
  return count
}

console.log(stringSearch("wowomgzomg", "zom")) // 1
console.log(stringSearch("ananakin", "anakin")) // 1
