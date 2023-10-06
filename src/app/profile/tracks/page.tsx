'use client'

import { api } from '@/services/api'

import { useQuery } from 'react-query'
import { Separator } from '@/components/ui/separator'

import { GetUserTopTracks } from '@/services/spotify/requests/get-user-top-items/get-user-top-tracks'
import { TrackItem } from '@/components/track-item'

export default function TracksProfilePage() {
  const { data, isLoading } = useQuery(['tracks'], async () => {
    const { data } = await api.get<GetUserTopTracks>('/spotify/me/tracks')

    return data
  })

  if (isLoading) {
    return <p>loading... (skeleton in the future)</p>
  }

  if (!data) {
    return <p>no data</p>
  }

  return (
    <div className="space-y-6 ">
      <div>
        <h3 className="text-lg font-medium">Faixas mais ouvidas</h3>
        <p className="text-sm text-muted-foreground">
          Explore suas preferências musicais e descubra estatísticas incríveis
          sobre as faixas que você mais ouve.
        </p>
      </div>

      <Separator />

      <div className="flex flex-col gap-1">
        {data.items.map((item, index) => {
          return <TrackItem item={item} key={item.id} index={index + 1} />
        })}
      </div>
    </div>
  )
}
