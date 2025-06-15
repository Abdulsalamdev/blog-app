import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
     <div className="text-3xl md:text-base flex w-[100vw] md:w-[98.2vw] lg:w-[98.8vw] h-[60px] bg-black text-white px-0 md:px-7 md:py-2 items-center justify-center md:justify-between">
            <h1 className="font-bold">ABDULSALAM AKINYOOLA</h1>
            <div className="hidden md:flex space-x-4">
                <Link href="/" className="hover:text-gray-400">Blog</Link>
                <Link href="/about" className="hover:text-gray-400">About</Link>    
            </div>
        </div>
  )
}

export default Navbar
