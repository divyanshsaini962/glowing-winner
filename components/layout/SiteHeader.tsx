'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/music', label: 'Music' },
        { href: '/lessons', label: 'Lessons' },
        { href: '/podcast', label: 'Podcast' },
        { href: '/store', label: 'Store' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    const isTransparent = !isScrolled && !isMenuOpen;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isTransparent ? 'bg-transparent py-2 md:py-4' : 'bg-white/90 backdrop-blur-xl shadow-md py-2 md:py-0'}
    `}
        >
            <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* DESKTOP / TABLET */}
                <div className="hidden md:flex h-20 items-center justify-between">
                    {/* LEFT GROUP: logo + nav */}
                    <div className="flex items-center gap-10">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9D8CFF] to-[#6B46C1] flex items-center justify-center shadow-md">
                                <span className="text-white text-lg">🎵</span>
                            </div>
                            <span
                                className={`text-2xl font-heading font-bold tracking-tight ${isTransparent
                                    ? 'text-gray-900 drop-shadow-sm'
                                    : 'bg-gradient-to-r from-[#9D8CFF] to-[#F0C952] text-transparent bg-clip-text'
                                    }`}
                            >
                                Creator Hub
                            </span>
                        </Link>

                        {/* Nav links (sit right next to logo) */}
                        <div className="flex items-center gap-6 lg:gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${isTransparent
                                            ? 'text-gray-700 hover:text-[#9D8CFF] hover:bg-white/50'
                                            : 'text-gray-700 hover:text-[#9D8CFF] hover:bg-[#9D8CFF]/8'
                                        }
                  `}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: CTA */}
                    <div className="flex-shrink-0">
                        <button
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
              ${isTransparent
                                    ? 'border border-gray-300 text-gray-900 hover:bg-white/50 shadow-sm'
                                    : 'bg-gradient-to-r from-[#9D8CFF] to-[#6B46C1] text-white hover:from-[#8A78F2] hover:to-[#5A37B5] shadow-lg hover:shadow-[#9D8CFF]/30'
                                }
            `}
                        >
                            Book a Session
                        </button>
                    </div>
                </div>

                {/* MOBILE ROW (logo + burger) */}
                <div className="flex md:hidden items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#9D8CFF] to-[#6B46C1] flex items-center justify-center shadow-md">
                            <span className="text-white text-base">🎵</span>
                        </div>
                        <span
                            className={`text-lg font-heading font-bold tracking-tight ${isTransparent
                                ? 'text-gray-900 drop-shadow-sm'
                                : 'bg-gradient-to-r from-[#9D8CFF] to-[#F0C952] text-transparent bg-clip-text'
                                }`}
                        >
                            Creator Hub
                        </span>
                    </Link>

                    {/* Mobile menu toggle */}
                    <button
                        className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors
              ${isTransparent ? 'hover:bg-black/5' : 'hover:bg-[#9D8CFF]/10'}
            `}
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span
                                className={`w-full h-0.5 rounded-full transition-all duration-300
                  ${isTransparent ? 'bg-gray-900' : 'bg-[#6B46C1]'}
                  ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}
                `}
                            />
                            <span
                                className={`w-full h-0.5 rounded-full transition-all duration-300
                  ${isTransparent ? 'bg-gray-900' : 'bg-[#6B46C1]'}
                  ${isMenuOpen ? 'opacity-0' : ''}
                `}
                            />
                            <span
                                className={`w-full h-0.5 rounded-full transition-all duration-300
                  ${isTransparent ? 'bg-gray-900' : 'bg-[#6B46C1]'}
                  ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}
                `}
                            />
                        </div>
                    </button>
                </div>

                {/* MOBILE MENU */}
                <div
                    className={`md:hidden transition-all duration-300 overflow-y-auto 
            ${isMenuOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'}
          `}
                >
                    <div className="py-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300
                  ${isTransparent
                                        ? 'text-white hover:bg-white/10'
                                        : 'text-gray-800 hover:text-[#9D8CFF] hover:bg-[#9D8CFF]/8'
                                    }
                `}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className="pt-4 px-4">
                            <button
                                className="w-full py-3 rounded-full text-sm font-semibold
                bg-gradient-to-r from-[#9D8CFF] to-[#6B46C1]
                hover:from-[#8A78F2] hover:to-[#5A37B5]
                text-white shadow-lg hover:shadow-[#9D8CFF]/30 transition-all duration-300"
                            >
                                Book a Session
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
