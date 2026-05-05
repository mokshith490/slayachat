export default function BrandSection() {
  return (
    <section id="brand" className="section bg-gradient-to-b from-white to-slate-50">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-3">
            Brand
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Identity that matches the product
          </h2>
          <p className="text-slate-500 leading-relaxed">
            A clean, modern mark built around privacy-first conversations—consistent across UI, marketing, and product.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="card-soft overflow-hidden hover:shadow-[0_18px_50px_rgba(2,6,23,0.10)] transition-shadow">
            <div className="p-6 md:p-8">
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                Brand mood & elements
              </h3>
              <p className="text-slate-500 mb-6">
                Visual language: friendly, secure, and conversation-led.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Privacy-first", "Conversation", "Trust", "Modern", "Clean UI"].map((t) => (
                  <span
                    key={t}
                    className="chip"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="px-6 pb-6 md:px-8 md:pb-8">
              <div className="rounded-2xl bg-white border border-slate-200/70 overflow-hidden">
                <img
                  src="/brand/brand-collage.png"
                  alt="SlayChat brand collage"
                  className="w-full h-auto block hover:scale-[1.01] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="card-soft overflow-hidden hover:shadow-[0_18px_50px_rgba(2,6,23,0.10)] transition-shadow">
            <div className="p-6 md:p-8">
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                Thoughts behind the mark
              </h3>
              <p className="text-slate-500 mb-6">
                Why the “S” works: stacked chat layers, hierarchy, and protection—exactly what SlayChat enables.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: "Recognizable", desc: "Simple shape that stays readable at any size." },
                  { title: "Layered", desc: "Represents multi-party conversations and structure." },
                  { title: "Protective", desc: "Signals privacy and controlled access." },
                  { title: "Consistent", desc: "Matches the product’s UI and tone." },
                ].map((f) => (
                  <div key={f.title} className="rounded-2xl bg-white border border-slate-200/70 p-4 hover:shadow-sm transition-shadow">
                    <div className="font-bold text-slate-900 text-sm mb-1">{f.title}</div>
                    <div className="text-sm text-slate-500 leading-relaxed">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-6 pb-6 md:px-8 md:pb-8">
              <div className="rounded-2xl bg-white border border-slate-200/70 overflow-hidden">
                <img
                  src="/brand/thoughts-behind-mark.png"
                  alt="Thoughts behind the SlayChat mark"
                  className="w-full h-auto block hover:scale-[1.01] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

