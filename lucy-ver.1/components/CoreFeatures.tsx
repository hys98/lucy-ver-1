import React from 'react';

const CoreFeatures: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
                The Engine Behind <br/>
                <span className="italic text-white/50">Precision.</span>
            </h2>
            
            <div className="space-y-12">
                <div className="group cursor-pointer">
                    <h3 className="text-xl font-medium text-white mb-2 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white transition-colors"></span>
                        Automated Vetting & Verification
                    </h3>
                    <p className="text-white/60 pl-5 text-sm leading-relaxed border-l border-white/10 group-hover:border-white/40 transition-colors py-2">
                        Every data point is cross-referenced against multiple sources. Our consensus algorithms discard outliers and flag anomalies before they enter your pipeline.
                    </p>
                </div>

                 <div className="group cursor-pointer">
                    <h3 className="text-xl font-medium text-white mb-2 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white transition-colors"></span>
                        Context-Aware Tagging
                    </h3>
                    <p className="text-white/60 pl-5 text-sm leading-relaxed border-l border-white/10 group-hover:border-white/40 transition-colors py-2">
                        Financial data isn't just numbers. Lucy enriches raw feeds with metadata—market sentiment, entity mapping, and event correlation—optimized for LLM vectorization.
                    </p>
                </div>

                 <div className="group cursor-pointer">
                    <h3 className="text-xl font-medium text-white mb-2 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white transition-colors"></span>
                        Universal Connector Framework
                    </h3>
                    <p className="text-white/60 pl-5 text-sm leading-relaxed border-l border-white/10 group-hover:border-white/40 transition-colors py-2">
                         From legacy SOAP APIs to modern GraphQL streams. We handle the dirty work of diverse integration so you get a standardized, clean JSON output.
                    </p>
                </div>
            </div>
        </div>

        <div className="relative">
             <div className="glass-card rounded-xl p-1 overflow-hidden">
                <div className="bg-[#050505]/80 rounded-lg p-6 font-mono text-xs text-blue-300/90 leading-relaxed overflow-x-auto">
<pre>{`{
  "entity": "TSLA",
  "timestamp": "2024-03-15T14:32:01.052Z",
  "data_quality_score": 0.998,
  "sources_verified": 12,
  "payload": {
    "price": 162.50,
    "volume_surge": true,
    "sentiment": "bullish",
    "relevant_news": [
      {
        "id": "n-29384",
        "headline": "Production ramp exceeds targets...",
        "impact_score": 8.5
      }
    ]
  },
  "vector_embedding": [0.12, -0.54, 0.88, ...]
}`}</pre>
                </div>
             </div>
             <div className="absolute -bottom-6 -left-6 bg-white text-black p-4 rounded-lg shadow-xl hidden md:block">
                 <div className="text-xs font-bold uppercase tracking-widest mb-1">Live Feed</div>
                 <div className="text-2xl font-serif">Processing...</div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;