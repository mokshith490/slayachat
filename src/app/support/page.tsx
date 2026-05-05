import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — SlayChat",
  robots: { index: true, follow: true },
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Support</h1>
        <p className="mt-2 text-slate-600">We’re here to help.</p>

        <section className="mt-10 space-y-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold">Contact</h2>
            <ul className="mt-2 list-disc pl-5 text-slate-600 space-y-1">
              <li>
                Email:{" "}
                <a className="font-semibold text-blue-600 hover:text-blue-700" href="mailto:support@slaychat.app">
                  support@slaychat.app
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold">Common requests</h2>
            <ul className="mt-2 list-disc pl-5 text-slate-600 space-y-1">
              <li>
                <span className="font-semibold">Account help</span>: include the email you used to sign in.
              </li>
              <li>
                <span className="font-semibold">Bug reports</span>: include device, OS version, and steps to reproduce.
              </li>
              <li>
                <span className="font-semibold">Privacy questions</span>: see{" "}
                <a className="font-semibold text-blue-600 hover:text-blue-700" href="/privacy">
                  Privacy Policy
                </a>
                .
              </li>
            </ul>
          </div>
        </section>

        <div className="mt-10 text-sm text-slate-500">
          <a className="text-blue-600 hover:text-blue-700 font-semibold" href="/privacy">
            Privacy
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
      </div>
    </main>
  );
}

