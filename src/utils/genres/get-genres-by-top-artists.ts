import { GetUserTopArtists } from '@/services/spotify/requests/get-user-top-items/get-user-top-artists'
import { countGenres } from './count-genres'
import { sortGenresByAmount } from './sort-genres-by-amount'

export const getGenresByArtists = (artists: GetUserTopArtists) => {
  const allGenres = artists.items.map((artist) => artist.genres)
  const flatGenres = allGenres.flatMap((genre) => genre)
  const countedGenres = countGenres(flatGenres)
  const sortedGenresByAmount = sortGenresByAmount(countedGenres)

  const genres = sortedGenresByAmount.map((genre) => {
    return {
      ...genre,
      artists: artists.items.filter((artists) =>
        artists.genres.includes(genre.name),
      ),
    }
  })

  return genres
}
