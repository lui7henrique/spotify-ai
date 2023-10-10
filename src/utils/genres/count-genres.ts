export type GenreCount = {
  name: string
  amount: number
}

type Count = Record<string, number>

export const countGenres = (arr: string[]): GenreCount[] => {
  const count: Count = {}

  arr.forEach((genre) => {
    if (count[genre]) {
      count[genre]++
    } else {
      count[genre] = 1
    }
  })

  const result: GenreCount[] = Object.keys(count).map((genre) => ({
    name: genre,
    amount: count[genre],
  }))

  return result
}
