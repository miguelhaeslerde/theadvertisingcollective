import { useEffect, useRef } from 'react';

export default function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 300;
    const height = 300;
    canvas.width = width;
    canvas.height = height;

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 120;

    // Generate dots in a sphere pattern
    const dots: Array<{ x: number; y: number; z: number; visible: boolean; alpha: number }> = [];
    const dotCount = 1200;

    for (let i = 0; i < dotCount; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();
      
      const x = Math.sin(theta) * Math.cos(phi);
      const y = Math.sin(theta) * Math.sin(phi);
      const z = Math.cos(theta);

      dots.push({ x, y, z, visible: true, alpha: 0.6 });
    }

    // Connection lines data
    const connections: Array<{ start: number; end: number; progress: number }> = [];
    for (let i = 0; i < 8; i++) {
      connections.push({
        start: Math.floor(Math.random() * dotCount),
        end: Math.floor(Math.random() * dotCount),
        progress: Math.random()
      });
    }

    let animationId: number;

    const animate = () => {
      rotationRef.current += 0.01;
      
      ctx.fillStyle = 'transparent';
      ctx.clearRect(0, 0, width, height);

      // Create gradient background for globe
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius + 20);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
      gradient.addColorStop(0.7, 'rgba(37, 99, 235, 0.3)');
      gradient.addColorStop(1, 'rgba(29, 78, 216, 0.5)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 20, 0, 2 * Math.PI);
      ctx.fill();

      // Draw dots
      dots.forEach((dot, index) => {
        const rotatedX = dot.x * Math.cos(rotationRef.current) - dot.z * Math.sin(rotationRef.current);
        const rotatedZ = dot.x * Math.sin(rotationRef.current) + dot.z * Math.cos(rotationRef.current);
        
        // Only show dots on the front hemisphere
        if (rotatedZ > -0.3) {
          const projectedX = centerX + rotatedX * radius;
          const projectedY = centerY + dot.y * radius;
          
          // Calculate distance from center for depth effect
          const distance = Math.sqrt((rotatedX) ** 2 + (dot.y) ** 2 + (rotatedZ + 0.3) ** 2);
          const alpha = Math.max(0.1, Math.min(1, (2 - distance) / 2));
          
          // Highlight some dots as active points
          const isActive = index % 47 === 0; // Every 47th dot is active
          const dotSize = isActive ? 3 : 1.5;
          const color = isActive ? '#FFEC41' : '#60A5FA';
          
          ctx.fillStyle = `rgba(${isActive ? '255, 236, 65' : '96, 165, 250'}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(projectedX, projectedY, dotSize, 0, 2 * Math.PI);
          ctx.fill();

          // Add glow for active dots
          if (isActive) {
            ctx.shadowColor = '#FFEC41';
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(projectedX, projectedY, dotSize + 1, 0, 2 * Math.PI);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      });

      // Draw connection arcs
      connections.forEach((conn, i) => {
        const startDot = dots[conn.start];
        const endDot = dots[conn.end];

        const startRotatedX = startDot.x * Math.cos(rotationRef.current) - startDot.z * Math.sin(rotationRef.current);
        const startRotatedZ = startDot.x * Math.sin(rotationRef.current) + startDot.z * Math.cos(rotationRef.current);
        
        const endRotatedX = endDot.x * Math.cos(rotationRef.current) - endDot.z * Math.sin(rotationRef.current);
        const endRotatedZ = endDot.x * Math.sin(rotationRef.current) + endDot.z * Math.cos(rotationRef.current);

        if (startRotatedZ > -0.3 && endRotatedZ > -0.3) {
          const startX = centerX + startRotatedX * radius;
          const startY = centerY + startDot.y * radius;
          const endX = centerX + endRotatedX * radius;
          const endY = centerY + endDot.y * radius;

          // Animate connection progress
          conn.progress += 0.02;
          if (conn.progress > 1) conn.progress = 0;

          const currentX = startX + (endX - startX) * conn.progress;
          const currentY = startY + (endY - startY) * conn.progress;

          // Draw connection line
          ctx.strokeStyle = `rgba(255, 236, 65, ${0.3 + 0.3 * Math.sin(conn.progress * Math.PI)})`;
          ctx.lineWidth = 1;
          ctx.setLineDash([5, 5]);
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(currentX, currentY);
          ctx.stroke();
          ctx.setLineDash([]);

          // Draw moving dot
          ctx.fillStyle = '#FFEC41';
          ctx.beginPath();
          ctx.arc(currentX, currentY, 2, 0, 2 * Math.PI);
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative">
        <canvas
          ref={canvasRef}
          className="rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(29, 78, 216, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%)',
            filter: 'drop-shadow(0 0 30px rgba(255, 236, 65, 0.3))'
          }}
        />
        
        {/* Floating indicators around the globe */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-bounce-slow shadow-lg">
          <span className="text-white font-bold text-xs">✓</span>
        </div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center animate-float shadow-lg">
          <span className="text-white font-bold text-xs">$</span>
        </div>
        <div className="absolute top-8 -right-8 w-7 h-7 bg-purple-400 rounded-full flex items-center justify-center animate-float-delayed shadow-lg">
          <span className="text-white font-bold text-xs">★</span>
        </div>
        <div className="absolute -top-6 left-8 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center animate-pulse shadow-lg">
          <span className="text-white font-bold text-xs">📊</span>
        </div>
      </div>
    </div>
  );
}