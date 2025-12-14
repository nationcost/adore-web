import React, { createContext } from 'react';

// Keep Context to avoid breaking imports in other files, but it does nothing now.
export const MousePositionContext = createContext<{ x: number; y: number }>({ x: 0, y: 0 });

export const SpotlightProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  // Legacy props kept to prevent build errors
  mouseX?: number;
  mouseY?: number;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = ""
}) => {
  return (
    <div
      className={`relative overflow-hidden bg-[#121826] border border-white/10 rounded-xl hover:border-white/20 transition-colors duration-200 ${className}`}
    >
      {/* Remove all fancy effects, just keep content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;