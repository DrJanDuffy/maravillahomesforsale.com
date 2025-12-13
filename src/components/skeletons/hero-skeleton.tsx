export default function HeroSkeleton() {
  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#0A2540] to-[#3A8DDE]'>
      <div className='relative z-10 text-center text-white max-w-4xl mx-auto px-4 w-full'>
        <div className='h-20 w-3/4 bg-white/20 animate-pulse rounded-lg mx-auto mb-6'></div>
        <div className='h-12 w-1/2 bg-white/20 animate-pulse rounded-lg mx-auto mb-8'></div>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <div className='h-14 w-48 bg-white/20 animate-pulse rounded-lg'></div>
          <div className='h-14 w-48 bg-white/20 animate-pulse rounded-lg'></div>
        </div>
      </div>
    </section>
  );
}


