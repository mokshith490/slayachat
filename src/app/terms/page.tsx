import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — SlayChat",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">
          Effective date: <span className="font-semibold">2026-04-15</span>
        </p>

        <section className="mt-10 space-y-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold">Agreement</h2>
            <p className="mt-2 text-slate-600">
              By accessing or using SlayChat, you agree to these Terms. If you do not agree, do not use the service.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold">Use of the service</h2>
            <ul className="mt-2 list-disc pl-5 text-slate-600 space-y-1">
              <li>You are responsible for your account and any activity under it.</li>
              <li>Do not misuse the service (including unlawful, harmful, or abusive behavior).</li>
              <li>We may suspend or terminate access if these Terms are violated.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold">Disclaimer</h2>
            <p className="mt-2 text-slate-600">
              The service is provided “as is” without warranties of any kind, to the fullest extent permitted by law.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="mt-2 text-slate-600">
              Questions about these Terms:{" "}
              <a className="font-semibold text-blue-600 hover:text-blue-700" href="mailto:support@slaychat.app">
                support@slaychat.app
              </a>
              .
            </p>
          </div>
        </section>

        <div className="mt-10 text-sm text-slate-500">
          <a className="text-blue-600 hover:text-blue-700 font-semibold" href="/privacy">
            Privacy
          </a>{" "}
          ·{" "}
          <a className="text-blue-600 hover:text-blue-700 font-semibold" href="/support">
            Support
          </a>{" "}
          ·{" "}
          <a className="text-blue-600 hover:text-blue-700 font-semibold" href="/">
            Home
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          Note: This template is provided for store submission convenience. Replace placeholders and tailor to your product and jurisdiction before publishing.
        </p>
      </div>
    </main>
  );
}

