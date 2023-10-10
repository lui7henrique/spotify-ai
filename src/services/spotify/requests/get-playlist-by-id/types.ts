import { Track } from '@/types/track'

export type ExternalUrls = {
  spotify: string
}

export type Followers = {
  href: null
  total: number
}

export type Image = {
  height: number | null
  url: string
  width: number | null
}

export type OwnerType = 'user' | 'artist'

export type Owner = {
  display_name?: string
  external_urls: ExternalUrls
  href: string
  id: string
  type: OwnerType
  uri: string
  name?: string
}

export type VideoThumbnail = {
  url: null
}

export type Item = {
  added_at: Date
  added_by: Owner
  is_local: boolean
  primary_color: null
  track: Track
  video_thumbnail: VideoThumbnail
}

export type Tracks = {
  href: string
  items: Item[]
  limit: number
  next: string
  offset: number
  previous: null
  total: number
}

export type GetPlaylist = {
  collaborative: boolean
  description: string
  external_urls: ExternalUrls
  followers: Followers
  href: string
  id: string
  images: Image[]
  name: string
  owner: Owner
  primary_color: null
  public: boolean
  snapshot_id: string
  tracks: Tracks
  type: string
  uri: string
}
