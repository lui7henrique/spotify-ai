import { ExternalUrls } from './external-urls'
import { Image } from './image'

export type AlbumTypeEnum = 'album'
export type AlbumType = 'ALBUM' | 'SINGLE' | 'COMPILATION'
export type ReleaseDatePrecision = 'day'

export type ArtistType = 'artist'

export type Artist = {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: ArtistType
  uri: string
}

export type Album = {
  album_type: AlbumType
  artists: Artist[]
  available_markets: string[]
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  release_date: Date
  release_date_precision: ReleaseDatePrecision
  total_tracks: number
  type: AlbumTypeEnum
  uri: string
}
