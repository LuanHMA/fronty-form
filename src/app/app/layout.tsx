'use client'

import { Sidebar } from '@/components/admin-components/sidebar'
import { Header } from '@/components/admin-components/header'
import { useSidebar } from '@/context/sidebar'
import { ReactNode } from 'react'

export default function AppLayout({ children }: { children: ReactNode }) {
  const { sidebarIsOpen } = useSidebar()

  return (
    <div className="flex w-full min-h-screen items-start bg-neutral-0">
      <Sidebar />
      <div
        className={`h-full w-full flex-1 ${sidebarIsOpen ? 'md:max-w-[calc(100%-280px)]' : 'md:max-w-[calc(100%-80px)]'}`}
      >
        <Header />
        <div>{children}</div>
      </div>
    </div>
  )
}
