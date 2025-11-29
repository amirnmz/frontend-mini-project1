import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyToken } from "@/lib/auth"

/**
 * Middleware to protect routes
 * - Redirects unauthenticated users from /dashboard to /
 * - Redirects authenticated users from / to /dashboard
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get("auth-token")?.value

  // Check if user is authenticated
  let isAuthenticated = false
  if (token) {
    const user = await verifyToken(token)
    isAuthenticated = !!user
  }

  // Protect dashboard route
  if (pathname.startsWith("/dashboard")) {
    if (!isAuthenticated) {
      const url = new URL("/", request.url)
      return NextResponse.redirect(url)
    }
  }

  // Redirect authenticated users away from login page
  if (pathname === "/") {
    if (isAuthenticated) {
      const url = new URL("/dashboard", request.url)
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
}
