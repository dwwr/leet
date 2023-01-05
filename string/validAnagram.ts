function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }
  const [ss, tt] = [[...s].sort(), [...t].sort()]
  return ss.every((c, i) => {
    if (c !== tt[i]) {
      return false
    }
    return true
  })
}

console.log(isAnagram('aacc', 'ccac'))
