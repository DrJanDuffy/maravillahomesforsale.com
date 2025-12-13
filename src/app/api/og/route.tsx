/**
 * Dynamic OG Image Generation
 * Uses next/og with ImageResponse for dynamic Open Graph images
 */

import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Get parameters from URL using NextRequest's nextUrl
    const title =
      request.nextUrl.searchParams.get('title') || 'Craig Ranch Vegas | Homes By Dr. Jan Duffy';
    const subtitle = request.nextUrl.searchParams.get('subtitle') || 'Luxury Real Estate in Las Vegas';
    const price = request.nextUrl.searchParams.get('price');
    const address = request.nextUrl.searchParams.get('address');
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com';
    const imageUrl = request.nextUrl.searchParams.get('image') || 
      `${baseUrl}/54-DJI_20250707171528_0828_D.jpg`;

    // Generate OG image
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            fontSize: 60,
            fontWeight: 700,
            color: 'white',
            padding: '80px',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Overlay for Text Readability */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(10, 37, 64, 0.75)',
              backgroundImage: 'linear-gradient(to bottom, rgba(10, 37, 64, 0.85), rgba(58, 141, 222, 0.65))',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              width: '100%',
              maxWidth: '1000px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <h1
              style={{
                fontSize: 72,
                fontWeight: 800,
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                style={{
                  fontSize: 36,
                  fontWeight: 400,
                  marginBottom: 40,
                  opacity: 0.9,
                }}
              >
                {subtitle}
              </p>
            )}
            {price && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  fontSize: 48,
                  fontWeight: 700,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '24px 48px',
                  borderRadius: '12px',
                  marginTop: 20,
                }}
              >
                <span>$</span>
                <span>{price}</span>
              </div>
            )}
            {address && (
              <p
                style={{
                  fontSize: 28,
                  fontWeight: 400,
                  marginTop: 30,
                  opacity: 0.8,
                }}
              >
                {address}
              </p>
            )}
            <div
              style={{
                position: 'absolute',
                bottom: 40,
                right: 40,
                fontSize: 32,
                fontWeight: 600,
                opacity: 0.9,
              }}
            >
              (702) 820-5408
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error('Error generating OG image:', e);
    return new Response(`Failed to generate OG image: ${e.message}`, {
      status: 500,
    });
  }
}




