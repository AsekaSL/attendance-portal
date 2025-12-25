'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/brand/university logo.png'
import { useState } from 'react'


const Header = () => {

    const [style, setStyle] = useState('hidden md:inline-block')

  return (
    <header className="faculty-header flex justify-between items-center px-6 py-4 sticky top-0 z-50">
        <Link href={'/'} className="brand hover:opacity-95 transition-opacity duration-150" >
            <Image src={logo} alt="Faculty of Computing Logo" />
        </Link>
        <div>
          <h1>Faculty of Computing</h1>
          <div className="subtitle">Attendance Tracking Portal</div>
        </div>

        <nav className="hidden md:flex gap-8 font-medium items-center">
            <Link href={'/'} className="flex items-center gap-2">
                <i data-feather="home" className="w-4 h-4"></i>
                Home
            </Link>
            <Link href={'/about'} className="flex items-center gap-2">
                <i data-feather="home" className="w-4 h-4"></i>
                About
            </Link>
            <Link href={'/contact'} className="flex items-center gap-2">
                <i data-feather="home" className="w-4 h-4"></i>
                Contact
            </Link>
        </nav>

        <div className='flex items-center gap-4'>
            <Link href={'/'} >
                <button className={`cta-btn ${style}`} >
                    Get Started
                </button>
            </Link>

            <button className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors duration-200" aria-label="menu">
                <i data-feather="menu" className="w-5 h-5 text-gray-700"></i>
            </button>

        </div>

    </header>
  )
}

export default Header