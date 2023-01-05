function myAtoi(s: string): number {
  let trimmed = s
  let isNegative: boolean = false

  while (trimmed[0] === ' ') {
    trimmed = trimmed.slice(1)
  }
  if (trimmed[0] === '+' || trimmed[0] === '-') {
    isNegative = trimmed[0] === '-'
    trimmed = trimmed.slice(1)
  }
  const result: string[] = []
  let i = 0
  while (i < trimmed.length && (Number(trimmed[i]) || trimmed[i] === '0')) {
    result.push(trimmed[i])
    i++
  }
  const number = isNegative ? -Number(result.join('')) : Number(result.join(''))
  if (!number) {
    return 0
  }
  if (number < -2147483648) {
    return -2147483648
  }
  if (number > 2147483647) {
    return 2147483647
  }
  return number
}

console.log(myAtoi('   -42'))
