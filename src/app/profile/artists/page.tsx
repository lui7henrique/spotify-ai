'use client'

import { Separator } from '@/components/ui/separator'
import { GetUserTopArtists } from '@/services/spotify/requests/get-user-top-items/get-user-top-artists'
import { ArtistItem, ArtistItemSkeleton } from '@/components/artist-item'
import { api } from '@/services/api'
import { useQuery } from 'react-query'
import { useCallback, useState } from 'react'
import { TimeRangeDropdown } from '@/components/term-dropdown'
import { TimeRange } from '@/types/time-range'

export default function ArtistsProfilePage() {
  const [selectedTimeRange, setSelectedTimeRange] =
    useState<TimeRange>('medium_term')

  const { data, isLoading } = useQuery(
    ['artists', selectedTimeRange],
    async () => {
      const { data } = await api.get<GetUserTopArtists>(
        `/spotify/me/artists?time_range=${selectedTimeRange}`,
      )

      return data
    },
  )

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
      // TODO: MAKE A PRETTY EMPTY COMPONENT
      return <p>empty(</p>
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
        <h3 className="text-lg font-medium">Most listened artists</h3>
        <p className="text-sm text-muted-foreground">
          Discover incredible statistics about the artists you listen to most,
          the genres that dominate your playlist and much more.
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
