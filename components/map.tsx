import Image from "next/image";
import Link from "next/link";

const MAP_URL = "https://staticmap.openstreetmap.de/staticmap.php?center=9.037,38.792&zoom=14&size=800x400&maptype=mapnik&markers=9.037,38.792,lightblue1";
const MAP_LINK = "https://www.openstreetmap.org/?mlat=9.037&mlon=38.792#map=15/9.0370/38.7920";

export function Map() {
  return (
    <figure className="overflow-hidden rounded-2xl border border-brand.line/70 bg-white/80 shadow-sm backdrop-blur">
      <Image src={MAP_URL} alt="Map showing Aladian Trading PLC location" width={800} height={400} className="h-auto w-full" />
      <figcaption className="flex items-center justify-between gap-4 border-t border-brand.line/70 bg-white/80 px-4 py-3 text-sm text-brand-muted">
        <span>Yeka Sub-City, Addis Abeba</span>
        <Link href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-ink hover:underline">
          Open in Maps
        </Link>
      </figcaption>
    </figure>
  );
}
