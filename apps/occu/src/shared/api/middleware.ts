import { NextResponse, NextRequest } from 'next/server';

export const routingMiddleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    // Redirect the default homepage to the 'overview' page.
    return NextResponse.redirect(new URL(`/overview`, request.url));
  }

  return NextResponse.next();
};
