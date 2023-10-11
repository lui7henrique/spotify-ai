import { spotifyClient } from '@/services/spotify/client'
import { getToken } from 'next-auth/jwt'
import { NextRequest } from 'next/server'

const secret = process.env.NEXTAUTH_SECRET

export const configureSpotifyHeaders = async (req: NextRequest) => {
  const token = await getToken({ req, secret })

  if (!token) {
    throw new Error('Access token not available.')
  }

  spotifyClient.defaults.headers.common.Authorization = `Bearer ${token.accessToken}`
}
