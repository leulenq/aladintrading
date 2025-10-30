import { NextResponse } from "next/server";

export async function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: https://www.aladiantrading.com/api/sitemap`;
  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
