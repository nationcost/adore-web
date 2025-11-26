import React from 'react';
import { LucideIcon } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <SpotlightCard className="p-8 rounded-[2.5rem] h-full flex flex-col">
      <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white transition-colors shadow-inner group-hover:border-white/20 duration-300">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm font-medium">{description}</p>
    </SpotlightCard>
  );
};

export default FeatureCard;