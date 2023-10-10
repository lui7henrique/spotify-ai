'use client'

import { PlaylistItem as PlaylistItemType } from '@/services/spotify/requests/get-current-user-playlists/types'
import Image from 'next/image'
import { Skeleton } from './ui/skeleton'

type PlaylistItemProps = {
  item: PlaylistItemType
}

export const PlaylistItem = (props: PlaylistItemProps) => {
  const {
    item: { name, images, owner },
  } = props

  return (
    <div className="w-full rounded-lg bg-foreground/5 p-4 transition-all hover:bg-foreground/10">
      <figure className="relative aspect-square w-full overflow-hidden rounded-lg shadow-md">
        <Image src={images[0].url} fill alt={name} objectFit="cover" />
      </figure>

      <div className="mt-4 pb-2">
        <h3 className="line-clamp-1 text-sm font-bold">
          {name === '' ? '⠀' : name}
        </h3>
        <h4 className="text-sm text-muted-foreground">
          By {owner.display_name}
        </h4>
      </div>
    </div>
  )
}

export const PlaylistItemSkeleton = () => (
  <div className="w-full rounded-lg bg-foreground/5 p-4 transition-all hover:bg-foreground/10">
    <Skeleton className="aspect-square w-full rounded-lg shadow-md" />

    <div className="mt-4 space-y-2 pb-2">
      <Skeleton className="h-4 w-full rounded-lg" />
      <Skeleton className="h-4 w-1/2 rounded-lg" />
    </div>
  </div>
)
