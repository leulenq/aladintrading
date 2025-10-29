import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { formatPhone } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-brand.line/70 bg-white/80">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-brand-ink">{siteConfig.name}</h3>
          <p className="text-sm leading-relaxed text-brand-muted">{siteConfig.tagline}</p>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">Africa focused • Future ready</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-ink">Navigation</h4>
          <ul className="mt-3 space-y-2 text-sm text-brand-muted">
            <li><Link className="hover:text-brand-ink" href="/">Home</Link></li>
            <li><Link className="hover:text-brand-ink" href="/about">About</Link></li>
            <li><Link className="hover:text-brand-ink" href="/businesses">Businesses</Link></li>
            <li><Link className="hover:text-brand-ink" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-ink">Contact</h4>
          <dl className="mt-3 space-y-2 text-sm text-brand-muted">
            <div>
              <dt className="font-semibold text-brand-ink">Address</dt>
              <dd>
                {siteConfig.address.country} — {siteConfig.address.city}, {siteConfig.address.subCity}, {siteConfig.address.woreda},
                {" "}
                {siteConfig.address.house}, {siteConfig.address.landmark}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-ink">Phone</dt>
              {siteConfig.phones.map((phone) => (
                <dd key={phone}>
                  <a className="hover:text-brand-ink" href={`tel:${formatPhone(phone)}`}>
                    {phone}
                  </a>
                </dd>
              ))}
            </div>
            <div>
              <dt className="font-semibold text-brand-ink">Email</dt>
              {siteConfig.emails.map((email) => (
                <dd key={email}>
                  <a className="hover:text-brand-ink" href={`mailto:${email}`}>
                    {email}
                  </a>
                </dd>
              ))}
            </div>
          </dl>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-ink">Stay updated</h4>
          <p className="mt-3 text-sm text-brand-muted">
            Join our quarterly insights on industrialisation, supply chain resilience, and investment opportunities.
          </p>
          <form className="mt-4 space-y-3" noValidate>
            <div>
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-brand.line bg-white px-4 py-2 text-sm text-brand-ink shadow-xs focus:border-brand.black focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-brand.black px-4 py-2 text-sm font-medium text-brand.white transition hover:bg-brand.ink"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-brand.line/70 bg-white/70 py-6 text-center text-xs text-brand-muted">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
