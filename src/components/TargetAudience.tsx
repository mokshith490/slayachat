const audiences = [
  {
    num: "01",
    title: "Intermediaries & Deal Facilitators",
    why: "Their income depends on not being bypassed",
    examples: ["Real estate agents", "Travel agents & tour operators", "Import/export agents", "Financial brokers & insurance agents"],
    useCase: "Create deal-specific group chats where all parties coordinate without exchanging direct contact details.",
    payReason: "One protected deal pays for years of subscription.",
  },
  {
    num: "02",
    title: "Agencies & Service Businesses",
    why: "They lose clients to their own team or freelancers",
    examples: ["Digital marketing agencies", "IT services & dev agencies", "Recruitment & staffing firms", "Design & creative studios"],
    useCase: "Client + agency + staff collaborate in one group, but clients can't directly hire staff.",
    payReason: "Protects long-term client relationships.",
  },
  {
    num: "03",
    title: "Marketplaces & Platforms",
    why: "Disintermediation kills platform revenue",
    examples: ["B2B marketplaces", "Service aggregators", "Vendor discovery platforms"],
    useCase: "Offer controlled chat so buyers and sellers communicate only within the platform.",
    payReason: "Prevents off-platform leakage.",
  },
  {
    num: "04",
    title: "Community Builders & Network Owners",
    why: "Their value is the network itself",
    examples: ["Startup community founders", "Paid masterminds", "Professional groups", "Mentorship networks"],
    useCase: "Enable group interaction without turning the community into an open contact directory.",
    payReason: "Preserves exclusivity and structure.",
  },
  {
    num: "05",
    title: "Consultants & Independent Professionals",
    why: "Their role is coordination, not execution",
    examples: ["Business consultants", "Legal & compliance advisors", "Project coordinators"],
    useCase: "Bring clients and vendors together temporarily without permanently exposing relationships.",
    payReason: "Keeps them central to every engagement.",
  },
  {
    num: "06",
    title: "HR, Recruiters & Talent Intermediaries",
    why: "Candidates and employers bypass them",
    examples: ["Recruitment agencies", "Freelance talent managers"],
    useCase: "Coordinate interviews and negotiations in a shared space without direct contact leakage.",
    payReason: "Direct protection of placement fees.",
  },
];

export default function TargetAudience() {
  return (
    <section id="audience" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">Target Audience</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
            Built for anyone who <br />
            <span className="text-blue-600">owns a network</span>
          </h2>
          <p className="text-lg text-slate-500">
            People who create value by introducing others and want to control how those connections happen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div key={a.num} className="bg-white rounded-2xl border border-slate-100 p-6 hover:border-blue-100 hover:shadow-lg transition-all">
              <div className="text-xs font-black text-blue-200 mb-4 tracking-widest">{a.num}</div>
              <h3 className="font-bold text-slate-900 mb-2 text-base leading-snug">{a.title}</h3>
              <p className="text-xs text-blue-600 font-semibold mb-4 bg-blue-50 inline-block px-3 py-1 rounded-full">{a.why}</p>

              <ul className="space-y-1 mb-5">
                {a.examples.map((ex) => (
                  <li key={ex} className="text-sm text-slate-500 flex items-center gap-2">
                    <span className="w-1 h-1 bg-slate-300 rounded-full shrink-0" />
                    {ex}
                  </li>
                ))}
              </ul>

              <div className="border-t border-slate-100 pt-4">
                <p className="text-xs text-slate-500 mb-3 leading-relaxed">{a.useCase}</p>
                <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {a.payReason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
