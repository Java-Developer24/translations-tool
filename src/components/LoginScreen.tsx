import { Database, Mail, Lock, Eye, ArrowRight, Shield, ShieldCheck, BrainCircuit } from 'lucide-react';
import { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export default function LoginScreen({ onNavigate }: Props) {
  return (
    <main className="flex min-h-screen relative overflow-hidden">
      {/* Background Atmospheric Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[5%] w-[40%] aspect-square rounded-full bg-gradient-to-br from-secondary/10 to-transparent blur-[120px]"></div>
        <div className="absolute bottom-[5%] right-[2%] w-[30%] aspect-square rounded-full bg-gradient-to-tl from-tertiary/5 to-transparent blur-[100px]"></div>
      </div>

      {/* Left Side: Brand Statement & Atmosphere */}
      <section className="hidden lg:flex flex-col justify-between w-[55%] p-24 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]"></div>
        
        <div className="z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Database className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-primary">Luminous Enterprise</span>
          </div>
        </div>

        <div className="z-10 max-w-xl">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-tertiary/10 text-tertiary text-[10px] font-bold tracking-widest uppercase mb-8">
            Next-Gen Intelligence
          </span>
          <h1 className="text-[5rem] font-extrabold leading-[1.1] tracking-tighter text-primary mb-8">
            Intelligence that evolves with you.
          </h1>
          <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">
            Secure AI operations platform for modern leadership. Harmonizing executive data with predictive clarity.
          </p>
        </div>

        <div className="z-10 flex gap-12 text-on-surface-variant/60 text-xs font-bold tracking-widest uppercase">
          <span>Enterprise Grade</span>
          <span>ISO 27001 Certified</span>
          <span>AI Ethical Core</span>
        </div>
      </section>

      {/* Right Side: Elevated Login Card */}
      <section className="flex-1 flex items-center justify-center p-8 lg:p-24 relative z-20">
        <div className="w-full max-w-[520px]">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-3 mb-12">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Database className="text-white w-4 h-4" />
            </div>
            <span className="text-lg font-bold tracking-tight text-primary">Luminous</span>
          </div>

          {/* Form Card */}
          <div className="glass-panel rounded-xl p-12 lg:p-16 shadow-ambient border border-white/40">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-2">Welcome Back</h2>
              <p className="text-on-surface-variant">Sign in to your Lumina workstation</p>
            </div>

            <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); onNavigate('hub'); }}>
              <div className="group relative">
                <label className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/60 mb-2 transition-colors group-focus-within:text-secondary">
                  Business Email
                </label>
                <div className="ghost-border-b flex items-center py-2 transition-all group-focus-within:border-secondary">
                  <Mail className="w-5 h-5 text-outline-variant mr-3 group-focus-within:text-secondary transition-colors" />
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-none p-0 focus:ring-0 text-on-surface placeholder:text-outline-variant/50 font-medium outline-none" 
                    placeholder="executive@luminous.com" 
                    defaultValue="executive@luminous.com"
                  />
                </div>
              </div>

              <div className="group relative">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/60 transition-colors group-focus-within:text-secondary">
                    Password
                  </label>
                  <a href="#" className="text-[10px] font-bold tracking-widest uppercase text-tertiary hover:opacity-80 transition-opacity">Forgot?</a>
                </div>
                <div className="ghost-border-b flex items-center py-2 transition-all group-focus-within:border-secondary">
                  <Lock className="w-5 h-5 text-outline-variant mr-3 group-focus-within:text-secondary transition-colors" />
                  <input 
                    type="password" 
                    className="w-full bg-transparent border-none p-0 focus:ring-0 text-on-surface placeholder:text-outline-variant/50 font-medium outline-none" 
                    placeholder="••••••••" 
                    defaultValue="password123"
                  />
                  <Eye className="w-5 h-5 text-outline-variant cursor-pointer hover:text-on-surface transition-colors" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="remember" className="w-5 h-5 rounded border-outline-variant/30 text-secondary focus:ring-secondary/20" defaultChecked />
                <label htmlFor="remember" className="text-sm text-on-surface-variant font-medium">Keep session active for 30 days</label>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 rounded-full bg-gradient-to-r from-secondary to-primary text-white font-bold tracking-wide flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-secondary/20"
              >
                Access Intelligence
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-outline-variant/20 flex flex-col items-center gap-6">
              <p className="text-xs text-on-surface-variant/60 font-medium">Secure SSO Integration</p>
              <div className="flex gap-4">
                <button className="px-8 py-3 rounded-full border border-outline-variant/30 hover:bg-surface-low transition-colors flex items-center gap-2 text-sm font-semibold text-on-surface">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXOXVaMm538WL550nUmg4CuKKggkImeiB6JCRLwJ-KtcF6aywIvCewztGvbfYOQOFuAUSVkmbX32y9ACan9dE-0VJp0BA5iYvJ5UE3kGvq5jRMDw-Nl7SCQhVw1DlZWygPq59FxOeiM63gwfVARTwJ8db21anwSmdAm4bGjMTx41WIyfTZ4e_Eua9n4kpuYV0ym6LhK1l6yqKk5TBdxlU3NNk8iuHXtD8Zm6Y6wOdrYhXgfyhTaLYw92KYpReUt245xJUprx442g0c" alt="Google" className="w-4 h-4 opacity-70" />
                  Google
                </button>
                <button className="px-8 py-3 rounded-full border border-outline-variant/30 hover:bg-surface-low transition-colors flex items-center gap-2 text-sm font-semibold text-on-surface">
                  <Shield className="w-4 h-4 text-on-surface-variant" />
                  Azure AD
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-on-surface-variant/50">
              © 2024 Luminous Enterprise Intelligence. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
