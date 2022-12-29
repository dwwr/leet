function maxProfit(prices: number[]): number {
  return prices.reduce((acc, c, i, arr) => {
    if (c > arr[i - 1]) {
      return acc + c - arr[i - 1]
    }
    return acc
  }, 0)
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
