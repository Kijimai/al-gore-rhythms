/* 
 Given  a word (lower case letters only), and a set of tiles that can be used to make a word (also a string, each tile is one lower case letter or underscore), determine the point value possible for the word. The underscore represents a blank tile that can stand in for any letter but has a zero point value
 
 Example:
  word: cat
  tiles: tmoca
  result: 5 (3 + 1 + 1)
  
  word: cat
  tiles: tmoa_
  result: 2 (1 + 1)
*/

const ptsMap = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10,
  _: 0,
}

/*
 *@param {string, string} word
 *@return {number} totalPts
 */

// time = O(n + m)
// space = O(n)
function getWordPts(word, tiles) {
  let totalPts = 0
  const tileMap = {}
  //Initialize tileMap
  for (const tileLetter of tiles) {
    tileMap[tileLetter] ??= 0
    tileMap[tileLetter]++
  }
  console.log(tileMap)
  for (const letter of word) {
    if (letter in tileMap && tileMap[letter] > 0) {
      tileMap[letter]--
      // console.log("letter worth:", letter, ptsMap[letter])
      totalPts += ptsMap[letter]
    } else if ("_" in tileMap && tileMap["_"] > 0) {
      // console.log("letter worth:", '_', ptsMap['_'])
      tileMap["_"]--
    } else {
      return 0
    }
  }

  return totalPts
}
console.log(getWordPts('cat', 'tmoca')) // Expected 5
console.log(getWordPts('cat', 'tmoa_')) // Expected 2
console.log(getWordPts("alligator", "gorila")) // Expected 0
console.log(getWordPts("alligator", "gorila_____")) // Expected 7

// Solution by Brian Do
// word = n, tiles = m
// time = O(n + m)
// space = O(m)

// make frequency map of tiles
/* for each letter of word
     if there are tiles remaining, subtract the tile and add value to the score
     otherwise
      if there are underscores remaining, subtract the underscore(s) and move on
      if no underscores remain, return 0 
*/
// function scoreWord(word, tiles) {
//   let score = 0
//   const tileMap = new FrequencyMap(tiles)

//   for(const letter of word) {
//     if(letter in tileMap && tileMap[letter] > 0) {
//       tileMap[letter]--
//       console.log('updated', tileMap)
//       score += ptsMap[letter]
//     } else if ('_' in tileMap && tileMap['_'] > 0) {
//       tileMap['_']--
//     } else {
//       return 0
//     }
//   }

//   return score
// }

// // ?? is a nullish coalescing operator -- if it is nullish, initialize to 0
// // the frequency mapper iterates through the str and
// function FrequencyMap(str) {
//   for(const letter of str) {
//     this[letter] ??= 0
//     this[letter]++
//   }
// }

// console.log(scoreWord('cat', 'tmoca'), 5) // Expected 5
// console.log(scoreWord('cat', 'tmoa_'), 2) // Expected 2
// console.log(scoreWord('cat', 'tmoa'), 0) // Expected 0
// console.log(scoreWord('cat', '___'), 0) // Expected 0

//My old logic -- INCORRECT
// const splitTiles = tiles.split("")
// console.log(splitTiles)
// for (let i = 0; i < word.length; i++) {
//   for (let j = 0; j < splitTiles.length; j++) {
//     if (word[i] == splitTiles[j]) {
//       console.log("letter", splitTiles[j])
//       console.log("points of letter", ptsMap[splitTiles[j]])
//       splitTiles.pop(j)
//       totalPts += ptsMap[splitTiles[j]]
//     }
//   }
// }
// console.log(splitTiles)
