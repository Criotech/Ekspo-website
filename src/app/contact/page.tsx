// Draft — have a lawyer review before launch
import type { Metadata } from "next";
import { site, SUPPORT_EMAIL } from "@/content/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: `Contact · ${site.name}`,
  description: `How to reach the ${site.name} team for support, billing and privacy requests.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact"
      intro="One inbox for everything: setup trouble, billing, refunds, privacy requests and feedback. A person reads it."
    >
      <div className="callout">
        <p>
          <strong>Email:</strong> <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          <br />
          <strong>Response time:</strong> we aim to reply within {site.legal.responseTime}, usually
          sooner on weekdays.
        </p>
      </div>

      <h2>Help us help you faster</h2>
      <ul>
        <li>Write from the email address on your Ekspo account.</li>
        <li>
          Tell us your Mac model and macOS version (Apple menu → About This Mac) and the Ekspo
          version (currently {site.download.version}).
        </li>
        <li>For billing, include the Paystack transaction reference if you have it.</li>
        <li>
          For a bug, say what you expected, what happened instead, and which meeting app you were
          using. A screenshot helps.
        </li>
      </ul>

      <h2>Before you write</h2>
      <ul>
        <li>
          <a href="/#faq">FAQ</a> answers the common questions about plans, privacy and support.
        </li>
        <li>
          <a href="/#download">Download</a> has the current build and what to do if macOS blocks the
          app the first time.
        </li>
        <li>
          <a href="/refunds">Refund Policy</a> explains cancellations and refunds.
        </li>
        <li>
          <a href="/privacy">Privacy Policy</a> explains what is sent where, and how to delete your
          data.
        </li>
      </ul>

      <h2>Company</h2>
      <p>
        {site.name} is made by {site.company}, Nigeria.
        {/* TODO: add the registered company name, address and RC number before launch. */}
      </p>
    </LegalPage>
  );
}
