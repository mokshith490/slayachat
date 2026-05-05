"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="absolute inset-0 -z-10 blur-xl bg-[radial-gradient(circle_at_30%_30%,rgba(59,92,255,0.35),transparent_60%)]" />
                <div className="w-9 h-9 rounded-xl bg-white/95 ring-1 ring-white/15 shadow-sm flex items-center justify-center">
                  <img src="/logo.png" alt="SlayChat logo" className="w-7 h-7" />
                </div>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-none">SlayChat</div>
                <div className="text-xs text-slate-500">developer and designer</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Group chat without disintermediation — built for people who own networks and want to stay in control.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Pages</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Service", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Contact Us", href: "#contact" },
                { label: "Blog", href: "#blog" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-4">Get product updates and launch news.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-2"
            >
              <input
                className="bg-transparent outline-none text-sm text-white placeholder:text-slate-500 px-2 flex-1"
                placeholder="Email address..."
                type="email"
                required
                suppressHydrationWarning
              />
              <button
                type="submit"
                className="bg-[#3B5CFF] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#2F4CFF] transition-colors"
                suppressHydrationWarning
              >
                Send
              </button>
            </form>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Support</h4>
            <ul className="space-y-3">
              {[
                { label: "Email", href: "mailto:support@slaychat.app" },
                { label: "Support", href: "/support" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} SlayChat. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <a href="/privacy" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="mailto:support@slaychat.app" className="text-slate-500 hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
