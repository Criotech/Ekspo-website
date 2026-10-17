// Draft — have a lawyer review before launch
import type { Metadata } from "next";
import { site, SUPPORT_EMAIL } from "@/content/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: `Privacy Policy · ${site.name}`,
  description: `What ${site.name} collects, what stays on your computer, who processes it and how to delete it.`,
  alternates: { canonical: "/privacy" },
};

// TODO: confirm the retention periods in sections 5 and 6 (server logs, backups) with the backend.

const subprocessors = [
  {
    name: "Supabase",
    purpose: "Hosting, accounts and sign-in, the database that stores your account and usage records.",
    data: "Account email, subscription status, usage counts.",
  },
  {
    name: "Paystack",
    purpose: "Payment processing.",
    data: "Email, payment method details (held by Paystack, not by us), transaction records.",
  },
  {
    name: "Anthropic",
    purpose: "The AI provider that writes answers.",
    data: "Each answer request: question or screenshot, recent transcript lines, your profile.",
  },
  {
    name: "Vercel",
    purpose: "Hosts this website and the browser sign-in page.",
    data: "Standard web request logs (IP address, browser).",
  },
  {
    name: "GitHub",
    purpose: "Serves the app installers you download.",
    data: "Standard web request logs when you download.",
  },
  {
    name: "Hugging Face",
    purpose: "Serves the speech-recognition model the app downloads during setup.",
    data: "Standard web request logs when the model is downloaded.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`${site.name} is built so that the sensitive part, the audio of your conversations, never leaves your computer. This page explains exactly what we do collect, what is sent when an answer is written, who processes it, and how to delete it.`}
    >
      <h2>1. Who we are</h2>
      <p>
        {site.name} is made by {site.company} (&ldquo;we&rdquo;, &ldquo;us&rdquo;). We are the data
        controller for the information described here. You can reach us at{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>

      <h2>2. The short version</h2>
      <ul>
        <li>
          <strong>Audio is transcribed on your computer and never uploaded.</strong>
        </li>
        <li>
          <strong>Transcripts, answers and your profile are stored only on your computer.</strong>
        </li>
        <li>
          To write an answer, the app sends the question or screenshot, the last few transcript
          lines and your profile to our servers and on to our AI provider, Anthropic.
        </li>
        <li>
          On our servers we keep your account email, your subscription status, payment metadata from
          Paystack (never card numbers) and usage counts for billing.
        </li>
        <li>
          &ldquo;Delete account&rdquo; inside the app cancels your subscription and removes your
          server data.
        </li>
      </ul>

      <h2>3. What we collect and store on our servers</h2>
      <h3>Account</h3>
      <p>
        Your email address and a hashed password (or the identifier from another sign-in method we
        offer), the date you signed up, and the identifier of the computer used for the free trial so
        we can enforce one trial per computer.
      </p>
      <h3>Subscription and payment metadata</h3>
      <p>
        Which plan you are on, when it started, renews or was cancelled, and the records Paystack
        sends us about each payment: a transaction reference, amount, currency, status, date, and the
        card brand and last four digits or bank name if Paystack provides them. Card numbers, CVV and
        bank log-in details go directly to Paystack. <strong>We never see or store them.</strong>
      </p>
      <h3>Usage metering</h3>
      <p>
        A count of the answers generated on your account, with timestamps, the type of request
        (spoken question, typed question or screenshot) and the plan it was counted against. This is
        used for billing, fair-use limits and abuse prevention. The metering record does not include
        the content of the question, transcript or answer.
      </p>
      <h3>Support</h3>
      <p>
        If you email us, we keep the correspondence so we can help you and refer back to it.
      </p>

      <h2>4. What is processed for each answer</h2>
      <p>When the app writes an answer, it sends this to our servers:</p>
      <ul>
        <li>
          the <strong>question</strong> it detected or that you typed, or the{" "}
          <strong>screenshot</strong> of the region you selected (Pro);
        </li>
        <li>
          the <strong>recent transcript lines</strong>, a short window of the conversation so the
          answer fits the context;
        </li>
        <li>
          your <strong>profile</strong>: the resume, job description and notes you added inside the
          app.
        </li>
      </ul>
      <p>
        Our server checks your plan and usage, then forwards the request to{" "}
        <strong>Anthropic</strong>, our AI provider, which generates the answer and returns it. In
        this role Anthropic acts as a processor on our instructions, under its commercial terms, and
        does not use the content to train its models. We send only what is needed for the answer. We
        do not send audio, and we do not send your whole transcript.
      </p>
      <p>
        The screenshot you select may contain whatever is on your screen at that moment, including
        other people&rsquo;s names or messages. Select only what you want explained.
      </p>

      <h2>5. What stays on your computer</h2>
      <ul>
        <li>
          <strong>Audio.</strong> Captured from your computer&rsquo;s audio output and transcribed
          locally by a speech-recognition model that runs on your machine. The audio is not recorded
          to disk by Ekspo and is never uploaded.
        </li>
        <li>
          <strong>Transcripts.</strong> Saved in a folder on your computer that you control. We have
          no copy.
        </li>
        <li>
          <strong>Answers and your profile.</strong> Stored locally by the app. Your profile is sent
          with each answer request (section 4) but is not stored on our servers.
        </li>
      </ul>
      <p>
        These files are yours. Deleting your account does not delete them; uninstalling the app or
        deleting its data folder does. Because they are on your computer, your own backups (such as
        Time Machine or iCloud) may include them.
      </p>

      <h2>6. How long we keep things</h2>
      <ul>
        <li>
          <strong>Account, subscription and usage records:</strong> for as long as your account
          exists, then deleted when you delete the account (section 8). Copies in our provider&rsquo;s
          backups are overwritten on their normal schedule, typically within 30 days.
        </li>
        <li>
          <strong>Answer requests:</strong> the content of a request is processed to produce the
          answer and is not kept in our database. Short-lived server logs used for debugging and
          abuse prevention may hold request metadata (timestamps, sizes, errors) for up to 30 days.
        </li>
        <li>
          <strong>Payment records:</strong> transaction metadata may be kept for up to six years
          after the payment to meet accounting and tax obligations, even after the account is
          deleted.
        </li>
        <li>
          <strong>Support email:</strong> up to two years after the conversation ends.
        </li>
      </ul>

      <h2>7. Why we are allowed to process this</h2>
      <p>
        Under the Nigeria Data Protection Act 2023 and the Nigeria Data Protection Regulation (NDPR)
        we rely on: performance of our contract with you (running the app, writing answers, billing);
        our legal obligations (tax and accounting records); and our legitimate interests in keeping
        the service secure, preventing abuse and enforcing the one-trial-per-computer rule. We do not
        sell your data and we do not use it for advertising.
      </p>

      <h2>8. Deleting your data</h2>
      <p>
        Open Ekspo, go to your account and choose <strong>Delete account</strong>. This cancels any
        active subscription and removes your account, subscription and usage records from our
        servers. It does not remove the transcripts, answers and profile stored on your computer;
        those are yours to keep or delete. If you cannot get into the app, email us from the address
        on the account and we will delete it for you.
      </p>

      <h2>9. Who else processes your data (subprocessors)</h2>
      <p>We use these providers to run Ekspo. Each one only receives what its job needs.</p>
      <table>
        <thead>
          <tr>
            <th>Provider</th>
            <th>Purpose</th>
            <th>What it receives</th>
          </tr>
        </thead>
        <tbody>
          {subprocessors.map((s) => (
            <tr key={s.name}>
              <td>{s.name}</td>
              <td>{s.purpose}</td>
              <td>{s.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Some of these providers are outside Nigeria. Where personal data leaves Nigeria we rely on
        the provider&rsquo;s contractual commitments and the safeguards allowed by the NDPA and NDPR.
        We will update this list if we add or change a provider.
      </p>

      <h2>10. This website</h2>
      <p>
        The website sets no advertising or tracking cookies. The browser sign-in page
        (/desktop-login) uses browser storage to complete your sign-in and hand a one-time code back
        to the app. Vercel, which hosts the site, keeps standard request logs for security.
      </p>

      <h2>11. Security</h2>
      <p>
        Data travels over encrypted connections (HTTPS). Server data is stored with providers that
        encrypt it at rest, and access is limited to the people who need it to run the service. No
        system is perfectly secure; if we learn of a breach that affects you, we will tell you and
        the regulator as the law requires.
      </p>

      <h2>12. Your rights</h2>
      <p>Under the NDPA and NDPR you can ask us to:</p>
      <ul>
        <li>tell you what personal data we hold about you and give you a copy;</li>
        <li>correct data that is wrong;</li>
        <li>delete your data (the in-app Delete account button does this);</li>
        <li>restrict or object to certain processing;</li>
        <li>give you your data in a portable format;</li>
        <li>withdraw consent where we rely on it.</li>
      </ul>
      <p>
        Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and we will respond within the
        time the law allows. You also have the right to complain to the Nigeria Data Protection
        Commission.
      </p>

      <h2>13. Children</h2>
      <p>
        Ekspo is for people aged 18 and over. We do not knowingly collect data from children; if you
        think we have, contact us and we will delete it.
      </p>

      <h2>14. Changes</h2>
      <p>
        We may update this policy as the product changes. The date at the top shows the latest
        version. If a change is significant we will tell you by email or inside the app before it
        takes effect.
      </p>

      <h2>15. Contact</h2>
      <p>
        Privacy questions and requests: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>, or
        see the <a href="/contact">contact page</a>.
      </p>
    </LegalPage>
  );
}
