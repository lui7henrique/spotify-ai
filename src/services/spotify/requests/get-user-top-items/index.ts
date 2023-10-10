import { TimeRange } from '@/types/time-range'
import { spotifyClient } from '../../client'
import { GetUserTopArtists } from './get-user-top-artists'
import { GetUserTopTracks } from './get-user-top-tracks'

export const getUserTopItems = async <T extends 'artists' | 'tracks'>(
  type: T,
  timeRange: TimeRange = 'medium_term',
): Promise<T extends 'artists' ? GetUserTopArtists : GetUserTopTracks> => {
  const { data } = await spotifyClient.get(`/me/top/${type}`, {
    params: {
      limit: 50,
      time_range: timeRange,
    },
  })

  return data as T extends 'artists' ? GetUserTopArtists : GetUserTopTracks
}
