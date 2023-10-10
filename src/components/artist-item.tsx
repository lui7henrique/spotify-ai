import { ArtistItem as ArtistItemType } from '@/services/spotify/requests/get-user-top-items/get-user-top-artists'
import Image from 'next/image'
import { Skeleton } from './ui/skeleton'

type ArtistItemProps = {
  item: ArtistItemType
}

export const ArtistItem = ({ item }: ArtistItemProps) => {
  const { images, name } = item

  return (
    <div className="w-full rounded-lg bg-foreground/5 p-4 transition-all hover:bg-foreground/10">
      <figure className="relative aspect-square w-full overflow-hidden rounded-full shadow-md">
        <Image src={images[0].url} fill alt={name} objectFit="cover" />
      </figure>

      <div className="mt-4 pb-2">
        <h3 className="line-clamp-1 text-sm font-bold">{name ?? ''}</h3>
        <h4 className="text-sm text-muted-foreground">Artista</h4>
      </div>
    </div>
  )
}

export const ArtistItemSkeleton = () => (
  <div className="w-full rounded-lg bg-foreground/5 p-4 transition-all hover:bg-foreground/10">
    <Skeleton className=" aspect-square w-full rounded-full shadow-md" />

    <div className="mt-4 space-y-2 pb-2">
      <Skeleton className="h-4 w-full rounded-lg" />
      <Skeleton className="h-4 w-1/2 rounded-lg" />
    </div>
  </div>
)
