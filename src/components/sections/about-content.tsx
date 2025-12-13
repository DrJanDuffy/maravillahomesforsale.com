import Link from 'next/link';
import AgentPhoto from '@/components/ui/agent-photo';

export default function AboutContent() {
  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Content */}
          <div>
            <h2 className='text-4xl font-bold text-[#0A2540] mb-6'>
              About Dr. Jan Duffy - Your Craig Ranch Real Estate Expert
            </h2>
            <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
              Dr. Jan Duffy is a REALTOR® with{' '}
              <strong>Berkshire Hathaway HomeServices® Nevada</strong>, your
              trusted partner in finding the perfect home in one of Las Vegas&apos;
              most prestigious communities. With years of experience in the Craig
              Ranch area and throughout Las Vegas and Henderson, she understands
              what makes each neighborhood special.
            </p>
            <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
              Dr. Duffy is committed to providing exceptional service, expert
              guidance, and personalized attention to every client. She offers
              expert, data-driven advice and personalized consultations. Whether
              you&apos;re buying, selling, or investing, she&apos;s here to help
              you achieve your real estate goals.
            </p>

            {/* Key Features */}
            <div className='space-y-4 mb-8'>
              <div className='flex items-center'>
                <div className='w-6 h-6 bg-[#16B286] rounded-full flex items-center justify-center mr-4'>
                  <svg
                    className='w-4 h-4 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <span className='text-[#0A2540] font-medium'>
                  Local Market Expertise
                </span>
              </div>
              <div className='flex items-center'>
                <div className='w-6 h-6 bg-[#16B286] rounded-full flex items-center justify-center mr-4'>
                  <svg
                    className='w-4 h-4 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <span className='text-[#0A2540] font-medium'>
                  Personalized Service
                </span>
              </div>
              <div className='flex items-center'>
                <div className='w-6 h-6 bg-[#16B286] rounded-full flex items-center justify-center mr-4'>
                  <svg
                    className='w-4 h-4 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <span className='text-[#0A2540] font-medium'>
                  Advanced Technology
                </span>
              </div>
              <div className='flex items-center'>
                <div className='w-6 h-6 bg-[#16B286] rounded-full flex items-center justify-center mr-4'>
                  <svg
                    className='w-4 h-4 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <span className='text-[#0A2540] font-medium'>
                  Proven Track Record
                </span>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Link
                href='http://drjanduffy.realscout.com/'
                target='_blank'
                rel='noopener noreferrer'
                prefetch={false}
                className='bg-[#3A8DDE] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2A7DCE] transition-colors duration-200 inline-block text-center'
              >
                View All Listings
              </Link>
              <Link
                href='/contact'
                className='bg-white border-2 border-[#3A8DDE] text-[#3A8DDE] px-8 py-4 rounded-lg font-semibold hover:bg-[#3A8DDE]/10 transition-colors duration-200 inline-block text-center'
              >
                Contact Dr. Jan Duffy
              </Link>
            </div>
          </div>

          {/* Image and Stats */}
          <div className='space-y-8'>
            {/* Dr. Jan Duffy Photo */}
            <AgentPhoto
              src='/Dr Duffy Blue_Headshot Enhanced 180 Size.jpg'
              alt='Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices® Nevada'
              sizes='(max-width: 1024px) 100vw, 50vw'
              className='shadow-lg'
            />

            {/* Stats */}
            <div className='bg-[#F7F9FC] rounded-xl p-8'>
              <div className='grid grid-cols-2 gap-8'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-[#0A2540] mb-2'>
                    500+
                  </div>
                  <div className='text-gray-600'>Homes Sold</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-[#0A2540] mb-2'>
                    15+
                  </div>
                  <div className='text-gray-600'>Years Experience</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-[#0A2540] mb-2'>
                    98%
                  </div>
                  <div className='text-gray-600'>Client Satisfaction</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-[#0A2540] mb-2'>
                    24/7
                  </div>
                  <div className='text-gray-600'>Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
