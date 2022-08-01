function whatIsInAName(collection, source) {
  // Only change code below this line
  const sourceKeys = Object.keys(source)
  return collection.filter((item) => {
    return sourceKeys.every(
      (key) => item[key] === source[key] && item.hasOwnProperty(key)
    )
  })
  // Only change code above this line
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
)

// should return [{ first: "Tybalt", last: "Capulet" }]
console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
)
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
