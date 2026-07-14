"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";

function BrandMark() {
  return (
    <a href="#" className="group flex items-center gap-3" aria-label="Krelimedia — home">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white p-1.5 shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition-colors group-hover:border-primary/25">
        <Image
          src="/logo.png"
          alt=""
          width={28}
          height={28}
          className="object-contain"
          priority
        />
      </span>
      <span className="font-display text-lg font-extrabold tracking-tight text-primary">
        KRELIMEDIA
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-line bg-paper/90 backdrop-blur-md shadow-[0_1px_12px_rgba(15,23,42,0.04)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6 md:px-10">
        <BrandMark />

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-primary"
            >
              {link.label}
              <span className="absolute inset-x-3 -bottom-px h-px origin-left scale-x-0 bg-accent transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 font-display text-sm font-semibold text-white shadow-[0_1px_2px_rgba(10,63,56,0.24),0_8px_20px_-8px_rgba(10,63,56,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover sm:inline-flex"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-primary/30 hover:text-primary lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden border-t border-line bg-paper lg:hidden"
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.045, delayChildren: 0.05 } },
                closed: {},
              }}
              className="space-y-1 px-6 py-6"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.label}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: prefersReducedMotion ? 0 : 8 },
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 font-display text-lg font-semibold text-ink transition-colors hover:bg-paper-2 hover:text-primary"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: prefersReducedMotion ? 0 : 8 },
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="pt-4"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-display text-base font-semibold text-white transition-colors hover:bg-primary-hover"
                >
                  Start a Project
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
