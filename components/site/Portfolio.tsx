import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolio } from "@/lib/content";

/**
 * Abstract, code-built visuals — one per category — so the showcase feels
 * designed without inventing fake client work or using stock imagery.
 */
function CardVisual({ index }: { index: number }) {
  return (
    <div
      aria-hidden="true"
      className="relative h-44 overflow-hidden rounded-xl bg-primary transition-transform duration-500 ease-out group-hover:scale-[1.015]"
    >
      <svg viewBox="0 0 400 176" className="h-full w-full" role="presentation" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`pf-g-${index}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0e7264" />
            <stop offset="100%" stopColor="#0a3f38" />
          </linearGradient>
        </defs>
        <rect width="400" height="176" fill={`url(#pf-g-${index})`} />

        {index === 0 && (
          /* Campaign Systems — ascending bars */
          <g fill="rgba(255,255,255,0.14)">
            {[36, 52, 44, 68, 60, 84, 76, 104].map((h, i) => (
              <rect key={i} x={56 + i * 38} y={148 - h} width="20" height={h} rx="5" />
            ))}
            <rect x={56 + 7 * 38} y={148 - 104} width="20" height="104" rx="5" fill="rgba(231,241,238,0.55)" />
          </g>
        )}

        {index === 1 && (
          /* Brand Identities — overlapping geometry echoing the logo's angles */
          <g>
            <circle cx="150" cy="88" r="52" fill="rgba(255,255,255,0.10)" />
            <circle cx="204" cy="88" r="52" fill="rgba(231,241,238,0.18)" />
            <path d="M256 40 L312 40 L288 136 L232 136 Z" fill="rgba(255,255,255,0.14)" />
            <path d="M96 128 L128 64 L160 128 Z" fill="rgba(231,241,238,0.35)" />
          </g>
        )}

        {index === 2 && (
          /* Growth Engines — rising curve with milestones */
          <g>
            <path
              d="M32 140 C 96 136, 128 112, 176 104 S 272 72, 368 32"
              fill="none"
              stroke="rgba(231,241,238,0.55)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M32 152 C 104 150, 152 132, 208 124 S 296 104, 368 84"
              fill="none"
              stroke="rgba(255,255,255,0.16)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {[
              [176, 104],
              [272, 62],
              [368, 32],
            ].map(([cx, cy]) => (
              <g key={cx}>
                <circle cx={cx} cy={cy} r="10" fill="rgba(231,241,238,0.18)" />
                <circle cx={cx} cy={cy} r="4" fill="#e7f1ee" />
              </g>
            ))}
          </g>
        )}
      </svg>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="scroll-mt-20 bg-paper-2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Our Work"
              title="Creative work that means business"
              description="Campaigns, identities, and growth systems crafted for over 200 brands."
            />
            <p className="shrink-0 text-sm text-ink-muted md:pb-2">
              Full case studies available on request.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {portfolio.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <a
                href="#contact"
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_20px_40px_-18px_rgba(15,23,42,0.18)]"
              >
                <CardVisual index={i} />
                <div className="flex flex-1 flex-col p-4 pb-3">
                  <span className="inline-flex w-fit rounded-full bg-accent-soft px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">
                    {project.tag}
                  </span>
                  <div className="mt-3.5 flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="mt-1 h-4.5 w-4.5 shrink-0 text-ink-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{project.blurb}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
