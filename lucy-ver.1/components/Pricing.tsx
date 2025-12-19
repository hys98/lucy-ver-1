import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 bg-space">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Enterprise-Ready Scalability.</h2>
            <p className="text-slate-400">Selective Ingestion: Pay only for the tickers and filings you actually index.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-[#0F0F11] border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-all flex flex-col">
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                    <div className="text-4xl font-bold text-white mb-2">$0 <span className="text-lg text-slate-500 font-normal">/ mo</span></div>
                    <p className="text-slate-500 text-sm">Sandbox access to validate the schema.</p>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-center gap-2 text-sm text-slate-300"><span className="text-indigo-500">✓</span> 100 Filings / Month</li>
                    <li className="flex items-center gap-2 text-sm text-slate-300"><span className="text-indigo-500">✓</span> Standard Delay (15min)</li>
                    <li className="flex items-center gap-2 text-sm text-slate-300"><span className="text-indigo-500">✓</span> Community Support</li>
                </ul>
                <button className="w-full py-3 border border-white/20 text-white rounded hover:bg-white/5 transition-colors font-bold text-sm">Start Building</button>
            </div>

            {/* Pro */}
            <div className="bg-[#151518] border border-indigo-500/50 rounded-2xl p-8 relative flex flex-col shadow-[0_0_40px_rgba(99,102,241,0.1)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-widest">
                    Most Popular
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                    <div className="text-4xl font-bold text-white mb-2">$499 <span className="text-lg text-slate-500 font-normal">/ mo</span></div>
                    <p className="text-slate-500 text-sm">For scaling RAG applications.</p>
                </div>
                 <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-center gap-2 text-sm text-white"><span className="text-green-400">✓</span> 50,000 Filings / Month</li>
                    <li className="flex items-center gap-2 text-sm text-white"><span className="text-green-400">✓</span> Real-Time Webhooks</li>
                    <li className="flex items-center gap-2 text-sm text-white"><span className="text-green-400">✓</span> XBRL Tagging Included</li>
                </ul>
                <button className="w-full py-3 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition-colors font-bold text-sm">Get Started</button>
            </div>

            {/* Enterprise */}
            <div className="bg-[#0F0F11] border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-all flex flex-col">
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                    <div className="text-4xl font-bold text-white mb-2">Custom</div>
                    <p className="text-slate-500 text-sm">Full market coverage & SLA.</p>
                </div>
                 <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-center gap-2 text-sm text-slate-300"><span className="text-indigo-500">✓</span> Unlimited Ingestion</li>
                    <li className="flex items-center gap-2 text-sm text-slate-300"><span className="text-indigo-500">✓</span> Private Cloud Deployment</li>
                    <li className="flex items-center gap-2 text-sm text-slate-300"><span className="text-indigo-500">✓</span> Dedicated Solutions Eng.</li>
                </ul>
                <button className="w-full py-3 border border-white/20 text-white rounded hover:bg-white/5 transition-colors font-bold text-sm">Contact Sales</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;