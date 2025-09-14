import { SidebarProvider } from '@/components/ui/sidebar'
import { RootLayout } from '@/types'
import React from 'react'
import { AppSidebar } from './_components/sidebar/app-sidebar'
import Navbar from './_components/navbar/app-navbar'

const Layout = ({children}:RootLayout) => {
  return (
      <SidebarProvider>
        <AppSidebar/>
            <div className='w-full h-full'>
        <Navbar/>
        {children}
    </div>
    </SidebarProvider>
  )
}

export default Layout