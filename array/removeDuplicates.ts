function removeDuplicates(nums: number[]): number {
  let k = 0
  let u: number
  nums.forEach((n) => {
    if (n !== u) {
      nums[k] = n
      k++
      u = n
    }
  })
  return k
}

removeDuplicates([1, 1, 2])
