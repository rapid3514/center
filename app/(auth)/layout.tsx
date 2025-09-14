import { RootLayout } from '@/types'
import React from 'react'



const AuthLayout = ({children}: RootLayout) => {
  return (
    <div className='flex items-center justify-center w-full h-screen'>
      {children}
    </div>
  )
}

export default AuthLayout
