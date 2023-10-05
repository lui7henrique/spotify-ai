'use client'

import { Button } from '@/components/ui/button'
import { Headphones } from 'lucide-react'
import { signIn } from 'next-auth/react'

export default function Home() {
  return (
    <div className="max-w-app mx-auto p-4">
      <Button
        variant="outline"
        onClick={() => signIn('spotify', { callbackUrl: '/profile' })}
      >
        <Headphones className="w-4 h-4 mr-2" />
        Login with Spotify
      </Button>
    </div>
  )
}
