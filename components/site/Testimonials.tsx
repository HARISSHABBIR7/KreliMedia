import { Star } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

function Rating() {
  return (
    <div className="flex gap-1" role="img" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-paper-2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say about us"
            align="center"
          />
        </Reveal>

        {/*
          Only two (real) testimonials exist, so a rotating carousel would feel
          empty — instead: a snap-scrolling row on small screens, a balanced
          two-up grid from md upward.
        */}
        <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible md:pb-0">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.1}
              className="w-[85%] shrink-0 snap-center sm:w-[70%] md:w-auto"
            >
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)] md:p-9">
                <Rating />
                <p className="mt-5 font-display text-lg font-bold tracking-tight text-primary">
                  {t.title}
                </p>
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-muted md:text-base">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-line pt-6">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft font-display text-sm font-extrabold text-accent"
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-sm text-ink-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
