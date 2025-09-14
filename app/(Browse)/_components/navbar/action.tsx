import { ModeToggle } from '@/components/shared/mode-toggle'
import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

const Action = () => {
  return (
    <div  className='flex items-center justify-end gap-x-3'>
        
        <ModeToggle/>
        <SidebarTrigger/>
    </div>
  )
}

export default Action