'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'

export const ProfileResume = () => {
  const { data } = useSession()

  if (!data?.user?.name) return <></>

  return (
    <div className="flex items-end gap-4">
      <Image
        src={
          data.user.image ??
          `https://ui-avatars.com/api/?name=${data?.user?.name}&bold=true`
        }
        width={150}
        height={150}
        alt={data.user.name}
        quality={100}
        className="rounded-full"
      />

      <div className="space-y-0.5">
        <h2 className="text-3xl font-bold tracking-tight">
          {data?.user?.name}
        </h2>

        <p className="text-muted-foreground">{data?.user?.email}</p>
      </div>
    </div>
  )
}
