import { TimeRange } from '@/types/term'
import { spotifyClient } from '../../client'
import { GetUserTopArtists } from './get-user-top-artists'
import { GetUserTopTracks } from './get-user-top-tracks'

export const getUserTopItems = async <T extends 'artists' | 'tracks'>(
  type: T,
  timeRange: TimeRange,
): Promise<T extends 'artists' ? GetUserTopArtists : GetUserTopTracks> => {
  const response = await spotifyClient.get(`/me/top/${type}`, {
    params: {
      limit: 50,
      time_range: timeRange,
    },
  })

  return response.data as T extends 'artists'
    ? GetUserTopArtists
    : GetUserTopTracks
}
