function isValidSudoku(board: string[][]): boolean {
  let result = true
  board.forEach((row, index) => {
    const rowNums = row.filter((c) => c !== '.').map((c) => Number(c))
    if (!isValid(rowNums)) {
      result = false
    }

    const colNums = board
      .filter((c) => c[index] !== '.')
      .reduce((acc: number[], c) => {
        return [...acc, Number(c[index])]
      }, [])
    if (!isValid(colNums)) {
      result = false
    }
  })
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      const group = [
        ...board[i].slice(j, j + 3),
        ...board[i + 1]?.slice(j, j + 3),
        ...board[i + 2]?.slice(j, j + 3),
      ]
      const filtered = group.filter((c) => c !== '.')
      const groupNums = filtered.map((c) => Number(c))
      if (!isValid(groupNums)) {
        result = false
      }
    }
  }
  return result
}

const isValid = (group: number[]): boolean => {
  if (new Set(group).size !== group.length) {
    return false
  }
  return true
}

const board = [
  ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
  ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
  ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
  ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
]

console.log(isValidSudoku(board))
