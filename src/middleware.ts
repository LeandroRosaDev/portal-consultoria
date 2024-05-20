import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const authenticated = token ? true : false;
  const protectedPaths = ['/conta', '/processo', '/documentos'];
  const isProtectedPath = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path),
  );

  if (!authenticated && isProtectedPath) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  if (authenticated && request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/conta', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/conta/:path*',
    '/processo/:path*',
    '/documentos/:path*',
    '/login',
  ],
};
