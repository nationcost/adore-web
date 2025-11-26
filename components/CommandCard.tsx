
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
        className={`group border-b border-white/5 last:border-0 transition-all duration-300 ${
            isOpen ? 'bg-white/[0.03]' : 'hover:bg-white/[0.02]'
        }`}
    >
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 p-5 md:p-6 cursor-pointer select-none relative"
      >
        {/* Active Indicator Line */}
        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-white transition-transform duration-300 ${isOpen ? 'scale-y-100' : 'scale-y-0'}`}></div>

        {/* Icon */}
        <div className={`hidden md:flex flex-shrink-0 items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 ${
            isOpen ? 'bg-white text-black shadow-lg shadow-white/10' : 'bg-white/5 text-gray-500 border border-white/5 group-hover:border-white/10'
        }`}>
            <Terminal size={20} strokeWidth={2} />
        </div>

        {/* Main Content - Stacked Layout */}
        <div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
            {/* Command Name & Badge */}
            <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-white text-lg tracking-tight truncate">
                    /{command.name}
                </span>
                {/* Mobile Category Badge */}
                <span className="md:hidden text-[10px] font-bold text-gray-500 bg-white/5 px-2 py-0.5 rounded uppercase border border-white/5">
                    {command.category}
                </span>
            </div>

            {/* Description - Always Below */}
            <div className="text-sm text-gray-400 truncate font-medium">
                {command.description}
            </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 flex-shrink-0 pl-2">
             <button 
                onClick={copyToClipboard}
                className={`hidden md:flex items-center justify-center w-9 h-9 rounded-full transition-all ${
                    copied ? 'text-white bg-green-500/20 border border-green-500/50' : 'text-gray-500 hover:text-white hover:bg-white/10'
                }`}
                title="Copy command"
            >
                {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
            
            <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'rotate-180 bg-white text-black' : 'text-gray-600 group-hover:text-white'}`}>
                <ChevronDown size={18} />
            </div>
        </div>
      </div>

      {/* Expanded Details */}
      <div 
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
            <div className="px-5 pb-6 md:pl-[5.5rem] md:pr-6 pt-0">
                 
                 {/* Info Boxes */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Syntax Box */}
                    <div className="bg-black/30 border border-white/10 rounded-2xl p-5 flex flex-col gap-2 shadow-inner">
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                            <Terminal size={12} /> Usage Syntax
                        </span>
                        <div className="flex items-center justify-between gap-4">
                            <code className="text-white font-mono text-sm break-all">
                                {command.syntax}
                            </code>
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigator.clipboard.writeText(command.syntax);
                                    setCopied(true);
                                    setTimeout(() => setCopied(false), 2000);
                                }}
                                className="text-gray-600 hover:text-white transition-colors"
                            >
                                {copied ? <Check size={14}/> : <Copy size={14}/>}
                            </button>
                        </div>
                    </div>

                    {/* Permissions Box */}
                    <div className="bg-black/30 border border-white/10 rounded-2xl p-5 flex flex-col gap-3 shadow-inner">
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                            <Shield size={12} /> Required Permissions
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {command.permissions && command.permissions.length > 0 ? (
                                command.permissions.map((perm, idx) => (
                                    <span key={idx} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/5 text-white text-xs px-3 py-1.5 rounded-lg font-medium">
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
