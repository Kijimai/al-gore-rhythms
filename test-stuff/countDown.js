function countDown(num) {
  if (num <= 0) {
    console.log("Finished counting down.")
    return
  }
  console.log(num)
  num--
  countDown(num)
}

console.log(countDown(10))
