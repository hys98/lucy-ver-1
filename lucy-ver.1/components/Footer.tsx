import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative z-10 py-16 px-6 border-t border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-4">
                 <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        <span className="text-black font-serif font-bold italic text-xs">L</span>
                    </div>
                    <span className="text-lg font-bold tracking-wider text-white">LUCY KNOWS</span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">
                    The enterprise standard for high-fidelity financial data infrastructure.
                </p>
            </div>
            
            <div>
                <h4 className="text-white font-medium mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-white/60">
                    <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                </ul>
            </div>

             <div>
                <h4 className="text-white font-medium mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-white/60">
                    <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                </ul>
            </div>

             <div>
                <h4 className="text-white font-medium mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-white/60">
                    <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
            </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>&copy; 2024 Lucy Knows Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">SLA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;