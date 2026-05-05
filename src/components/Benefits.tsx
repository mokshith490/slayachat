const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Protects Relationships",
    points: ["Introductions stay controlled", "Contacts never leak", "Transparent group communication", "Clear roles for everyone"],
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
    title: "Builds Trust",
    points: ["Verified roles for all participants", "No confusion about who's who", "Admin always visible and accessible", "Structured, professional communication"],
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Prevents Revenue Loss",
    points: ["No bypassing the admin", "Commissions stay protected", "No off-platform deals", "Direct contact blocked by design"],
    color: "text-amber-600 bg-amber-50",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Faster Deals",
    points: ["Everyone talks together", "No manual message relaying", "Instant Q&A in shared space", "Deals close faster with less friction"],
    color: "text-rose-600 bg-rose-50",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">Benefits</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
            What you gain instantly
          </h2>
          <p className="text-lg text-slate-500">
            SlayChat gives network owners everything they need to stay in control without slowing anyone down.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-md transition-shadow group">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${b.color}`}>
                {b.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-4 text-base">{b.title}</h3>
              <ul className="space-y-2">
                {b.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-500">
                    <svg className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
