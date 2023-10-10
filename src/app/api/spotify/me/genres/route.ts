import { configureSpotifyHeaders } from '@/lib/auth/configure-spotify-header'
import { spotify } from '@/services/spotify/client'
import { TimeRange } from '@/types/time-range'
import { getGenresByArtists } from '@/utils/genres/get-genres-by-top-artists'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  await configureSpotifyHeaders(req)

  const timeRange = req.nextUrl.searchParams.get('time_range') as TimeRange

  const topArtists = await spotify.getUserTopItems('artists', timeRange)

  const genres = getGenresByArtists(topArtists)

  return NextResponse.json(genres, { status: 200 })
}
