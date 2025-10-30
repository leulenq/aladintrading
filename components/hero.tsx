"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { Button } from "./button";
import { Container } from "./container";
import { GlassCard } from "./card";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="hero"
      data-section="hero"
      className="relative overflow-hidden bg-gradient-to-br from-brand-mist/60 via-brand-canvas to-brand-blush/60 scroll-mt-32"
    >
      <div className="absolute inset-0 bg-hero-texture opacity-40" aria-hidden />
      <div className="absolute -right-40 top-24 hidden h-[520px] w-[520px] rounded-full bg-brand-accent/20 blur-3xl lg:block" aria-hidden />
      <div className="absolute -left-32 bottom-10 hidden h-[420px] w-[420px] rounded-full bg-brand-blush/30 blur-3xl sm:block" aria-hidden />
      <Container className="relative z-10 pb-28 pt-[180px] lg:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_440px]">
          <div className="space-y-10">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-brand-muted shadow-xs backdrop-blur"
            >
              Strategic Ethiopian enterprise
            </motion.span>
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
                className="text-4xl font-semibold leading-tight text-brand-ink sm:text-5xl lg:text-[58px] lg:leading-[1.05]"
              >
                {hero.headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
                className="max-w-xl text-lg leading-relaxed text-brand-muted"
              >
                {hero.subheadline}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg">
                <Link href={hero.primaryCta.target}>{hero.primaryCta.label}</Link>
              </Button>
              <Button asChild size="lg" variant="subtle">
                <Link href={hero.secondaryCta.target}>{hero.secondaryCta.label}</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <GlassCard className="relative overflow-hidden bg-white/70 p-8 shadow-lg">
              <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-brand-accent/30 blur-3xl" aria-hidden />
              <div className="absolute -bottom-16 -left-10 h-60 w-60 rounded-full bg-brand-blush/40 blur-3xl" aria-hidden />
              <div className="relative z-10 space-y-8">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">Regional momentum</p>
                  <h2 className="text-2xl font-semibold text-brand-ink">Investing in resilient industrial platforms</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {hero.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/40 bg-white/60 px-4 py-5 text-center shadow-xs">
                      <div className="text-2xl font-semibold text-brand-ink">{stat.value}</div>
                      <div className="mt-1 text-xs font-medium uppercase tracking-[0.3em] text-brand-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
