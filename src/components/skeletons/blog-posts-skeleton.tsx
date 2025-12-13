import { Skeleton } from '@/components/ui/skeleton';

export default function BlogPostsSkeleton() {
  return (
    <section className='py-20 bg-[#F7F9FC]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <Skeleton className='h-12 w-80 mx-auto mb-4' />
          <Skeleton className='h-6 w-96 mx-auto' />
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {[1, 2, 3].map((i) => (
            <div key={i} className='bg-white rounded-xl overflow-hidden shadow-lg'>
              <Skeleton className='h-48 w-full' />
              <div className='p-6 space-y-3'>
                <Skeleton className='h-4 w-24' />
                <Skeleton className='h-7 w-full' />
                <Skeleton className='h-5 w-full' />
                <Skeleton className='h-5 w-5/6' />
                <Skeleton className='h-5 w-4/6' />
                <div className='flex items-center gap-2 mt-4'>
                  <Skeleton className='h-8 w-8 rounded-full' />
                  <Skeleton className='h-4 w-32' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


