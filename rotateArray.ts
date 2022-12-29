/**
 Do not return anything, modify nums in-place instead.
 */
const nums = [1, 2, 3]

function rotate(nums: number[], k: number): void {
  let i = 0
  while (i < k) {
    nums.unshift(nums.pop()!)
    i++
  }
}

rotate(nums, 3)
console.log(nums)
