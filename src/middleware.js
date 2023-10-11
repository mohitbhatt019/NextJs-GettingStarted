import { NextResponse } from "next/server";
import React from "react";

export function middleware(request) {
//   console.log("Middleware called");
//   console.log(request, "request");
//   if (request.nextUrl.pathname != "/login") {
     return NextResponse.redirect(new URL("/login", request.url));
 // }
}

export const config={
    // matcher:"/about/:path*"
    matcher:["/about/:path*","/studentlist/:path*"]
}
