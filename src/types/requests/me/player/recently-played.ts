export type Cursors = {
  after: string
  before: string
}

export type URI =
  | 'spotify:album:3VGvkH5X8bhjIV0rSohaVU'
  | 'spotify:playlist:2A31heGR1jMns5AW04eiXR'
  | 'spotify:playlist:37i9dQZF1DZ06evO2F3pjf'

export type ContextType = 'album' | 'playlist'

export type ExternalUrls = {
  spotify: string
}

export type Context = {
  type: ContextType
  external_urls: ExternalUrls
  href: string
  uri: URI
}

export type AlbumType = 'album' | 'single'
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

export type ExternalIDS = {
  isrc: string
}

export type TrackType = 'track'

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
  type: ContextType
  uri: string
}

export type Track = {
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
  type: TrackType
  uri: string
}

export type Item = {
  track: Track
  played_at: Date
  context: Context | null
}

export type RecentlyPlayed = {
  items: Item[]
  next: string
  cursors: Cursors
  limit: number
  href: string
}
