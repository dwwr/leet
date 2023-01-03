function strStr(haystack: string, needle: string): number {
  let index = -1
  let i = 0
  while (i < haystack.length) {
    if (haystack.slice(i, i + needle.length) === needle) {
      index = i
      return index
    }
    i++
  }
  return index
}

console.log(strStr('sadbutsad', 'sad'))
