import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const locationToAngles = (lat: number, long: number) => {
    return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180];
  };

  const focusRef = useRef([0, 0]);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.8,
      baseColor: [0.1, 0.2, 0.4],
      markerColor: [255/255, 236/255, 65/255],
      glowColor: [255/255, 236/255, 65/255],
      markers: [
        // Major global cities representing TOP 10 market reach
        { location: [40.7128, -74.006], size: 0.1 }, // New York
        { location: [51.5074, -0.1278], size: 0.08 }, // London
        { location: [35.6762, 139.6503], size: 0.08 }, // Tokyo
        { location: [48.8566, 2.3522], size: 0.07 }, // Paris
        { location: [52.52, 13.405], size: 0.06 }, // Berlin
        { location: [37.7749, -122.4194], size: 0.09 }, // San Francisco
        { location: [1.3521, 103.8198], size: 0.07 }, // Singapore
        { location: [22.3193, 114.1694], size: 0.07 }, // Hong Kong
        { location: [25.2048, 55.2708], size: 0.06 }, // Dubai
        { location: [-33.8688, 151.2093], size: 0.06 }, // Sydney
        { location: [28.6139, 77.209], size: 0.08 }, // New Delhi
        { location: [55.7558, 37.6176], size: 0.06 }, // Moscow
        { location: [39.9042, 116.4074], size: 0.08 }, // Beijing
        { location: [-23.5505, -46.6333], size: 0.07 }, // São Paulo
        { location: [19.4326, -99.1332], size: 0.06 }, // Mexico City
      ],
      onRender: (state) => {
        // Auto-rotate
        phi += 0.005;
        state.phi = phi + focusRef.current[0];
        state.theta = focusRef.current[1];
        
        // Update canvas size
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => canvasRef.current && (canvasRef.current.style.opacity = "1"));
    return () => globe.destroy();
  }, []);

  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[24rem] lg:h-[24rem] xl:w-[28rem] xl:h-[28rem]">
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            cursor: "grab",
            contain: "layout style size",
            opacity: 0,
            transition: "opacity 1s ease",
            filter: "drop-shadow(0 0 40px rgba(255, 236, 65, 0.3))",
          }}
          onPointerDown={(e) => {
            if (canvasRef.current) {
              canvasRef.current.style.cursor = "grabbing";
            }
          }}
          onPointerUp={(e) => {
            if (canvasRef.current) {
              canvasRef.current.style.cursor = "grab";
            }
          }}
        />
        
        {/* Floating indicators around the globe */}
        <div className="absolute -top-6 -right-6 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center animate-bounce-slow shadow-xl">
          <span className="text-white font-bold text-sm">✓</span>
        </div>
        <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center animate-float shadow-xl">
          <span className="text-white font-bold text-sm">$</span>
        </div>
        <div className="absolute top-12 -right-12 w-9 h-9 bg-purple-400 rounded-full flex items-center justify-center animate-float-delayed shadow-xl">
          <span className="text-white font-bold text-sm">★</span>
        </div>
        <div className="absolute -top-8 left-12 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center animate-pulse shadow-xl">
          <span className="text-white font-bold text-sm">📊</span>
        </div>
        <div className="absolute bottom-16 -right-8 w-7 h-7 bg-accent-yellow rounded-full flex items-center justify-center animate-float shadow-xl">
          <span className="text-gray-900 font-bold text-xs">🌐</span>
        </div>
      </div>
    </div>
  );
}