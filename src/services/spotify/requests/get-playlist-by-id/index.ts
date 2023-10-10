import { spotifyClient } from '../../client'
import { GetPlaylist } from './types'

export const getPlaylistById = async (id: string) => {
  const { data } = await spotifyClient.get<GetPlaylist>(`/playlists/${id}`)

  return data
}
