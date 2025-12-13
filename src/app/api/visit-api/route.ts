import { NextRequest, NextResponse } from 'next/server';

/**
 * Visit API Route Handler
 * 
 * This route doesn't exist in the current implementation.
 * Returns 404 to prevent 5xx errors in Google Search Console.
 * 
 * If this was a legacy route, it can be redirected or removed.
 */
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  // Return 404 Not Found - this route doesn't exist
  return NextResponse.json(
    {
      error: 'Not Found',
      message: 'This API endpoint does not exist.',
      path: '/api/visit-api',
    },
    { status: 404 }
  );
}

export async function POST(request: NextRequest) {
  return NextResponse.json(
    {
      error: 'Not Found',
      message: 'This API endpoint does not exist.',
      path: '/api/visit-api',
    },
    { status: 404 }
  );
}

