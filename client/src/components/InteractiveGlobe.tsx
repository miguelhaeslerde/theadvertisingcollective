import { useEffect, useRef } from 'react';

export default function InteractiveGlobe() {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add subtle rotation and animation effects
    const globe = globeRef.current;
    if (!globe) return;

    let rotation = 0;
    const animate = () => {
      rotation += 0.5;
      globe.style.transform = `rotateY(${rotation}deg) rotateX(-15deg)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative w-48 h-48 perspective-[1000px]">
        {/* Globe Container */}
        <div
          ref={globeRef}
          className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-green-500 to-blue-700 shadow-2xl"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
              linear-gradient(135deg, #1e40af 0%, #059669 30%, #0369a1 70%, #1e3a8a 100%)
            `,
            boxShadow: `
              0 0 50px rgba(255, 236, 65, 0.3),
              inset -20px -20px 40px rgba(0, 0, 0, 0.3),
              inset 20px 20px 40px rgba(255, 255, 255, 0.1)
            `
          }}
        >
          {/* Continents */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {/* North America */}
            <div className="absolute top-8 left-12 w-8 h-12 bg-green-700 opacity-80 rounded-bl-full transform rotate-12"></div>
            
            {/* Europe */}
            <div className="absolute top-6 left-20 w-6 h-8 bg-green-700 opacity-80 rounded-full transform rotate-45"></div>
            
            {/* Asia */}
            <div className="absolute top-4 right-8 w-12 h-16 bg-green-700 opacity-80 rounded-tl-full transform -rotate-12"></div>
            
            {/* Africa */}
            <div className="absolute top-16 left-16 w-6 h-10 bg-green-700 opacity-80 rounded-full transform rotate-12"></div>
            
            {/* South America */}
            <div className="absolute bottom-12 left-14 w-4 h-12 bg-green-700 opacity-80 rounded-full transform rotate-24"></div>
            
            {/* Australia */}
            <div className="absolute bottom-8 right-12 w-6 h-4 bg-green-700 opacity-80 rounded-full transform -rotate-12"></div>
          </div>

          {/* Atmosphere Glow */}
          <div className="absolute -inset-2 rounded-full bg-accent-yellow opacity-20 blur-md animate-pulse"></div>
          
          {/* Connection Lines/Arcs */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 192 192">
            {/* Animated connection arcs */}
            <path
              d="M 48 96 Q 96 48 144 96"
              stroke="#FFEC41"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
              className="animate-pulse"
              strokeDasharray="4 4"
            />
            <path
              d="M 96 48 Q 144 96 96 144"
              stroke="#FFEC41"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
              className="animate-pulse"
              strokeDasharray="6 6"
              style={{ animationDelay: '1s' }}
            />
            <path
              d="M 144 96 Q 96 144 48 96"
              stroke="#FFEC41"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
              className="animate-pulse"
              strokeDasharray="8 8"
              style={{ animationDelay: '2s' }}
            />
          </svg>

          {/* Orbiting Satellites */}
          <div className="absolute inset-0">
            <div className="absolute top-4 left-1/2 w-2 h-2 bg-accent-yellow rounded-full animate-orbit-fast shadow-lg"></div>
            <div className="absolute top-1/2 right-4 w-2 h-2 bg-accent-yellow rounded-full animate-orbit-medium shadow-lg"></div>
            <div className="absolute bottom-8 left-8 w-2 h-2 bg-accent-yellow rounded-full animate-orbit-slow shadow-lg"></div>
          </div>

          {/* Data Points */}
          <div className="absolute inset-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-accent-yellow rounded-full animate-ping"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating Success Indicators */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-bounce-slow shadow-lg">
          <span className="text-white font-bold text-xs">✓</span>
        </div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center animate-float shadow-lg">
          <span className="text-white font-bold text-xs">$</span>
        </div>
        <div className="absolute top-8 -right-8 w-7 h-7 bg-purple-400 rounded-full flex items-center justify-center animate-float-delayed shadow-lg">
          <span className="text-white font-bold text-xs">★</span>
        </div>
      </div>
    </div>
  );
}