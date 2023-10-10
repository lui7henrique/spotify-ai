import { configureSpotifyHeaders } from '@/lib/auth/configure-spotify-header'
import { spotify } from '@/services/spotify/client'
import { AxiosError } from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  await configureSpotifyHeaders(req)

  const id = req.url.split('playlists/')[1]

  if (!id) {
    return NextResponse.json(
      {
        message:
          'The playlist ID is missing in the request. Please make sure to include the desired playlist ID to proceed.',
      },
      { status: 400 },
    )
  }

  try {
    const playlist = await spotify.getPlaylistById(id)

    return NextResponse.json(playlist, { status: 200 })
  } catch (error) {
    if (error instanceof AxiosError)
      return NextResponse.json(error, { status: error.status })
  }
}
