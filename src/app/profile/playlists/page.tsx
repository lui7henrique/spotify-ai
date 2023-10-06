'use client'

import { api } from '@/services/api'
import { GetCurrentUserPlaylists } from '@/services/spotify/requests/get-current-user-playlists/types'
import { useQuery } from 'react-query'
import { PlaylistItem } from '../components/playlist-item'
import { Separator } from '@/components/ui/separator'

export default function PlaylistsProfilePage() {
  const { data, isLoading } = useQuery(['playlists'], async () => {
    const response = await api.get<GetCurrentUserPlaylists>(
      '/spotify/me/playlists',
    )

    return response.data
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
        <h3 className="text-lg font-medium">Suas playlists</h3>
        <p className="text-sm text-muted-foreground">
          Explore suas playlists pessoais e mergulhe nas suas preferências
          musicais. Descubra estatísticas fascinantes sobre os gêneros que mais
          curte, os artistas que você mais ouve e muito mais.
        </p>
      </div>

      <Separator />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.items.map((item) => {
          return <PlaylistItem item={item} key={item.id} />
        })}
      </div>
    </div>
  )
}
