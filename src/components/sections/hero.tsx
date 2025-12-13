'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  // Best area photo for hero background - highest quality community/area shot
  const backgroundImage = '/photos/01-1 (2).jpg';

  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 w-full h-full'>
        {/* Fallback gradient background */}
        <div className='absolute inset-0 bg-linear-to-r from-[#0A2540] to-[#3A8DDE]'></div>

        {/* Hero Background Image - No fade-in for immediate LCP visibility */}
        <div className='absolute inset-0 w-full h-full'>
          <Image
            src={backgroundImage}
            alt='Maravilla community and neighborhood area view, North Las Vegas'
            fill
            priority
            fetchPriority='high'
            className='object-cover'
            sizes='100vw'
            quality={65}
            aria-hidden='true'
          />
        </div>

        {/* Video Embed Option - Uncomment if you want to use a video background */}
        {/* 
        <iframe
          src='https://www.homes.com/local-guide/north-las-vegas-nv/maravilla-neighborhood/video/.../?autoplay=1&mute=1&loop=1&controls=0&playsinline=1'
          className='absolute inset-0 w-full h-full object-cover'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='Maravilla Neighborhood Video Background'
          aria-hidden='true'
        />
        */}
      </div>

      {/* Background Overlay - Darkens image for text readability */}
      <div className='absolute inset-0 bg-linear-to-r from-[#0A2540]/80 to-[#3A8DDE]/60 z-1'></div>

      {/* Hero Content */}
      <div className='relative z-10 text-center text-white max-w-4xl mx-auto px-4'>
        <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
          <span className='block animate-fade-in hero-gold-text'>
            Find Your Dream Home in
          </span>
          <span className='block mt-2 animate-fade-in-delay hero-green-text'>
            Maravilla
          </span>
        </h1>

        <p className='text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'>
          Find exceptional value and quality homes in one of Las Vegas&apos; best
          value communities
        </p>

        {/* Hero CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2'>
          <Link
            href='http://drjanduffy.realscout.com/onboarding'
            target='_blank'
            rel='noopener noreferrer'
            prefetch={false}
            className='bg-[#16B286] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#15A276] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105'
            aria-label='View available homes in Maravilla'
          >
            View Available Homes
          </Link>
          <Link
            href='http://drjanduffy.realscout.com/onboarding'
            target='_blank'
            rel='noopener noreferrer'
            prefetch={false}
            className='bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/30 transition-all duration-200 border border-white/30 hover:border-white/50 hover:scale-105'
            aria-label='Schedule a property tour with Dr. Jan Duffy'
          >
            Schedule a Tour
          </Link>
        </div>
      </div>
    </section>
  );
}
