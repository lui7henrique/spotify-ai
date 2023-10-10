'use client'

import { Separator } from '@/components/ui/separator'
import { GetUserTopArtists } from '@/services/spotify/requests/get-user-top-items/get-user-top-artists'
import { ArtistItem, ArtistItemSkeleton } from '@/components/artist-item'
import { api } from '@/services/api'
import { useQuery } from 'react-query'
import { useCallback } from 'react'

export default function ArtistsProfilePage() {
  const { data, isLoading } = useQuery(['artists'], async () => {
    const { data } = await api.get<GetUserTopArtists>('/spotify/me/artists')

    return data
  })

  const Content = useCallback(() => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 15 }).map((_, index) => {
            return <ArtistItemSkeleton key={index} />
          })}
        </div>
      )
    }

    if (!data) {
      return <p>Não há artistas aqui :(</p>
    }

    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {data.items.map((item) => {
          return <ArtistItem item={item} key={item.id} />
        })}
      </div>
    )
  }, [data, isLoading])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Artistas mais ouvidos</h3>
        <p className="text-sm text-muted-foreground">
          Descubra estatísticas incríveis sobre os artistas que você mais ouve,
          os gêneros que dominam sua playlist e muito mais.
        </p>
      </div>

      <Separator />
      <Content />
    </div>
  )
}
