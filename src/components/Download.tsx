export default function Download() {
  return (
    <section id="download" className="section bg-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -left-8 -top-8 w-20 h-20 rounded-3xl bg-blue-50 border border-blue-100" />
            <div className="absolute -left-2 top-24 w-2 h-44 bg-[radial-gradient(circle,_rgba(59,92,255,0.35)_1px,_transparent_1px)] [background-size:10px_10px]" />
            <div className="absolute right-2 top-24 w-44 h-44 rounded-full border-2 border-[#3B5CFF]/25" />
            <div className="relative mx-auto w-[300px] md:w-[340px] aspect-[9/18] rounded-[2.8rem] border border-slate-200/70 bg-white shadow-[0_45px_120px_rgba(2,6,23,0.18)] overflow-hidden">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-36 h-7 bg-black/90 rounded-full" />
              <div className="h-full bg-gradient-to-b from-white to-slate-50">
                <div className="px-6 pt-14 pb-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="text-xs text-slate-400 font-semibold">Messages</div>
                      <div className="text-sm font-bold text-slate-900">Chats</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200" />
                      <div className="w-9 h-9 rounded-full bg-[#3B5CFF]/10 border border-[#3B5CFF]/20" />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white border border-slate-200 shadow-sm px-4 py-3 mb-5">
                    <div className="flex items-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-slate-400">
                        <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      <div className="h-2.5 rounded bg-slate-200 w-1/2" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { name: "Naman Singh", msg: "Added vendor + client in one group.", time: "2:15 PM", accent: "bg-emerald-100" },
                      { name: "Megha Ahuja", msg: "Can we share the proposal here only?", time: "Yesterday", accent: "bg-amber-100" },
                      { name: "Anand Gupta", msg: "Send the quote and I’ll confirm today.", time: "07/12", accent: "bg-blue-100" },
                      { name: "Sayyam", msg: "Great—no phone numbers shared.", time: "07/10", accent: "bg-purple-100" },
                    ].map((c) => (
                      <div key={c.name} className="rounded-2xl bg-white border border-slate-200/70 shadow-sm p-4">
                        <div className="flex items-start gap-3">
                          <div className={`w-11 h-11 rounded-2xl ${c.accent} border border-slate-200`} />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <div className="font-bold text-slate-900 text-sm truncate">{c.name}</div>
                              <div className="text-xs text-slate-400 shrink-0">{c.time}</div>
                            </div>
                            <div className="text-sm text-slate-500 truncate mt-1">{c.msg}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-white via-white/90 to-transparent">
                  <div className="flex items-center justify-between">
                    {["chat", "search", "bell", "profile"].map((k, i) => (
                      <div
                        key={k}
                        className={`w-10 h-10 rounded-2xl border ${
                          i === 0 ? "bg-[#3B5CFF] border-[#3B5CFF]" : "bg-white border-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Download our app and get the most out of it
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Keep your network private, coordinate faster, and stay in control—across deals, teams, and communities.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#download"
                className="inline-flex items-center gap-3 bg-black hover:bg-slate-900 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors shadow-sm"
                aria-label="Download on the App Store"
              >
                <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M16.5 13.3c0 2.7 2.4 3.6 2.4 3.6s-1.8 5.2-4.3 5.2c-1.2 0-2.1-.8-3.3-.8-1.2 0-2.3.8-3.6.8-2.3 0-5-4.8-5-8.8 0-3.9 2.3-6 4.7-6 1.5 0 2.6.9 3.3.9.7 0 2.1-1.1 3.9-1 .7 0 2.7.1 3.9 2-3.3 1.8-2.6 4.1-2 5.1Z" fill="white"/>
                    <path d="M14.8 2c.1 1.6-1 3.1-2.3 3.9-.2-1.5.8-3.1 2.3-3.9Z" fill="white"/>
                  </svg>
                </span>
                <span className="leading-tight">
                  <span className="block text-[10px] font-medium text-white/70">Download on the</span>
                  <span className="block -mt-0.5">App Store</span>
                </span>
              </a>
              <a
                href="#download"
                className="inline-flex items-center gap-3 bg-black hover:bg-slate-900 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors shadow-sm"
                aria-label="Get it on Google Play"
              >
                <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M3.6 2.8 14 12 3.6 21.2c-.4-.3-.6-.8-.6-1.4V4.2c0-.6.2-1.1.6-1.4Z" fill="#fff"/>
                    <path d="M14 12 18.9 8.8 6.6 2.2 14 12Z" fill="#fff" opacity="0.8"/>
                    <path d="M14 12 6.6 21.8l12.3-6.6L14 12Z" fill="#fff" opacity="0.8"/>
                    <path d="M18.9 8.8 21 10c.7.4 1 1 1 2s-.3 1.6-1 2l-2.1 1.2L14 12l4.9-3.2Z" fill="#fff"/>
                  </svg>
                </span>
                <span className="leading-tight">
                  <span className="block text-[10px] font-medium text-white/70">GET IT ON</span>
                  <span className="block -mt-0.5">Google Play</span>
                </span>
              </a>
            </div>

            <div id="login" className="mt-10">
              <a
                href="mailto:support@slaychat.app"
                className="btn-primary px-8 py-3.5 shadow-[0_18px_50px_rgba(59,92,255,0.20)]"
              >
                Request access
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

