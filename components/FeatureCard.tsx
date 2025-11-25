import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="group relative p-8 bg-dark-700 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-white/10 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1 transition-all duration-500">
      
      {/* Inner Top Highlight - Glows on Hover */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-dark-800 border border-dark-600 text-white transition-colors shadow-inner">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm font-medium">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;