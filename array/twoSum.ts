function twoSum(nums: number[], target: number): number[] {
  return nums.reduce((acc: number[], c, i) => {
    nums.forEach((n, j) => {
      if (i !== j && c + n === target) {
        acc = [i, j]
      }
    })

    return acc
  }, [])
}

console.log(twoSum([2, 7, 11, 15], 9))
