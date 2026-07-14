"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, BadgeCheck, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";
import { stats, tagline } from "@/lib/content";

const easeOut = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

/** Decorative, illustrative analytics card — pure code, no stock imagery. */
function DashboardCard() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-[460px] rounded-2xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.05),0_24px_48px_-20px_rgba(15,23,42,0.18)]"
    >
      {/* Card header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft p-1.5">
            <Image src="/logo.png" alt="" width={22} height={22} className="object-contain" />
          </span>
          <div>
            <p className="font-display text-sm font-bold text-ink">Campaign Overview</p>
            <p className="text-xs text-ink-muted">Last 90 days</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Live
        </span>
      </div>

      {/* Area chart */}
      <div className="mt-5 rounded-xl bg-paper-2 p-4">
        <svg viewBox="0 0 320 120" className="h-auto w-full" role="presentation">
          <defs>
            <linearGradient id="hero-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[30, 60, 90].map((y) => (
            <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="var(--line)" strokeWidth="1" strokeDasharray="3 5" />
          ))}
          <path
            d="M0 96 C 36 92, 52 78, 84 76 S 140 84, 168 66 S 224 34, 256 30 S 300 20, 320 14 L 320 120 L 0 120 Z"
            fill="url(#hero-fill)"
          />
          <path
            d="M0 96 C 36 92, 52 78, 84 76 S 140 84, 168 66 S 224 34, 256 30 S 300 20, 320 14"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="256" cy="30" r="4" fill="var(--accent)" />
          <circle cx="256" cy="30" r="8" fill="var(--accent)" opacity="0.15" />
        </svg>
      </div>

      {/* Metric row */}
      <div className="mt-5 grid grid-cols-3 divide-x divide-line">
        {[
          { label: "Reach", value: "2.4M" },
          { label: "Engagement", value: "+248%" },
          { label: "ROAS", value: "4.8x" },
        ].map((m) => (
          <div key={m.label} className="px-4 first:pl-0 last:pr-0">
            <p className="font-display text-lg font-extrabold tracking-tight text-ink">{m.value}</p>
            <p className="mt-0.5 text-xs text-ink-muted">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const float = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          animate: { y: [0, -8, 0] },
          transition: { duration: 5.5, delay, repeat: Infinity, ease: "easeInOut" as const },
        };

  return (
    <section className="relative overflow-hidden pt-[72px]">
      {/* Restrained background: one soft brand tint + faint dot texture */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-accent-soft blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(rgba(30,41,59,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "linear-gradient(to bottom, black 55%, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 pb-20 pt-16 md:px-10 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-28 lg:pt-24">
        {/* Copy column */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-semibold tracking-wide text-ink-muted shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Full-Service Digital Marketing Agency
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-[2.65rem] font-extrabold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]"
          >
            Crafting unique
            <br />
            <span className="text-primary">web legacies.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
            {tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#contact" size="lg">
              Start Your Journey
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#work" variant="secondary" size="lg">
              See Our Work
            </Button>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs leading-snug text-ink-muted md:text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Visual column */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
          className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:justify-self-end"
        >
          <div className="relative flex justify-center px-4 py-8 sm:px-8">
            <DashboardCard />

            {/* Floating card — real company stat */}
            <motion.div
              {...float(0.4)}
              aria-hidden="true"
              className="absolute -right-1 top-0 hidden rounded-xl border border-line bg-white px-4 py-3 shadow-[0_16px_32px_-16px_rgba(15,23,42,0.25)] sm:flex sm:items-center sm:gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <TrendingUp className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-ink">$12M+</p>
                <p className="text-xs text-ink-muted">Ad Spend Managed</p>
              </div>
            </motion.div>

            {/* Floating card — real company stat */}
            <motion.div
              {...float(1.6)}
              aria-hidden="true"
              className="absolute -bottom-2 -left-1 hidden rounded-xl border border-line bg-white px-4 py-3 shadow-[0_16px_32px_-16px_rgba(15,23,42,0.25)] sm:flex sm:items-center sm:gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <BadgeCheck className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-ink">200+ Brands</p>
                <p className="text-xs text-ink-muted">Served &amp; Growing</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
