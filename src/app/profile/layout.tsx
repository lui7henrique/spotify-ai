'use client'

import { Separator } from '@/components/ui/separator'
import { SidebarNav } from '@/components/sidebar-nav'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ProfileResume } from '@/components/profile-resume'

// export const metadata: Metadata = {
//   title: 'Forms',
//   description: 'Advanced form example using react-hook-form and Zod.',
// }

const sidebarNavItems = [
  {
    title: 'Resumo',
    href: '/profile',
  },
  {
    title: 'Playlists',
    href: '/profile/playlists',
  },
  {
    title: 'Artistas',
    href: '/profile/artists',
  },
  {
    title: 'Faixas',
    href: '/profile/tracks',
  },
  {
    title: 'Gêneros',
    href: '/profile/genres',
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

const queryClient = new QueryClient()

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="mx-auto max-w-app space-y-6 p-4">
        <ProfileResume />

        <Separator className="my-6" />

        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 w-screen overflow-x-auto lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>

          <div className="flex-1">
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </div>
        </div>
      </div>
    </>
  )
}
