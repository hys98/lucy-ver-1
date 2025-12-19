import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 px-6 text-center relative z-10 bg-[#050505]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Build a <br/> Production-Grade RAG?
        </h2>
        
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Join elite engineering teams scaling their financial AI on Lucy. Stop wrestling with HTML parsers and start shipping intelligence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-5 bg-indigo-600 text-white text-base font-bold rounded shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:bg-indigo-500 hover:scale-105 transition-all duration-300">
                Talk to a Solutions Engineer
            </button>
        </div>
        
        <p className="mt-8 text-slate-600 text-sm font-mono">
            SOC 2 Type II Compliant • 99.9% Uptime SLA
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;