// All of the site's copy lives here, so wording can change without touching
// the components. Facts come from the Ekspo app's README and docs/PRICING-PLAN.md.

// TODO: confirm this mailbox exists and is monitored before launch.
export const SUPPORT_EMAIL = "support@ekspoai.com";

// The canonical address: ekspoai.com (no www) redirects here.
export const SITE_URL = "https://www.ekspoai.com";

export const site = {
  name: "Ekspo",
  company: "Criotech",
  tagline: "Your live meeting assistant",
  description:
    "Ekspo listens to your meeting, transcribes it on your computer, and hands you a clear answer the moment someone turns to you with a question. AI answers are included in your plan.",
  downloadHref: "/#download",
  downloadBaseUrl: (
    process.env.NEXT_PUBLIC_DOWNLOAD_BASE_URL ??
    "https://github.com/Criotech/ekspo-releases/releases/download/v1.0.9"
  ).replace(/\/$/, ""),

  // Accounts (Supabase). The URL and publishable key are public by design, and match the
  // ones shipped inside the Ekspo app. Override with NEXT_PUBLIC_SUPABASE_URL/_ANON_KEY.
  supabase: {
    url:
      process.env.NEXT_PUBLIC_SUPABASE_URL ??
      "https://yuqkrfsfifwqzvfjydzr.supabase.co",
    anonKey:
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
      "sb_publishable_UwAjFxULlm_pRucV5RbJYQ_hvXxv6uX",
    // Off until the Google provider is configured in Supabase; NEXT_PUBLIC_GOOGLE_SIGNIN=1 turns it on.
    google: process.env.NEXT_PUBLIC_GOOGLE_SIGNIN === "1",
  },

  // /desktop-login: where "Sign In with Browser" in the app lands.
  desktopLogin: {
    signin: {
      title: "Sign in to Ekspo",
      body: "Sign in to continue to the Ekspo app.",
    },
    signup: {
      title: "Create your account",
      body: "It takes a minute. Every account starts with a free trial.",
    },
    forgot: {
      title: "Reset your password",
      body: "We'll email you a link to choose a new one.",
    },
    reset: {
      title: "Choose a new password",
      body: "Then you'll be taken back to Ekspo.",
    },
    confirm: {
      title: "Check your inbox",
      body: "Open the link we sent to finish creating your account. It brings you back here.",
    },
    authorize: {
      title: "Continue to Ekspo",
      body: "Ekspo will be signed in to this account.",
    },
    done: {
      title: "You're signed in",
      body: "Ekspo should open now. You can close this tab.",
    },
    missing: {
      title: "Start from the Ekspo app",
      body: "Open Ekspo and click Sign In with Browser. It brings you back here to sign in.",
    },
  },

  // Paths start with "/" so the links also work from /terms, /privacy and friends.
  nav: [
    { label: "Features", href: "/#features" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ],

  hero: {
    badge: "For macOS · Windows coming soon",
    title: "Never get caught off guard in a meeting again.",
    body: "Ekspo sits quietly beside your call, keeps a live transcript, and suggests a clear answer the moment someone asks you a question. Written from your own profile and notes, in your own words, so you always sound prepared.",
    primaryCta: "Download and start your free trial",
    secondaryCta: "See how it works",
    note: "Free for a day, every feature included. macOS 13 or newer.",
  },

  apps: {
    label: "Works with every meeting app",
    items: [
      "Google Meet",
      "Zoom",
      "Microsoft Teams",
      "Webex",
      "Slack",
      "Discord",
      "FaceTime",
    ],
  },

  preview: {
    meeting: "Weekly sync · Product & Engineering",
    elapsed: "18:42",
    participants: [
      { name: "Priya", initials: "PK", speaking: true },
      { name: "You", initials: "OP", speaking: false },
    ],
    question: "Where are we on the checkout migration, and what's blocking launch?",
    answer:
      "We're about 80% through. The new flow is live for internal users and the last two payment providers are being wired up this week. The one blocker is the fraud review, which we need signed off by Thursday to keep the launch date.",
    keyPoints: [
      "80% done, live for internal users",
      "Last two providers land this week",
      "Fraud review by Thursday is the only blocker",
    ],
    hints: [
      { keys: ["⌃", "⌥", "A"], label: "Answer last" },
      { keys: ["⌃", "⌥", "H"], label: "Stealth" },
    ],
  },

  features: {
    title: "Everything you need while the conversation is happening.",
    body: "Ekspo floats over your call as a small glass window. It keeps track of the conversation so you can stay focused on the people in it.",
    items: [
      {
        visual: "answer",
        title: "Answers when you're put on the spot",
        body: "When someone asks you a question and pauses, a suggested answer starts streaming in a second or two later. Small talk and side chatter are ignored.",
      },
      {
        visual: "typed",
        title: "Ask anything, any time",
        body: "Type a question yourself and get a short answer written from your profile. AI answers are included in every plan: nothing else to install or sign in to besides Ekspo.",
      },
      {
        visual: "profile",
        title: "Built from your resume and notes",
        body: "Upload your resume, paste the job description, your project notes and anything about your role. Answers only draw on what you add, in an ANSWER and KEY POINTS format you can edit.",
      },
      {
        visual: "local",
        title: "Transcribed on your computer",
        body: "Audio is transcribed on your computer and never uploaded. To write an answer, Ekspo sends only the question, the last few transcript lines and your profile; transcripts stay in a folder on your Mac.",
      },
      {
        visual: "screen",
        title: "Help with what's on screen",
        body: "Press ⌃⌥R and drag a box around a slide, a chart, a diagram or a block of code. Ekspo explains it and gives you something useful to say about it. Included in Pro.",
      },
      {
        visual: "stealth",
        title: "Hidden from screen shares",
        body: "In stealth mode the Ekspo window is left out of screen shares and recordings, so you can present your whole screen and still see your notes. Included in Pro.",
      },
    ],
  },

  steps: {
    title: "Ready before your next meeting.",
    items: [
      {
        title: "Install Ekspo",
        body: "Download it for macOS and sign in. The setup guide installs speech recognition for you. No Python, Homebrew or audio drivers needed.",
      },
      {
        title: "Add your context",
        body: "Upload your resume, paste the job description, your notes and a few lines about your role. Answers are written from what you add here.",
      },
      {
        title: "Start a session",
        body: "Join your call and click Start session. You'll see a live transcript on the left and suggested answers on the right.",
      },
    ],
  },

  pricing: {
    title: "Simple plans, answers included.",
    body: "Every account starts with a free day of Pro. AI answers are part of the plan, so there is nothing else to pay for or sign in to.",
    plans: [
      {
        name: "Free trial",
        price: "₦0",
        period: "for 1 day",
        featured: false,
        badge: null,
        perks: [
          "Everything in Pro",
          "One trial per computer",
          "No card needed",
        ],
      },
      {
        name: "Standard",
        price: "₦10,000",
        period: "per month",
        featured: false,
        badge: null,
        perks: [
          "Live transcript",
          "Answers as questions are asked",
          "Typed questions",
          "AI answers included",
        ],
      },
      {
        name: "Pro",
        price: "₦15,000",
        period: "per month",
        featured: true,
        badge: "Most complete",
        perks: [
          "Everything in Standard",
          "Screen, region and diagram answers",
          "Stealth mode, hidden from screen sharing",
          "AI answers included",
        ],
      },
    ],
    note: "Prices in Nigerian naira, billed monthly through Paystack (cards and bank transfer). You choose a plan inside the app after you sign in, and you can cancel any time from inside the app.",
  },

  faq: {
    title: "Questions, answered.",
    items: [
      {
        q: "What is Ekspo?",
        a: "Ekspo is a desktop assistant for live meetings. It listens to what your computer plays, keeps a live transcript, and suggests an answer when someone asks you a question, so you can follow the conversation instead of scrambling for notes.",
      },
      {
        q: "What kinds of calls is it for?",
        a: "Any call where you're expected to speak up: team syncs, client calls, status updates, reviews, sales conversations and interviews. If people ask you questions, Ekspo helps you answer them.",
      },
      {
        q: "Which meeting apps does it work with?",
        a: "All of them. Ekspo listens to your computer's audio rather than to a specific app, so Google Meet, Zoom, Teams, Webex, Slack, Discord and FaceTime all work.",
      },
      {
        q: "Which computers are supported?",
        a: "macOS 13 or newer on Apple Silicon or Intel. A Windows build is listed on the download page for early testing, and a fully supported Windows release is coming.",
      },
      {
        q: "How does the free trial work?",
        a: "Every new account gets one day of Pro, with every feature included, on one computer. No card is needed. When it ends, pick Standard or Pro inside the app to keep going.",
      },
      {
        q: "How do I pay, and can I cancel?",
        a: "You choose a plan inside the app after signing in. Payment goes through Paystack, which accepts cards and bank transfer, and plans renew monthly. You can cancel any time from inside the app and keep access until the end of the period you've paid for.",
      },
      {
        q: "What happens to my audio and transcripts?",
        a: "Audio is transcribed on your computer and never uploaded. Transcripts are stored only on your computer, in a folder you control. To write an answer, Ekspo sends the question or screenshot, the recent transcript lines and your profile (resume, job notes) to Ekspo's servers and to its AI provider, Anthropic. The service keeps usage counts for billing, not your transcripts.",
      },
    ],
  },

  cta: {
    title: "Walk into your next meeting ready.",
    body: "Free for a day, every feature included. Set up in about five minutes.",
    button: "Download Ekspo",
  },

  // Installers are too large for the repo, so they're served from the GitHub
  // release in downloadBaseUrl (override with NEXT_PUBLIC_DOWNLOAD_BASE_URL).
  // File names follow the app's electron-builder artifactName.
  download: {
    version: "1.0.9",
    platforms: [
      {
        os: "mac",
        name: "macOS",
        variant: "Apple Silicon",
        file: "Ekspo-1.0.9-mac-arm64.dmg",
        size: "130 MB",
        requirement: "M1 or newer, macOS 13+",
      },
      {
        os: "mac",
        name: "macOS",
        variant: "Intel",
        file: "Ekspo-1.0.9-mac-x64.dmg",
        size: "137 MB",
        requirement: "Intel Macs, macOS 13+",
      },
      {
        os: "windows",
        name: "Windows",
        variant: "64-bit",
        file: "Ekspo-1.0.9-win-x64.exe",
        size: "113 MB",
        requirement: "Windows 10 (2004) or 11",
      },
    ],
    notes: {
      mac: "Not sure which Mac you have? Apple menu → About This Mac. macOS builds are being notarized with Apple, so the current release may show a warning the first time you open it.",
      macBlocked: {
        title: "If macOS blocks the app",
        body: "Right-click Ekspo in Applications and choose Open, then click Open again in the dialog. You only need to do this once.",
      },
      windows:
        'If Windows shows "Windows protected your PC", click More info, then Run anyway.',
    },
  },

  // Shared by /terms, /privacy, /refunds and /contact.
  legal: {
    updated: "17 October 2026",
    supportEmail: SUPPORT_EMAIL,
    // TODO: confirm the promised response time with whoever staffs the inbox.
    responseTime: "two business days",
  },

  footer: {
    blurb: "Your live meeting assistant for macOS.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "/#features" },
          { label: "Pricing", href: "/#pricing" },
          { label: "Download", href: "/#download" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Setup guide", href: "/#how-it-works" },
          { label: "FAQ", href: "/#faq" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          { label: "Refunds", href: "/refunds" },
        ],
      },
    ],
  },
} as const;
