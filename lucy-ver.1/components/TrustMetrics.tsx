import React from 'react';

const TrustMetrics: React.FC = () => {
  return (
    <section className="py-24 bg-white/[0.02] border-t border-b border-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white text-center">
                Performance That Meets <br/> <span className="italic opacity-70">Institutional Demands.</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
            <div className="bg-[#050505] p-12 text-center group hover:bg-white/5 transition-colors duration-500">
                <div className="text-5xl md:text-6xl font-light text-white mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500 origin-center">
                    &gt;99.9<span className="text-2xl opacity-50">%</span>
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-white/60 mb-2">Vetted Data Quality</p>
                <p className="text-xs text-white/40 font-light">Guarantee against hallucinations</p>
            </div>
            
            <div className="bg-[#050505] p-12 text-center group hover:bg-white/5 transition-colors duration-500">
                <div className="text-5xl md:text-6xl font-light text-white mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500 origin-center">
                    &lt;50<span className="text-2xl opacity-50">ms</span>
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-white/60 mb-2">Real-Time Latency</p>
                <p className="text-xs text-white/40 font-light">Global edge network delivery</p>
            </div>

            <div className="bg-[#050505] p-12 text-center group hover:bg-white/5 transition-colors duration-500">
                <div className="text-5xl md:text-6xl font-light text-white mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500 origin-center">
                    99.99<span className="text-2xl opacity-50">%</span>
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-white/60 mb-2">API Uptime</p>
                <p className="text-xs text-white/40 font-light">SLA-backed reliability</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;