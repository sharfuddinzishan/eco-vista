import { NextResponse } from "next/server";

export async function middleware(req) {
  // Only intercept requests to `/api/*`
  if (req.nextUrl.pathname.startsWith("/api/")) {
    const apiUrl = `https://bdweather.netlify.app${req.nextUrl.pathname}`;

    const response = await fetch(apiUrl);

    const headers = new Headers(response.headers);

    // Set CORS headers
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight requests
    if (req.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    const responseBody = await response.text();
    return new Response(responseBody, { headers });
  }

  return NextResponse.next();
}
