
import React, { useState } from 'react';
import { Command } from '../utils/types';
import { Copy, Check, Star } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

interface Props {
    command: Command;
}

const CommandCard: React.FC<Props> = ({ command }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigator.clipboard.writeText(`/${command.name}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Parse arguments from syntax (e.g., "prefix [subcommand] (value)" -> ["subcommand", "value"])
    const parseArguments = (syntax: string): string[] => {
        const args: string[] = [];
        const requiredMatches = syntax.match(/\[([^\]]+)\]/g);
        const optionalMatches = syntax.match(/\(([^)]+)\)/g);

        if (requiredMatches) {
            requiredMatches.forEach(match => {
                args.push(match.slice(1, -1));
            });
        }
        if (optionalMatches) {
            optionalMatches.forEach(match => {
                args.push(match.slice(1, -1));
            });
        }
        return args;
    };

    const args = parseArguments(command.syntax);
    const hasSpecialIcon = command.name.includes('self') || command.name.includes('premium');

    return (
        <SpotlightCard className="h-full rounded-2xl">
            <div className="relative p-6 flex flex-col gap-4 h-full">

                {/* Copy Button */}
                <button
                    onClick={copyToClipboard}
                    className={`absolute top-5 right-5 p-2 rounded-lg transition-all z-20 ${copied
                        ? 'text-green-400 bg-green-500/10'
                        : 'text-gray-600 hover:text-white hover:bg-white/10'
                        }`}
                    title="Copy command"
                >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>

                {/* Command Name */}
                <div className="flex items-center gap-2 pr-8">
                    <div className={`p-2 rounded-lg border flex items-center justify-center ${hasSpecialIcon
                        ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' // Gold for special
                        : 'bg-white/[0.03] border-white/5 text-gray-400'
                        }`}>
                        {hasSpecialIcon ? <Star size={16} fill="currentColor" /> : <span className="text-xs font-bold font-mono">/</span>}
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-white font-bold text-lg tracking-tight">
                            {command.name}
                        </h3>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-grow">
                    {command.description}
                </p>

                <div className="h-px w-full bg-white/5 my-1"></div>

                {/* Footer Info */}
                <div className="flex items-center justify-between gap-4 mt-auto">
                    {/* Args */}
                    <div className="flex flex-wrap gap-1.5 overflow-hidden">
                        {args.length > 0 ? (
                            args.slice(0, 2).map((arg, idx) => (
                                <span
                                    key={idx}
                                    className="inline-flex items-center bg-white/[0.03] border border-white/[0.05] text-gray-500 text-[10px] px-2 py-0.5 rounded-md font-medium uppercase tracking-wider"
                                >
                                    {arg}
                                </span>
                            ))
                        ) : (
                            <span className="text-gray-700 text-[10px] uppercase tracking-wider font-medium">No Args</span>
                        )}
                        {args.length > 2 && (
                            <span className="text-gray-600 text-[10px] px-1">+{args.length - 2}</span>
                        )}
                    </div>

                    {/* Permission Badge */}
                    <div className="flex-shrink-0">
                        {command.permissions && command.permissions.length > 0 && command.permissions[0] ? (
                            <span className="inline-flex items-center text-[10px] text-gray-500 font-medium bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded-md capitalize">
                                {command.permissions[0].replace(/_/g, ' ').toLowerCase()}
                            </span>
                        ) : (
                            <span className="text-gray-700 text-[10px] font-medium">Free</span>
                        )}
                    </div>
                </div>
            </div>
        </SpotlightCard>
    );
};

export default CommandCard;
