'use client'

import { api } from '@/services/api'

import { useQuery } from 'react-query'
import { useCallback, useState } from 'react'

import { Separator } from '@/components/ui/separator'
import { TrackItem, TrackItemSkeleton } from '@/components/track-item'

import { GetUserTopTracks } from '@/services/spotify/requests/get-user-top-items/get-user-top-tracks'

import { TimeRange } from '@/types/time-range'
import { TimeRangeDropdown } from '@/components/term-dropdown'

export default function TracksProfilePage() {
  const [selectedTimeRange, setSelectedTimeRange] =
    useState<TimeRange>('medium_term')

  const { data, isLoading } = useQuery(
    ['tracks', selectedTimeRange],
    async () => {
      const { data } = await api.get<GetUserTopTracks>(
        `/spotify/me/tracks?time_range=${selectedTimeRange}`,
      )

      return data
    },
  )

  const Content = useCallback(() => {
    if (isLoading) {
      return (
        <div className="flex flex-col gap-1">
          {Array.from({ length: 15 }).map((_, index) => {
            return <TrackItemSkeleton key={index} />
          })}
        </div>
      )
    }

    if (!data) {
      return <p>Nenhuma faixa aqui :(</p>
    }

    return (
      <div className="flex flex-col gap-1">
        {data.items.map((item, index) => {
          return <TrackItem item={item} key={item.id} index={index + 1} />
        })}
      </div>
    )
  }, [data, isLoading])

  return (
    <div className="space-y-6 ">
      <div>
        <h3 className="text-lg font-medium">Most listened to tracks</h3>

        <p className="text-sm text-muted-foreground">
          Explore your musical preferences and discover incredible statistics
          about the tracks you listen to the most.
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
