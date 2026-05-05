const steps = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Rahul is the connector",
    desc: "He takes services from Party A, delivers to Party B, negotiates, manages expectations, and earns a commission.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "He creates a group chat",
    desc: "To move faster, he adds both parties to a WhatsApp group. The deal speeds up. Questions get answered instantly.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Phone numbers are exposed",
    desc: "The moment the group is created, WhatsApp reveals everyone's contact details. Party A and Party B can now see each other.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
    title: "Rahul gets cut out",
    desc: "They start talking directly. The deal closes. The work happens. But the person who made the connection loses the commission.",
    color: "bg-red-50 text-red-500",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">The Problem</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
            Disintermediation kills intermediaries
          </h2>
          <p className="text-lg text-slate-500">
            Every broker, agent, and connector faces the same invisible threat. The tools designed to help them work faster are the same tools that erase their role.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-5 p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-slate-200 transition-colors">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${step.color}`}>
                {step.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1 text-base">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-3xl p-10 md:p-14 text-center">
          <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed max-w-2xl mx-auto">
            "This isn't because Rahul did something wrong. It's because the messaging tools were{" "}
            <span className="text-blue-400">never designed to protect</span> the person who owns the relationship."
          </p>
        </div>
      </div>
    </section>
  );
}
