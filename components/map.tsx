import Image from "next/image";
import { siteConfig } from "@/lib/config";

export function Map() {
  return (
    <figure className="overflow-hidden rounded-3xl border border-brand-line/60 bg-white/80 shadow-sm backdrop-blur">
      <Image
        src={siteConfig.contact.map.image}
        alt={`Map showing ${siteConfig.name} location in Addis Ababa`}
        width={960}
        height={540}
        className="h-auto w-full"
      />
      <figcaption className="flex flex-wrap items-center justify-between gap-4 border-t border-brand-line/60 bg-brand-mist/40 px-5 py-4 text-sm text-brand-muted">
        <span>
          {siteConfig.contact.address} — {siteConfig.contact.landmark}
        </span>
        <a
          href={siteConfig.contact.map.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-brand-ink hover:underline"
        >
          Open in Maps
        </a>
      </figcaption>
    </figure>
  );
}
