import { ArrowLeft, Languages, UploadCloud, FileText, HardDrive, Sparkles, Download, ZoomIn, ZoomOut, Printer, Share2, ChevronDown } from 'lucide-react';
import { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export default function TranslationWorkspace({ onNavigate }: Props) {
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
              <Languages className="w-5 h-5 text-secondary" />
              Smart Lingual Agent
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/20">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYOvMUJYhh7gpm_VUXPlwdfuMEGccZVoEYVWIw5W-q5a8VkX4fyEXx5OPswTmVWXc1rOPgHND6O9rVVv1lfL6vgt7XBUvbLiBfYD9L_TC15hwZyMmFBBJzLbYyCmTsYPwoLGo6c9UZMNseZbRKPYNtNpEYXT6nlEHynJKP9LZApE9eR8RZIsOFRhQZlm4vNe0Obwf4PHsU_BTCVs5m6EOXsmueRzjrmxseMT8qhc4tpUVdgfhETyl2-Si33MNgSOu200qWuVEgx71U" alt="Executive Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex p-6 gap-6 h-[calc(100vh-73px)]">
        {/* Left Column: Configuration */}
        <section className="w-[400px] flex flex-col gap-6 shrink-0 h-full overflow-y-auto pr-2">
          
          {/* Language Selection */}
          <div className="bg-surface-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/10">
            <h3 className="text-xs font-bold tracking-widest uppercase text-on-surface-variant/60 mb-6">Language Pair</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/60 mb-2">Source Document</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-surface-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm font-medium text-on-surface focus:outline-none focus:border-secondary transition-colors">
                    <option>English (US)</option>
                    <option>French (FR)</option>
                    <option>German (DE)</option>
                    <option>Spanish (ES)</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/50 pointer-events-none" />
                </div>
              </div>

              <div className="flex justify-center py-2">
                <div className="w-8 h-8 rounded-full bg-surface-low flex items-center justify-center border border-outline-variant/10">
                  <ArrowLeft className="w-4 h-4 text-on-surface-variant rotate-[-90deg]" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/60 mb-2">Target Translation</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-surface-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm font-medium text-on-surface focus:outline-none focus:border-secondary transition-colors">
                    <option>Japanese (JP)</option>
                    <option>Chinese (CN)</option>
                    <option>Korean (KR)</option>
                    <option>Hindi (IN)</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/50 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Upload Area */}
          <div className="bg-surface-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/10 flex-grow flex flex-col">
            <h3 className="text-xs font-bold tracking-widest uppercase text-on-surface-variant/60 mb-6">Source Asset</h3>
            
            <div className="border-2 border-dashed border-outline-variant/30 rounded-xl flex-grow flex flex-col items-center justify-center p-8 text-center hover:bg-surface-low/50 transition-colors cursor-pointer group">
              <div className="w-16 h-16 bg-secondary/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <UploadCloud className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-sm font-bold text-primary mb-2">Drag & Drop Document</h4>
              <p className="text-xs text-on-surface-variant/70 mb-6">Supports PDF, DOCX, PPTX up to 50MB</p>
              
              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-full bg-surface-low text-xs font-bold text-on-surface-variant flex items-center gap-2 hover:bg-outline-variant/20 transition-colors">
                  <HardDrive className="w-4 h-4" />
                  Browse Files
                </button>
              </div>
            </div>

            {/* Mock Uploaded File */}
            <div className="mt-4 p-4 rounded-xl border border-secondary/20 bg-secondary/5 flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-sm">
                <FileText className="w-5 h-5 text-secondary" />
              </div>
              <div className="flex-grow">
                <p className="text-sm font-bold text-primary truncate">Q3_Financial_Report_Final.pdf</p>
                <p className="text-[10px] text-on-surface-variant/70 uppercase tracking-wider font-bold">2.4 MB • Ready</p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full py-5 rounded-full bg-gradient-to-r from-secondary to-primary text-white font-bold tracking-wide flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-secondary/20 shrink-0">
            <Sparkles className="w-5 h-5" />
            Synthesize Translation
          </button>

        </section>

        {/* Right Column: Preview Pane */}
        <section className="flex-grow bg-surface-lowest rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col overflow-hidden relative">
          
          {/* Toolbar */}
          <div className="h-14 border-b border-outline-variant/10 flex items-center justify-between px-6 bg-surface-lowest/80 backdrop-blur-sm z-10">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold tracking-widest uppercase text-on-surface-variant/60">Output Preview</span>
              <span className="px-2 py-1 rounded bg-tertiary/10 text-tertiary text-[10px] font-bold uppercase tracking-wider">Draft</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-low rounded-lg transition-colors"><ZoomOut className="w-4 h-4" /></button>
              <span className="text-xs font-medium text-on-surface-variant w-12 text-center">100%</span>
              <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-low rounded-lg transition-colors"><ZoomIn className="w-4 h-4" /></button>
              <div className="w-[1px] h-4 bg-outline-variant/30 mx-2"></div>
              <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-low rounded-lg transition-colors"><Printer className="w-4 h-4" /></button>
              <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-low rounded-lg transition-colors"><Share2 className="w-4 h-4" /></button>
              <button className="ml-2 px-4 py-2 rounded-full bg-surface-low text-xs font-bold text-primary flex items-center gap-2 hover:bg-outline-variant/20 transition-colors">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>

          {/* Document Content Area (Mock) */}
          <div className="flex-grow overflow-auto bg-surface-low/30 p-8 flex justify-center">
            {/* Mock Page */}
            <div className="w-full max-w-[800px] bg-white shadow-sm border border-outline-variant/10 rounded-sm p-12 min-h-[1000px]">
              
              {/* Mock Document Header */}
              <div className="flex justify-between items-start mb-16 border-b border-outline-variant/20 pb-8">
                <div>
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyTUIuvT3Nl7SDq2_mxkG-RoMmLZE_JumtyYs4ToN8HRuk3xC6PGpEQV4-tRzYgJurIqp_vI-R6UoAgOjDbWrq9s0i6NXj5XKokj8Irj4QHy9rsu2fzGPtnX9l2mNixzeBUDtC0fmbnwajBbpZ5T76eDr_rZ2UrLm-7quzLr3jKbFkAS0y3AP3m-nDhQQtcu2FaGpqTGAqAPNVj56zur5XKaxHygyvvUiqd11wym3-Pc8WRF70EBRb2jUk8XxDDRdpydadQwnyPClX" alt="Logo" className="h-12 mb-4 opacity-80" />
                  <h1 className="text-3xl font-bold text-primary mb-2">2024年度 第3四半期 財務報告書</h1>
                  <p className="text-sm text-on-surface-variant">エグゼクティブ・サマリー</p>
                </div>
                <div className="text-right text-xs text-on-surface-variant/70 space-y-1">
                  <p>日付: 2024年11月15日</p>
                  <p>機密性: 社外秘</p>
                  <p>言語: 日本語 (JP)</p>
                </div>
              </div>

              {/* Mock Content Blocks */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-lg font-bold text-primary mb-4 border-l-4 border-secondary pl-4">1. 業績ハイライト</h2>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    当四半期の売上高は前年同期比15%増の過去最高を記録しました。これは主に、アジア太平洋地域における新規顧客の獲得と、主力製品である「Lumina AI」のエンタープライズ向けサブスクリプションの好調な推移によるものです。
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="p-4 bg-surface-low rounded-lg border border-outline-variant/10">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/60 mb-1">売上高</p>
                      <p className="text-xl font-bold text-primary">¥45.2B</p>
                      <p className="text-xs text-green-600 font-medium mt-1">+15.2% YoY</p>
                    </div>
                    <div className="p-4 bg-surface-low rounded-lg border border-outline-variant/10">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/60 mb-1">営業利益</p>
                      <p className="text-xl font-bold text-primary">¥12.8B</p>
                      <p className="text-xs text-green-600 font-medium mt-1">+8.4% YoY</p>
                    </div>
                    <div className="p-4 bg-surface-low rounded-lg border border-outline-variant/10">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/60 mb-1">顧客維持率</p>
                      <p className="text-xl font-bold text-primary">98.5%</p>
                      <p className="text-xs text-green-600 font-medium mt-1">+1.2% YoY</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-primary mb-4 border-l-4 border-secondary pl-4">2. 地域別売上構成</h2>
                  <div className="flex gap-8 items-center bg-surface-low/50 p-6 rounded-xl border border-outline-variant/10">
                    <div className="w-1/2">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtOX5lbaBuhe13nHgIC47ZBZm0ObtuGCZcJXXYW47TbVCIABY_dCDKe8P48dlJyZQEUCONuOK0aQf51xYTKqhVe8HMFL3trLxL--DDk1bZcqOGoVk6Gqaq5C2gb5Jo2g_iMEPLr7cJHyU76qiTFTkj5YwUXQM6rZr8Gc25G7N5ZH_Syiwmzed19w7A1H6LoqZ-sSB6XTPFohdYAUlPKKjCmfk6RGCAelwQiY2ttpK6XVkvjJklk7uKtcc3s2RWyVnsmdbEp6Ikgb4I" alt="Chart" className="w-full rounded shadow-sm mix-blend-multiply" />
                    </div>
                    <div className="w-1/2 space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-on-surface">北米 (NA)</span>
                        <span className="font-bold text-primary">42%</span>
                      </div>
                      <div className="w-full bg-outline-variant/20 h-1.5 rounded-full overflow-hidden"><div className="bg-secondary h-full w-[42%]"></div></div>
                      
                      <div className="flex justify-between items-center text-sm pt-2">
                        <span className="font-medium text-on-surface">欧州 (EMEA)</span>
                        <span className="font-bold text-primary">31%</span>
                      </div>
                      <div className="w-full bg-outline-variant/20 h-1.5 rounded-full overflow-hidden"><div className="bg-secondary/70 h-full w-[31%]"></div></div>
                      
                      <div className="flex justify-between items-center text-sm pt-2">
                        <span className="font-medium text-on-surface">アジア太平洋 (APAC)</span>
                        <span className="font-bold text-primary">27%</span>
                      </div>
                      <div className="w-full bg-outline-variant/20 h-1.5 rounded-full overflow-hidden"><div className="bg-tertiary h-full w-[27%]"></div></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>
      </main>
    </div>
  );
}
