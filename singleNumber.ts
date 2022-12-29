function singleNumber(nums: number[]): number {
  const sum = nums.reduce((a, n) => a + n, 0)
  const setSum = Array.from(new Set(nums)).reduce((a, n) => a + n, 0)
  return setSum * 2 - sum
}

// 4,1,2,1,2]
// 4
