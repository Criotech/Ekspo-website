"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";
import { site } from "@/content/site";
import { supabase } from "@/lib/supabase";

// The Ekspo app opens /desktop-login?challenge=…&state=… in the browser. The user signs in
// here (any method), the desktop-auth function issues a one-time code bound to the app's
// challenge, and the page opens ekspo://auth/callback?code=…&state=… to hand it to the app.
// The app alone holds the verifier for that challenge, so the code is useless anywhere else.

type View = "loading" | "missing" | "signin" | "signup" | "forgot" | "reset" | "confirm" | "authorize" | "done";
type Pending = { challenge: string; state: string; at: number; auto?: boolean };

// The app's request survives OAuth redirects, email links and reloads in localStorage.
// `auto` marks a sign-in the user started here, so coming back from Google or an email link
// goes straight to the app instead of asking "Continue?" again.
const PENDING_KEY = "ekspo-desktop-login";
const PENDING_TTL_MS = 30 * 60 * 1000;
const B64URL_32 = /^[A-Za-z0-9_-]{43}$/;

function readPending(): Pending | null {
  try {
    const p = JSON.parse(localStorage.getItem(PENDING_KEY) || "null") as Pending | null;
    if (p && B64URL_32.test(p.challenge) && p.state && Date.now() - p.at < PENDING_TTL_MS) return p;
  } catch {
    /* unreadable or blocked: treat as absent */
  }
  return null;
}
function writePending(p: Pending | null) {
  try {
    if (p) localStorage.setItem(PENDING_KEY, JSON.stringify(p));
    else localStorage.removeItem(PENDING_KEY);
  } catch {
    /* private mode: this tab still works, redirects may not */
  }
}
const markAuto = () => {
  const p = readPending();
  if (p) writePending({ ...p, auto: true });
};
const here = () => `${window.location.origin}/desktop-login`;

function friendly(message: string) {
  if (/invalid login credentials/i.test(message)) return "Wrong email or password.";
  if (/email not confirmed/i.test(message)) return "Confirm your email first. The link is in your inbox.";
  if (/already registered|already exists/i.test(message)) return "An account with this email already exists. Sign in instead.";
  if (/rate limit|too many/i.test(message)) return "Too many attempts. Wait a minute and try again.";
  if (/failed to fetch|network/i.test(message)) return "Can't reach the sign-in service. Check your internet connection.";
  if (/code verifier|both auth code and code verifier/i.test(message))
    return "That link was opened in a different browser. Sign in here instead.";
  return message;
}

export function DesktopLogin() {
  const [view, setView] = useState<View>("loading");
  const [session, setSession] = useState<Session | null>(null);
  const [notice, setNotice] = useState<{ text: string; tone: "info" | "bad" | "ok" } | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState<{ link: string; code: string } | null>(null);
  const issuing = useRef(false);

  const fail = (e: unknown) => setNotice({ text: friendly(e instanceof Error ? e.message : String(e)), tone: "bad" });

  // Trade the website session for a one-time code, then open the app with it.
  async function handOff() {
    if (issuing.current) return;
    const p = readPending();
    if (!p) {
      setView("missing");
      return;
    }
    issuing.current = true;
    setBusy(true);
    setNotice(null);
    try {
      const { data, error } = await supabase().functions.invoke("desktop-auth", {
        body: { action: "issue", challenge: p.challenge },
      });
      if (error) {
        const ctx = (error as { context?: Response }).context;
        const body = ctx ? await ctx.json().catch(() => null) : null;
        throw new Error(body?.error || error.message);
      }
      writePending(null); // one code per request from the app
      const link = `ekspo://auth/callback?code=${encodeURIComponent(data.code)}&state=${encodeURIComponent(p.state)}`;
      setDone({ link, code: data.code });
      setView("done");
      window.location.href = link;
    } catch (e) {
      fail(e);
    } finally {
      issuing.current = false;
      setBusy(false);
    }
  }

  useEffect(() => {
    const url = new URL(window.location.href);
    const challenge = url.searchParams.get("challenge");
    const state = url.searchParams.get("state");
    if (challenge && state && B64URL_32.test(challenge)) writePending({ challenge, state, at: Date.now() });
    const resetFlow = url.searchParams.get("reset") === "1";
    const linkError = url.searchParams.get("error_description") || new URLSearchParams(url.hash.slice(1)).get("error_description");

    const sb = supabase();
    const { data: sub } = sb.auth.onAuthStateChange((event, s) => {
      setSession(s);
      if (event === "PASSWORD_RECOVERY") setView("reset");
    });

    (async () => {
      // Waits for supabase-js to finish any ?code= exchange from Google or an email link.
      const { data, error } = await sb.auth.getSession();
      // Keep the address bar clean: the challenge is not secret, but it is single-use noise.
      window.history.replaceState(null, "", url.pathname);
      const s = data.session;
      setSession(s);
      if (linkError) setNotice({ text: friendly(linkError), tone: "bad" });
      else if (error) fail(error);

      const p = readPending();
      if (s && resetFlow) setView("reset");
      else if (!p) setView("missing");
      else if (s && p.auto) {
        setView("authorize");
        void handOff();
      } else setView(s ? "authorize" : "signin");
    })();

    return () => sub.subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const go = (v: View) => {
    setNotice(null);
    setView(v);
  };

  async function onSignIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setBusy(true);
    const { error } = await supabase().auth.signInWithPassword({
      email: String(f.get("email")).trim(),
      password: String(f.get("password")),
    });
    setBusy(false);
    if (error) return fail(error);
    await handOff();
  }

  async function onSignUp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const email = String(f.get("email")).trim();
    const password = String(f.get("password"));
    if (password.length < 6) return setNotice({ text: "The password needs at least 6 characters.", tone: "bad" });
    setBusy(true);
    markAuto();
    const { data, error } = await supabase().auth.signUp({
      email,
      password,
      options: { data: { full_name: String(f.get("name")).trim() }, emailRedirectTo: here() },
    });
    setBusy(false);
    if (error) return fail(error);
    // Supabase answers an existing (confirmed) email with a ghost user that has no identities.
    if (data.user && data.user.identities?.length === 0) return fail(new Error("User already registered"));
    if (data.session) return handOff(); // "Confirm email" is off in Supabase
    setNotice({ text: `We sent a link to ${email}.`, tone: "ok" });
    setView("confirm");
  }

  async function onGoogle() {
    markAuto();
    const { error } = await supabase().auth.signInWithOAuth({ provider: "google", options: { redirectTo: here() } });
    if (error) fail(error);
  }

  async function onForgot(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email")).trim();
    setBusy(true);
    markAuto();
    const { error } = await supabase().auth.resetPasswordForEmail(email, { redirectTo: `${here()}?reset=1` });
    setBusy(false);
    if (error) return fail(error);
    setNotice({ text: `If ${email} has an account, a reset link is on its way. Open it in this browser.`, tone: "ok" });
  }

  async function onReset(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const password = String(new FormData(e.currentTarget).get("password"));
    if (password.length < 6) return setNotice({ text: "The password needs at least 6 characters.", tone: "bad" });
    setBusy(true);
    const { error } = await supabase().auth.updateUser({ password });
    setBusy(false);
    if (error) return fail(error);
    if (readPending()) return handOff();
    setNotice({ text: "Password updated. Sign in from the Ekspo app with your new password.", tone: "ok" });
    setView("missing");
  }

  async function onSwitchAccount() {
    await supabase().auth.signOut({ scope: "local" });
    go("signin");
  }

  const copy = view === "loading" ? null : site.desktopLogin[view];

  return (
    <div className="rounded-3xl border border-line bg-surface p-7 shadow-[0_30px_80px_-40px_rgba(20,40,80,0.45)] sm:p-8">
      {view === "loading" ? (
        <p className="py-10 text-center text-muted" role="status">
          Loading…
        </p>
      ) : (
        <>
          <h1 className="font-display text-[1.7rem] leading-tight font-semibold tracking-[-0.03em]">{copy!.title}</h1>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{copy!.body}</p>
        </>
      )}

      {notice ? (
        <p
          role="status"
          className={`mt-5 rounded-xl px-3.5 py-2.5 text-sm ${
            notice.tone === "bad" ? "bg-red-500/10 text-red-400" : notice.tone === "ok" ? "bg-accent/10 text-ink" : "bg-paper text-muted"
          }`}
        >
          {notice.text}
        </p>
      ) : null}

      <div className="mt-6">
        {view === "signin" ? (
          <>
            {site.supabase.google ? <GoogleButton onClick={onGoogle} /> : null}
            <form onSubmit={onSignIn} className="grid gap-3">
              <Field name="email" type="email" label="Email" autoComplete="email" />
              <Field name="password" type="password" label="Password" autoComplete="current-password" />
              <Submit busy={busy}>Sign in</Submit>
            </form>
            <Links>
              <LinkButton onClick={() => go("forgot")}>Forgot password?</LinkButton>
              <LinkButton onClick={() => go("signup")}>
                New here? <b className="text-accent">Create an account</b>
              </LinkButton>
            </Links>
          </>
        ) : null}

        {view === "signup" ? (
          <>
            {site.supabase.google ? <GoogleButton onClick={onGoogle} /> : null}
            <form onSubmit={onSignUp} className="grid gap-3">
              <Field name="name" label="Name" autoComplete="name" />
              <Field name="email" type="email" label="Email" autoComplete="email" />
              <Field name="password" type="password" label="Password" autoComplete="new-password" minLength={6} />
              <Submit busy={busy}>Create account</Submit>
            </form>
            <Links>
              <LinkButton onClick={() => go("signin")}>
                Already have an account? <b className="text-accent">Sign in</b>
              </LinkButton>
            </Links>
          </>
        ) : null}

        {view === "forgot" ? (
          <>
            <form onSubmit={onForgot} className="grid gap-3">
              <Field name="email" type="email" label="Email" autoComplete="email" />
              <Submit busy={busy}>Send reset link</Submit>
            </form>
            <Links>
              <LinkButton onClick={() => go("signin")}>Back to sign in</LinkButton>
            </Links>
          </>
        ) : null}

        {view === "reset" ? (
          <form onSubmit={onReset} className="grid gap-3">
            <Field name="password" type="password" label="New password" autoComplete="new-password" minLength={6} />
            <Submit busy={busy}>Save and continue</Submit>
          </form>
        ) : null}

        {view === "confirm" ? (
          <Links>
            <LinkButton onClick={() => go("signin")}>Already confirmed? Sign in</LinkButton>
          </Links>
        ) : null}

        {view === "authorize" ? (
          <>
            <p className="mb-4 truncate rounded-xl bg-paper px-3.5 py-2.5 text-sm">
              <span className="text-muted">Signed in as </span>
              <b>{session?.user.email}</b>
            </p>
            <button
              type="button"
              onClick={handOff}
              disabled={busy}
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-ink px-5 font-medium text-paper transition hover:opacity-85 disabled:opacity-50"
            >
              {busy ? "Opening Ekspo…" : "Continue to Ekspo"}
            </button>
            <Links>
              <LinkButton onClick={onSwitchAccount}>Use a different account</LinkButton>
            </Links>
          </>
        ) : null}

        {view === "missing" ? (
          <a
            href={`/${site.downloadHref}`}
            className="inline-flex h-11 w-full items-center justify-center rounded-full px-5 font-medium ring-1 ring-line ring-inset transition hover:bg-paper"
          >
            Don&apos;t have Ekspo? Download it
          </a>
        ) : null}

        {view === "done" && done ? <Done link={done.link} code={done.code} /> : null}
      </div>
    </div>
  );
}

function Done({ link, code }: { link: string; code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <>
      <a
        href={link}
        className="inline-flex h-11 w-full items-center justify-center rounded-full bg-ink px-5 font-medium text-paper transition hover:opacity-85"
      >
        Open Ekspo
      </a>
      <details className="mt-5 text-sm">
        <summary className="cursor-pointer text-muted hover:text-ink">Ekspo didn&apos;t open?</summary>
        <p className="mt-3 text-muted">
          Paste this code into the Ekspo sign-in window on this computer. It works once, for the next five minutes.
        </p>
        <div className="mt-3 flex gap-2">
          <code className="min-w-0 flex-1 truncate rounded-xl bg-paper px-3 py-2.5 font-mono text-[0.8rem]">{code}</code>
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(code).then(() => setCopied(true))}
            className="shrink-0 rounded-full px-4 text-sm font-medium ring-1 ring-line ring-inset hover:bg-paper"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <p className="mt-3 text-xs text-muted">Never share this code. Anyone asking you for it is not Ekspo.</p>
      </details>
    </>
  );
}

function Field({
  name,
  label,
  type = "text",
  autoComplete,
  minLength,
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  minLength?: number;
}) {
  return (
    <label className="grid gap-1.5 text-sm font-medium">
      {label}
      <input
        name={name}
        type={type}
        required
        minLength={minLength}
        autoComplete={autoComplete}
        spellCheck={false}
        className="h-11 rounded-xl border border-line bg-paper px-3.5 text-[0.95rem] font-normal outline-none transition focus:border-accent"
      />
    </label>
  );
}

function Submit({ busy, children }: { busy: boolean; children: ReactNode }) {
  return (
    <button
      type="submit"
      disabled={busy}
      className="mt-1 inline-flex h-11 items-center justify-center rounded-full bg-ink px-5 font-medium text-paper transition hover:opacity-85 disabled:opacity-50"
    >
      {busy ? "One moment…" : children}
    </button>
  );
}

function Links({ children }: { children: ReactNode }) {
  return <div className="mt-5 flex flex-wrap justify-between gap-x-4 gap-y-2 text-sm text-muted">{children}</div>;
}

function LinkButton({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <button type="button" onClick={onClick} className="transition hover:text-ink">
      {children}
    </button>
  );
}

function GoogleButton({ onClick }: { onClick: () => void }) {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="inline-flex h-11 w-full items-center justify-center gap-2.5 rounded-full font-medium ring-1 ring-line ring-inset transition hover:bg-paper"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z" />
          <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.33-1.58-5.04-3.71H.96v2.33A9 9 0 0 0 9 18z" />
          <path fill="#FBBC05" d="M3.96 10.71a5.41 5.41 0 0 1 0-3.42V4.96H.96a9 9 0 0 0 0 8.08l3-2.33z" />
          <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59A9 9 0 0 0 .96 4.96l3 2.33C4.67 5.16 6.66 3.58 9 3.58z" />
        </svg>
        Continue with Google
      </button>
      <div className="my-5 flex items-center gap-3 text-xs text-muted before:h-px before:flex-1 before:bg-line after:h-px after:flex-1 after:bg-line">
        or
      </div>
    </>
  );
}
