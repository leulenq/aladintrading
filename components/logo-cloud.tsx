"use client";

import Image from "next/image";
import Link from "next/link";
import { partnersConfig } from "@/lib/config";
import { motion } from "framer-motion";

export function LogoCloud() {
  return (
    <div className="rounded-card border border-brand.line bg-white/70 p-8 shadow-sm backdrop-blur">
      <p className="text-center text-sm uppercase tracking-[0.3em] text-brand-muted">Trusted by strategic partners</p>
      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {partnersConfig.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex items-center justify-center"
          >
            <Link href={partner.url} aria-label={partner.name} target="_blank" rel="noopener noreferrer">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={48}
                className="h-12 w-auto grayscale transition hover:grayscale-0"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
