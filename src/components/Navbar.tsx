export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/60">
      <div className="container-page h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-xl bg-[radial-gradient(circle_at_30%_30%,rgba(59,92,255,0.35),transparent_60%)]" />
            <img src="/logo.png" alt="SlayChat logo" className="w-9 h-9 rounded-xl ring-1 ring-slate-200/70 shadow-sm" />
          </div>
          <span className="text-lg font-extrabold text-slate-900 tracking-tight">SlayChat</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-700 font-semibold">
          {[
            { label: "Home", href: "#home" },
            { label: "Service", href: "#services" },
            { label: "About", href: "#about" },
            { label: "Contact Us", href: "#contact" },
            { label: "Blog", href: "#blog" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2 rounded"
            >
              <span className="relative">
                {l.label}
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-0 group-hover:opacity-100" />
              </span>
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="#login" className="hidden sm:inline text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2 rounded">
            Login
          </a>
          <a
            href="#get-started"
            className="btn-primary text-sm px-5 py-2 shadow-[0_12px_30px_rgba(59,92,255,0.25)]"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
