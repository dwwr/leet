/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let i = 0
  while (i < nums.length) {
    if (nums[i] === 0) {
      const zero = nums.splice(i, 1)
      nums.push(...zero)
    }
    if (nums[i] !== 0) {
      i++
    }
    if (nums.slice(i, nums.length).every((n) => n === 0)) {
      break
    }
  }
}

// Output: [1,3,12,0,0]
// [1,0,1]
// [0, 1, 0, 3, 12]
const digits = [1, 0, 1]
moveZeroes(digits)
console.log(digits)
