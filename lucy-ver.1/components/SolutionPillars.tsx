import React from 'react';

const SolutionPillars: React.FC = () => {
  return (
    <section id="solution" className="py-24 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-indigo-900/10 -skew-y-6 pointer-events-none transform -translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto space-y-24 relative z-10">
        <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white">The Lucy Architecture</h2>
        </div>

        {/* Pillar 1 */}
        <div className="flex flex-col md:flex-row gap-8 items-start group">
            <div className="w-16 h-16 rounded-xl bg-[#1A1A1E] border border-white/10 flex-shrink-0 flex items-center justify-center text-white font-mono text-2xl font-bold shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-indigo-500 transition-colors">
                01
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">Deterministic Item-Level Segmentation</h3>
                <p className="text-slate-400 leading-relaxed text-lg border-l-2 border-white/10 pl-6 group-hover:border-indigo-500 transition-colors">
                    We segment by SEC Items (Item 1A, 7, 8), not by token count. This ensures that a "Management Discussion" query retrieves the entire logical section, preserving semantic integrity.
                </p>
            </div>
        </div>

        {/* Pillar 2 */}
        <div className="flex flex-col md:flex-row gap-8 items-start group">
             <div className="w-16 h-16 rounded-xl bg-[#1A1A1E] border border-white/10 flex-shrink-0 flex items-center justify-center text-white font-mono text-2xl font-bold shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-indigo-500 transition-colors">
                02
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">XBRL-Linked Numeric Grounding</h3>
                <p className="text-slate-400 leading-relaxed text-lg border-l-2 border-white/10 pl-6 group-hover:border-indigo-500 transition-colors">
                    Every figure is tied to its original GAAP tag. We don't just give you "10.5"; we give you <code className="bg-black px-1 py-0.5 rounded text-indigo-300 text-sm">us-gaap:NetIncomeLoss</code> linked to the exact source row, enabling 100% traceability.
                </p>
            </div>
        </div>

        {/* Pillar 3 */}
        <div className="flex flex-col md:flex-row gap-8 items-start group">
             <div className="w-16 h-16 rounded-xl bg-[#1A1A1E] border border-white/10 flex-shrink-0 flex items-center justify-center text-white font-mono text-2xl font-bold shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-indigo-500 transition-colors">
                03
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">Universal Connector Framework</h3>
                <p className="text-slate-400 leading-relaxed text-lg border-l-2 border-white/10 pl-6 group-hover:border-indigo-500 transition-colors">
                    From legacy SOAP APIs to modern WebSocket streams. Lucy handles the ETL dirty work across 500+ unconventional data sources, normalizing everything into a standardized schema.
                </p>
            </div>
        </div>
        
        {/* Pillar 4 */}
        <div className="flex flex-col md:flex-row gap-8 items-start group">
             <div className="w-16 h-16 rounded-xl bg-[#1A1A1E] border border-white/10 flex-shrink-0 flex items-center justify-center text-white font-mono text-2xl font-bold shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-indigo-500 transition-colors">
                04
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">Metadata Enrichment</h3>
                <p className="text-slate-400 leading-relaxed text-lg border-l-2 border-white/10 pl-6 group-hover:border-indigo-500 transition-colors">
                    Automated entity resolution (CIK matching) and temporal tagging ensure your vector database knows exactly <i>who</i> and <i>when</i> the data refers to, eliminating hallucination at the source.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionPillars;