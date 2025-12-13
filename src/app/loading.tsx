import HeroSkeleton from '@/components/skeletons/hero-skeleton';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className='flex min-h-screen flex-col'>
      {/* Navigation Skeleton */}
      <nav className='bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <Skeleton className='h-8 w-48' />
            <div className='hidden md:flex space-x-8'>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className='h-4 w-16' />
              ))}
            </div>
            <Skeleton className='h-10 w-32 hidden md:block' />
          </div>
        </div>
      </nav>

      <main className='flex-grow'>
        <HeroSkeleton />

        {/* Quick Links Skeleton */}
        <section className='py-12 bg-white border-b'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid md:grid-cols-3 gap-6'>
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className='h-32 w-full rounded-lg' />
              ))}
            </div>
          </div>
        </section>

        {/* Content Skeleton */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <Skeleton className='h-10 w-80 mx-auto mb-4' />
              <Skeleton className='h-6 w-96 mx-auto' />
            </div>
            <div className='grid md:grid-cols-3 gap-6'>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className='h-64 w-full rounded-lg' />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer Skeleton */}
      <footer className='bg-[#0A2540] text-white py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-4 gap-8'>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className='space-y-4'>
                <Skeleton className='h-6 w-32 bg-white/20' />
                <div className='space-y-2'>
                  <Skeleton className='h-4 w-24 bg-white/20' />
                  <Skeleton className='h-4 w-24 bg-white/20' />
                  <Skeleton className='h-4 w-24 bg-white/20' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}


