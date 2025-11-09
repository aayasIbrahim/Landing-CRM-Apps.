import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 🔐 Admin routes — only admins can access these
  const adminRoutes = ["/admin"];

  // ⚙️ Read session token from NextAuth
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // 🧑‍💻 If accessing admin route
  if (adminRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      // Not logged in → redirect to Sign In
      const url = request.nextUrl.clone();
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }

    if (token.role !== "admin") {
      // Logged in but not admin → redirect to home
      const url = request.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  // ✅ Otherwise allow
  return NextResponse.next();
}

