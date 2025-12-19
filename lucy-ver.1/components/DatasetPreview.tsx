import React, { useState } from 'react';

const DatasetPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'content' | 'metadata'>('content');

  const contentJson = `{
  "document_id": "doc_8829a",
  "cik": "0001318605",
  "period": "2023-12-31",
  "sections": [
    {
      "item": "7",
      "title": "Management's Discussion",
      "content": "Net sales increased by 15%...",
      "tables": [
        {
          "id": "table_01",
          "data": {
             "row_1": { "label": "Revenue", "value": "15000" },
             "row_2": { "label": "Cost", "value": "8000" }
          }
        }
      ]
    }
  ],
  "xbrl_facts": [
    {
       "tag": "us-gaap:RevenueFromContract",
       "value": 15000000000,
       "unit": "USD",
       "decimals": -6
    }
  ]
}`;

  const metadataJson = `{
  "processing_meta": {
    "engine_version": "v2.4.1",
    "ingested_at": "2024-03-15T10:00:00Z",
    "verification_score": 0.998,
    "anomalies_flagged": 0
  },
  "enrichment": {
    "sentiment": "bullish",
    "topics": ["EV Production", "Supply Chain"],
    "related_filings": ["doc_7712b", "doc_991c"]
  }
}`;

  return (
    <section id="preview" className="py-24 px-6 bg-[#0F0F11]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Inspect the Schema. <br/> Trust the Data.</h2>
            <p className="text-slate-400 text-lg mb-8">
                Don't take our word for it. Explore the actual JSON structure output by the Lucy engine. Fully typed, interconnected, and ready for your Vector DB.
            </p>
            
            <ul className="space-y-4 text-slate-300 font-mono text-sm mb-8">
                <li className="flex items-center gap-3">
                    <span className="text-green-400">✓</span> Preserved Table Structure
                </li>
                <li className="flex items-center gap-3">
                    <span className="text-green-400">✓</span> GAAP/IFRS Tag Mapping
                </li>
                 <li className="flex items-center gap-3">
                    <span className="text-green-400">✓</span> Explicit Unit Standardization
                </li>
            </ul>

            <a href="#" className="text-indigo-400 hover:text-white border-b border-indigo-400/50 hover:border-white transition-colors pb-1 inline-block">
                Download Full Sample Dataset &rarr;
            </a>
        </div>

        <div className="flex-1 w-full">
            <div className="rounded-xl overflow-hidden bg-[#0A0A0B] border border-white/10 shadow-2xl">
                {/* Editor Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#1A1A1E] border-b border-white/5">
                    <div className="flex gap-2">
                        <button 
                            onClick={() => setActiveTab('content')}
                            className={`px-3 py-1 rounded text-xs font-mono transition-colors ${activeTab === 'content' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-white'}`}
                        >
                            contents.json
                        </button>
                        <button 
                            onClick={() => setActiveTab('metadata')}
                             className={`px-3 py-1 rounded text-xs font-mono transition-colors ${activeTab === 'metadata' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-white'}`}
                        >
                            metadata.json
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-green-500"></span>
                         <span className="text-[10px] text-slate-500 uppercase">Live</span>
                    </div>
                </div>

                {/* Editor Body */}
                <div className="p-6 overflow-x-auto">
                    <pre className="font-mono text-xs leading-relaxed text-slate-300">
                        {activeTab === 'content' ? contentJson : metadataJson}
                    </pre>
                </div>
                
                {/* Editor Footer */}
                <div className="px-4 py-2 bg-[#1A1A1E] border-t border-white/5 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                    <span>UTF-8</span>
                    <span>JSON</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DatasetPreview;