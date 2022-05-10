const mySum = (...nums) => {
  const total = nums.reduce((acc, curr) => {
    return acc + curr
  })
  return total
}

module.exports = { mySum }