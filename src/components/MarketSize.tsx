const markets = [
  {
    label: "TAM",
    full: "Total Addressable Market",
    value: "$12B ARR",
    size: "100M+",
    sizeLabel: "global professionals",
    desc: "Who introduce, coordinate, or manage relationships between multiple parties — real estate agents, agencies, intermediaries, consultants, operators.",
    width: "w-full",
    color: "bg-blue-600",
    textColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    label: "SAM",
    full: "Serviceable Addressable Market",
    value: "$1.2B ARR",
    size: "10M",
    sizeLabel: "users (10% of TAM)",
    desc: "Who regularly use chat apps for deals or coordination, have experienced or fear loss of control over relationships, and are willing to pay.",
    width: "w-10/12",
    color: "bg-cyan-500",
    textColor: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    label: "SOM",
    full: "Serviceable Obtainable Market",
    value: "$120M ARR",
    size: "1M",
    sizeLabel: "users (first 3–5 years)",
    desc: "Focused on brokers & agencies, high-value deal-driven users, and markets where commission leakage is most common.",
    width: "w-8/12",
    color: "bg-emerald-500",
    textColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
];

export default function MarketSize() {
  return (
    <section id="market" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">Market Size</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
            Capturing 1% creates a<br />
            <span className="text-blue-600">$120M ARR business</span>
          </h2>
          <p className="text-lg text-slate-500">
            A massive, underserved market of 100 million professionals who own networks and have no tool designed for them.
          </p>
        </div>

        <div className="space-y-5 mb-16">
          {markets.map((m) => (
            <div key={m.label} className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-black px-3 py-1.5 rounded-lg ${m.bgColor} ${m.textColor} tracking-widest uppercase`}>{m.label}</span>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{m.full}</div>
                    <div className="text-slate-400 text-xs">{m.size} {m.sizeLabel}</div>
                  </div>
                </div>
                <div className={`text-2xl font-extrabold ${m.textColor}`}>{m.value}</div>
              </div>
              <div className="bg-slate-100 rounded-full h-2 mb-4">
                <div className={`${m.color} h-2 rounded-full ${m.width} transition-all`} />
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Conflicts with Their Core DNA", desc: "WhatsApp, Telegram, Slack optimize for free communication. SlayChat intentionally restricts it.", badge: "Strategic Misalignment" },
            { title: "Risk to Existing User Base", desc: "Limiting private chats breaks user expectations and would create backlash for mass-market products.", badge: "High Brand Risk for Giants" },
            { title: "Execution Over Idea", desc: "Requires deep broker workflow understanding and industry-specific trust. Hard to replicate without focus.", badge: "Founder-Led Market" },
          ].map((c, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-900 text-white">
              <span className="text-xs font-bold text-slate-400 mb-3 block uppercase tracking-widest">{c.badge}</span>
              <h4 className="font-bold text-white mb-3 text-sm leading-snug">{c.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-400 mt-6 font-medium">Why big tech won't easily copy this</p>
      </div>
    </section>
  );
}
