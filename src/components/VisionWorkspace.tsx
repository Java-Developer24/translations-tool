import { ArrowLeft, EyeOff, UploadCloud, Zap, Check, Settings, Search, Maximize, MonitorPlay, Shield, Terminal, CheckCircle2, Loader2, Image as ImageIcon, ZoomIn, ZoomOut } from 'lucide-react';
import { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export default function VisionWorkspace({ onNavigate }: Props) {
  return (
    <div className="min-h-screen flex flex-col relative bg-surface-low">
      {/* Minimal Top Nav */}
      <header className="bg-surface-lowest border-b border-outline-variant/10 sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 py-4">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onNavigate('hub')}
              className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-bold tracking-widest uppercase"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Hub
            </button>
            <div className="h-4 w-[1px] bg-outline-variant/30"></div>
            <span className="text-primary font-bold tracking-tight flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-tertiary" />
              VisionMask Privacy Agent
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              Engine Online
            </span>
          </div>
        </div>
      </header>

      <main className="flex-grow flex p-6 gap-6 h-[calc(100vh-73px)]">
        {/* Left Column: Workflow & Config */}
        <section className="w-[360px] flex flex-col gap-6 shrink-0 h-full overflow-y-auto pr-2">
          
          {/* Asset Upload */}
          <div className="bg-surface-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/10">
            <h3 className="text-xs font-bold tracking-widest uppercase text-on-surface-variant/60 mb-4">Asset Preparation</h3>
            <div className="border-2 border-dashed border-outline-variant/30 rounded-xl p-6 text-center hover:bg-surface-low/50 transition-colors cursor-pointer group">
              <ImageIcon className="w-8 h-8 text-tertiary mx-auto mb-3 opacity-80 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-bold text-primary mb-1">Select Image</p>
              <p className="text-[10px] text-on-surface-variant/70 uppercase tracking-wider">JPG, PNG, WEBP</p>
            </div>
          </div>

          {/* Workflow Stepper */}
          <div className="bg-surface-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/10 flex-grow">
            <h3 className="text-xs font-bold tracking-widest uppercase text-on-surface-variant/60 mb-6">OCR Workflow Sequence</h3>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant/20 before:to-transparent">
              
              {/* Step 1: Complete */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-green-500 bg-green-500/10 text-green-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Check className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-outline-variant/10 bg-surface-low/50">
                  <h4 className="font-bold text-primary text-sm mb-1">Image Ingestion</h4>
                  <p className="text-xs text-on-surface-variant/70">Resolution verified (4K)</p>
                </div>
              </div>

              {/* Step 2: Active */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-tertiary bg-tertiary/10 text-tertiary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                  <div className="absolute inset-0 rounded-full border border-tertiary animate-ping opacity-20"></div>
                  <Search className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-tertiary/30 bg-tertiary/5 shadow-sm">
                  <h4 className="font-bold text-tertiary text-sm mb-1">Neural Detection</h4>
                  <p className="text-xs text-on-surface-variant/70">Scanning for PII patterns...</p>
                  <div className="mt-3 h-1 w-full bg-outline-variant/20 rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary w-3/4 progress-shimmer"></div>
                  </div>
                </div>
              </div>

              {/* Step 3: Pending */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-outline-variant/30 bg-surface-lowest text-outline-variant shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-outline-variant/10 bg-surface-lowest opacity-50">
                  <h4 className="font-bold text-primary text-sm mb-1">Mask Generation</h4>
                  <p className="text-xs text-on-surface-variant/70">Awaiting detection</p>
                </div>
              </div>

            </div>
          </div>

          {/* Settings */}
          <div className="bg-surface-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/10">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-4 h-4 text-on-surface-variant" />
              <h3 className="text-xs font-bold tracking-widest uppercase text-on-surface-variant/60">Target Format</h3>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-2 rounded-lg border border-tertiary bg-tertiary/10 text-tertiary text-xs font-bold">Blur</button>
              <button className="flex-1 py-2 rounded-lg border border-outline-variant/20 bg-surface-low text-on-surface-variant text-xs font-bold hover:bg-outline-variant/10 transition-colors">Solid Block</button>
              <button className="flex-1 py-2 rounded-lg border border-outline-variant/20 bg-surface-low text-on-surface-variant text-xs font-bold hover:bg-outline-variant/10 transition-colors">Redact</button>
            </div>
          </div>

        </section>

        {/* Right Column: Active Processing Frame */}
        <section className="flex-grow flex flex-col gap-6 overflow-hidden">
          
          {/* Main Image Viewport */}
          <div className="flex-grow bg-[#0A0A0A] rounded-2xl shadow-ambient border border-outline-variant/20 relative overflow-hidden flex items-center justify-center group">
            {/* Toolbar Overlay */}
            <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 bg-black/50 hover:bg-black/80 text-white rounded-lg backdrop-blur-md transition-colors"><ZoomIn className="w-4 h-4" /></button>
              <button className="p-2 bg-black/50 hover:bg-black/80 text-white rounded-lg backdrop-blur-md transition-colors"><ZoomOut className="w-4 h-4" /></button>
              <button className="p-2 bg-black/50 hover:bg-black/80 text-white rounded-lg backdrop-blur-md transition-colors"><Maximize className="w-4 h-4" /></button>
            </div>

            {/* Scanning Animation Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none scanning-line"></div>

            {/* Image Content */}
            <div className="relative max-w-full max-h-full p-8">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuABabixqzGkgNvx2ZeCAmip33pdZSnKue881zicu411UCsidmsf4NieW40ofT9jUVM2gB-HKHw92P76GEPSA_f6jScAmTYpVN4AgJkL7n9IBKZQTny5FohIXgFY_DNSjrxZfZd4ehSrRZJM741kMpwdOWcZMbPCVqxaIIHtJPK_-Nt3NjA9OEloSt8tU5V9g9vhemGyzAx3ZguTE61U9G3h7b0x2w_4fsY9SWHuPF33zZnfxsuvglli-YYYuCmA5aVc0XV9jRHGeWeJ" alt="Source" className="max-w-full max-h-full object-contain rounded shadow-2xl" />
              
              {/* Mock Bounding Boxes (Simulated Detections) */}
              <div className="absolute top-[35%] left-[45%] w-[12%] h-[5%] border-2 border-tertiary bg-tertiary/20 rounded-sm shadow-[0_0_15px_rgba(255,106,61,0.5)] flex items-start justify-end p-1">
                <span className="bg-tertiary text-white text-[8px] font-bold px-1 rounded-sm -mt-4 -mr-1 shadow-sm">98% CONF</span>
              </div>
              <div className="absolute top-[60%] left-[20%] w-[15%] h-[4%] border-2 border-tertiary bg-tertiary/20 rounded-sm shadow-[0_0_15px_rgba(255,106,61,0.5)] flex items-start justify-end p-1">
                <span className="bg-tertiary text-white text-[8px] font-bold px-1 rounded-sm -mt-4 -mr-1 shadow-sm">94% CONF</span>
              </div>
            </div>

            {/* Status HUD */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
              <Loader2 className="w-4 h-4 text-tertiary animate-spin" />
              <span className="text-white text-xs font-mono tracking-wider">ANALYZING_FRAME_01</span>
            </div>
          </div>

          {/* Bottom Metrics & Logs */}
          <div className="h-[200px] shrink-0 flex gap-6">
            {/* Metrics Cards */}
            <div className="w-1/3 flex flex-col gap-4">
              <div className="flex-1 bg-surface-lowest rounded-xl p-4 border border-outline-variant/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/60 mb-1">Resolution</p>
                  <p className="text-lg font-bold text-primary">3840 × 2160</p>
                </div>
                <MonitorPlay className="w-6 h-6 text-outline-variant/50" />
              </div>
              <div className="flex-1 bg-surface-lowest rounded-xl p-4 border border-outline-variant/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/60 mb-1">Compliance</p>
                  <p className="text-lg font-bold text-green-600">GDPR Ready</p>
                </div>
                <Shield className="w-6 h-6 text-green-500/50" />
              </div>
            </div>

            {/* Terminal Log */}
            <div className="w-2/3 bg-[#1E1E1E] rounded-xl p-4 border border-outline-variant/20 font-mono text-xs overflow-hidden flex flex-col relative">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10 text-white/50">
                <Terminal className="w-4 h-4" />
                <span>Advanced Processing Log</span>
              </div>
              <div className="flex-grow overflow-y-auto space-y-2 text-white/80">
                <p><span className="text-blue-400">[SYSTEM]</span> Initializing VisionMask Engine v2.4.1...</p>
                <p><span className="text-blue-400">[SYSTEM]</span> Loading weights: <span className="text-yellow-400">luminous-privacy-core-v4</span></p>
                <p><span className="text-green-400">[SUCCESS]</span> Image ingested. Dimensions: 3840x2160. Format: JPEG.</p>
                <p><span className="text-purple-400">[PROCESS]</span> Running OCR pass 1 (Standard)...</p>
                <p><span className="text-purple-400">[PROCESS]</span> Running OCR pass 2 (Deep Context)...</p>
                <p className="text-tertiary flex items-center gap-2">
                  <span className="animate-pulse">▶</span>
                  Detecting numeric patterns matching [PHONE_NUMBER] regex...
                </p>
              </div>
              {/* Gradient fade at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#1E1E1E] to-transparent pointer-events-none"></div>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}
