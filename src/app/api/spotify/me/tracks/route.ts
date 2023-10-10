import { configureSpotifyHeaders } from '@/lib/auth/configure-spotify-header'
import { spotify } from '@/services/spotify/client'
import { TimeRange } from '@/types/time-range'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  await configureSpotifyHeaders(req)

  const timeRange = req.nextUrl.searchParams.get('time_range') as TimeRange

  const topTracks = await spotify.getUserTopItems('tracks', timeRange)

  return NextResponse.json(topTracks, { status: 200 })
}
