const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Contact details stay hidden",
    desc: "Party A and Party B can communicate freely but never see each other's phone numbers or profiles.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Admin-only access control",
    desc: "Only the admin can add or remove members, view contact details, and manage the group.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Deals move faster",
    desc: "Everyone talks in one place. No more switching between chats or relaying messages manually.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "No direct messaging between members",
    desc: "Members can only communicate inside the group. Private DMs between members are disabled by design.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">The Solution</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Enable communication <br />
              <span className="text-blue-600">without being cut out</span>
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              SlayChat is a messaging platform built for people who own networks. Let all parties talk freely while you stay in control of every relationship.
            </p>

            <div className="space-y-5">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-0.5 text-sm">{f.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-blue-50 rounded-3xl" />
            <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="bg-slate-800 px-5 py-4 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 bg-red-400 rounded-full" />
                  <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <span className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-slate-300 text-sm font-semibold">Alpha Team Delhi</span>
                </div>
              </div>

              <div className="p-5 space-y-3 bg-slate-50 min-h-72">
                {[
                  { from: "Admin", msg: "Welcome to Project Alpha. All communication stays inside this group.", align: "left", bg: "bg-white" },
                  { from: "Client", msg: "Members can't DM each other, right?", align: "right", bg: "bg-blue-600 text-white" },
                  { from: "Admin", msg: "Correct. Two-way group chat only.", align: "left", bg: "bg-white" },
                  { from: "Developer", msg: "Noted. Confirming subscription is based on member count.", align: "left", bg: "bg-white" },
                  { from: "Client", msg: "Perfect. That keeps privacy intact.", align: "right", bg: "bg-blue-600 text-white" },
                ].map((m, i) => (
                  <div key={i} className={`flex flex-col ${m.align === "right" ? "items-end" : "items-start"}`}>
                    <span className="text-xs text-slate-400 mb-1 px-1">{m.from}</span>
                    <div className={`px-4 py-2.5 rounded-2xl text-sm max-w-xs shadow-sm ${m.bg} ${m.bg.includes("blue") ? "" : "text-slate-700 border border-slate-100"}`}>
                      {m.msg}
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-5 py-3 border-t border-slate-100 flex items-center gap-3">
                <div className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-sm text-slate-400">Type a message...</div>
                <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
