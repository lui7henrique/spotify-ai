import { msToMinutes } from '@/utils/time/ms-to-minutes'
import Image from 'next/image'
import { Skeleton } from './ui/skeleton'
import { Track } from '@/types/track'

type TrackItemProps = {
  item: Track
  index: number
}

export const TrackItem = ({ item, index }: TrackItemProps) => {
  const { album, artists, name, duration_ms: duration } = item

  if (!album.images[0]?.url) return <></>

  return (
    <div className="flex items-center py-2">
      <div className="text-bold mr-4 hidden w-4 text-center text-foreground/30 md:block">
        {index}.
      </div>

      <figure className="relative mr-4 aspect-square w-1/4 overflow-hidden rounded-md object-cover md:w-16 ">
        <Image
          src={album.images[0].url}
          alt={`Capa do álbum ${album.name}`}
          fill
        />
      </figure>

      <div className="w-3/4 flex-grow md:w-auto">
        <div className="max-w-[15ch] truncate text-sm font-semibold sm:max-w-[20ch] md:max-w-none">
          {name}
        </div>

        <div className="line-clamp-1 text-xs text-gray-500">
          {artists.map((artist) => artist.name).join(', ')}
        </div>
      </div>

      <div className="hidden text-sm text-gray-500 md:block">{album.name}</div>

      <div className="hidden w-20 text-right text-gray-500 lg:block">
        {msToMinutes(duration)}
      </div>
    </div>
  )
}

export const TrackItemSkeleton = () => (
  <div className="flex items-center py-2">
    <Skeleton className="mr-4 hidden h-4 w-4 md:block" />
    <Skeleton className="mr-4 aspect-square w-1/4 rounded-md object-cover md:w-16" />

    <div className="w-3/4 flex-grow space-y-2 md:w-auto">
      <Skeleton className="h-3 w-[15ch] font-semibold sm:w-[20ch]" />
      <Skeleton className="h-3 w-[10ch] font-semibold sm:w-[15ch]" />
    </div>

    <Skeleton className="hidden h-3 w-[12ch] md:block" />
    <Skeleton className="ml-4 hidden h-3 w-[5ch] lg:block" />
  </div>
)
