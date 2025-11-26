
import React, { useMemo } from 'react';
import { Shield, Zap, Crown, Hand, Gavel, Gift, ArrowRight } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import { Feature } from '../types';
import links from '../links.ts';
import { commandsData } from '../commands';
import SpotlightCard from '../components/SpotlightCard';

const DiscordLogo = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.524 13.524 0 0 0-.62 1.25A19.74 19.74 0 0 0 9.246 4.14a13.52 13.52 0 0 0-.618-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.665 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.128 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.333-.946 2.419-2.157 2.419z"/>
  </svg>
);

const features: Feature[] = [
  {
    id: '1',
    title: 'Anti-Nuke Protection',
    description: 'Advanced threat detection with customizable thresholds, automated rollback, and real-time alerts to prevent server destruction attempts.',
    icon: Shield
  },
  {
    id: '2',
    title: 'Smart Moderation',
    description: 'Comprehensive moderation tools with auto-punishment, custom word filters, and detailed logging. Supports timeouts, warnings, and escalation systems.',
    icon: Shield
  },
  {
    id: '3',
    title: 'Advanced Leveling',
    description: 'Comprehensive XP system with role rewards, leaderboards, custom multipliers, and voice channel tracking to boost community engagement.',
    icon: Crown
  },
  {
    id: '4',
    title: 'Welcome & Goodbye',
    description: 'Customizable welcome and goodbye messages with embeds, images, and more. Create memorable first impressions for new members.',
    icon: Hand
  },
  {
    id: '5',
    title: 'Fake Permissions',
    description: 'Set up fake permissions for roles through the bot! Grant users access to specific commands without giving them actual Discord permissions.',
    icon: Gavel
  },
  {
    id: '6',
    title: 'Giveaways',
    description: 'Host engaging giveaways with custom requirements and automatic winner selection. Boost community engagement and reward loyal members.',
    icon: Gift
  }
];

const Home: React.FC = () => {
  const totalCommands = useMemo(() => {
    const uniqueNames = new Set<string>();
    Object.values(commandsData).forEach((categoryCommands) => {
      (categoryCommands as any[]).forEach((cmd) => {
        uniqueNames.add(cmd.name.trim().toLowerCase());
      });
    });
    return uniqueNames.size;
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      
      {/* HERO SECTION */}
      <section className="min-h-[60vh] md:min-h-[85vh] flex flex-col justify-center items-center text-center w-full max-w-5xl mx-auto animate-fade-in pt-8 md:pt-20">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-white leading-none select-none drop-shadow-2xl">
          ADORE
        </h1>
        
        {/* Simple Subtitle */}
        <div className="mt-6 mb-8 w-full max-w-2xl mx-auto px-4">
             <h2 className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-gray-400">
               Elevate your server with powerful moderation, premium features, <br className="hidden md:block"/> and seamless community management.
             </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-2 md:mt-4 w-full sm:w-auto px-6 sm:px-0">
          <a 
            href="/server"
            className="group relative flex items-center justify-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/5 px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 w-full sm:w-auto overflow-hidden backdrop-blur-xl"
          >
             {/* Inner Top Highlight */}
             <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

            <DiscordLogo size={20} className="relative z-10 md:w-6 md:h-6" />
            <span className="relative z-10">Join Discord</span>
          </a>
          
          <a 
            href="/invite"
            className="group relative flex items-center justify-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/5 px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 w-full sm:w-auto overflow-hidden backdrop-blur-xl"
          >
             {/* Inner Top Highlight */}
             <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

            <span className="relative z-10">Invite Bot</span>
            <ArrowRight size={18} className="relative z-10 md:w-5 md:h-5" />
          </a>
        </div>

        <p className="mt-8 md:mt-12 text-xs md:text-sm text-gray-500 font-medium">
          Powering <span className="text-white font-bold">508,413</span> users across <span className="text-white font-bold">2,028</span> communities
        </p>
      </section>

      {/* FEATURES SECTION */}
      <section className="w-full py-16 md:py-24">
        <div className="text-center mb-16 md:mb-24 animate-slide-up" style={{animationDelay: '0.1s'}}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            All you need in one place.
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto px-4 leading-relaxed">
            adore brings complete server management with solid security and smooth, intuitive controls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </section>
      
      {/* COMMANDS TEASER */}
      <div className="flex items-center gap-4 w-full justify-center py-12 opacity-50 px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent flex-1 max-w-[8rem]"></div>
        <span className="text-gray-400 font-bold uppercase tracking-widest text-xs md:text-sm text-center whitespace-nowrap">{totalCommands} Commands</span>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent flex-1 max-w-[8rem]"></div>
      </div>

    </div>
  );
};

export default Home;
    