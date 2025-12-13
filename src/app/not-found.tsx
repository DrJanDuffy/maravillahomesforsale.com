import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A2540] to-[#3A8DDE] px-4'>
      <div className='max-w-2xl w-full text-center text-white'>
        <div className='mb-8'>
          <h1 className='text-9xl font-bold mb-4'>404</h1>
          <h2 className='text-4xl font-semibold mb-4'>Page Not Found</h2>
          <p className='text-xl text-gray-200 mb-8'>
            Sorry, we couldn&apos;t find the page you&apos;re looking for. The page may have been moved, deleted, or the URL may be incorrect.
          </p>
        </div>

        <div className='bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-8'>
          <h3 className='text-2xl font-semibold mb-4'>Popular Pages</h3>
          <div className='grid md:grid-cols-2 gap-4'>
            <Button
              asChild
              variant='outline'
              className='bg-white/20 hover:bg-white/30 text-white border-white/30'
            >
              <Link href='/'>
                <Home className='mr-2 h-4 w-4' />
                Home
              </Link>
            </Button>
            <Button
              asChild
              variant='outline'
              className='bg-white/20 hover:bg-white/30 text-white border-white/30'
            >
              <Link href='/homes'>
                <Search className='mr-2 h-4 w-4' />
                Browse Homes
              </Link>
            </Button>
            <Button
              asChild
              variant='outline'
              className='bg-white/20 hover:bg-white/30 text-white border-white/30'
            >
              <Link href='/neighborhood'>
                <ArrowLeft className='mr-2 h-4 w-4' />
                Neighborhood
              </Link>
            </Button>
            <Button
              asChild
              variant='outline'
              className='bg-white/20 hover:bg-white/30 text-white border-white/30'
            >
              <Link href='/contact'>
                <ArrowLeft className='mr-2 h-4 w-4' />
                Contact
              </Link>
            </Button>
          </div>
        </div>

        <Button
          asChild
          className='bg-[#16B286] hover:bg-[#15A276] text-white'
        >
          <Link href='/'>
            <ArrowLeft className='mr-2 h-4 w-4' />
            Return to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}

