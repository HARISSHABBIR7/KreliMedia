interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

/** Consistent eyebrow / title / description block used by every section. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`text-xs font-bold uppercase tracking-[0.18em] ${
          dark ? "text-accent-soft/80" : "text-accent"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            dark ? "text-white/70" : "text-ink-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
