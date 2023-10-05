import { NextRequest, NextResponse } from 'next/server'
import { configureSpotifyHeaders } from '@/lib/auth/configure-spotify-header'

import { subMonths, format } from 'date-fns'
import { getRecentlyArtistsAmount } from '@/utils/get-recently-artists-amount'

export const GET = async (req: NextRequest) => {
  await configureSpotifyHeaders(req)

  const oneMonthAgo = subMonths(new Date(), 1)
  const timestampOneMonthAgo = format(oneMonthAgo, 'T')

  const artistsAmount = await getRecentlyArtistsAmount(timestampOneMonthAgo)

  return NextResponse.json({ artistsAmount }, { status: 200 })
}
