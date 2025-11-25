import React, { useState } from 'react';
import { Command } from '../types';
import { Copy, ChevronDown, Shield, Terminal, Check } from 'lucide-react';

interface Props {
  command: Command;
}

const CommandCard: React.FC<Props> = ({ command }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`/${command.name}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
        className={`group border-b border-white/5 last:border-0 transition-colors duration-200 ${
            isOpen ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
        }`}
    >
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 p-5 cursor-pointer select-none"
      >
        {/* Icon */}
        <div className={`hidden sm:flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300 ${
            isOpen ? 'bg-white text-black shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)]' : 'bg-white/5 text-gray-500 group-hover:text-gray-300 group-hover:bg-white/10'
        }`}>
            <Terminal size={18} strokeWidth={2} />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Command Name */}
            <div className="md:col-span-4 flex items-center gap-3">
                <span className="font-mono font-bold text-white text-base md:text-lg tracking-tight truncate">
                    /{command.name}
                </span>
                {/* Mobile Category Badge */}
                <span className="md:hidden text-[10px] font-bold text-gray-500 bg-white/5 px-2 py-0.5 rounded uppercase">
                    {command.category}
                </span>
            </div>

            {/* Description */}
            <div className="hidden md:block md:col-span-8 text-sm text-gray-400 truncate pr-4">
                {command.description}
            </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
             <button 
                onClick={copyToClipboard}
                className={`hidden sm:flex items-center justify-center w-8 h-8 rounded-lg transition-all ${
                    copied ? 'text-white bg-white/10' : 'text-gray-500 hover:text-white hover:bg-white/10'
                }`}
                title="Copy command"
            >
                {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
            
            <div className={`p-1 rounded-full transition-all duration-300 ${isOpen ? 'rotate-180 bg-white/10 text-white' : 'text-gray-600'}`}>
                <ChevronDown size={20} />
            </div>
        </div>
      </div>

      {/* Expanded Details */}
      <div 
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
            <div className="px-5 pb-5 sm:pl-[4.5rem] sm:pr-5 pt-0">
                 {/* Mobile Description visible only when expanded on mobile */}
                 <div className="md:hidden mb-4 pt-2 pb-4 border-b border-white/5">
                    <p className="text-gray-300 text-sm leading-relaxed">{command.description}</p>
                 </div>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Syntax Box */}
                    <div className="bg-black/20 border border-white/5 rounded-xl p-4 flex flex-col gap-2">
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Usage Syntax</span>
                        <code className="text-gray-300 font-mono text-sm break-all">
                            {command.syntax}
                        </code>
                    </div>

                    {/* Permissions Box */}
                    <div className="bg-black/20 border border-white/5 rounded-xl p-4 flex flex-col gap-2">
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Required Permissions</span>
                        <div className="flex flex-wrap gap-2">
                            {command.permissions && command.permissions.length > 0 ? (
                                command.permissions.map((perm, idx) => (
                                    <span key={idx} className="inline-flex items-center gap-1.5 bg-white/5 border border-white/5 text-gray-300 text-xs px-2.5 py-1 rounded-md font-medium">
                                        <Shield size={10} className="text-white" />
                                        {perm}
                                    </span>
                                ))
                            ) : (
                                <span className="text-gray-500 text-xs italic">No specific permissions required</span>
                            )}
                        </div>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CommandCard;