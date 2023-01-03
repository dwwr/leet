function plusOne(digits: number[]): number[] {
  let sum = [...digits.slice(0, -1), digits[digits.length - 1] + 1]
  for (let i = sum.length - 1; i >= 0; i--) {
    if (sum[i] === 10) {
      sum[i] = 0
      !sum[i - 1] ? sum.unshift(1) : sum[i - 1]++
    }
  }
  return sum
}

console.log(plusOne([1, 2, 3]))
