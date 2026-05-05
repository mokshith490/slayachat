export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 md:pt-28 relative overflow-hidden bg-[linear-gradient(135deg,#3B5CFF_0%,#5B7CFF_45%,#3B5CFF_100%)]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-24 w-[30rem] h-[30rem] bg-white/15 rounded-full blur-3xl" />
        <div className="absolute top-10 right-0 w-[34rem] h-[34rem] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-28 right-24 w-[28rem] h-[28rem] bg-[#A9B7FF]/25 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-[22rem] h-[22rem] bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-14 pb-28 md:pb-36 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-semibold px-4 py-2 rounded-full mb-7 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-white rounded-full opacity-90" />
              Early Access
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              SlayChat, a connection
              <br />
              and commerce app
            </h1>

            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl">
              Bring parties together in one shared group without exposing contact details—so you stay in control of every relationship.
            </p>

            <div id="get-started" className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-10">
              <a
                href="#download"
                className="bg-white text-[#2F4CFF] font-semibold px-9 py-3.5 rounded-full hover:bg-blue-50 transition-colors shadow-lg shadow-black/10"
              >
                Download
              </a>
              <a
                href="#about"
                className="bg-transparent text-white font-semibold px-9 py-3.5 rounded-full border border-white/40 hover:border-white/70 hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>

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
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-white/15 rounded-[3rem] blur-2xl" />
            <div className="absolute -inset-24 bg-white/25 rounded-[3rem] blur-3xl" />
            <div className="relative mx-auto w-[300px] md:w-[340px] lg:w-[370px] aspect-[9/18] rounded-[2.8rem] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.25)] overflow-hidden border border-white/60">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-36 h-7 bg-black/90 rounded-full" />
              <div className="h-full w-full bg-gradient-to-b from-white to-slate-50">
                <div className="px-6 pt-14 pb-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="text-xs text-slate-400 font-semibold">Messages</div>
                      <div className="text-sm font-bold text-slate-900">Super Groups</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button type="button" className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200" aria-label="New group" suppressHydrationWarning />
                      <button type="button" className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200" aria-label="More" suppressHydrationWarning />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white border border-slate-200 shadow-sm px-4 py-3 mb-5">
                    <div className="flex items-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-slate-400">
                        <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      <div className="h-2.5 rounded bg-slate-200 w-1/2" />
                      <div className="ml-auto w-5 h-5 rounded bg-slate-100 border border-slate-200" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {["All", "Unread", "Favourites"].map((t, i) => (
                      <span
                        key={t}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${
                          i === 0 ? "bg-[#3B5CFF] text-white border-[#3B5CFF]" : "bg-white text-slate-500 border-slate-200"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {[
                      { name: "Alpha Team Delhi Office", msg: "Can you add the client to this group?", time: "2:15 PM", accent: "bg-orange-100" },
                      { name: "Bali Trip Friends", msg: "Pinned itinerary + budget sheet.", time: "10:15 AM", accent: "bg-blue-100" },
                      { name: "Brand Strategy Group", msg: "Reviewing feedback. Next call at 6?", time: "Yesterday", accent: "bg-purple-100" },
                    ].map((r) => (
                      <div key={r.name} className="rounded-3xl bg-white border border-slate-200 shadow-sm p-5">
                        <div className="flex items-start gap-4">
                          <div className={`w-14 h-14 rounded-3xl ${r.accent} border border-slate-200`} />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <div className="font-extrabold text-slate-900 text-[15px] leading-snug truncate">{r.name}</div>
                              <div className="text-xs text-slate-400 shrink-0">{r.time}</div>
                            </div>
                            <div className="text-[13px] text-slate-500 truncate mt-1.5">{r.msg}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-white via-white/90 to-transparent">
                  <div className="h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center px-4 gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#3B5CFF]/10 border border-[#3B5CFF]/20" />
                    <div className="h-2.5 rounded bg-slate-200 w-1/2" />
                    <div className="ml-auto w-10 h-10 rounded-xl bg-[#3B5CFF] shadow-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 170" className="w-full h-[150px] md:h-[170px]" preserveAspectRatio="none">
          <path
            d="M0,96 C180,140 300,120 450,96 C600,72 720,140 900,110 C1080,80 1200,120 1440,90 L1440,170 L0,170 Z"
            fill="white"
            opacity="1"
          />
          <path
            d="M0,112 C220,155 330,130 480,112 C630,94 760,160 920,128 C1080,96 1220,140 1440,108 L1440,170 L0,170 Z"
            fill="white"
            opacity="0.9"
          />
        </svg>
      </div>
    </section>
  );
}
