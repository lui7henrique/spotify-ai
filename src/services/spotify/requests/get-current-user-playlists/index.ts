import { spotifyClient } from '../../client'
import { GetCurrentUserPlaylists } from './types'

export const getCurrentUserPlaylists = async () => {
  const { data } = await spotifyClient.get<GetCurrentUserPlaylists>(
    '/me/playlists',
    {
      params: {
        limit: 50,
      },
    },
  )

  return data
}
