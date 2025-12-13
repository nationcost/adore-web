
import React, { useState } from 'react';
import { Command } from '../utils/types';
import { Copy, Check, Star } from 'lucide-react';

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
        <div className="command-card group relative bg-[#0d0d0d] border border-white/[0.08] rounded-xl p-5 hover:border-white/20 transition-all duration-300 flex flex-col gap-4">

            {/* Copy Button */}
            <button
                onClick={copyToClipboard}
                className={`absolute top-4 right-4 p-2 rounded-lg transition-all ${copied
                        ? 'text-green-400 bg-green-500/10'
                        : 'text-gray-600 hover:text-white hover:bg-white/10'
                    }`}
                title="Copy command"
            >
                {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>

            {/* Command Name */}
            <div className="flex items-center gap-2 pr-8">
                {hasSpecialIcon && (
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                )}
                <h3 className="text-white font-semibold text-base tracking-tight">
                    {command.name}
                </h3>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                {command.description}
            </p>

            {/* Arguments Section */}
            <div className="flex flex-col gap-2">
                <span className="text-gray-500 text-xs font-medium">arguments</span>
                <div className="flex flex-wrap gap-1.5">
                    {args.length > 0 ? (
                        args.map((arg, idx) => (
                            <span
                                key={idx}
                                className="inline-flex items-center bg-white/[0.06] border border-white/[0.08] text-gray-400 text-xs px-2.5 py-1 rounded-md font-medium"
                            >
                                {arg}
                            </span>
                        ))
                    ) : (
                        <span className="text-gray-600 text-xs">none</span>
                    )}
                </div>
            </div>

            {/* Permissions Section */}
            <div className="flex flex-col gap-2">
                <span className="text-gray-500 text-xs font-medium">permissions</span>
                <div className="flex flex-wrap gap-1.5">
                    {command.permissions && command.permissions.length > 0 && command.permissions[0] ? (
                        command.permissions.map((perm, idx) => (
                            <span
                                key={idx}
                                className="inline-flex items-center bg-white/[0.06] border border-white/[0.08] text-gray-400 text-xs px-2.5 py-1 rounded-md font-medium capitalize"
                            >
                                {perm.replace(/_/g, ' ')}
                            </span>
                        ))
                    ) : (
                        <span className="text-gray-600 text-xs">none</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommandCard;
