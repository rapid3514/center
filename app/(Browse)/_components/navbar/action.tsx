import { ModeToggle } from '@/components/shared/mode-toggle'
import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { LogIn } from 'lucide-react'
import React from 'react'

const Action = () => {
  return (
    <div  className='flex items-center justify-end gap-x-3'>
        
        <ModeToggle/>
        <SidebarTrigger/>

         <SignedOut>
             <SignInButton>
              <Button variant={'outline'} size={'sm'}>
                <span className='max-w-md'>SignIn</span>
                <LogIn/>
              </Button>
             </SignInButton>
            </SignedOut>
               <SignedIn>
              <UserButton />
            </SignedIn>
    </div>
  )
}

export default Action