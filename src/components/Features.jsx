import { GitBranch, History, Users, Shield, Share2, Sparkles, Star, BookOpen } from "lucide-react";

const items = [
  {
    icon: <Users className="h-5 w-5" />, title: "Real‑time editor",
    desc: "Collaborate in LaTeX with presence, cursors, and comments — like pair‑programming for papers."
  },
  {
    icon: <History className="h-5 w-5" />, title: "Version control",
    desc: "Commits, diffs, branches, and pull requests tailored for research workflows."
  },
  {
    icon: <GitBranch className="h-5 w-5" />, title: "Fork & remix",
    desc: "Clone public projects, propose improvements, and credit contributors seamlessly."
  },
  {
    icon: <Shield className="h-5 w-5" />, title: "Private or public",
    desc: "Keep drafts private or publish openly with fine‑grained access controls."
  },
  {
    icon: <Share2 className="h-5 w-5" />, title: "Open peer review",
    desc: "Invite transparent reviews with line‑level annotations and discussion threads."
  },
  {
    icon: <Star className="h-5 w-5" />, title: "DOI releases",
    desc: "Mint citable DOIs for tagged versions to make your work discoverable and permanent."
  },
  {
    icon: <Sparkles className="h-5 w-5" />, title: "AI assist",
    desc: "Polish prose, format citations, and generate figures with responsible AI tools."
  },
  {
    icon: <BookOpen className="h-5 w-5" />, title: "Templates & kits",
    desc: "Start fast with journal templates, thesis kits, and reproducible project skeletons."
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Built for open, reproducible research</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Everything you need to write, collaborate, and publish with confidence — all in one place.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-black/5 bg-white p-5 shadow-sm hover:shadow transition-shadow">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-indigo-600/10 text-indigo-700 mb-3">
                {it.icon}
              </div>
              <h3 className="font-medium text-slate-900">{it.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
