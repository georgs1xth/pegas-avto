import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware((auth, req: NextRequest) => {
  if (isAdminRoute(req)) {
    // Protect admin routes
    const { userId, sessionClaims } = auth();

    if (!userId) {
      // User is not authenticated, redirect to sign-in
      const signInUrl = new URL('/sign-in', req.url);
      signInUrl.searchParams.set('redirect_url', req.url);
      return NextResponse.redirect(signInUrl);
    }

    // Check if the user is an admin
    if (sessionClaims?.role !== 'admin') {
      // Redirect non-admin users to the home page
      return NextResponse.redirect(new URL('/', req.url));
    }

    // Allow access for admin users
    return NextResponse.next();
  }

  // Allow access to all other routes without authentication
  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};