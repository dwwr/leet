/**
 Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix: number[][]): void => {
  let originalLength = matrix.length
  matrix.forEach((row) => {
    matrix.forEach((_, j) => {
      matrix[j].push(row[j])
    })
  })
  matrix.forEach((row) => {
    row.splice(0, originalLength)
    row.reverse()
  })
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
rotate(matrix)
console.log(matrix)

// [[7,4,1],[8,5,2],[9,6,3]]
