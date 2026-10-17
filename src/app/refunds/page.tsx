// Draft — have a lawyer review before launch
import type { Metadata } from "next";
import { site, SUPPORT_EMAIL } from "@/content/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: `Refund Policy · ${site.name}`,
  description: `How cancellations, refunds and chargebacks work for ${site.name} plans.`,
  alternates: { canonical: "/refunds" },
};

export default function RefundsPage() {
  return (
    <LegalPage
      title="Refund Policy"
      intro="Try Ekspo free for a day before you pay, cancel any time from inside the app, and if the app did not work on your computer, ask for your first payment back within 7 days."
    >
      <h2>1. Try it first</h2>
      <p>
        Every new account gets one day of the Pro plan free, with every feature included and no
        card needed. We ask you to use that day to confirm Ekspo works on your computer and with your
        meeting app before you pay.
      </p>

      <h2>2. Cancelling</h2>
      <ul>
        <li>
          You can cancel your plan at any time from inside the app. There is no notice period and
          nothing to email.
        </li>
        <li>
          Cancelling stops future charges. Your plan stays active until the end of the month you
          have already paid for, and then ends.
        </li>
        <li>Deleting your account also cancels your plan.</li>
      </ul>

      <h2>3. Refunds</h2>
      <h3>First payment, within 7 days</h3>
      <p>
        If Ekspo did not work on your computer, for example it would not start, could not hear your
        meeting audio or could not produce answers, and we could not fix it with you, we will refund
        your <strong>first payment</strong> in full. Ask within <strong>7 days</strong> of that
        payment by emailing <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> from the address
        on your account, and tell us what went wrong so we can try to help first. This covers the
        first payment on an account only, not renewals.
      </p>
      <h3>Everything else</h3>
      <p>
        Otherwise plans are non-refundable. We do not refund partial months, renewals you forgot to
        cancel, or time you did not use. Cancel before the renewal date to avoid the next charge.
      </p>
      <h3>If we close the service</h3>
      <p>
        If we discontinue Ekspo or close your account for a reason that is not a breach of the{" "}
        <a href="/terms">terms</a>, we will refund the unused part of the current period.
      </p>

      <h2>4. How refunds are paid</h2>
      <p>
        Refunds go back through Paystack to the card or bank account you paid with. We issue them
        within 5 business days of approving the request; your bank may take a few more days to show
        it. Refunds are made in the currency and amount you paid, less any amount the law requires us
        to withhold.
      </p>

      <h2>5. Chargebacks</h2>
      <p>
        Please contact us before disputing a charge with your bank. We can usually sort out a
        problem faster than a chargeback can, and a chargeback on a payment that was valid under
        this policy may lead us to suspend the account until it is resolved. If you open a chargeback,
        we will provide Paystack and your bank with the records of your account, plan and usage.
      </p>

      <h2>6. Questions</h2>
      <p>
        Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with the email address on your
        account and, if you have it, the Paystack transaction reference. We reply within{" "}
        {site.legal.responseTime}.
      </p>
    </LegalPage>
  );
}
