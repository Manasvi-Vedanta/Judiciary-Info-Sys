import { prisma } from "@/lib/prisma";
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// Initialize Prisma client

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );
  // Do not run code between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.
  // IMPORTANT: DO NOT REMOVE auth.getUser()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Handle API routes - no authentication needed
  if (request.nextUrl.pathname.includes("/api")) {
    return NextResponse.next();
  }

  // Handle unauthenticated users
  if (
    !user &&
    !request.nextUrl.pathname.startsWith("/login") &&
    !request.nextUrl.pathname.startsWith("/signup") &&
    !request.nextUrl.pathname.startsWith("/auth")
  ) {
    // no user, potentially respond by redirecting the user to the login page
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Handle authenticated users
  if (user) {
    try {
      // Get user data from prisma with the role

      // Check if we have the user and their role
      const role = request.cookies.get("userRole")?.value.toLocaleLowerCase();
      const roleBasedPath = `/dashboard/${role}`;

      // If user is on a non-dashboard page, redirect to their role-specific dashboard
      if (!request.nextUrl.pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL(roleBasedPath, request.url));
      }

      // If user is at dashboard root, redirect to their role-specific dashboard
      if (request.nextUrl.pathname === "/dashboard") {
        return NextResponse.redirect(new URL(roleBasedPath, request.url));
      }

      // Prevent users from accessing dashboard routes they don't have permission for
      if (
        request.nextUrl.pathname.startsWith("/dashboard/") &&
        !request.nextUrl.pathname.startsWith(roleBasedPath)
      ) {
        // Redirect them to their proper role-based dashboard
        return NextResponse.redirect(new URL(roleBasedPath, request.url));
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      // In case of error, fallback to general dashboard
      if (!request.nextUrl.pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
    }
  }

  // IMPORTANT: You *must* return the supabaseResponse object as is.
  return supabaseResponse;
}
