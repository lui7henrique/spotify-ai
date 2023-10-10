import { configureSpotifyHeaders } from '@/lib/auth/configure-spotify-header'
import { spotify } from '@/services/spotify/client'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  await configureSpotifyHeaders(req)

  const topTracks = await spotify.getUserTopItems('tracks', 'medium_term')

  return NextResponse.json(topTracks, { status: 200 })
}
