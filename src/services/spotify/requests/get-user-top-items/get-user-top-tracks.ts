import { Track } from '@/types/track'

export type GetUserTopTracks = {
  items: Track[]
  total: number
  limit: number
  offset: number
  href: string
  next: null
  previous: null
}
