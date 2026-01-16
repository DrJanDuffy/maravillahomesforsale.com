'use client';

import { useEffect, useRef, useState } from 'react';
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
  height = '900px',
  className = '',
}: CalendlyEmbedProps) {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [isScriptReady, setIsScriptReady] = useState(false);

  // Initialize widget once script is loaded
  useEffect(() => {
    if (!isScriptReady || !calendlyRef.current) return;

    let retryCount = 0;
    const maxRetries = 10;

    const initWidget = () => {
      const w = window as any;
      
      if (!calendlyRef.current) {
        console.error('Calendly container not found');
        return;
      }

      if (w.Calendly && typeof w.Calendly.initInlineWidget === 'function') {
        try {
          w.Calendly.initInlineWidget({
            url: url,
            parentElement: calendlyRef.current,
          });
        } catch (error) {
          console.error('Error initializing Calendly widget:', error);
        }
      } else {
        retryCount++;
        if (retryCount < maxRetries) {
          // Retry after a short delay if Calendly isn't ready yet
          setTimeout(initWidget, 300);
        } else {
          console.error('Calendly widget failed to load after multiple retries');
        }
      }
    };

    // Small delay to ensure script is fully loaded
    const timer = setTimeout(initWidget, 200);
    return () => clearTimeout(timer);
  }, [isScriptReady, url]);

  return (
    <>
      {/* Load Calendly script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          setIsScriptReady(true);
        }}
        onError={(e) => {
          console.error('Failed to load Calendly script:', e);
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
