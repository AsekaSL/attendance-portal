'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/brand/university-logo.png'
import { Home, Info, Mail, Menu } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';


const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
            setMobileOpen(false);
        }
    };

    const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setMobileOpen(false);
        }
    };

    if (mobileOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscape);
    }

    return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [mobileOpen]);

    return (
    <header className="faculty-header flex justify-between items-center px-6 py-4 sticky top-0 z-50">
        <Link href={'/'} className="brand hover:opacity-95 transition-opacity duration-150">
            <Image src={logo} alt="Faculty of Computing Logo" />
            <h1>Faculty of Computing</h1>
            <div className="subtitle">Attendance Tracking Portal</div>
        </Link>

        <nav className="hidden md:flex gap-8 font-medium items-center">
            <Link href={'/'} className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <Home className="w-4 h-4"></Home>
                Home
            </Link>
            <Link href={'/about'} className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <Info className="w-4 h-4"></Info>
                About
            </Link>
            <Link href={'/contact'} className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <Mail className="w-4 h-4"></Mail>
                Contact
            </Link>
        </nav>

        <div className='flex items-center gap-4'>
            <Link href={'/signup'} aria-label="Sign up for an account" className="mt-2" onClick={() => setMobileOpen(false)}>
                <button className="cta-btn hidden md:inline-block">
                    Get Started
                </button>
            </Link>

            <button
                className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                aria-label={mobileOpen ? 'Close mobile menu' : 'Open mobile menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileOpen(!mobileOpen)}
            >
                <Menu className="w-5 h-5 text-gray-700"></Menu>
            </button>

        </div>

        {/* Mobile menu — rendered for small screens when toggled open */}
        <div id="mobile-menu" ref={mobileMenuRef} className={`md:hidden ${mobileOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-white border-t border-gray-200`}>
            <nav className="flex flex-col gap-3 p-4 shadow-lg">
                <Link href={'/'} className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Home
                </Link>
                <Link href={'/about'} className="flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    About
                </Link>
                <Link href={'/contact'} className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contact
                </Link>
                <Link href={'/signup'} aria-label="Sign up for an account" className="mt-2">
                    <button className="w-full cta-btn">
                        Get Started
                    </button>
                </Link>
            </nav>
        </div>

    </header>
  )
}

export default Header