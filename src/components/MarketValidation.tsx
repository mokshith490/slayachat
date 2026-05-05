const validations = [
  {
    title: "A 'Pull' Problem, Not a 'Push' Problem",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    color: "bg-blue-600",
    points: [
      "Brokers manually relaying messages instead of creating groups",
      "Agencies using burner phones or junior staff as buffers",
      "Marketplaces banning direct contact and enforcing chat-only communication",
      "Professionals saying: \"Don't contact my team directly\"",
    ],
    footer: "These are all signals of unmet demand. When users create workarounds, current tools are failing them.",
  },
  {
    title: "WhatsApp Is Used Despite Being Risky",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    color: "bg-amber-500",
    points: [
      "Users already use WhatsApp for deals, negotiations, and multi-party coordination",
      "Even though it leaks contact information",
      "Even though it causes commission loss",
      "Even though it destroys relationship ownership",
    ],
    footer: "You're not asking users to change behavior — you're asking them to remove risk from existing behavior.",
  },
  {
    title: "Clear Willingness to Pay",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    color: "bg-emerald-500",
    points: [
      "Users lose commissions, clients, long-term revenue, and network leverage",
      "This is a revenue-protection tool, not a productivity tool",
      "Much easier to monetize than productivity software",
      "People pay ₹1,000–₹5,000/month to prevent losing one deal worth 10x–100x more",
    ],
    footer: "This is not a nice-to-have product. It protects income directly.",
  },
];

export default function MarketValidation() {
  return (
    <section id="validation" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">Market Validation</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
            This problem is real <br />and already proven
          </h2>
          <p className="text-lg text-slate-500">
            Users already suffer, they already pay for partial solutions, and no horizontal product owns the space.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {validations.map((v, i) => (
            <div key={i} className="rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`${v.color} p-6 text-white`}>
                <div className="mb-4 opacity-90">{v.icon}</div>
                <h3 className="font-bold text-lg leading-snug">{v.title}</h3>
              </div>
              <div className="p-6 bg-slate-50">
                <ul className="space-y-3 mb-5">
                  {v.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-500 italic border-t border-slate-200 pt-4 leading-relaxed">{v.footer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
