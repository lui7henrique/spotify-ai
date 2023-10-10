import axios from 'axios'
import { getCurrentUserPlaylists } from './requests/get-current-user-playlists'
import { getUserTopItems } from './requests/get-user-top-items'
import { getPlaylistById } from './requests/get-playlist-by-id'

export const spotifyClient = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
})

export const spotify = {
  getCurrentUserPlaylists,
  getUserTopItems,
  getPlaylistById,
}
