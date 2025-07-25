// Our own middleware function, not using nextauth built-in function
// import { NextResponse } from "next/server"

// export function middleware(request: any) {
//   console.log(request)

//   return NextResponse.redirect(new URL("/about", request.url))
// }

import { auth } from "@lib/auth"

export const middleware = auth

export const config = {
  matcher: ["/account", "/login"]
}