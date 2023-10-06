import { TrackItem as TrackItemType } from '@/services/spotify/requests/get-user-top-items/get-user-top-tracks'
import { msToMinutes } from '@/utils/time/ms-to-minutes'

type TrackItemProps = {
  item: TrackItemType
  index: number
}

export const TrackItem = ({ item, index }: TrackItemProps) => {
  const { album, artists, name, duration_ms: duration } = item

  return (
    <div className="flex items-center py-2">
      <div className="w-4 mr-4 text-center text-foreground/30 text-bold">
        {index}.
      </div>

      <img
        className="w-8 h-8 lg:w-16 lg:h-16 mr-4 object-cover"
        src={album.images[0].url}
        alt={`Capa do álbum ${album.name}`}
      />

      <div className="flex-grow">
        <div className="text-sm font-semibold max-w-[15ch] sm:max-w-[20ch] md:max-w-none truncate">
          {name}
        </div>
        <div className="text-xs text-gray-500">
          {artists.map((artist) => artist.name).join(', ')}
        </div>
      </div>

      <div className="text-sm text-gray-500 hidden lg:block">{album.name}</div>

      <div className="w-20 text-right text-gray-500">
        {msToMinutes(duration)}
      </div>
    </div>
  )
}
