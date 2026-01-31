/**
 * KCM (Simplifying the Market) videos section.
 * Displays multiple video links from Dr. Jan Duffy's KCM videos page.
 */

import { Card, CardHeader } from '@/components/ui/card';
import { Play } from 'lucide-react';
import { KCM_VIDEO_ENTRIES } from '@/data/kcm-videos';

type KcmVideosSectionProps = {
  /** Max number of video cards to show (default 4). */
  limit?: number;
  /** Section heading. */
  heading?: string;
  /** Optional subheading/description. */
  description?: string;
};

export default function KcmVideosSection({
  limit = 4,
  heading = 'Latest Market Videos',
  description = 'Watch short market updates and tips from Dr. Jan Duffy’s partner, Simplifying the Market.',
}: KcmVideosSectionProps) {
  const videos = KCM_VIDEO_ENTRIES.slice(0, limit);

  return (
    <section className='py-16 bg-white' aria-labelledby='kcm-videos-heading'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-10'>
          <h2 id='kcm-videos-heading' className='text-3xl font-bold text-[#0A2540] mb-3'>
            {heading}
          </h2>
          {description && (
            <p className='text-gray-600 max-w-2xl mx-auto'>{description}</p>
          )}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {videos.map((video) => (
            <Card
              key={video.id}
              className='group overflow-hidden h-full hover:shadow-lg transition-shadow border border-gray-100'
            >
              <CardHeader className='pb-2'>
                <div className='flex items-start gap-3'>
                  <a
                    href={video.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='shrink-0 w-10 h-10 rounded-full bg-[#3A8DDE]/10 flex items-center justify-center text-[#3A8DDE] group-hover:bg-[#3A8DDE] group-hover:text-white transition-colors'
                    aria-label={`Watch: ${video.title}`}
                  >
                    <Play className='h-5 w-5' fill='currentColor' aria-hidden />
                  </a>
                  <div className='min-w-0 flex-1'>
                    <a
                      href={video.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-semibold text-[#0A2540] hover:text-[#3A8DDE] line-clamp-2 transition-colors'
                    >
                      {video.title}
                    </a>
                    {video.description && (
                      <p className='text-sm text-gray-600 mt-1 line-clamp-2'>
                        {video.description}
                      </p>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        <p className='text-center mt-6 text-sm text-gray-500'>
          All videos open on{' '}
          <a
            href={KCM_VIDEO_ENTRIES[0]?.url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#3A8DDE] hover:underline'
          >
            Simplifying the Market
          </a>
          .
        </p>
      </div>
    </section>
  );
}
