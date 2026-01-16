'use client';

import { useState, useEffect } from 'react';

export default function StickyContactBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white py-3 px-4 md:hidden z-50 shadow-lg">
      <div className="flex justify-between items-center gap-3">
        <a
          href="tel:7025001953"
          className="flex-1 bg-green-600 hover:bg-green-700 text-center py-2.5 px-3 rounded-lg font-semibold text-sm transition-colors"
        >
          📞 Call
        </a>
        <a
          href="sms:+17025001953"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-center py-2.5 px-3 rounded-lg font-semibold text-sm transition-colors"
        >
          💬 Text
        </a>
        <a
          href="http://drjanduffy.realscout.com/onboarding"
          className="flex-1 bg-white text-blue-900 text-center py-2.5 px-3 rounded-lg font-semibold text-sm transition-colors hover:bg-gray-100"
        >
          🏠 Homes
        </a>
      </div>
    </div>
  );
}
