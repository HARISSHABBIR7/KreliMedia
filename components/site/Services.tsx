import {
  Clapperboard,
  Code2,
  Megaphone,
  Palette,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  megaphone: Megaphone,
  target: Target,
  clapperboard: Clapperboard,
  palette: Palette,
  "trending-up": TrendingUp,
  code: Code2,
};

export default function Services() {
  return (
    <section id="explore" className="scroll-mt-20 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="360° digital marketing, under one roof"
            description="Social media, paid ads, video production, design, growth strategy, and web development — everything a brand needs to grow, working together."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_20px_40px_-18px_rgba(15,23,42,0.18)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">
                    {service.blurb}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
