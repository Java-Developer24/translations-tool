import { Bell, Settings, ShieldCheck, BrainCircuit, BarChart3, Lock, Languages, EyeOff, ArrowRight } from 'lucide-react';
import { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export default function HubScreen({ onNavigate }: Props) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Top Navigation Shell */}
      <header className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/10">
        <nav className="flex justify-between items-center w-full px-10 py-6 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-12">
            <span className="text-2xl font-black tracking-tighter text-primary italic">gannet</span>
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-primary/40 hidden lg:block">Luminous Enterprise</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 border-r border-outline-variant/30 pr-8">
              <button className="text-primary/70 hover:text-secondary transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="text-primary/70 hover:text-secondary transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold tracking-tighter text-primary uppercase">genpact</span>
              <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant/20 shadow-sm">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYOvMUJYhh7gpm_VUXPlwdfuMEGccZVoEYVWIw5W-q5a8VkX4fyEXx5OPswTmVWXc1rOPgHND6O9rVVv1lfL6vgt7XBUvbLiBfYD9L_TC15hwZyMmFBBJzLbYyCmTsYPwoLGo6c9UZMNseZbRKPYNtNpEYXT6nlEHynJKP9LZApE9eR8RZIsOFRhQZlm4vNe0Obwf4PHsU_BTCVs5m6EOXsmueRzjrmxseMT8qhc4tpUVdgfhETyl2-Si33MNgSOu200qWuVEgx71U" alt="Executive Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow relative">
        {/* Atmospheric Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-tertiary/5 rounded-full blur-[120px]"></div>
        </div>

        {/* Hero Canvas Section */}
        <section className="max-w-[1440px] mx-auto px-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-tertiary/30"></div>
              <span className="text-[0.75rem] uppercase tracking-[0.4em] text-tertiary font-extrabold">Executive Hub</span>
            </div>
            <h1 className="text-7xl lg:text-8xl text-primary font-extrabold tracking-tight mb-8 leading-[0.9] text-glow">
              Welcome back,<br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">User.</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed opacity-90">
              Your intelligent atelier is ready. Access deep-learning workspaces optimized for large-scale document synthesis and secure visual processing.
            </p>
          </div>
        </section>

        {/* Feature Grid Canvas */}
        <section className="max-w-[1440px] mx-auto px-10 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* LingoForge Card */}
            <div className="bg-surface-lowest rounded-xl p-10 shadow-ambient relative group overflow-hidden border border-outline-variant/10">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Languages className="w-48 h-48 text-secondary" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-8">
                  <Languages className="text-secondary w-8 h-8" />
                </div>
                <h2 className="text-2xl text-primary mb-3 font-bold">Agentic Language Translation Tool</h2>
                <p className="text-lg text-on-surface-variant mb-8 min-h-[3rem]">Professional workspace for intelligent multi-language document translation and context-aware synthesis.</p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  <span className="px-4 py-1.5 bg-surface-low text-on-surface-variant text-xs font-bold rounded-full uppercase tracking-wider">PDF Translation</span>
                  <span className="px-4 py-1.5 bg-surface-low text-on-surface-variant text-xs font-bold rounded-full uppercase tracking-wider">Multi-language</span>
                  <span className="px-4 py-1.5 bg-surface-low text-on-surface-variant text-xs font-bold rounded-full uppercase tracking-wider">AI Processing</span>
                  <span className="px-4 py-1.5 bg-surface-low text-on-surface-variant text-xs font-bold rounded-full uppercase tracking-wider">Structured Preview</span>
                </div>
                
                <button 
                  onClick={() => onNavigate('translation')}
                  className="bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 group-hover:translate-y-[-2px] transition-all active:scale-95"
                >
                  Open Workspace
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* VisionMask Card */}
            <div className="bg-surface-lowest rounded-xl p-10 shadow-ambient relative group overflow-hidden border border-outline-variant/10">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <EyeOff className="w-48 h-48 text-tertiary" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-tertiary/10 rounded-lg flex items-center justify-center mb-8">
                  <EyeOff className="text-tertiary w-8 h-8" />
                </div>
                <h2 className="text-2xl text-primary mb-3 font-bold">Agentic Phone Number Replacement Tool</h2>
                <p className="text-lg text-on-surface-variant mb-8 min-h-[3rem]">AI-driven privacy tool for automatic phone number detection and seamless visual replacement in images.</p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  <span className="px-4 py-1.5 bg-surface-low text-on-surface-variant text-xs font-bold rounded-full uppercase tracking-wider">OCR Detection</span>
                  <span className="px-4 py-1.5 bg-surface-low text-on-surface-variant text-xs font-bold rounded-full uppercase tracking-wider">Smart Replacement</span>
                  <span className="px-4 py-1.5 bg-surface-low text-on-surface-variant text-xs font-bold rounded-full uppercase tracking-wider">Processed Output</span>
                  <span className="px-4 py-1.5 bg-surface-low text-on-surface-variant text-xs font-bold rounded-full uppercase tracking-wider">Image Review</span>
                </div>
                
                <button 
                  onClick={() => onNavigate('vision')}
                  className="bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 group-hover:translate-y-[-2px] transition-all active:scale-95"
                >
                  Open Workspace
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Trust / Capability Strip */}
      <footer className="bg-surface-low/50 py-10 border-t border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-wrap justify-center gap-16 md:justify-between items-center opacity-60">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="text-[0.75rem] font-bold tracking-widest uppercase">Secure Processing</span>
          </div>
          <div className="flex items-center gap-3">
            <BrainCircuit className="w-5 h-5 text-primary" />
            <span className="text-[0.75rem] font-bold tracking-widest uppercase">AI-Assisted Workflow</span>
          </div>
          <div className="flex items-center gap-3">
            <BarChart3 className="w-5 h-5 text-primary" />
            <span className="text-[0.75rem] font-bold tracking-widest uppercase">Enterprise Analytics</span>
          </div>
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-primary" />
            <span className="text-[0.75rem] font-bold tracking-widest uppercase">Zero Data Retention</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
