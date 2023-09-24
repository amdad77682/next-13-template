// middleware.ts
import { NextResponse } from "next/server";
export function middleware() {
  // Setting cookies on the response
  // const token = request.cookies.get(AUTH.ACCESS_TOKEN);
  // const url = request.nextUrl.clone();
  const response = NextResponse.next();

  // if (request.nextUrl.pathname.startsWith("/dashboard") && !token) {
  //   url.pathname = "/auth/login";
  //   return NextResponse.redirect(url);
  // }
  // if (
  //   token &&
  //   (request.nextUrl.pathname.startsWith("/auth") ||
  //     request.nextUrl.pathname === "/")
  // ) {
  //   url.pathname = "/dashboard/orders";
  //   return NextResponse.redirect(url);
  // }

  return response;
}
