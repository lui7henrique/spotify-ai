'use client'

import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="mx-auto flex w-full max-w-app items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-bold flex items-center gap-2 rounded-sm text-2xl  font-bold italic"
          >
            {/* <Disc3 /> */}
            Spot
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
