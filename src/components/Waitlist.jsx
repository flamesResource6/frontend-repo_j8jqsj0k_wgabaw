import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    try {
      // For now, just simulate success — backend can be wired later
      await new Promise(r => setTimeout(r, 600));
      setSubmitted(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="waitlist" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 p-1">
          <div className="rounded-2xl bg-white p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">Be first to build the future of research</h3>
              <p className="mt-2 text-slate-600">Join early access to shape features like open peer review, DOI releases, and AI‑assisted writing.</p>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@university.edu"
                className="flex-1 rounded-lg border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button type="submit" className="rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-slate-800">
                {submitted ? "You're on the list!" : "Join waitlist"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
