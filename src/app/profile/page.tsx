'use client'

import { Separator } from '@/components/ui/separator'

export default function ProfileResumePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Your spotify stats</h3>
        <p className="text-sm text-muted-foreground">
          Look your amazing stats about your music preferences, includings
          genres, most listened to artists and more!
        </p>
      </div>
      <Separator />
    </div>
  )
}
