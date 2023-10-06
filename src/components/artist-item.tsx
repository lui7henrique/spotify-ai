import { ArtistItem as ArtistItemType } from '@/services/spotify/requests/get-user-top-items/get-user-top-artists'
import Image from 'next/image'

type ArtistItemProps = {
  item: ArtistItemType
}

export const ArtistItem = (props: ArtistItemProps) => {
  const {
    item: { images, name },
  } = props

  return (
    <div className="w-full bg-zinc-900/50 p-4 rounded-lg hover:bg-zinc-900/75 transition-all">
      <figure className="w-full aspect-square relative shadow-md rounded-full overflow-hidden">
        <Image src={images[0].url} fill alt={name} objectFit="cover" />
      </figure>

      <div className="mt-4 pb-2">
        <h3 className="text-sm font-bold line-clamp-1">{name ?? ''}</h3>
        <h4 className="text-sm text-muted-foreground/50">Artista</h4>
      </div>
    </div>
  )
}
