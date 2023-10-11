import { Genre } from '@/services/spotify/requests/get-genres'
import Image from 'next/image'
import { Skeleton } from './ui/skeleton'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Button } from './ui/button'
import { ArtistItem } from './artist-item'

type GenreItemProps = {
  genre: Genre
}

export const GenreItem = ({ genre }: GenreItemProps) => {
  const { amount, artists, name } = genre

  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-full cursor-pointer rounded-lg bg-foreground/5 p-4 transition-all hover:bg-foreground/10">
          <figure className="relative aspect-square w-full overflow-hidden rounded-full shadow-md">
            <Image
              src={artists[0].images[0].url}
              fill
              alt={name}
              objectFit="cover"
            />
          </figure>

          <div className="mt-4 pb-2">
            <h3 className="line-clamp-1 text-sm font-bold capitalize">
              {name}
            </h3>

            <h4 className="text-sm text-muted-foreground">
              {amount} {amount > 1 ? 'artists' : 'artist'}
            </h4>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-h-[75vh] overflow-y-auto sm:max-w-[720px]">
        <DialogHeader>
          <DialogTitle className="capitalize">{name}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {artists.map((item) => {
            return <ArtistItem item={item} key={item.id} />
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export const GenreItemSkeleton = () => (
  <div className="w-full rounded-lg bg-foreground/5 p-4 transition-all hover:bg-foreground/10">
    <Skeleton className="aspect-square w-full rounded-full shadow-md" />

    <div className="mt-4 space-y-2 pb-2">
      <Skeleton className="h-4 w-full rounded-lg" />
      <Skeleton className="h-4 w-1/2 rounded-lg" />
    </div>
  </div>
)
