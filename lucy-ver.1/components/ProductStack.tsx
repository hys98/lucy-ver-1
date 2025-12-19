import React, { useState, useEffect } from 'react';

interface SimulationData {
  id: string;
  label: string;
  raw: string;
  processed: string;
  logs: string[];
}

const simulationScenarios: Record<string, SimulationData> = {
  market: {
    id: 'market',
    label: 'Market Feed',
    raw: `{"sym": "NVDA", "t": 171051200, "p": 890.50, "ex": "NYS"}
{"sym": "NVDA", "t": 171051201, "p": 885.20, "ex": "NSD"}
{"sym": "NVDA", "t": 171051202, "p": null, "ex": "LSE"}`,
    processed: `{
  "ticker": "NVDA",
  "consensus_price": 889.45,
  "confidence_score": 0.998,
  "anomalies_corrected": 1,
  "sources_aggregated": 12
}`,
    logs: [
      "Ingesting real-time tick data...",
      "Detected null price packet from LSE node.",
      "Interpolating based on global VWAP...",
      "Cross-referencing 12 liquidity pools.",
      "Output generated: High Fidelity."
    ]
  },
  news: {
    id: 'news',
    label: 'News Stream',
    raw: `HEADLINE: "Tech Giant Alpha considers acquisition of small AI startup Beta..."
SOURCE: Unverified Blog
TIMESTAMP: 14:02 UTC`,
    processed: `{
  "event_type": "M_AND_A_RUMOR",
  "entities": ["Alpha Inc", "Beta AI"],
  "sentiment_score": 0.65,
  "credibility_rating": "LOW",
  "vector_id": "vec_99a8s7d"
}`,
    logs: [
      "Parsing unstructured text stream...",
      "NLP Entity Extraction: Alpha, Beta.",
      "Checking source authority domain...",
      "Flagging as 'Unverified Rumor'.",
      "Generating vector embeddings for RAG."
    ]
  },
  sec: {
    id: 'sec',
    label: 'SEC Filings',
    raw: `FORM 8-K
ITEM 1.01 Entry into a Material Definitive Agreement.
On March 14, 2024, the Company entered into...`,
    processed: `{
  "filing_type": "8-K",
  "material_event": true,
  "summary": "Material Agreement Entry",
  "impact_analysis": "NEUTRAL",
  "structured_tables": true
}`,
    logs: [
      "PDF OCR and Layout Analysis initiated...",
      "Identifying Item 1.01 structure.",
      "Summarizing legal definitions...",
      "Mapping to historical impact models.",
      "JSON structure finalized."
    ]
  }
};

const InteractivePipeline: React.FC = () => {
  const [activeSource, setActiveSource] = useState<string>('market');
  const [phase, setPhase] = useState<'idle' | 'ingest' | 'process' | 'complete'>('idle');
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);

  useEffect(() => {
    // Reset simulation when source changes
    setPhase('ingest');
    setVisibleLogs([]);

    const scenario = simulationScenarios[activeSource];
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    // Timeline of animation
    // 0ms: Start Ingest
    timeouts.push(setTimeout(() => {
       setVisibleLogs(prev => [...prev, scenario.logs[0]]);
    }, 100));

    // 1000ms: Move to Processing
    timeouts.push(setTimeout(() => {
      setPhase('process');
      setVisibleLogs(prev => [...prev, scenario.logs[1], scenario.logs[2]]);
    }, 1200));

    // 2500ms: More Processing logs
    timeouts.push(setTimeout(() => {
       setVisibleLogs(prev => [...prev, scenario.logs[3]]);
    }, 2500));

    // 3500ms: Complete
    timeouts.push(setTimeout(() => {
      setPhase('complete');
      setVisibleLogs(prev => [...prev, scenario.logs[4]]);
    }, 3500));

    return () => timeouts.forEach(clearTimeout);
  }, [activeSource]);

  const scenario = simulationScenarios[activeSource];

  return (
    <div className="mt-24 w-full">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-serif text-white mb-2">Experience the Pipeline</h3>
        <p className="text-white/50 text-sm">Select a data source to visualize the Lucy Engine verification process.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-xl relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

        {/* Column 1: Source Selection */}
        <div className="lg:col-span-3 flex flex-col gap-4 z-10">
          <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Data Source</div>
          {Object.values(simulationScenarios).map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSource(s.id)}
              className={`text-left px-4 py-4 rounded-lg border transition-all duration-300 relative overflow-hidden group ${
                activeSource === s.id 
                  ? 'bg-white/10 border-white/40 text-white' 
                  : 'bg-transparent border-white/5 text-white/50 hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-medium">{s.label}</span>
                {activeSource === s.id && <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>}
              </div>
            </button>
          ))}

          {/* Raw Data Preview */}
          <div className="mt-auto">
             <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Raw Ingestion</div>
             <div className={`font-mono text-[10px] leading-relaxed p-3 rounded border bg-black/50 overflow-hidden transition-colors duration-500 h-32 ${phase === 'ingest' ? 'border-blue-500/50 text-blue-100' : 'border-white/10 text-white/30'}`}>
                <pre>{scenario.raw}</pre>
             </div>
          </div>
        </div>

        {/* Column 2: The Engine Visual */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center min-h-[400px] relative z-10">
            {/* Connecting Lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 {/* Left Line */}
                 <div className={`absolute left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 ${phase !== 'idle' ? 'opacity-100' : 'opacity-20'}`}></div>
                 {/* Particle moving left to center */}
                 {phase === 'ingest' && (
                    <div className="absolute left-0 w-1/2 h-[2px] overflow-hidden">
                        <div className="w-20 h-full bg-blue-500 blur-[2px] animate-slide-right"></div>
                    </div>
                 )}
            </div>

            {/* Central Engine Node */}
            <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Outer Rings */}
                <div className={`absolute inset-0 border border-white/10 rounded-full transition-all duration-1000 ${phase === 'process' ? 'scale-110 border-white/30' : 'scale-100'}`}></div>
                <div className={`absolute inset-2 border border-dashed border-white/20 rounded-full transition-all duration-[3000ms] ${phase === 'process' ? 'rotate-180 scale-105' : 'rotate-0'}`}></div>
                
                {/* Core */}
                <div className={`w-32 h-32 rounded-full bg-gradient-to-b from-white/10 to-black border border-white/20 backdrop-blur-md flex flex-col items-center justify-center shadow-2xl transition-all duration-500 ${phase === 'process' ? 'shadow-[0_0_40px_rgba(255,255,255,0.1)] border-white/50' : ''}`}>
                    <span className="text-2xl font-serif italic text-white">Lucy</span>
                    <span className={`text-[9px] uppercase tracking-widest mt-1 transition-colors duration-300 ${phase === 'process' ? 'text-blue-400' : phase === 'complete' ? 'text-green-400' : 'text-white/30'}`}>
                        {phase === 'idle' ? 'Ready' : phase === 'ingest' ? 'Ingesting' : phase === 'process' ? 'Vetting' : 'Optimized'}
                    </span>
                </div>

                {/* Processing Particles */}
                {phase === 'process' && (
                   <>
                     <div className="absolute w-full h-full rounded-full border-t border-blue-500/50 animate-spin"></div>
                     <div className="absolute w-40 h-40 rounded-full border-b border-purple-500/50 animate-spin-reverse"></div>
                   </>
                )}
            </div>

            {/* System Logs */}
            <div className="mt-8 w-full max-w-sm">
                <div className="h-24 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                    <div className="flex flex-col-reverse justify-end h-full">
                         {visibleLogs.map((log, i) => (
                             <div key={i} className="text-[10px] font-mono text-green-400/80 mb-1 animate-fade-in-up">
                                 &gt; {log}
                             </div>
                         ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Column 3: Output */}
        <div className="lg:col-span-4 flex flex-col z-10">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Structured Output</div>
             {phase === 'complete' && (
                <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-1 rounded border border-green-500/30">
                    Confidence: 99.9%
                </span>
             )}
          </div>
          
          <div className={`flex-1 rounded-xl border bg-[#050505] p-4 font-mono text-xs overflow-auto transition-all duration-500 relative group ${
              phase === 'complete' ? 'border-green-500/30 shadow-[0_0_20px_rgba(74,222,128,0.1)]' : 'border-white/10 opacity-50'
          }`}>
             {phase === 'complete' ? (
                 <pre className="text-green-100/90">{scenario.processed}</pre>
             ) : (
                 <div className="flex items-center justify-center h-full text-white/20">
                     {phase === 'ingest' || phase === 'process' ? (
                         <div className="flex gap-1">
                             <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
                             <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce delay-100"></div>
                             <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce delay-200"></div>
                         </div>
                     ) : (
                         <span>Waiting for pipeline...</span>
                     )}
                 </div>
             )}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes slide-right {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-slide-right {
          animation: slide-right 1s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

const ProductStack: React.FC = () => {
  return (
    <section id="stack" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            How Lucy Works: The High-Fidelity Data Pipeline
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
                Transforming raw chaos into structured intelligence.
            </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 relative">
            {/* Connecting Line (Desktop) with Animation */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 -z-10 transform -translate-y-1/2 overflow-hidden">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-flow"></div>
            </div>

            {/* Stage 1: Ingestion (Blue Palette) */}
            <div className="flex-1 glass-card p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-500 border border-white/5 hover:border-blue-400/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Badge */}
                <div className="absolute -top-4 left-8 bg-[#0a0a0a] border border-white/10 group-hover:border-blue-500/30 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-white/40 group-hover:text-blue-400 transition-colors z-10">
                    STAGE 01
                </div>

                {/* Icon */}
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] relative z-10">
                    <svg className="w-6 h-6 opacity-70 group-hover:opacity-100 group-hover:text-blue-300 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-blue-300 transition-colors relative z-10">Ingestion</h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent mb-4 group-hover:from-blue-500/50 transition-colors"></div>
                <p className="text-sm text-white/60 leading-relaxed mb-4 relative z-10">
                    Real-time ingestion from thousands of verified global sources via API, streaming, and custom connectors.
                </p>
                <ul className="text-xs text-white/40 space-y-2 font-mono relative z-10">
                    <li className="flex items-center gap-2 group-hover:text-blue-200/50 transition-colors"><span className="w-1 h-1 bg-white/40 group-hover:bg-blue-400 rounded-full"></span> Exchange Feeds</li>
                    <li className="flex items-center gap-2 group-hover:text-blue-200/50 transition-colors"><span className="w-1 h-1 bg-white/40 group-hover:bg-blue-400 rounded-full"></span> SEC Filings</li>
                    <li className="flex items-center gap-2 group-hover:text-blue-200/50 transition-colors"><span className="w-1 h-1 bg-white/40 group-hover:bg-blue-400 rounded-full"></span> Alternative Data</li>
                </ul>
            </div>

            {/* Stage 2: Lucy Engine (Core/White/Amber Palette) */}
            <div className="flex-1 p-8 rounded-2xl relative group bg-gradient-to-b from-white/10 to-[#050505] border border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.08)] scale-105 z-10 overflow-hidden">
                {/* Internal Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-amber-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] opacity-50"></div>
                
                {/* Top Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(255,255,255,0.3)] z-20 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Core Engine
                </div>

                <div className="relative z-10">
                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-8 text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] mx-auto group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]">
                        <svg className="w-8 h-8 animate-pulse-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-serif italic text-white mb-3 text-shadow-glow">Lucy Engine</h3>
                        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-5"></div>
                        <p className="text-sm text-white/80 leading-relaxed mb-6">
                            Proprietary AI vetting models clean, structure, and verify data accuracy in milliseconds before it reaches your model.
                        </p>
                    </div>
                    <ul className="text-xs text-white/60 space-y-2 font-mono border-t border-white/10 pt-4">
                        <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Multi-step Verification</li>
                        <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Anomaly Detection</li>
                        <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Contextual Tagging</li>
                    </ul>
                </div>
            </div>

             {/* Stage 3: Integration (Green/Emerald Palette) */}
            <div className="flex-1 glass-card p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-500 border border-white/5 hover:border-emerald-400/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Badge */}
                <div className="absolute -top-4 left-8 bg-[#0a0a0a] border border-white/10 group-hover:border-emerald-500/30 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-white/40 group-hover:text-emerald-400 transition-colors z-10">
                    STAGE 03
                </div>
                
                {/* Icon */}
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-bl from-white/10 to-transparent border border-white/5 flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] relative z-10">
                    <svg className="w-6 h-6 opacity-70 group-hover:opacity-100 group-hover:text-emerald-300 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                </div>
                
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-emerald-300 transition-colors relative z-10">Integration</h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent mb-4 group-hover:from-emerald-500/50 transition-colors"></div>
                <p className="text-sm text-white/60 leading-relaxed mb-4 relative z-10">
                    Enterprise-grade outputs delivered directly to your RAG architecture, Vector DBs, or internal dashboards.
                </p>
                 <ul className="text-xs text-white/40 space-y-2 font-mono relative z-10">
                    <li className="flex items-center gap-2 group-hover:text-emerald-200/50 transition-colors"><span className="w-1 h-1 bg-white/40 group-hover:bg-emerald-400 rounded-full"></span> REST API / WebSocket</li>
                    <li className="flex items-center gap-2 group-hover:text-emerald-200/50 transition-colors"><span className="w-1 h-1 bg-white/40 group-hover:bg-emerald-400 rounded-full"></span> Vector Embeddings</li>
                    <li className="flex items-center gap-2 group-hover:text-emerald-200/50 transition-colors"><span className="w-1 h-1 bg-white/40 group-hover:bg-emerald-400 rounded-full"></span> JSON / Parquet</li>
                </ul>
            </div>
        </div>
        
        {/* Interactive Demo Component */}
        <InteractivePipeline />

        <div className="mt-16 text-center">
            <button className="text-white border-b border-white/30 pb-1 hover:border-white transition-colors text-sm uppercase tracking-widest">
                Ready to start building? View API Docs &rarr;
            </button>
        </div>
      </div>
      <style>{`
        @keyframes flow {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
        }
        .animate-flow {
            animation: flow 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes pulse-slow {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(0.95); }
        }
        .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
        }
        .text-shadow-glow {
            text-shadow: 0 0 20px rgba(255,255,255,0.3);
        }
      `}</style>
    </section>
  );
};

export default ProductStack;