import React from 'react';
import { ServiceItem } from '../types';

const features: ServiceItem[] = [
  {
    title: "Fluid Design",
    description: "Interfaces that adapt and flow like liquid, creating a seamless connection between user and content.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
    )
  },
  {
    title: "Ethereal Motion",
    description: "Animations that breathe life into static pixels, governed by the laws of digital physics.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    )
  },
  {
    title: "Crystal Clarity",
    description: "Data visualization and typography rendered with absolute precision and high-fidelity output.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
    )
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h3 className="text-white/50 text-xs uppercase tracking-widest mb-4">Our Craft</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Digital Alchemy</h2>
          </div>
          <p className="text-white/60 max-w-sm mt-6 md:mt-0 font-light text-sm">
            Blending cutting-edge technology with timeless design principles to create masterpieces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 font-light leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;