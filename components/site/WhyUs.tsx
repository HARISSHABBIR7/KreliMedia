import { Check, MapPin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { benefits, contact, stats } from "@/lib/content";

export default function WhyUs() {
  return (
    <section className="bg-paper-2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Benefits */}
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="An agency that treats your budget like its own"
              description="No dashboards left on autopilot, no vanity metrics — just a disciplined process that has earned the trust of brands across two markets."
            />
            <ul className="mt-10 space-y-6">
              {benefits.map((benefit) => (
                <li key={benefit.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">{benefit.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-muted">{benefit.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Statistics + trust indicators */}
          <Reveal delay={0.12}>
            <div className="grid grid-cols-1 gap-4">
              <div className="rounded-2xl bg-primary p-8 text-white shadow-[0_24px_48px_-20px_rgba(10,63,56,0.5)]">
                <dl className="grid grid-cols-1 gap-7 sm:grid-cols-3 lg:grid-cols-1 lg:gap-8">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <dd className="font-display text-4xl font-extrabold tracking-tight">
                        {stat.value}
                      </dd>
                      <dt className="mt-1.5 text-sm text-white/70">{stat.label}</dt>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-2xl border border-line bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-ink">
                      {contact.offices.map((o) => o.city).join(" · ")}
                    </p>
                    <p className="text-sm text-ink-muted">
                      Two offices, one hands-on team — part of KSR Group.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
