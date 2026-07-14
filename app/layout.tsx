import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/**
 * Fonts are self-hosted (woff2 vendored from the official @fontsource
 * packages): builds never depend on Google Fonts being reachable and no
 * third-party request is made at runtime.
 */
const manrope = localFont({
  src: "./fonts/manrope-latin-wght-normal.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KRELIMEDIA — Where Strategy Meets Creativity",
  description:
    "Krelimedia is a full-service digital marketing agency. We deliver ROI-driven Meta Ads, Google Ads, social media management, video production, and growth strategies.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
