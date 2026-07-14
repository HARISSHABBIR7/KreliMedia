"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { contact } from "@/lib/content";

const inputStyles =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-[15px] text-ink " +
  "placeholder:text-ink-muted/70 transition-all duration-200 " +
  "hover:border-ink-muted/40 focus:border-accent focus:bg-white focus:outline-none " +
  "focus:ring-4 focus:ring-accent/10";

/**
 * The site has no backend, so the form composes a pre-filled email to the
 * agency's existing address — the same contact path the old site used,
 * with a far better experience in front of it. Swap `handleSubmit` for an
 * API call whenever a backend/provider is added.
 */
export default function Contact() {
  const [opened, setOpened] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `New project inquiry — ${name}${company ? ` (${company})` : ""}`;
    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company || "—"}\n\n${message}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-paper-2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Company information */}
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Ready to start your next project?"
              description="Tell us where you are. We'll map the strategy, ship the creatives, and scale what wins."
            />

            <ul className="mt-10 space-y-4">
              <li>
                <a
                  href={`tel:${contact.phone.replace(/-/g, "")}`}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_16px_32px_-16px_rgba(15,23,42,0.16)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Phone className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      Phone
                    </p>
                    <p className="font-display text-[15px] font-bold text-ink group-hover:text-primary">
                      {contact.phone}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_16px_32px_-16px_rgba(15,23,42,0.16)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Mail className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      Email
                    </p>
                    <p className="font-display text-[15px] font-bold text-ink group-hover:text-primary">
                      {contact.email}
                    </p>
                  </div>
                </a>
              </li>
              {contact.offices.map((office) => (
                <li
                  key={office.city}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      {office.city}
                    </p>
                    <p className="font-display text-[15px] font-bold text-ink">{office.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.12}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-line bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.05),0_24px_48px_-24px_rgba(15,23,42,0.14)] md:p-9"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-ink">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={inputStyles}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-ink">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={inputStyles}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-company" className="mb-2 block text-sm font-semibold text-ink">
                  Company <span className="font-normal text-ink-muted">(optional)</span>
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Your brand"
                  className={inputStyles}
                />
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-ink">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your goals…"
                  className={`${inputStyles} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-[15px] font-semibold text-white shadow-[0_1px_2px_rgba(10,63,56,0.24),0_8px_20px_-8px_rgba(10,63,56,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover sm:w-auto"
              >
                Send Message
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>

              <p className="mt-4 text-sm text-ink-muted" aria-live="polite">
                {opened
                  ? "Your email app should have opened with your message — just hit send."
                  : "Submitting opens your email app with the message pre-filled."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
