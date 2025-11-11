import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Waitlist from "./components/Waitlist";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <Waitlist />
        <FAQ />
        <footer className="py-12">
          <div className="max-w-6xl mx-auto px-4 text-sm text-slate-500 flex flex-col sm:flex-row justify-between gap-3">
            <p>© {new Date().getFullYear()} PaperHub — GitHub for Research Papers</p>
            <div className="flex gap-4">
              <a href="#features" className="hover:text-slate-700">Features</a>
              <a href="#workflow" className="hover:text-slate-700">How it works</a>
              <a href="#waitlist" className="hover:text-slate-700">Join waitlist</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
