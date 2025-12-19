import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                <span className="text-xs font-medium tracking-wide text-indigo-300 uppercase font-mono">v2.0 Now Live</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight max-w-5xl">
            Stop Building RAG on <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">"Data Soup"</span>.
            </h1>
            
            <p className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
            Raw SEC filings are a nightmare of mixed formats. Lucy transforms chaotic HTML & XBRL into high-fidelity, machine-readable JSON—ready for production-grade RAG pipelines.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3.5 bg-indigo-600 text-white text-sm font-bold rounded shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all duration-300">
                Get Sample Dataset
            </button>
            <button className="px-8 py-3.5 bg-transparent border border-slate-700 text-slate-300 text-sm font-bold rounded hover:border-white hover:text-white transition-all duration-300">
                View API Docs
            </button>
            </div>
        </div>

        {/* Split Terminal Visual */}
        <div className="relative max-w-5xl mx-auto rounded-xl border border-slate-800 bg-[#0F0F11] shadow-2xl overflow-hidden group">
            <div className="flex items-center px-4 py-2 border-b border-slate-800 bg-[#1A1A1E] gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="text-[10px] text-slate-500 font-mono ml-4 flex gap-4">
                    <span className="text-slate-400">bash</span>
                    <span>diff source.html processed.json</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 h-[400px] text-xs font-mono overflow-hidden">
                {/* Left: Messy HTML */}
                <div className="p-6 border-r border-slate-800 bg-[#0A0A0B] relative">
                    <div className="absolute top-2 right-2 text-[10px] text-red-500 uppercase tracking-widest font-bold bg-red-500/10 px-2 py-1 rounded">Raw Input</div>
                    <div className="opacity-60 space-y-1 text-slate-400">
                        <p><span className="text-blue-400">&lt;div</span> <span className="text-orange-400">class</span>="xbrl-table-container"&gt;</p>
                        <p className="pl-4"><span className="text-blue-400">&lt;span</span> style="font-size: 10pt; color: #000000;"&gt;</p>
                        <p className="pl-8 text-red-400 bg-red-500/10 inline-block w-full">Net Income (Loss) ............ $ (4,200)</p>
                        <p className="pl-4"><span className="text-blue-400">&lt;/span&gt;</span></p>
                        <p className="pl-4"><span className="text-slate-600">&lt;!-- Missing Context: Year 2023 --&gt;</span></p>
                        <p className="pl-4"><span className="text-blue-400">&lt;table</span> <span className="text-orange-400">cellpadding</span>="0" <span className="text-orange-400">cellspacing</span>="0"&gt;</p>
                        <p className="pl-8"><span className="text-blue-400">&lt;tr&gt;</span><span className="text-blue-400">&lt;td&gt;</span>&nbsp;<span className="text-blue-400">&lt;/td&gt;</span><span className="text-blue-400">&lt;/tr&gt;</span></p>
                        <p className="pl-4 text-red-400 bg-red-500/10 w-full inline-block"> ERROR: Unstructured Table Data </p>
                        <p className="pl-4"><span className="text-blue-400">&lt;/table&gt;</span></p>
                        <p><span className="text-blue-400">&lt;/div&gt;</span></p>
                    </div>
                </div>

                {/* Right: Clean JSON */}
                <div className="p-6 bg-[#0E0E10] relative">
                    <div className="absolute top-2 right-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-[10px] text-green-500 uppercase tracking-widest font-bold bg-green-500/10 px-2 py-1 rounded">Verified JSON</span>
                    </div>
                    <div className="text-slate-300 space-y-1">
                        <p><span className="text-yellow-400">"financial_statement"</span>: <span className="text-purple-400">{`{`}</span></p>
                        <p className="pl-4"><span className="text-yellow-400">"type"</span>: <span className="text-green-400">"income_statement"</span>,</p>
                        <p className="pl-4"><span className="text-yellow-400">"period"</span>: <span className="text-green-400">"FY2023"</span>,</p>
                        <p className="pl-4"><span className="text-yellow-400">"items"</span>: <span className="text-purple-400">[</span></p>
                        <p className="pl-8"><span className="text-purple-400">{`{`}</span></p>
                        <p className="pl-12 bg-indigo-500/10 w-full inline-block -ml-2 py-0.5 rounded-sm border-l-2 border-indigo-500 px-2"><span className="text-yellow-400">"concept"</span>: <span className="text-green-400">"us-gaap:NetIncomeLoss"</span>,</p>
                        <p className="pl-12"><span className="text-yellow-400">"value"</span>: <span className="text-blue-400">-4200000</span>,</p>
                        <p className="pl-12"><span className="text-yellow-400">"unit"</span>: <span className="text-green-400">"USD"</span>,</p>
                        <p className="pl-12"><span className="text-yellow-400">"confidence"</span>: <span className="text-blue-400">0.999</span></p>
                        <p className="pl-8"><span className="text-purple-400">{`}`}</span>,</p>
                        <p className="pl-4"><span className="text-purple-400">]</span></p>
                        <p><span className="text-purple-400">{`}`}</span></p>
                    </div>
                    {/* Glowing Accent */}
                    <div className="absolute top-1/2 right-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;