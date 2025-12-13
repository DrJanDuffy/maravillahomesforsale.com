import { Skeleton } from '@/components/ui/skeleton';

export default function CommunitiesSkeleton() {
  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <Skeleton className='h-12 w-96 mx-auto mb-4' />
          <Skeleton className='h-6 w-[500px] mx-auto' />
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className='bg-[#F7F9FC] rounded-xl overflow-hidden shadow-lg'>
              <Skeleton className='h-48 w-full' />
              <div className='p-6 space-y-4'>
                <Skeleton className='h-7 w-2/3' />
                <Skeleton className='h-5 w-full' />
                <Skeleton className='h-5 w-4/5' />
                <div className='flex gap-2 mt-4'>
                  <Skeleton className='h-6 w-16' />
                  <Skeleton className='h-6 w-16' />
                  <Skeleton className='h-6 w-16' />
                </div>
                <Skeleton className='h-11 w-full mt-6' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


