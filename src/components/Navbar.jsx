import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400" />
          <span className="font-semibold text-slate-800">PaperHub</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#workflow" className="hover:text-slate-900">How it works</a>
          <a href="#faq" className="hover:text-slate-900">FAQ</a>
        </nav>
        <div className="hidden md:block">
          <a href="#waitlist" className="inline-flex items-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-slate-800">Join waitlist</a>
        </div>
        <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-black/10 text-slate-700" onClick={() => setOpen(v => !v)}>
          <Menu size={20} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            <a href="#features" className="py-2" onClick={() => setOpen(false)}>Features</a>
            <a href="#workflow" className="py-2" onClick={() => setOpen(false)}>How it works</a>
            <a href="#faq" className="py-2" onClick={() => setOpen(false)}>FAQ</a>
            <a href="#waitlist" className="py-2 font-medium" onClick={() => setOpen(false)}>Join waitlist</a>
          </div>
        </div>
      )}
    </header>
  );
}
