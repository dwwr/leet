function longestCommonPrefix(strs: string[]): string {
  let common: string[] = []
  strs[0].split('').every((c, i) => {
    const isCommon = strs.reduce((acc, curr) => {
      if (!acc) {
        return false
      }
      if (curr[i] === c) {
        return true
      }
      return false
    }, true)
    if (isCommon) {
      common = [...common, c]
      return true
    } else {
      return false
    }
  })
  return common.join('')
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
