import { useState } from "react";

const faqs = [
  { q: "What is this platform?", a: "A collaborative research platform that blends real‑time LaTeX editing with Git‑style version control, forking, open reviews, and DOI releases." },
  { q: "Who is it for?", a: "Researchers, students, lab teams, and anyone writing technical documents who needs provenance, reproducibility, and collaboration." },
  { q: "Will there be a free tier?", a: "Yes. We plan a generous free tier for public projects, with paid options for private research groups and institutions." },
  { q: "Can I import from GitHub or Overleaf?", a: "Yes — you’ll be able to import repositories, LaTeX projects, and export to common formats including PDF and arXiv." },
  { q: "When is launch?", a: "We’re in pre‑launch. Join the waitlist for early access and product updates." },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 text-center">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-black/5 rounded-xl border border-black/5 bg-white">
          {faqs.map((f, i) => (
            <Item key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-5">
      <button className="w-full text-left flex items-center justify-between" onClick={() => setOpen(v => !v)}>
        <span className="font-medium text-slate-900">{q}</span>
        <span className="text-slate-400">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-sm text-slate-600">{a}</p>}
    </div>
  );
}
