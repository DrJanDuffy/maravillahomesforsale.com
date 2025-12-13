import { Skeleton } from '@/components/ui/skeleton';

export default function ListingsSkeleton() {
  return (
    <div className='min-h-[600px] bg-white rounded-xl p-8'>
      <div className='space-y-6'>
        {/* Header */}
        <div className='text-center mb-8'>
          <Skeleton className='h-10 w-80 mx-auto mb-4' />
          <Skeleton className='h-6 w-96 mx-auto' />
        </div>

        {/* Filters */}
        <div className='flex flex-wrap gap-4 justify-center mb-6'>
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className='h-10 w-32' />
          ))}
        </div>

        {/* Listings Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className='border rounded-lg overflow-hidden'>
              <Skeleton className='h-48 w-full' />
              <div className='p-4 space-y-3'>
                <Skeleton className='h-6 w-3/4' />
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-2/3' />
                <div className='flex gap-2 mt-4'>
                  <Skeleton className='h-8 w-20' />
                  <Skeleton className='h-8 w-20' />
                  <Skeleton className='h-8 w-20' />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className='flex justify-center gap-2 mt-8'>
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className='h-10 w-10' />
          ))}
        </div>
      </div>
    </div>
  );
}


