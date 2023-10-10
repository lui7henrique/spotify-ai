import { Album, Artist } from './album'
import { ExternalUrls } from './external-urls'

export type TrackType = 'track'

export type ExternalIDS = {
  isrc: string
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
