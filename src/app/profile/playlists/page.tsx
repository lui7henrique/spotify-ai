'use client'
import { useQuery } from 'react-query'
import { useCallback } from 'react'

import { api } from '@/services/api'
import { GetCurrentUserPlaylists } from '@/services/spotify/requests/get-current-user-playlists/types'
import { Separator } from '@/components/ui/separator'
import { PlaylistItem, PlaylistItemSkeleton } from '@/components/playlist-item'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { PlaylistPage } from '@/components/playlist-page'

export default function PlaylistsProfilePage() {
  const { data, isLoading } = useQuery(['playlists'], async () => {
    const { data } = await api.get<GetCurrentUserPlaylists>(
      '/spotify/me/playlists',
    )

    return data
  })

  const Content = useCallback(() => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 15 }).map((_, index) => {
            return <PlaylistItemSkeleton key={index} />
          })}
        </div>
      )
    }

    if (!data) {
      return <p>Sem playlists aqui :(</p>
    }

    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {data.items.map((item) => {
          return (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div>
                  <PlaylistItem item={item} />
                </div>
              </DialogTrigger>

              <DialogContent className="max-h-[75vh] overflow-y-auto px-4 sm:max-w-app">
                <PlaylistPage id={item.id} />
              </DialogContent>
            </Dialog>
          )
        })}
      </div>
    )
  }, [data, isLoading])

  return (
    <div className="space-y-6 ">
      <div>
        <h3 className="text-lg font-medium">Your playlists</h3>
        <p className="text-sm text-muted-foreground">
          Explore your personal playlists and delve into your preferences
          musicals. Discover fascinating statistics about the genres that most
          likes, the artists you listen to most and much more.
        </p>
      </div>

      <Separator />

      <Content />
    </div>
  )
}
