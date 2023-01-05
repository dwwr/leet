function isPalindrome(s: string): boolean {
  const input = s.toLowerCase().replace(/[^a-z0-9]+/g, '')
  let i = 0
  while (i < input.length) {
    if (input[i] !== input[input.length - 1 - i]) {
      return false
    }
    i++
  }
  return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
