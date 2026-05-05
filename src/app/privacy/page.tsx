import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — SlayChat",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">
          Effective date: <span className="font-semibold">2026-04-15</span>
        </p>

        <section className="mt-10 space-y-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold">Summary</h2>
            <p className="mt-2 text-slate-600">
              This Privacy Policy explains how SlayChat collects, uses, and shares information when you use our website and services.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold">Information we collect</h2>
            <ul className="mt-2 list-disc pl-5 text-slate-600 space-y-1">
              <li>
                <span className="font-semibold">Account and profile data</span> you provide (for example, name, email, and profile details).
              </li>
              <li>
                <span className="font-semibold">Content you submit</span> (for example, messages and files), to provide the service.
              </li>
              <li>
                <span className="font-semibold">Usage and device data</span> (for example, IP address, browser type, pages viewed, and timestamps).
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold">How we use information</h2>
            <ul className="mt-2 list-disc pl-5 text-slate-600 space-y-1">
              <li>To provide, maintain, and improve SlayChat.</li>
              <li>To secure accounts, prevent abuse, and debug issues.</li>
              <li>To communicate with you about support requests and important service updates.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold">Sharing</h2>
            <p className="mt-2 text-slate-600">
              We may share information with service providers who help us operate SlayChat (for example, hosting, analytics, and customer support),
              and when required by law.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="mt-2 text-slate-600">
              If you have questions, contact us at{" "}
              <a className="font-semibold text-blue-600 hover:text-blue-700" href="mailto:support@slaychat.app">
                support@slaychat.app
              </a>
              .
            </p>
          </div>
        </section>

        <div className="mt-10 text-sm text-slate-500">
          <a className="text-blue-600 hover:text-blue-700 font-semibold" href="/support">
            Support
          </a>{" "}
          ·{" "}
          <a className="text-blue-600 hover:text-blue-700 font-semibold" href="/terms">
            Terms
          </a>{" "}
          ·{" "}
          <a className="text-blue-600 hover:text-blue-700 font-semibold" href="/">
            Home
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          Note: This template is provided for store submission convenience. Replace placeholders and tailor to your actual data practices before publishing.
        </p>
      </div>
    </main>
  );
}

