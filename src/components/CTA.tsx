export default function CTA() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Stop getting cut out.<br />Start using SlayChat.
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join the waitlist and be among the first network owners to take back control of your relationships, commissions, and deals.
            </p>
            <a
              href="mailto:support@slaychat.app"
              className="inline-block bg-white text-blue-600 font-bold text-base px-10 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get Early Access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
