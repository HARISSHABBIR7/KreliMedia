"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { contact } from "@/lib/content";

/**
 * No email-marketing backend exists yet, so subscribing composes an email to
 * the agency's existing address. Swap `handleSubmit` for a provider call
 * (Mailchimp, Resend, …) when one is chosen.
 */
export default function NewsletterForm() {
  const [opened, setOpened] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("newsletter-email") ?? "");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      "Newsletter subscription",
    )}&body=${encodeURIComponent(`Please add ${email} to the Krelimedia newsletter.`)}`;
    setOpened(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email" className="mb-3 block text-sm text-white/70">
        Growth tips and agency news, straight to your inbox.
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          name="newsletter-email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className="w-full min-w-0 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 transition-colors focus:border-accent-soft/60 focus:bg-white/10 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe to newsletter"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-soft"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      <p className="mt-3 min-h-5 text-xs text-white/50" aria-live="polite">
        {opened ? "Your email app should have opened — just hit send." : ""}
      </p>
    </form>
  );
}
