import Image from 'next/image'
import React from 'react'


    const Footer = () => {
      return (
        <footer className='h-16 bg-background/50 sticky top-0  px-8  bg-gray-400 flex items-center justify-between z-10'>
          <div className='flex items-center justify-center container text-base font-medium text-white lg:py-6 flex-wrap gap-2 mx-auto px-4 py-2'>
          <Image src="/mylogo.png" alt="logo" width={50} height={50}/>
          All Rights Reserved-2024.
        
          </div>
        </footer>
  
  
    

  )
}

export default Footer