const testimonials = [
  {
    name: "Raul Fernandez",
    date: "February 2023",
    quote:
      "I love being able to coordinate in one place without giving away my contacts. SlayChat keeps me central to the relationship.",
  },
  {
    name: "Carlos Rodriguez",
    date: "March 2023",
    quote:
      "Setting up groups for multi-party work is simple now. Clients get clarity, and we keep ownership of the engagement.",
  },
  {
    name: "Martha Alonso",
    date: "April 2023",
    quote:
      "The admin control is the key. We can collaborate freely without turning every deal into an open contact directory.",
  },
];

export default function Testimonials() {
  return (
    <section id="blog" className="section bg-[radial-gradient(900px_400px_at_15%_20%,rgba(59,92,255,0.10),transparent_60%),linear-gradient(to_bottom,rgba(15,23,42,0.03),rgba(15,23,42,0))]">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Testimonials</h2>
          <p className="text-slate-500">
            Voices of SlayChat users who run networks and coordinate deals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl border border-slate-200/70 shadow-[0_10px_30px_rgba(2,6,23,0.06)] p-8 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(2,6,23,0.10)] transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(59,92,255,0.30),transparent_70%),linear-gradient(135deg,rgba(22,134,255,0.18),rgba(106,214,255,0.18))] border border-slate-200/70 flex items-center justify-center shadow-sm">
                  <span className="text-sm font-extrabold text-slate-700">
                    {t.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.date}</div>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">{t.quote}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <button
            type="button"
            className="w-11 h-11 rounded-full bg-white border border-slate-200/70 text-slate-500 hover:text-slate-700 hover:border-slate-300 hover:shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2"
            aria-label="Previous"
            suppressHydrationWarning
          >
            ‹
          </button>
          <button
            type="button"
            className="w-11 h-11 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-[0_14px_45px_rgba(37,99,235,0.25)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2"
            aria-label="Next"
            suppressHydrationWarning
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

