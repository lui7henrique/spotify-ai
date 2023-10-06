'use client'

import { api } from '@/services/api'

import { useQuery } from 'react-query'
import { Separator } from '@/components/ui/separator'
import { GetUserTopArtists } from '@/services/spotify/requests/get-user-top-items/get-user-top-artists'
import { ArtistItem } from '@/components/artist-item'

export default function ArtistsProfilePage() {
  const { data, isLoading } = useQuery(['artists'], async () => {
    const { data } = await api.get<GetUserTopArtists>('/spotify/me/artists')

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
        <h3 className="text-lg font-medium">Artistas mais ouvidos</h3>
        <p className="text-sm text-muted-foreground">
          Descubra estatísticas incríveis sobre os artistas que você mais ouve,
          os gêneros que dominam sua playlist e muito mais.
        </p>
      </div>

      <Separator />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.items.map((item) => {
          return <ArtistItem item={item} key={item.id} />
        })}
      </div>
    </div>
  )
}
