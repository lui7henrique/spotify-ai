import { GenreCount } from './count-genres'

export const sortGenresByAmount = (genres: GenreCount[]): GenreCount[] => {
  genres.sort((a, b) => b.amount - a.amount)

  return genres
}
