import { ArrowRight, Star, GitBranch, History, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-cyan-300/30 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-600">
          <Star className="h-3.5 w-3.5 text-amber-500" />
          Pre‑launch — be an early collaborator
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
          GitHub for Research Papers
        </h1>
        <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Real-time LaTeX collaboration meets full version control, forking, open peer review, and DOI-backed releases. Build science faster, together.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#waitlist" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-slate-800">
            Join the waitlist
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-white px-5 py-3 text-sm font-medium hover:border-black/20">
            Explore the vision
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <Feature icon={<Users className='h-4 w-4' />} label="Live collaboration" />
          <Feature icon={<History className='h-4 w-4' />} label="Full version history" />
          <Feature icon={<GitBranch className='h-4 w-4' />} label="Forks & branches" />
          <Feature icon={<Star className='h-4 w-4' />} label="DOI releases" />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, label }) {
  return (
    <div className="rounded-xl border border-black/5 bg-white/70 backdrop-blur p-4 flex items-center gap-3">
      <div className="shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-cyan-500 text-white">
        {icon}
      </div>
      <span className="text-sm font-medium text-slate-700">{label}</span>
    </div>
  );
}
