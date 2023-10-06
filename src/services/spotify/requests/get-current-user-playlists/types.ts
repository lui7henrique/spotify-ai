export type ExternalUrls = {
  spotify: string
}

export type Image = {
  url: string
  height: number
  width: number
}

export type Tracks = {
  href: string
  total: number
}

export type Owner = {
  external_urls: ExternalUrls
  followers: Tracks
  href: string
  id: string
  type: string
  uri: string
  display_name: string
}

export type PlaylistItem = {
  collaborative: boolean
  description: string
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  owner: Owner
  public: boolean
  snapshot_id: string
  tracks: Tracks
  type: string
  uri: string
}

export type GetCurrentUserPlaylists = {
  href: string
  limit: number
  next: string
  offset: number
  previous: string
  total: number
  items: PlaylistItem[]
}
