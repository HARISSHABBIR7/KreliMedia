import Image from "next/image";
import { Compass, Eye, Handshake, Sparkles, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { stats, values } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  compass: Compass,
  sparkles: Sparkles,
  eye: Eye,
  handshake: Handshake,
};

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Mission / vision */}
          <Reveal>
            <SectionHeading
              eyebrow="Who We Are"
              title="The story behind Krelimedia"
              description="Krelimedia is where strategy meets creativity — a team of creative minds and growth strategists driving real results for brands that mean business."
            />

            <div className="mt-10 space-y-6">
              <div className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-display text-base font-bold text-ink">Our Mission</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                  To drive growth, engagement, and real business results by pairing honest
                  strategy with creative work that people actually stop for.
                </p>
              </div>
              <div className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-display text-base font-bold text-ink">Our Vision</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                  Crafting unique web legacies — building brands whose digital presence
                  outlasts any single campaign.
                </p>
              </div>

              <dl className="grid grid-cols-3 gap-6 rounded-2xl bg-paper-2 p-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dd className="font-display text-2xl font-extrabold tracking-tight text-primary">
                      {stat.value}
                    </dd>
                    <dt className="mt-1 text-xs leading-snug text-ink-muted sm:text-sm">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {/* Values */}
          <Reveal delay={0.12}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex items-center gap-4 rounded-2xl bg-primary p-6 text-white sm:col-span-2">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-2">
                  <Image src="/logo.png" alt="" width={30} height={30} className="object-contain" />
                </span>
                <p className="font-display text-lg font-bold leading-snug">
                  Where Strategy Meets Creativity.
                </p>
              </div>

              {values.map((value) => {
                const Icon = icons[value.icon];
                return (
                  <div
                    key={value.title}
                    className="rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_20px_40px_-18px_rgba(15,23,42,0.16)]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-ink">{value.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{value.body}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
