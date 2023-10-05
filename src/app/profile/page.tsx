'use client'

import { Separator } from '@/components/ui/separator'

export default function ProfileResumePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">O melhor do seu Spotify</h3>
        <p className="text-sm text-muted-foreground">
          Veja estatísticas interessantes sobre suas preferências musicais,
          incluindo gêneros, artistas mais ouvidos e muito mais.
        </p>
      </div>
      <Separator />
    </div>
  )
}
