import { NextResponse } from "next/server";

const baseUrl = "https://www.aladiantrading.com";

export async function GET() {
  const pages = ["/", "/about", "/businesses", "/contact", "/success"];
  const urls = pages
    .map((path) => {
      return `<url><loc>${baseUrl}${path}</loc><changefreq>monthly</changefreq><priority>${path === "/" ? "1.0" : "0.7"}</priority></url>`;
    })
    .join("");
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
