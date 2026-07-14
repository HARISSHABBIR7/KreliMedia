/**
 * Shared site content. Stats, process steps, testimonials, platforms and
 * contact details are carried over verbatim from the original site —
 * these must not change. New sections (About, FAQ, Why Us) are written
 * strictly from copy that already existed on the site.
 */

export const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#explore" },
  { label: "Portfolio", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#contact" },
  { label: "Team", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const stats = [
  { value: "$12M+", label: "Ad Spend Managed" },
  { value: "200+", label: "Brands Served" },
  { value: "12 Yrs", label: "Combined Experience" },
] as const;

export const tagline =
  "Where Strategy Meets Creativity to Drive Growth, Engagement, and Real Business Results.";

export const platforms = [
  "Meta Ads",
  "Google Ads",
  "Instagram",
  "TikTok",
  "LinkedIn",
  "YouTube",
  "Snapchat",
  "Twitter/X",
] as const;

/** 360° service offering, as listed in the original "Our Services" copy. */
export const services = [
  {
    icon: "megaphone",
    title: "Social Media Management",
    blurb:
      "Hands-on management of every post, platform, and audience segment — with content pillars built around your brand.",
  },
  {
    icon: "target",
    title: "Paid Advertising",
    blurb:
      "ROI-driven Meta Ads and Google Ads campaigns, deployed on the right channels at the right times and scaled on results.",
  },
  {
    icon: "clapperboard",
    title: "Video Production",
    blurb:
      "Scroll-stopping reels, graphics, and ad creatives produced by our in-house design and video team.",
  },
  {
    icon: "palette",
    title: "Design & Branding",
    blurb:
      "Brand identities and visual systems that keep every campaign, post, and creative aligned to who you are.",
  },
  {
    icon: "trending-up",
    title: "Growth Strategy",
    blurb:
      "Custom 90-day growth roadmaps covering content pillars, ad budgets, platform priorities, and KPIs.",
  },
  {
    icon: "code",
    title: "Web Development",
    blurb:
      "Digital experiences crafted for brands that mean business — unique web legacies built to convert.",
  },
] as const;

/** Original five-step process, copy verbatim. */
export const processSteps = [
  {
    level: "01",
    title: "Discovery Call",
    body: "We start with a deep-dive into your brand, goals, target audience, and current digital presence. No templates — just honest analysis.",
  },
  {
    level: "02",
    title: "Strategy Blueprint",
    body: "We craft a custom 90-day growth roadmap covering content pillars, ad budgets, platform priorities, and KPIs tailored to your business.",
  },
  {
    level: "03",
    title: "Creative Production",
    body: "Our design and video team produces scroll-stopping content — reels, graphics, ad creatives — all aligned to your brand identity.",
  },
  {
    level: "04",
    title: "Launch & Distribute",
    body: "We deploy your campaigns across the right channels at the right times, managing every post, ad set, and audience segment hands-on.",
  },
  {
    level: "05",
    title: "Analyse & Scale",
    body: "We track every metric that matters, kill what doesn't work, double down on what does, and report back with full transparency monthly.",
  },
] as const;

/** Real testimonials, verbatim. */
export const testimonials = [
  {
    initials: "AK",
    name: "Ayesha Khan",
    role: "Business Owner",
    title: "Incredibly Professional!",
    quote:
      "Krelimedia helped us redefine our social media presence. Their content strategy and ad campaigns brought in real engagement, turning followers into loyal customers!",
  },
  {
    initials: "UR",
    name: "Usman Riaz",
    role: "Marketing Director",
    title: "A Game Changer!",
    quote:
      "Their innovative ideas and attention to detail have significantly boosted our brand visibility in a crowded market. Highly recommended!",
  },
] as const;

/** Portfolio categories from the original "Creative Work" section. */
export const portfolio = [
  {
    tag: "Paid Media",
    title: "Campaign Systems",
    blurb:
      "Full-funnel paid campaigns planned, launched, and scaled hands-on across Meta, Google, and TikTok.",
  },
  {
    tag: "Branding",
    title: "Brand Identities",
    blurb:
      "Visual identities and content systems that keep every touchpoint aligned to the brand.",
  },
  {
    tag: "Strategy",
    title: "Growth Engines",
    blurb:
      "Strategy, analytics, and creative working together to turn attention into measurable business results.",
  },
] as const;

/** Benefits distilled from the original process copy. */
export const benefits = [
  {
    title: "No templates — honest analysis",
    body: "Every engagement starts with a genuine deep-dive into your brand, goals, and audience.",
  },
  {
    title: "A custom 90-day roadmap",
    body: "Content pillars, ad budgets, platform priorities, and KPIs tailored to your business.",
  },
  {
    title: "Hands-on management",
    body: "We run every post, ad set, and audience segment ourselves — nothing on autopilot.",
  },
  {
    title: "Full transparency, monthly",
    body: "We kill what doesn't work, double down on what does, and report back openly.",
  },
] as const;

/** Company values, written from existing site copy. */
export const values = [
  {
    icon: "compass",
    title: "Strategy First",
    body: "Creativity guided by clear goals, audiences, and KPIs — never guesswork.",
  },
  {
    icon: "sparkles",
    title: "Creative that Converts",
    body: "Scroll-stopping content is only useful when it drives engagement and results.",
  },
  {
    icon: "eye",
    title: "Full Transparency",
    body: "Honest analysis up front and open monthly reporting throughout.",
  },
  {
    icon: "handshake",
    title: "Hands-on Partnership",
    body: "The creative minds and growth strategists behind your brand, working as one team.",
  },
] as const;

/** FAQ written strictly from facts already published on the site. */
export const faqs = [
  {
    q: "What services does Krelimedia offer?",
    a: "We're a full-service, 360° digital marketing agency: social media management, paid advertising (Meta Ads and Google Ads), video production, design and branding, growth strategy, and web development.",
  },
  {
    q: "How does an engagement start?",
    a: "With a discovery call — a deep-dive into your brand, goals, target audience, and current digital presence. No templates, just honest analysis.",
  },
  {
    q: "Which platforms do you manage?",
    a: "Meta Ads, Google Ads, Instagram, TikTok, LinkedIn, YouTube, Snapchat, and Twitter/X — prioritised according to where your audience actually is.",
  },
  {
    q: "How do you measure and report results?",
    a: "We track every metric that matters, kill what doesn't work, double down on what does, and report back with full transparency every month.",
  },
  {
    q: "How quickly will we see a plan?",
    a: "After discovery we craft a custom 90-day growth roadmap covering content pillars, ad budgets, platform priorities, and KPIs tailored to your business.",
  },
  {
    q: "Where is Krelimedia located?",
    a: "We have offices in Islamabad (Naseem Arcade IDC, I-9) and Dubai (SIT Tower, Dubai Silicon Oasis).",
  },
] as const;

export const contact = {
  phone: "051-2751107",
  email: "info@krelimedia.com",
  offices: [
    { city: "Islamabad", address: "Office No.2, Naseem Arcade IDC, I-9" },
    { city: "Dubai", address: "Office 348, SIT Tower, Dubai Silicon Oasis" },
  ],
} as const;
