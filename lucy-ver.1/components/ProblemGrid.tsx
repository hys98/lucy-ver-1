import React from 'react';

const ProblemGrid: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Your Current Pipeline Hallucinates.</h2>
            <p className="text-slate-400 text-lg">Standard HTML parsers and vectorizers destroy the semantic structure of financial documents.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Table Extraction Hell */}
            <div className="bg-[#151518] border border-[#2D2D30] rounded-xl p-8 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all group overflow-hidden relative">
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 text-red-500">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Table Extraction Hell</h3>
                    <p className="text-slate-400 leading-relaxed">
                        LLMs struggle to reconstruct row/column relationships from flattened PDF text. Merged cells and complex headers turn into gibberish.
                    </p>
                </div>
                {/* Abstract visual background */}
                <div className="absolute -bottom-10 -right-10 opacity-10 grayscale group-hover:grayscale-0 transition-all duration-500">
                     <div className="w-48 h-32 border-2 border-dashed border-red-500 rounded transform rotate-12"></div>
                </div>
            </div>

            {/* Card 2: Context-Severing Chunking */}
            <div className="bg-[#151518] border border-[#2D2D30] rounded-xl p-8 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all group overflow-hidden relative">
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 text-orange-500">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Context-Severing Chunking</h3>
                    <p className="text-slate-400 leading-relaxed">
                        Blind 512-token chunks often slice right through the middle of a "Risk Factors" section, separating the 'Risk' from the 'Mitigation'.
                    </p>
                </div>
            </div>

            {/* Card 3: Temporal Ambiguity */}
            <div className="bg-[#151518] border border-[#2D2D30] rounded-xl p-8 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all group overflow-hidden relative">
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-500">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Temporal Ambiguity</h3>
                    <p className="text-slate-400 leading-relaxed">
                        "This year" means something different in a 2021 10-K vs a 2023 10-K. Standard retrieval mixes up timeframes, leading to disastrous analysis.
                    </p>
                </div>
            </div>

            {/* Card 4: Incorporated by Reference */}
            <div className="bg-[#151518] border border-[#2D2D30] rounded-xl p-8 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all group overflow-hidden relative">
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-blue-500">
                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Incorporated by Reference</h3>
                    <p className="text-slate-400 leading-relaxed">
                        Critical data often lives in external exhibits or previous filings. Standard scrapers miss these links completely.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemGrid;