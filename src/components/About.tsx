export default function About() {
  return (
    <section id="about" className="pt-24 pb-20 bg-white">
      <div className="container-page">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-3">About Us</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Our platform helps you create groups,
            <br />
            share content, and close deals—without losing control.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              SlayChat is built for people who own networks. It lets everyone coordinate in one shared space while preventing
              disintermediation and unwanted direct contact.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Use it for deals, projects, communities, and multi-party coordination. You stay central, keep relationships private,
              and move faster with less risk.
            </p>

            <div id="services" className="flex flex-col sm:flex-row gap-4">
              <a href="#download" className="btn-primary px-8 py-3.5 shadow-[0_18px_50px_rgba(59,92,255,0.20)]">
                Download
              </a>
              <a href="#faq" className="btn-secondary px-8 py-3.5">
                Know More
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(59,92,255,0.18),transparent_55%),linear-gradient(to_bottom,rgba(15,23,42,0.02),rgba(15,23,42,0))] rounded-[3rem]" />
            <div className="relative h-[460px] md:h-[520px] lg:h-[560px] mt-10 lg:mt-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[330px] md:w-[380px] aspect-[16/10] rounded-[2.5rem] bg-[#3B5CFF]/10 ring-1 ring-[#3B5CFF]/10" />
              </div>

              <div className="absolute left-1/2 top-[56%] lg:top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[14deg]">
                <div className="w-[280px] md:w-[340px] lg:w-[360px] aspect-[9/18] rounded-[2.8rem] bg-white shadow-[0_40px_90px_rgba(2,6,23,0.18)] border border-slate-200/70 overflow-hidden">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-36 h-7 bg-black/90 rounded-full" />
                  <div className="h-full bg-gradient-to-b from-white to-slate-50">
                    <div className="px-6 pt-14 pb-6">
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <div className="text-xs text-slate-400 font-semibold">Super Groups</div>
                          <div className="text-sm font-bold text-slate-900">Your groups</div>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-[#3B5CFF]/10 border border-[#3B5CFF]/20" />
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
                          { title: "Alpha Team Delhi Office", meta: "6.5k members", chip: "Add", accent: "bg-orange-100" },
                          { title: "Bali Trip Friends", meta: "6.5k members", chip: "Add", accent: "bg-blue-100" },
                          { title: "Brand Strategy Group", meta: "1.2k members", chip: "Add", accent: "bg-purple-100" },
                        ].map((g) => (
                          <div
                            key={g.title}
                            className="rounded-3xl bg-white border border-slate-200/70 shadow-sm p-5"
                          >
                            <div className="flex items-start gap-4">
                              <div className={`w-14 h-14 rounded-3xl ${g.accent} border border-slate-200`} />
                              <div className="min-w-0 flex-1">
                                <div className="flex items-start justify-between gap-3">
                                  <div className="min-w-0">
                                    <div className="font-extrabold text-slate-900 text-[15px] leading-snug line-clamp-2">
                                      {g.title}
                                    </div>
                                    <div className="text-xs text-slate-400 mt-1.5">{g.meta}</div>
                                  </div>
                                  <span className="text-xs font-bold px-3.5 py-2 rounded-full bg-[#3B5CFF]/10 text-[#2F4CFF] border border-[#3B5CFF]/25 shrink-0">
                                    {g.chip} +
                                  </span>
                                </div>
                                <div className="mt-4">
                                  <div className="h-2.5 rounded bg-slate-200 w-5/6 mb-2" />
                                  <div className="h-2.5 rounded bg-slate-200 w-3/5" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-white via-white/90 to-transparent">
                      <div className="flex items-center justify-between">
                        {["home", "groups", "chat", "profile"].map((k, i) => (
                          <div
                            key={k}
                            className={`w-10 h-10 rounded-2xl border ${
                              i === 1 ? "bg-[#3B5CFF] border-[#3B5CFF]" : "bg-white border-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-4 md:right-10 bottom-8 md:bottom-10 lg:bottom-14">
                <div className="flex items-center gap-3 bg-[#3B5CFF] text-white px-5 py-3 rounded-full shadow-[0_18px_55px_rgba(59,92,255,0.35)]">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/90 border-2 border-[#3B5CFF]" />
                    <div className="w-8 h-8 rounded-full bg-white/90 border-2 border-[#3B5CFF]" />
                    <div className="w-8 h-8 rounded-full bg-white/90 border-2 border-[#3B5CFF]" />
                  </div>
                  <div className="text-sm font-semibold">Connect with people</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

