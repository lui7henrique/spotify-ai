import { spotify } from '@/services/spotify'
import {
  Artist,
  RecentlyPlayed,
} from '@/types/requests/me/player/recently-played'

export const getRecentlyArtistsAmount = async (afterTimestamp: string) => {
  const { data } = await spotify.get<RecentlyPlayed>(
    '/me/player/recently-played',
    {
      params: {
        limit: 50,
        after: afterTimestamp,
      },
    },
  )

  const uniqueArtists: Set<Artist> = new Set()

  data.items.forEach((item) => {
    item.track.artists.forEach((artist) => {
      uniqueArtists.add(artist)
    })
  })

  return uniqueArtists.size
}
