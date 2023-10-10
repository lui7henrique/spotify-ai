'use client'

import { useQuery } from 'react-query'
import { api } from '@/services/api'
import { GetPlaylist } from '@/services/spotify/requests/get-playlist-by-id/types'
import Image from 'next/image'
import { TrackItem, TrackItemSkeleton } from './track-item'
import { Separator } from './ui/separator'
import { Skeleton } from './ui/skeleton'

type PlaylistProps = { id: string }

export const PlaylistPage = ({ id }: PlaylistProps) => {
  const { data, isLoading } = useQuery([id], async () => {
    const { data } = await api.get<GetPlaylist>(`/spotify/playlists/${id}`)
    return data
  })

  if (isLoading) return <PlaylistPageSkeleton />

  if (!data) {
    return <p>handle error</p>
  }

  const { images, name, description, tracks } = data

  return (
    <div className="space-y-8 p-4">
      <div className="flex items-end gap-4">
        {images[0]?.url && (
          <div className="relative aspect-square w-1/4 overflow-hidden rounded-lg">
            <Image src={images[0]?.url} fill objectFit="cover" alt={name} />
          </div>
        )}

        <div className="w-3/4 space-y-4">
          <div>
            <span className="text-sm text-muted-foreground">
              Playlist pública
            </span>
            <h1 className="text-5xl font-bold">{name}</h1>
            <div
              className="text-lg text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-1">
        {tracks.items.map((item, index) => {
          return (
            <TrackItem
              item={item.track}
              key={item.track.id}
              index={index + 1}
            />
          )
        })}
      </div>
    </div>
  )
}

export const PlaylistPageSkeleton = () => (
  <div className="space-y-8 p-4">
    <div className="flex items-end gap-4">
      <Skeleton className="aspect-square w-1/4 rounded-lg" />

      <div className="w-3/4 space-y-4">
        <div className="space-y-2">
          <Skeleton className="aspect-square h-4 w-1/3 rounded-lg" />
          <Skeleton className="aspect-square h-16 w-1/2 rounded-lg" />
          <Skeleton className="aspect-square h-4 w-1/4 rounded-lg" />
        </div>
      </div>
    </div>

    <Separator />

    <div className="flex flex-col gap-1">
      {Array.from({ length: 20 }).map((_, index) => {
        return <TrackItemSkeleton key={index} />
      })}
    </div>
  </div>
)
