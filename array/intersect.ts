function intersect(nums1: number[], nums2: number[]): number[] {
  let [shorter, longer] = [nums1, nums2].sort((a, b) => a.length - b.length)
  const result: number[] = []
  longer.forEach((n) => {
    if (shorter.includes(n)) {
      result.push(n)
      const shortI = shorter.indexOf(n)
      shorter = [...shorter.slice(0, shortI), ...shorter.slice(shortI + 1)]
    }
  })
  return result
}

console.log(intersect([1, 2, 2, 1], [2, 2]))
