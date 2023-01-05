/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const originalLength = s.length
  let i = originalLength - 1
  let j = originalLength
  while (i >= 0) {
    s[j] = s[i]
    i--
    j++
  }
  s.splice(0, originalLength)
}

let string = ['h', 'e', 'l', 'l', 'o']
reverseString(string)
console.log(string)
