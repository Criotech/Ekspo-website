// All of the site's copy lives here, so wording can change without touching
// the components. Facts come from the Ekspo app's README and docs/PRICING-PLAN.md.

export const site = {
  name: "Ekspo",
  tagline: "Live answers for interviews and meetings",
  description:
    "Ekspo listens to your call, transcribes it on your computer, and suggests an answer the moment you're asked a question.",
  downloadHref: "#download",
  downloadBaseUrl: (
    process.env.NEXT_PUBLIC_DOWNLOAD_BASE_URL ??
    "https://github.com/Criotech/ekspo-releases/releases/download/v1.0.6"
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

  nav: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    badge: "For macOS and Windows",
    title: "The right answer, the moment they ask.",
    body: "Ekspo listens to your interview or meeting, transcribes it on your computer, and suggests an answer as soon as you're asked a question. Built from your resume, in your own words.",
    primaryCta: "Start your free trial",
    secondaryCta: "See how it works",
    note: "7 days free. macOS 13+ and Windows 10/11.",
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
    meeting: "Interview · Senior Engineer",
    elapsed: "18:42",
    participants: [
      { name: "Interviewer", initials: "SK", speaking: true },
      { name: "You", initials: "OP", speaking: false },
    ],
    question: "Tell me about a time you handled a production outage.",
    answer:
      "At my last job our payments API went down during a sale. I led the incident call, rolled back the release within 12 minutes, and wrote the postmortem that added canary deploys.",
    keyPoints: [
      "Owned the incident and kept everyone updated",
      "Rolled back fast, then fixed the root cause",
      "Left the team with canary deploys",
    ],
    hints: [
      { keys: ["⌃", "⌥", "A"], label: "Answer last" },
      { keys: ["⌃", "⌥", "H"], label: "Stealth" },
    ],
  },

  features: {
    title: "Everything you need on the call.",
    body: "Ekspo floats over your meeting as a small glass window. It does the listening so you can do the talking.",
    items: [
      {
        visual: "answer",
        title: "Answers as they ask",
        body: "When the interviewer asks a question and pauses, a suggested answer starts streaming in a second or two later. Small talk is ignored.",
      },
      {
        visual: "screen",
        title: "Help with what's on screen",
        body: "Press ⌃⌥R, drag a box around a coding problem or diagram, and get an answer with code. Built for live coding rounds.",
      },
      {
        visual: "profile",
        title: "Built from your resume",
        body: "Paste your resume and the job description. Answers only use experience you actually have, in an ANSWER and KEY POINTS format you can edit.",
      },
      {
        visual: "local",
        title: "Transcribed on your computer",
        body: "Audio never leaves your machine. Whisper runs locally, on the Apple GPU when you have one. Only the question text is sent to get an answer.",
      },
      {
        visual: "stealth",
        title: "Stealth mode",
        body: "The Ekspo window is left out of screen shares and recordings, so you can share your whole screen and still see your notes.",
      },
      {
        visual: "models",
        title: "Your choice of model",
        body: "Switch between Claude Haiku, Sonnet and Opus at any time, or use the Claude, ChatGPT or Gemini plan you already pay for.",
      },
    ],
  },

  steps: {
    title: "Ready in about five minutes.",
    items: [
      {
        title: "Install Ekspo",
        body: "Download it for macOS or Windows. The setup guide installs speech recognition for you. No Python, Homebrew or audio drivers needed.",
      },
      {
        title: "Add your profile",
        body: "Paste your resume and the job description, and pick a model. Answers are written from what you add here.",
      },
      {
        title: "Start a session",
        body: "Join your call and click Start session. You'll see a live transcript on the left and answers on the right.",
      },
    ],
  },

  pricing: {
    title: "One simple plan.",
    body: "Bring the Claude, ChatGPT or Gemini plan you already have. Ekspo adds the live transcript, answers and hotkeys on top.",
    plans: [
      {
        name: "Free trial",
        price: "$0",
        period: "for 7 days",
        cta: "Start free trial",
        featured: false,
        badge: null,
        perks: [
          "1 computer",
          "Every feature included",
          "Small hosted allowance to try it without a subscription",
        ],
      },
      {
        name: "Standard",
        price: "$7",
        period: "per month",
        cta: "Get Standard",
        featured: true,
        badge: "Or $60 a year",
        perks: [
          "2 computers",
          "Uses your own Claude, ChatGPT or Gemini plan",
          "Live transcript, automatic answers and screen help",
          "Stealth mode and all hotkeys",
        ],
      },
    ],
  },

  faq: {
    title: "Questions, answered.",
    items: [
      {
        q: "What is Ekspo?",
        a: "Ekspo is a desktop app for interviews and meetings. It listens to what your computer plays, keeps a live transcript, and suggests an answer when someone asks you a question.",
      },
      {
        q: "Which meeting apps does it work with?",
        a: "All of them. Ekspo listens to your computer's audio rather than to a specific app, so Google Meet, Zoom, Teams, Webex, Slack, Discord and FaceTime all work.",
      },
      {
        q: "Which computers are supported?",
        a: "macOS 13 or newer on Apple Silicon or Intel, and 64-bit Windows 10 (version 2004) or Windows 11.",
      },
      {
        q: "What happens to my audio and transcripts?",
        a: "Audio and transcription stay on your computer, and transcripts are saved in a folder you control. Only the question text, your profile and any screenshots you ask about are sent to get an answer. The service keeps usage counts for billing, not content.",
      },
      {
        q: "Can I use my own AI subscription?",
        a: "Yes. If you pay for Claude Pro or Max, ChatGPT Plus or Pro, or a Google AI plan, Ekspo can use it through the vendor's own command-line tool, signed in to your account.",
      },
      {
        q: "Is it okay to use Ekspo in my meeting?",
        a: "Use it only where recording and assistance are allowed, and tell the other participants. You're responsible for following the rules of the platforms and companies you meet with.",
      },
    ],
  },

  cta: {
    title: "Walk into your next interview ready.",
    body: "Free for 7 days. Set up in about five minutes.",
    button: "Download Ekspo",
  },

  // Installers are too large for the repo, so they're served from the GitHub
  // release in downloadBaseUrl (override with NEXT_PUBLIC_DOWNLOAD_BASE_URL).
  // File names follow the app's electron-builder artifactName.
  download: {
    version: "1.0.3",
    platforms: [
      {
        os: "mac",
        name: "macOS",
        variant: "Apple Silicon",
        file: "Ekspo-1.0.6-mac-arm64.dmg",
        size: "130 MB",
        requirement: "M1 or newer, macOS 13+",
      },
      {
        os: "mac",
        name: "macOS",
        variant: "Intel",
        file: "Ekspo-1.0.6-mac-x64.dmg",
        size: "137 MB",
        requirement: "Intel Macs, macOS 13+",
      },
      {
        os: "windows",
        name: "Windows",
        variant: "64-bit",
        file: "Ekspo-1.0.6-win-x64.exe",
        size: "113 MB",
        requirement: "Windows 10 (2004) or 11",
      },
    ],
    notes: {
      mac: "Not sure which Mac you have? Apple menu → About This Mac. The first time you open Ekspo, right-click it in Applications and choose Open.",
      windows:
        'If Windows shows "Windows protected your PC", click More info, then Run anyway.',
    },
  },

  footer: {
    blurb: "Live answers for interviews and meetings, on macOS and Windows.",
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
        title: "Support",
        links: [
          { label: "Setup guide", href: "#how-it-works" },
          { label: "FAQ", href: "#faq" },
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
