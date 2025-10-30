"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";

export function LogoCloud() {
  return (
    <div className="rounded-3xl border border-brand-line/70 bg-white/80 p-10 shadow-sm shadow-brand-ink/5 backdrop-blur">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-brand-muted">Strategic partnerships</p>
      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {siteConfig.logoCloud.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex items-center justify-center"
          >
            <Link href={partner.url} aria-label={partner.name} target="_blank" rel="noopener noreferrer">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={48}
                className="h-12 w-auto grayscale transition duration-300 hover:grayscale-0"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
