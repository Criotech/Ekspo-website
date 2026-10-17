// Draft — have a lawyer review before launch
import type { Metadata } from "next";
import { site, SUPPORT_EMAIL } from "@/content/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: `Terms of Service · ${site.name}`,
  description: `The terms that apply when you download, subscribe to and use ${site.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={`These terms are the agreement between you and ${site.company}, the company behind ${site.name}. Please read them before you download or subscribe. They are written in plain English on purpose; if anything is unclear, ask us.`}
    >
      <h2>1. What Ekspo is</h2>
      <p>
        {site.name} is a desktop application for macOS (with Windows planned) that helps you during
        live interviews and meetings. It listens to the audio your computer plays, transcribes it on
        your computer, and writes short suggested answers from the profile you give it (for example
        your resume and job notes), from questions you type, and, on the Pro plan, from screenshots
        of your screen. AI answers are included in your plan; you do not need an account with any AI
        provider.
      </p>
      <p>
        The service is provided by {site.company} (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By creating
        an account, downloading the app or paying for a plan you agree to these terms and to our{" "}
        <a href="/privacy">Privacy Policy</a> and <a href="/refunds">Refund Policy</a>, which form
        part of this agreement.
      </p>

      <h2>2. Your account</h2>
      <ul>
        <li>You must be at least 18 years old to create an account.</li>
        <li>
          You sign up with an email address and password (or another sign-in method we offer).
          Keep your sign-in details private. You are responsible for everything done through your
          account.
        </li>
        <li>Give us accurate information and keep it up to date.</li>
        <li>
          One account is for one person. Do not share your account or resell access to the service.
        </li>
        <li>
          You can delete your account at any time from inside the app. See section 9 for what
          happens when you do.
        </li>
      </ul>

      <h2>3. Free trial</h2>
      <p>
        Every new account gets a free trial of one day, with everything in the Pro plan included.
        The trial is limited to one per computer, and we may use a device identifier to enforce that.
        We may refuse, shorten or end a trial if we believe it is being abused, for example by
        creating repeated accounts or resetting a device to obtain additional trials. When the trial
        ends, the app stops producing answers until you choose a paid plan.
      </p>

      <h2>4. Plans, payment and renewal</h2>
      <ul>
        <li>
          Paid plans are <strong>Standard</strong> and <strong>Pro</strong>, billed monthly in
          Nigerian naira at the prices shown on our website and inside the app at the time you
          subscribe. We may change prices for future billing periods and will tell you in advance.
        </li>
        <li>
          You subscribe from inside the app after signing in. There is no web checkout. Payment is
          processed by <strong>Paystack</strong>, which accepts cards and bank transfer. Paystack&rsquo;s
          own terms apply to the payment itself. We never see or store your full card number.
        </li>
        <li>
          Plans renew automatically at the end of each monthly period until you cancel. The renewal
          is charged to the payment method you used.
        </li>
        <li>
          You can cancel at any time from inside the app. Cancelling stops future charges; your plan
          stays active until the end of the period you have already paid for.
        </li>
        <li>
          If a renewal payment fails, we may retry it and, if it still fails, downgrade or suspend
          your access until payment is made.
        </li>
        <li>
          Refunds are covered by our <a href="/refunds">Refund Policy</a>.
        </li>
        <li>
          Prices may exclude taxes that apply to you. Where we are required to collect tax, it is
          shown before you pay.
        </li>
      </ul>

      <h2>5. Acceptable use</h2>
      <p>
        Ekspo records and transcribes conversations, and that is regulated differently in different
        places. You are responsible for using it lawfully and fairly. In particular:
      </p>
      <ul>
        <li>
          <strong>Recording consent.</strong> You are solely responsible for complying with the
          recording and wiretap laws that apply to you and to the other people on the call, including
          any requirement to tell them or get their consent before a conversation is captured or
          transcribed.
        </li>
        <li>
          <strong>Platform and employer rules.</strong> You are responsible for complying with the
          rules of any interview, hiring, assessment, exam or meeting platform you use, and with the
          policies of any employer, client, school or organisation you are dealing with. Some of them
          prohibit assistance tools. Using Ekspo where it is not allowed is your decision and your
          risk.
        </li>
        <li>
          <strong>No claim of being undetectable.</strong> Stealth mode keeps the Ekspo window out
          of screen shares and recordings on supported systems. We make no promise that Ekspo is
          undetectable by any platform, proctoring tool, monitoring software or person, and we are
          not responsible for any consequence of its use being noticed.
        </li>
        <li>
          Do not use Ekspo to break the law, to harass or harm anyone, to cheat on an exam or
          certification, to infringe anyone&rsquo;s rights, or to generate content that is unlawful.
        </li>
        <li>
          Do not copy, modify, reverse engineer, resell or redistribute the app, bypass licence or
          trial checks, or try to access our servers or other people&rsquo;s accounts without
          permission, or send automated or abusive volumes of requests.
        </li>
      </ul>
      <p>
        We may suspend or end your access if we reasonably believe you have broken these rules.
      </p>

      <h2>6. Answers are suggestions</h2>
      <p>
        Answers are generated by an AI model from the material you provide and a short window of the
        conversation. They can be wrong, incomplete, out of date or inappropriate for the situation.
        Ekspo does not guarantee the accuracy, quality or suitability of any answer. You decide what
        to say, and you are responsible for what you say and do with the answers. Ekspo is not legal,
        medical, financial or professional advice.
      </p>

      <h2>7. Your content and our software</h2>
      <ul>
        <li>
          You own the material you add to Ekspo (your resume, notes, transcripts, screenshots and
          questions). You give us permission to process it only as far as is needed to run the
          service for you, as described in the <a href="/privacy">Privacy Policy</a>.
        </li>
        <li>
          You confirm you have the right to use the material you add and that it does not infringe
          anyone else&rsquo;s rights.
        </li>
        <li>
          The app, website, name, logo and all related software are owned by {site.company} or its
          licensors. We grant you a personal, non-transferable, revocable licence to install and use
          the app on your own computers for as long as you have an active trial or plan and follow
          these terms.
        </li>
      </ul>

      <h2>8. Availability and changes</h2>
      <p>
        We work to keep the service available, but it depends on your computer, your internet
        connection and third-party providers, and it may be interrupted. We may change, improve,
        limit or discontinue features, and we may update the app and these terms. If a change is
        significant we will tell you (for example by email or inside the app) before it takes effect.
        Continuing to use Ekspo after a change means you accept it. If you do not, cancel your plan.
      </p>

      <h2>9. Termination</h2>
      <ul>
        <li>
          <strong>By you:</strong> cancel your plan or delete your account from inside the app at any
          time. Deleting your account cancels any active subscription and removes your data from our
          servers; files stored on your computer remain yours and are not affected.
        </li>
        <li>
          <strong>By us:</strong> we may suspend or close your account if you break these terms, if
          payment fails, if we are required to by law, or if we discontinue the service. Where it is
          reasonable to do so we will give you notice and, if you have paid for time you cannot use
          because we closed the service, a pro-rata refund.
        </li>
        <li>
          Sections 5 to 7 and 10 to 12 continue to apply after your account is closed.
        </li>
      </ul>

      <h2>10. Disclaimer</h2>
      <p>
        Except where the law does not allow it, Ekspo is provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo;, without warranties of any kind, whether express or implied, including
        warranties of merchantability, fitness for a particular purpose, accuracy, non-infringement
        or uninterrupted operation.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {site.company} and its directors, employees and
        suppliers are not liable for any indirect, incidental, special, consequential or punitive
        damages, or for any loss of income, opportunity, employment, data, reputation or goodwill,
        arising out of or related to your use of (or inability to use) Ekspo, even if we were told it
        was possible. Our total liability to you for all claims together is limited to the amount you
        paid us in the three months before the event giving rise to the claim. Nothing in these terms
        excludes liability that cannot be excluded by law, such as liability for fraud.
      </p>

      <h2>12. Governing law and disputes</h2>
      <p>
        These terms are governed by the laws of the Federal Republic of Nigeria. If we have a
        dispute, please contact us first and we will try to resolve it informally within 30 days.
        Otherwise, the courts of Nigeria have jurisdiction, without affecting any consumer rights you
        have under the law of the country where you live.
      </p>

      <h2>13. General</h2>
      <ul>
        <li>
          These terms, the Privacy Policy and the Refund Policy are the whole agreement between you
          and us about Ekspo.
        </li>
        <li>If part of these terms is found unenforceable, the rest still applies.</li>
        <li>
          If we do not enforce a right straight away, we have not waived it.
        </li>
        <li>
          You may not transfer this agreement to anyone else. We may transfer it to a successor of
          our business, and will tell you if we do.
        </li>
      </ul>

      <h2>14. Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>, or see
        the <a href="/contact">contact page</a>.
      </p>
    </LegalPage>
  );
}
