import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Logos */}
        <div className="mb-20">
            <p className="text-center text-slate-500 text-xs font-semibold uppercase tracking-[0.2em] mb-10">
            Trusted by Engineering Teams At
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                {/* Simulated Logos */}
                <div className="text-xl font-bold font-serif text-white tracking-widest">GOLDMAN</div>
                <div className="text-xl font-bold text-white tracking-tighter">BLACKROCK</div>
                <div className="text-xl font-mono text-white">CITADEL</div>
                <div className="text-xl font-serif italic text-white">Bloomberg</div>
                <div className="text-xl font-bold tracking-tight text-white">TWO SIGMA</div>
            </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0F0F11] border border-white/5 p-8 rounded-lg text-center hover:border-indigo-500/30 transition-colors group">
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">99.9%</div>
                <div className="text-sm font-mono text-slate-500 uppercase tracking-wider">Schema Accuracy</div>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 p-8 rounded-lg text-center hover:border-indigo-500/30 transition-colors group">
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">SOC2</div>
                <div className="text-sm font-mono text-slate-500 uppercase tracking-wider">Type II Compliant</div>
            </div>
            <div className="bg-[#0F0F11] border border-white/5 p-8 rounded-lg text-center hover:border-indigo-500/30 transition-colors group">
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">200M+</div>
                <div className="text-sm font-mono text-slate-500 uppercase tracking-wider">Filings Processed</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;