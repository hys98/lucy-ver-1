import React, { useEffect, useRef } from 'react';

const UnicornBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Determine if the script is loaded and available
    const initUnicorn = () => {
      if (window.UnicornStudio) {
        // Force initialization if the library is loaded
        window.UnicornStudio.init();
      }
    };

    // Attempt init immediately
    initUnicorn();

    // Also set up a small timeout in case the script is racing with React hydration
    const timer = setTimeout(initUnicorn, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
       {/* 
         The specific data-us-project ID provided by the user.
         We set width/height to 100% to fill the fixed container.
       */}
      <div 
        data-us-project="rXse7Iy95hGLm3dEuUUy" 
        style={{ width: '100%', height: '100%' }}
      ></div>
      
      {/* Overlay to ensure text readability if the background is too bright */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
    </div>
  );
};

export default UnicornBackground;