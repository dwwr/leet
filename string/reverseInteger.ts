function reverse(x: number): number {
  const string = x
    .toString()
    .split('')
    .reduceRight((acc: string[], c) => {
      if (c === '0' && acc.length === 0) {
        return acc
      }
      if (c === '-') {
        acc.unshift(c)
        return acc
      }
      acc.push(c)
      return acc
    }, [])
    .join('')

  const number = Number(string)
  if (number < -2147483648 || number > 2147483647) {
    return 0
  }
  return number
}

console.log(reverse(-1230))
