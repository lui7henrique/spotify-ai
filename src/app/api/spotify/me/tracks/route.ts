import { configureSpotifyHeaders } from '@/lib/auth/configure-spotify-header'
import { getUserTopItems } from '@/services/spotify/requests/get-user-top-items'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  await configureSpotifyHeaders(req)

  const topTracks = await getUserTopItems('tracks', 'medium_term')

  return NextResponse.json(topTracks, { status: 200 })
}
