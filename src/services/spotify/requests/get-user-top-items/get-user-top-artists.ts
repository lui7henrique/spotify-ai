export type ExternalUrls = {
  spotify: string
}

export type Followers = {
  href: null
  total: number
}

export type Image = {
  height: number
  url: string
  width: number
}

export type Type = 'artist'

export type Item = {
  external_urls: ExternalUrls
  followers: Followers
  genres: string[]
  href: string
  id: string
  images: Image[]
  name: string
  popularity: number
  type: Type
  uri: string
}

export type GetUserTopArtists = {
  items: Item[]
  total: number
  limit: number
  offset: number
  href: string
  next: null
  previous: null
}
