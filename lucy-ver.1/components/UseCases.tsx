import React from 'react';
import { UseCaseItem } from '../types';

const useCases: UseCaseItem[] = [
  {
    role: "AI Engineers",
    title: "RAG Accuracy Improvement",
    challenge: "LLM hallucinations due to stale financial data.",
    solution: "Lucy's real-time verification engine feeds context-aware data.",
    result: "40% reduction in model error rates."
  },
  {
    role: "Quant Researchers",
    title: "Automated Alpha Generation",
    challenge: "Slow manual processing of unstructured alternative data.",
    solution: "Structured API feeds from 500+ unconventional sources.",
    result: "10x faster hypothesis testing cycle."
  },
  {
    role: "Data Platforms",
    title: "Custom Data Platform Scaling",
    challenge: "High overhead in maintaining diverse data connectors.",
    solution: "Single unified API endpoint for all financial data types.",
    result: "Zero maintenance overhead for engineering teams."
  }
];

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
            <h2 className="text-4xl font-serif text-white mb-4">Real-World Impact</h2>
            <p className="text-white/60">Use cases optimized for your team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((item, idx) => (
                <div key={idx} className="glass-card p-8 rounded-xl hover:bg-white/5 transition-colors duration-300 flex flex-col h-full">
                    <div className="text-xs font-mono text-green-400 mb-4 bg-green-400/10 inline-block px-2 py-1 rounded w-fit">
                        {item.role}
                    </div>
                    <h3 className="text-xl font-medium text-white mb-6">{item.title}</h3>
                    
                    <div className="mt-auto space-y-4">
                        <div>
                            <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Challenge</p>
                            <p className="text-sm text-white/70">{item.challenge}</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Solution</p>
                            <p className="text-sm text-white/70">{item.solution}</p>
                        </div>
                        <div className="pt-4 border-t border-white/10">
                             <p className="text-lg font-serif italic text-white">{item.result}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;