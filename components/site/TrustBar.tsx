import { platforms } from "@/lib/content";

/**
 * Replaces the old platform marquee: same eight platforms, presented as a
 * calm, static trust strip instead of a looping ticker.
 */
export default function TrustBar() {
  return (
    <section aria-label="Platforms we manage" className="border-y border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
          Campaigns managed across
        </p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {platforms.map((platform) => (
            <li
              key={platform}
              className="font-display text-sm font-bold tracking-tight text-ink/50 transition-colors hover:text-primary"
            >
              {platform}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
