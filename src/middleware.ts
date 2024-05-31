import { NextResponse, type NextRequest } from "next/server";
import verifyToken from "./functions/verify-toke";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const authenticated = token ? await verifyToken(token) : false;

  const { pathname } = request.nextUrl;

  const protectedPaths = ["/processo", "/servicos", "/duvidas"];
  const isProtectedPath = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  if (!authenticated) {
    if (pathname === "/") {
      return NextResponse.redirect(new URL("/login", request.url));
    } else if (isProtectedPath) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (authenticated && pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/conta/:path*",
    "/processo/:path*",
    "/servicos/:path*",
    "/duvidas/:path*",
    "/login",
  ],
};
