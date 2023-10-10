import { ArtistItem } from '../get-user-top-items/get-user-top-artists'

export type Genre = {
  artists: ArtistItem[]
  name: string
  amount: number
}

export type GetGenres = Genre[]
