
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

    // Parse arguments from syntax
    const parseArguments = (syntax: string): string[] => {
        const args: string[] = [];
        if (!syntax) return args;
        const requiredMatches = syntax.match(/\[([^\]]+)\]/g);
        const optionalMatches = syntax.match(/\(([^)]+)\)/g);

        if (requiredMatches) {
            requiredMatches.forEach(match => args.push(match.slice(1, -1)));
        }
        if (optionalMatches) {
            optionalMatches.forEach(match => args.push(match.slice(1, -1)));
        }
        return args;
    };

    const args = parseArguments(command.syntax);

    // Format Permissions: Join with comma or show "none"
    const permissionsText = command.permissions && command.permissions.length > 0 && command.permissions[0] !== 'None'
        ? command.permissions.map(p => p.replace(/_/g, ' ').toLowerCase()).join(', ')
        : 'none';

    // Format Arguments: Join with comma or show "none"
    const argumentsText = args.length > 0 ? args.join(', ') : 'none';

    return (
        <div className="h-full rounded-[2rem] bg-[#121826] border border-white/5 p-8 flex flex-col justify-between hover:border-white/10 transition-colors">
            {/* Top Section */}
            <div className="relative mb-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                            {command.name}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed pr-8">
                            {command.description}
                        </p>
                    </div>
                </div>

                {/* Copy Button (Absolute Top Right) */}
                <button
                    onClick={copyToClipboard}
                    className="absolute -top-2 -right-2 p-2 text-gray-600 hover:text-white transition-colors"
                >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/5 mb-6"></div>

            {/* Bottom Section */}
            <div className="flex flex-col gap-6">
                {/* Arguments */}
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-gray-600">arguments</span>
                    <span className="text-gray-300 text-sm font-medium">
                        {argumentsText}
                    </span>
                </div>

                {/* Permissions */}
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-gray-600">permissions</span>
                    <span className="text-gray-300 text-sm font-medium">
                        {permissionsText}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CommandCard;
