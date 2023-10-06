'use client'

import { PlaylistItem as PlaylistItemType } from '@/services/spotify/requests/get-current-user-playlists/types'
import Image from 'next/image'

type PlaylistItemProps = {
  item: PlaylistItemType
}

export const PlaylistItem = (props: PlaylistItemProps) => {
  const {
    item: { name, images, owner },
  } = props

  return (
    <div className="w-full bg-zinc-900/50 p-4 rounded-lg hover:bg-zinc-900/75 transition-all">
      <figure className="w-full aspect-square relative shadow-md rounded-lg overflow-hidden">
        <Image src={images[0].url} fill alt={name} objectFit="cover" />
      </figure>

      <div className="mt-4 pb-2">
        <h3 className="text-sm font-bold line-clamp-1">{name ?? ''}</h3>
        <h4 className="text-sm text-muted-foreground/50">
          By {owner.display_name}
        </h4>
      </div>
    </div>
  )
}
