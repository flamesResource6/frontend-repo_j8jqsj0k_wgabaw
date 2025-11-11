import { Code2, FileText, GitBranch, MessageSquare, Rocket, Upload } from "lucide-react";

const steps = [
  { icon: <FileText className="h-5 w-5" />, title: "Create a project", desc: "Start from a template or import from Git. Configure visibility and collaborators." },
  { icon: <Code2 className="h-5 w-5" />, title: "Write in real‑time", desc: "Collaborate in LaTeX with comments, tasks, and presence." },
  { icon: <GitBranch className="h-5 w-5" />, title: "Branch & review", desc: "Open a branch, request reviews, and discuss changes with inline annotations." },
  { icon: <Upload className="h-5 w-5" />, title: "Merge confidently", desc: "Track diffs and history; merge when checks pass." },
  { icon: <Rocket className="h-5 w-5" />, title: "Release with DOI", desc: "Tag a version to mint a DOI and publish a citable snapshot." },
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">How it works</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-cyan-600/10 text-cyan-700 mb-3">
                {s.icon}
              </div>
              <h3 className="font-medium text-slate-900">{s.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
