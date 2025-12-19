import React from 'react';
import UnicornBackground from './components/UnicornBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProblemGrid from './components/ProblemGrid';
import SolutionPillars from './components/SolutionPillars';
import DatasetPreview from './components/DatasetPreview';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative selection:bg-indigo-500/30 selection:text-white">
      {/* Background Layer */}
      <UnicornBackground />
      <div className="fixed inset-0 bg-space/90 -z-10 pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-0">
        <Navbar />
        <main>
          <Hero />
          <SocialProof />
          <ProblemGrid />
          <SolutionPillars />
          <DatasetPreview />
          <Pricing />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;