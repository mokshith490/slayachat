"use client";

import { useMemo, useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

export default function FAQ() {
  const items = useMemo<FAQItem[]>(
    () => [
      {
        q: "What is SlayChat?",
        a: "SlayChat is a group messaging platform for people who own networks. Create controlled groups where everyone can coordinate without exchanging direct contact details.",
      },
      {
        q: "Is my data secure on SlayChat?",
        a: "We prioritize privacy and security, and we design the product to reduce contact leakage. Share what you need in the group without turning relationships into an open directory.",
      },
      {
        q: "How can I use SlayChat in my business or community?",
        a: "Use it for deals, client coordination, projects, marketplaces, or communities—any situation where you need multi-party chat but must stay in control of relationships.",
      },
      {
        q: "Can I control who sees contact details?",
        a: "Yes. SlayChat is designed so the admin stays in control of access and relationship visibility while members collaborate normally.",
      },
      {
        q: "Can I use SlayChat on multiple devices?",
        a: "Yes. You can use SlayChat across devices so you can coordinate wherever you work.",
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="section bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">FAQ</h2>
          <p className="text-slate-500">Understanding SlayChat. Your questions answered.</p>
        </div>

        <div className="rounded-3xl border border-slate-200/70 bg-white overflow-hidden shadow-[0_14px_45px_rgba(2,6,23,0.06)]">
          {items.map((it, idx) => {
            const open = idx === openIndex;
            return (
              <div key={it.q} className="border-t border-slate-200/60 first:border-t-0">
                <button
                  type="button"
                  className="w-full px-6 py-5 flex items-center justify-between gap-6 text-left hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2"
                  onClick={() => setOpenIndex((v) => (v === idx ? -1 : idx))}
                  aria-expanded={open}
                  suppressHydrationWarning
                >
                  <span className="font-semibold text-slate-900">{it.q}</span>
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors ${
                      open ? "border-blue-200 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-500"
                    }`}
                    aria-hidden="true"
                  >
                    {open ? "—" : "+"}
                  </span>
                </button>
                {open ? (
                  <div className="px-6 pb-6 -mt-2">
                    <p className="text-slate-500 leading-relaxed">{it.a}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div id="contact" className="mt-10 text-center text-sm text-slate-500">
          Still have questions? Email{" "}
          <a className="link" href="mailto:support@slaychat.app">
            support@slaychat.app
          </a>
          .
        </div>
      </div>
    </section>
  );
}

