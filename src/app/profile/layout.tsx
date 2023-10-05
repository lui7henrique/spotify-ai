import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'
import { ProfileResume } from './components/profile-resume'
import { SidebarNav } from '@/components/sidebar-nav'

export const metadata: Metadata = {
  title: 'Forms',
  description: 'Advanced form example using react-hook-form and Zod.',
}

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
    title: 'Gêneros',
    href: '/profile/genres',
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="hidden space-y-6 p-4 md:block max-w-app mx-auto">
        <ProfileResume />

        <Separator className="my-6" />

        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>

          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  )
}
