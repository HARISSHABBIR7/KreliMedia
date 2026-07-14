import Image from "next/image";
import NewsletterForm from "@/components/site/NewsletterForm";
import { contact, services, tagline } from "@/lib/content";

/* Brand icons were removed from lucide-react, so these are minimal inline
   SVG marks (24×24, currentColor) matching the icon set's stroke style. */
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#explore" },
  { label: "Portfolio", href: "#work" },
  { label: "About Us", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/**
 * NOTE: Krelimedia's social profile URLs weren't present in the original
 * codebase — replace the "#" placeholders below with the real profiles.
 */
const socials = [
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedinIcon },
  { label: "YouTube", href: "#", Icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-16 md:px-10 md:pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr]">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3" aria-label="Krelimedia — home">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1.5">
                <Image src="/logo.png" alt="" width={28} height={28} className="object-contain" />
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight">KRELIMEDIA</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">{tagline}</p>
            <ul className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={`Krelimedia on ${label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <a
                    href="#explore"
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                <a href={`tel:${contact.phone.replace(/-/g, "")}`} className="transition-colors hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
                  {contact.email}
                </a>
              </li>
              {contact.offices.map((office) => (
                <li key={office.city} className="leading-relaxed">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/45">
                    {office.city}
                  </span>
                  {office.address}
                </li>
              ))}
            </ul>
            <div className="mt-7 border-t border-white/10 pt-6">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} KRELIMEDIA. All rights reserved.
          </p>
          <p className="text-xs text-white/40">Powered by KSR Group</p>
        </div>
      </div>
    </footer>
  );
}
