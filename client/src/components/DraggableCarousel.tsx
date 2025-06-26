import React, { useRef } from 'react';

interface DraggableCarouselProps {
  children: React.ReactNode;
  className?: string;
}

export function DraggableCarousel({ children, className = "" }: DraggableCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const startX = e.pageX - container.offsetLeft;
    const scrollLeft = container.scrollLeft;
    let isDragging = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      isDragging = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      container.style.cursor = 'grab';
    };

    const handleMouseMoveStart = (e: MouseEvent) => {
      isDragging = true;
      container.style.cursor = 'grabbing';
      handleMouseMove(e);
    };

    document.addEventListener('mousemove', handleMouseMoveStart);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      ref={containerRef}
      className={`flex cursor-grab select-none ${className}`}
      style={{
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch'
      }}
      onMouseDown={handleMouseDown}
      onDragStart={(e) => e.preventDefault()}
    >

      {children}
    </div>
  );
}