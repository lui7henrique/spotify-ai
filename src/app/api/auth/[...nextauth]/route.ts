import NextAuth, { User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import SpotifyProvider from 'next-auth/providers/spotify'

const spotifyClientId = process.env.SPOTIFY_CLIENT_ID
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET
const nextAuthSecret = process.env.NEXTAUTH_SECRET

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: spotifyClientId || '',
      clientSecret: spotifyClientSecret || '',
      authorization:
        'https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,user-top-read,user-read-recently-played',
    }),
  ],

  callbacks: {
    async jwt({ token, account }: any) {
      if (account) {
        return {
          ...token,
          accessToken: account.access_token,
        }
      }

      return token
    },
  },

  secret: nextAuthSecret,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
