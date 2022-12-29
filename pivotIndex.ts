const pivotIndex = (nums: number[]): number => {
  return nums.reduce((acc, _, i, arr) => {
    if (acc !== -1) {
      return acc
    }
    const leftSum = arr.slice(0, i).reduce((a, n) => a + n, 0)
    const rightSum = arr.slice(i + 1).reduce((a, n) => a + n, 0)
    return leftSum === rightSum ? i : -1
  }, -1)
}
