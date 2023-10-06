import { NextRequest, NextResponse } from 'next/server'
import { configureSpotifyHeaders } from '@/lib/auth/configure-spotify-header'

export const GET = async (req: NextRequest) => {
  await configureSpotifyHeaders(req)

  return NextResponse.json({ artistsAmount: 0 }, { status: 200 })
}
