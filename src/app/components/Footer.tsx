import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-gray-100 text-center py-4 mt-10">
            <div className="flex align-items-center justify-center text-sm text-blue-400 font-bold">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <p> &nbsp; &nbsp; | &nbsp; &nbsp; </p>
                <Link href="/about" className="hover:text-blue-600">About</Link>
            </div>
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Chidiadi Anyanwu. All rights reserved.</p>
            <p className="text-sm text-gray-600">Built with Next.js and Tailwind CSS</p>
        </footer>
  )
}

export default Footer
