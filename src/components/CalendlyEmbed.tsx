'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

interface CalendlyEmbedProps {
  /**
   * Calendly event URL (e.g., 'https://calendly.com/drjanduffy/realtor_strategy_meeting')
   */
  url: string;
  /**
   * Height of the embed (default: '900px' for better visibility)
   */
  height?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * CalendlyEmbed component - Embeds a Calendly scheduling widget
 * 
 * Uses Calendly's inline embed for better performance and integration.
 * The Calendly script is loaded once and reused across all embeds.
 * 
 * @example
 * ```tsx
 * <CalendlyEmbed url="https://calendly.com/drjanduffy/realtor_strategy_meeting" />
 * ```
 */
export default function CalendlyEmbed({
  url,
  height = '700px',
  className = '',
}: CalendlyEmbedProps) {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Calendly inline widget after script loads
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initInlineWidget({
        url: url,
        parentElement: calendlyRef.current,
      });
    }
  }, [url]);

  return (
    <>
      {/* Load Calendly script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          // Initialize after script loads
          if ((window as any).Calendly && calendlyRef.current) {
            (window as any).Calendly.initInlineWidget({
              url: url,
              parentElement: calendlyRef.current,
            });
          }
        }}
      />
      
      {/* Calendly embed container */}
      <div
        ref={calendlyRef}
        className={`calendly-inline-widget ${className}`}
        style={{
          minWidth: '320px',
          height: height,
          width: '100%',
        }}
        data-auto-load="false"
      />
    </>
  );
}
