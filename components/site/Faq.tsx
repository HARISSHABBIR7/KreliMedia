"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="faq" className="scroll-mt-20 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            align="center"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 divide-y divide-line rounded-2xl border border-line bg-white px-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] md:px-8">
            {faqs.map((faq, i) => {
              const open = openIndex === i;
              return (
                <div key={faq.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : i)}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-base font-bold text-ink transition-colors hover:text-primary md:py-6"
                    >
                      {faq.q}
                      <motion.span
                        animate={{ rotate: open ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          open
                            ? "border-transparent bg-primary text-white"
                            : "border-line text-ink-muted"
                        }`}
                      >
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-button-${i}`}
                        initial={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        animate={
                          prefersReducedMotion
                            ? { opacity: 1 }
                            : { height: "auto", opacity: 1 }
                        }
                        exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-10 text-[15px] leading-relaxed text-ink-muted">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
