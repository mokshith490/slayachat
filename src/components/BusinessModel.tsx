export default function BusinessModel() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">Business Model</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
            We charge the person<br />
            <span className="text-blue-600">who owns the network</span>
          </h2>
          <p className="text-lg text-slate-500">
            Only the admin pays when they create a Super Group. Members are always free. This removes adoption friction while charging the person who actually benefits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          <div className="rounded-2xl border-2 border-slate-100 p-8 bg-slate-50 flex flex-col">
            <div className="w-12 h-12 bg-slate-200 text-slate-600 rounded-xl flex items-center justify-center mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Members</h3>
            <div className="text-4xl font-extrabold text-slate-900 mb-1">Free <span className="text-lg font-normal text-slate-400">forever</span></div>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              All members participate freely in group chats. No cost, no friction. Ensures rapid adoption across deals, teams, and networks.
            </p>
            <ul className="space-y-2 mt-auto">
              {["Communicate in group chats", "Share updates and files", "No account setup required", "Mobile and desktop access"].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <svg className="w-4 h-4 text-slate-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-blue-600 p-8 bg-blue-600 text-white flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
              </svg>
            </div>
            <div className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">Admin — Network Owner</div>
            <h3 className="text-xl font-bold mb-2">Super Group Creator</h3>
            <div className="text-4xl font-extrabold mb-1">
              ₹1k–5k <span className="text-lg font-normal text-blue-200">/ month</span>
            </div>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed">
              Paid per Super Group, based on member count. The admin who creates and controls the group pays to protect their network.
            </p>
            <ul className="space-y-2 mt-auto">
              {["Full control over member access", "View all contact details", "Add/remove members anytime", "Moderation and group management", "Protects commissions and relationships"].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-blue-50">
                  <svg className="w-4 h-4 text-blue-200 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
