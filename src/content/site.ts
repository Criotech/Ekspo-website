// All of the site's copy lives here, so wording can change without touching
// the components. Everything below is placeholder copy until ekspo's real
// pitch is settled.

export const site = {
  name: "ekspo",
  tagline: "Everything you need, right where you're working",
  description:
    "ekspo sits quietly beside your work and brings up the right answer the moment you need it.",
  downloadHref: "#download",

  nav: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    badge: "Now in early access",
    title: "Everything you need, right where you're working.",
    body: "ekspo sits quietly beside your work and brings up the right answer the moment you need it. No tab switching, no searching, no setup.",
    primaryCta: "Get ekspo for free",
    secondaryCta: "See how it works",
    note: "Free for personal use. macOS and Windows.",
  },

  preview: {
    meeting: "Weekly product sync",
    elapsed: "32:14",
    participants: [
      { name: "Ada Okafor", initials: "AO", speaking: true },
      { name: "Tomi Bello", initials: "TB", speaking: false },
      { name: "Chen Wei", initials: "CW", speaking: false },
      { name: "You", initials: "OP", speaking: false },
    ],
    question: "What did we agree on in this call?",
    answerTitle: "Three decisions from the last 30 minutes",
    answer: [
      "Launch moves to the 24th so QA can finish the payments flow.",
      "Ada owns the release notes; first draft by Thursday.",
      "Pricing stays at $20 a month for the first cohort.",
    ],
    shortcut: ["⌘", "↵"],
    hints: [
      { keys: ["⌘", "↵"], label: "Ask" },
      { keys: ["⌘", "\\"], label: "Hide" },
    ],
  },

  features: {
    title: "Quiet until you need it.",
    body: "ekspo stays out of the way, then shows up with exactly what you asked for.",
    items: [
      {
        visual: "shortcut",
        title: "One shortcut away",
        body: "Press ⌘ ↵ from any app and ekspo opens on top of what you're doing. Press it again and it's gone.",
      },
      {
        visual: "context",
        title: "Knows what's on screen",
        body: "Ask about the document, call or page in front of you. ekspo reads the context so you don't have to paste it.",
      },
      {
        visual: "private",
        title: "Private by default",
        body: "Nothing is saved unless you choose to keep it. Your history stays on your device.",
      },
    ],
  },

  steps: {
    title: "Up and running in a minute.",
    items: [
      {
        title: "Download ekspo",
        body: "Install the app for macOS or Windows. It takes less than a minute.",
      },
      {
        title: "Press the shortcut",
        body: "Hit ⌘ ↵ (Ctrl ↵ on Windows) from anywhere to bring ekspo up.",
      },
      {
        title: "Ask anything",
        body: "Type a question about what you're looking at and get a clear answer in place.",
      },
    ],
  },

  pricing: {
    title: "Simple pricing.",
    body: "Start free. Upgrade when ekspo becomes part of your day.",
    plans: [
      {
        name: "Free",
        price: "$0",
        period: "forever",
        cta: "Get started",
        featured: false,
        badge: null,
        perks: [
          "20 questions a day",
          "Works in every app",
          "Local history",
        ],
      },
      {
        name: "Pro",
        price: "$20",
        period: "per month",
        cta: "Start a 7-day trial",
        featured: true,
        badge: "Most popular",
        perks: [
          "Unlimited questions",
          "Meeting and screen context",
          "Priority support",
          "Early access to new features",
        ],
      },
    ],
  },

  faq: {
    title: "Questions, answered.",
    items: [
      {
        q: "What is ekspo?",
        a: "ekspo is a desktop app that brings up answers on top of whatever you're working on, so you never have to leave what you're doing.",
      },
      {
        q: "Which platforms does it support?",
        a: "macOS 13 or later and Windows 10 or later. A web version is on the way.",
      },
      {
        q: "Is my data private?",
        a: "Yes. ekspo only looks at your screen when you ask it to, and nothing is stored on our servers unless you turn on sync.",
      },
      {
        q: "Can I cancel Pro at any time?",
        a: "Yes. Cancel from your account page and you keep Pro until the end of the billing period.",
      },
    ],
  },

  cta: {
    title: "Try ekspo today.",
    body: "Free to start. Set up in under a minute.",
    button: "Download for free",
  },

  footer: {
    blurb: "Answers on top of whatever you're working on.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Download", href: "#download" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#" },
          { label: "Blog", href: "#" },
          { label: "Contact", href: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
        ],
      },
    ],
  },
} as const;
