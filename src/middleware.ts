import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Get the token - this checks for JWT session
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  const isAuthenticated = !!token

  // Redirect authenticated users from login to dashboard
  if (pathname.startsWith("/login") && isAuthenticated) {
    const dashboardUrl = new URL("/dashboard", request.url)
    return NextResponse.redirect(dashboardUrl)
  }

  // Protect the dashboard route - redirect unauthenticated users to login
  if (pathname.startsWith("/dashboard") && !isAuthenticated) {
    const loginUrl = new URL("/login", request.url)
    return NextResponse.redirect(loginUrl)
  }

  // Allow all other routes to pass through
  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/login/:path*"],
}
