'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/homes', label: 'Homes' },
    { href: '/neighborhood', label: 'Neighborhood' },
    { href: '/neighborhoods', label: 'Neighborhoods' },
    { href: '/community', label: 'Community' },
    { href: '/market-data', label: 'Market Data' },
    { href: '/market-insights', label: 'Market Insights' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className='bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo/Brand */}
          <Link href='/' className='flex items-center'>
            <h1 className='text-2xl font-bold text-[#0A2540]'>
              (702) 820-5408
            </h1>
          </Link>

          {/* Desktop Navigation Links */}
          <div className='hidden md:flex space-x-8'>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className='text-[#0A2540] hover:text-[#3A8DDE] transition-colors duration-200'
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className='hidden md:block'>
            <Button
              asChild
              className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
            >
              <Link
                href='http://drjanduffy.realscout.com/onboarding'
                target='_blank'
                rel='noopener noreferrer'
                prefetch={false}
              >
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className='md:hidden'>
              <Button variant='ghost' size='icon'>
                <Menu className='h-6 w-6 text-[#0A2540]' />
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
              <div className='flex flex-col space-y-4 mt-8'>
                <h2 className='text-2xl font-bold text-[#0A2540] mb-4'>Menu</h2>
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className='text-[#0A2540] hover:text-[#3A8DDE] transition-colors duration-200 text-lg py-2'
                  >
                    {link.label}
                  </Link>
                ))}
                <div className='pt-4'>
                  <Button
                    asChild
                    className='w-full bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
                  >
                    <Link
                      href='http://drjanduffy.realscout.com/onboarding'
                      target='_blank'
                      rel='noopener noreferrer'
                      prefetch={false}
                      onClick={() => setOpen(false)}
                    >
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
