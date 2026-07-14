import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold " +
  "transition-all duration-200 ease-out select-none " +
  "active:translate-y-px";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-[0_1px_2px_rgba(10,63,56,0.24),0_8px_20px_-8px_rgba(10,63,56,0.45)] " +
    "hover:bg-primary-hover hover:shadow-[0_1px_2px_rgba(10,63,56,0.24),0_12px_24px_-8px_rgba(10,63,56,0.5)] hover:-translate-y-0.5",
  secondary:
    "border border-line bg-white text-ink shadow-[0_1px_2px_rgba(15,23,42,0.05)] " +
    "hover:border-primary/30 hover:text-primary hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-10px_rgba(15,23,42,0.2)]",
  ghost: "text-ink-muted hover:text-primary",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

/**
 * Anchor-based button used across the site. Rendered as a link because every
 * primary action on this single-page site is a navigation (anchor or mailto).
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
