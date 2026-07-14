import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section id="quest" className="scroll-mt-20 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionHeading
                eyebrow="How We Work"
                title="A proven process, from discovery to scale"
                description="Five deliberate steps take every brand from first conversation to campaigns that compound. You'll always know exactly where we are and what comes next."
              />
            </Reveal>
          </div>

          <ol className="relative border-l border-line pl-8 md:pl-10">
            {processSteps.map((step, i) => (
              <Reveal key={step.level} delay={i * 0.06}>
                <li className={i === processSteps.length - 1 ? "relative" : "relative pb-12"}>
                  {/* Timeline marker */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-8 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-line bg-white font-display text-sm font-extrabold text-accent shadow-[0_1px_2px_rgba(15,23,42,0.06)] md:-left-10"
                  >
                    {step.level}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                      <span className="sr-only">Step {step.level}: </span>
                      {step.title}
                    </h3>
                    <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-ink-muted md:text-base">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
