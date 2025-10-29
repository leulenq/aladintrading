"use client";

import Link from "next/link";
import { Button } from "./button";
import { Container } from "./container";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

const words = ["Diversified", "Trading", "&", "Manufacturing", "in", "Ethiopia"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand.bg">
      <div className="absolute inset-0 bg-hero-texture" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-br from-brand.accent/20 via-transparent to-brand.black/5" aria-hidden />
      <Container className="relative z-10 py-24 sm:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-brand.line/70 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.4em] text-brand-muted shadow-xs backdrop-blur"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Integrated value creation
            </motion.div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight text-brand-ink sm:text-5xl lg:text-6xl">
                {words.map((word, index) => (
                  <motion.span
                    key={word + index}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + index * 0.08, duration: 0.6 }}
                  >
                    {word}
                    {index !== words.length - 1 && " "}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                className="max-w-xl text-lg leading-relaxed text-brand-muted"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                {siteConfig.tagline}
              </motion.p>
            </div>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <Button asChild size="lg">
                <Link href="/businesses">Explore businesses</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact us</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-lg overflow-hidden rounded-[28px] border border-brand.line/70 bg-white/60 p-10 shadow-lg backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand.accent/40 via-transparent to-transparent" aria-hidden />
              <div className="relative z-10 space-y-6 text-center">
                <motion.p
                  className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-muted"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  Multi-sector capabilities
                </motion.p>
                <motion.h2
                  className="text-2xl font-semibold text-brand-ink sm:text-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                >
                  Manufacturing, Distribution, and Infrastructure execution with one accountable partner.
                </motion.h2>
                <motion.div
                  className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-brand-muted"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <span className="rounded-full bg-white/80 px-4 py-2 shadow-xs">Supply Chain Certainty</span>
                  <span className="rounded-full bg-white/80 px-4 py-2 shadow-xs">Operational Discipline</span>
                  <span className="rounded-full bg-white/80 px-4 py-2 shadow-xs">Sustainable Growth</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
