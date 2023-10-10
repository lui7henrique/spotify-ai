'use client'

import { useQuery } from 'react-query'
import { useCallback, useState } from 'react'

import { api } from '@/services/api'
import { Separator } from '@/components/ui/separator'
import { GetGenres } from '@/services/spotify/requests/get-genres'
import { GenreItem, GenreItemSkeleton } from '@/components/genre-item'
import { TimeRange } from '@/types/time-range'
import { TimeRangeDropdown } from '@/components/term-dropdown'

export default function GenresProfilePage() {
  const [selectedTimeRange, setSelectedTimeRange] =
    useState<TimeRange>('medium_term')

  const { data, isLoading } = useQuery(
    ['genres', selectedTimeRange],
    async () => {
      const { data } = await api.get<GetGenres>(
        `/spotify/me/genres?time_range=${selectedTimeRange}`,
      )

      return data
    },
  )

  const Content = useCallback(() => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 15 }).map((_, index) => {
            return <GenreItemSkeleton key={index} />
          })}
        </div>
      )
    }

    if (!data) {
      return <p>Parece que você não tem ouvido nada :(</p>
    }

    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => {
          return <GenreItem genre={item} key={item.name} />
        })}
      </div>
    )
  }, [data, isLoading])

  return (
    <div className="space-y-6 ">
      <div>
        <h3 className="text-lg font-medium">Seus gêneros</h3>
        <p className="text-sm text-muted-foreground">
          Explore o mosaico musical que compõe sua paleta sonora. Descubra quais
          ritmos e estilos dominam suas preferências. De batidas eletrônicas a
          clássicos do rock, encontre o seu ritmo e comece a explorar seus
          gêneros favoritos agora!
        </p>
      </div>

      <Separator />

      <TimeRangeDropdown
        selectedTimeRange={selectedTimeRange}
        handleSelectTimeRange={(timeRange) => setSelectedTimeRange(timeRange)}
      />

      <Content />
    </div>
  )
}
