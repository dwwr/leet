function firstUniqChar(s: string): number {
  const chars = s.split('').reduce((acc, c) => {
    return [...acc, { [c]: acc[c] ? acc[c] + 1 : 1 }]
  }, [])
  const firstUnique = Object.entries(chars).find(
    (c: [string, number]) => c[1] === 1
  )

  return firstUnique ? s.indexOf(firstUnique[0]) : -1
}

console.log(firstUniqChar('dddccdbba'))
