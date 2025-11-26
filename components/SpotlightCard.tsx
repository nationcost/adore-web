import React, { useRef, useState, useEffect, useContext, createContext } from 'react';

// Context for global mouse tracking to enable proximity effects
export const MousePositionContext = createContext<{ x: number; y: number }>({ x: -9999, y: -9999 });

export const SpotlightProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseLeave = () => {
      setMousePos({ x: -9999, y: -9999 });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <MousePositionContext.Provider value={mousePos}>
      {children}
    </MousePositionContext.Provider>
  );
};

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  // Optional manual overrides for standalone pages like Bio
  mouseX?: number;
  mouseY?: number;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ 
  children, 
  className = "", 
  mouseX: propX, 
  mouseY: propY 
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -9999, y: -9999 });
  const [opacity, setOpacity] = useState(0);
  
  // Use context if props aren't provided (for MainLayout pages)
  const contextMousePos = useContext(MousePositionContext);
  const mouseX = propX ?? contextMousePos.x;
  const mouseY = propY ?? contextMousePos.y;

  useEffect(() => {
    if (!divRef.current) return;
    
    // If mouse is essentially "unset" or far off-screen, hide the effect
    if (mouseX === -9999 && mouseY === -9999) {
        setOpacity(0);
        return;
    }

    const rect = divRef.current.getBoundingClientRect();
    
    // Calculate position relative to the card
    const x = mouseX - rect.left;
    const y = mouseY - rect.top;
    
    setPosition({ x, y });
    setOpacity(1); 
  }, [mouseX, mouseY]);

  return (
    <div 
      ref={divRef}
      className={`relative overflow-hidden bg-white/[0.04] backdrop-blur-3xl backdrop-saturate-150 border border-white/5 shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] group ${className}`}
    >
      {/* Spotlight Border */}
      <div 
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-20 transition-opacity duration-200"
        style={{
            opacity,
            border: '1.5px solid rgba(255, 255, 255, 0.2)', 
            maskImage: `radial-gradient(250px circle at ${position.x}px ${position.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(250px circle at ${position.x}px ${position.y}px, black, transparent)`,
        }}
      />

      {/* Spotlight Background Glow */}
      <div 
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-200"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.02), transparent 40%)`
        }}
      />
      
      {/* Inner Highlight (Static top edge) */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70 z-10"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;