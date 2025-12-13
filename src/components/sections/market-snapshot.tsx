import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function MarketSnapshot() {
  return (
    <section className='py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50' style={{
      backgroundImage: 'url(https://cribflyer-publicsite.s3.amazonaws.com/stock-images/background-tiles/retina-wood.png)',
      backgroundRepeat: 'repeat',
    }}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-[#0A2540] mb-4'>
            Maravilla Market Snapshot
          </h2>
          <h3 className='text-2xl text-gray-600 mb-8'>
            Current North Las Vegas Real Estate Trends
          </h3>
        </div>
        
        <div className='max-w-4xl mx-auto'>
          <div className='bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-gray-200'>
            <div className='prose prose-lg max-w-none'>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Maravilla showcases homes from $400,000 to $600,000 in North Las Vegas&apos;s sought-after 89031 zip code. Recent market data shows an average sale price of $525,000 with homes selling within 25 days. Properties feature 3-5 bedrooms, 2-4 bathrooms, spanning 2,000-4,000 square feet.
              </p>
              
              <p className='text-gray-700 font-semibold mb-3'>Key highlights:</p>
              <ul className='list-disc list-inside space-y-2 text-gray-700 mb-6'>
                <li>4.8% year-over-year appreciation</li>
                <li>$245 per square foot average</li>
                <li>8 active listings available</li>
                <li>Premium desert modern designs</li>
                <li>Smart home technology</li>
                <li>Energy-efficient features</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

