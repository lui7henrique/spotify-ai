export type AlbumType = 'ALBUM' | 'SINGLE' | 'COMPILATION'

export type ExternalUrls = {
  spotify: string
}

export type ArtistType = 'artist'

export type Artist = {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: ArtistType
  uri: string
}

export type Image = {
  height: number
  url: string
  width: number
}

export type ReleaseDatePrecision = 'day'

export type AlbumTypeEnum = 'album'

export type ExternalIDS = {
  isrc: string
}

export type ItemType = 'track'

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

export type Item = {
  album: Album
  artists: Artist[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIDS
  external_urls: ExternalUrls
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: ItemType
  uri: string
}

export type GetUserTopTracks = {
  items: Item[]
  total: number
  limit: number
  offset: number
  href: string
  next: null
  previous: null
}
