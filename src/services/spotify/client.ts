import axios from 'axios'
import { getCurrentUserPlaylists } from './requests/get-current-user-playlists'

export const spotifyClient = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
})

export const spotify = {
  getCurrentUserPlaylists,
}
