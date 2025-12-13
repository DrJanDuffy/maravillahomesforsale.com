import { Skeleton } from '@/components/ui/skeleton';

export default function MapSkeleton() {
  return (
    <div className='w-full rounded-lg overflow-hidden shadow-lg border border-gray-200'>
      <Skeleton className='w-full h-[500px]' />
    </div>
  );
}


