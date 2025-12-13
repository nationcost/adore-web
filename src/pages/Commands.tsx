import React, { useState, useMemo } from 'react';
import { Search, Terminal, Settings, Hammer, FileText, Heart, Gamepad2, Paperclip, Zap, Skull, Palette, BarChart3, Folder } from 'lucide-react';
import CommandCard from '../components/CommandCard';
import { commandsData } from '../utils/commands';
import { Command } from '../utils/types';

// Transform JSON data to Command[] and Deduplicate
const getUniqueCommands = () => {
    const map = new Map<string, Command>();

    Object.entries(commandsData).forEach(([category, cmds]) => {
        (cmds as any[]).forEach(cmd => {
            const name = cmd.name.trim();
            const normalizedName = name.toLowerCase();

            if (!map.has(normalizedName)) {
                map.set(normalizedName, {
                    id: `${category}-${name}`,
                    name: name,
                    description: cmd.description,
                    category: category.charAt(0).toUpperCase() + category.slice(1),
                    permissions: cmd.permission ? [cmd.permission] : [],
                    syntax: cmd.syntax,
                    aliases: cmd.aliases || []
                });
            }
        });
    });

    return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
};

const allCommands: Command[] = getUniqueCommands();

// Get category counts
const getCategoryCounts = () => {
    const counts: Record<string, number> = {};
    allCommands.forEach(cmd => {
        const cat = cmd.category;
        counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
};

const categoryCounts = getCategoryCounts();
const categories = Array.from(new Set(allCommands.map(c => c.category))).sort();

// Category icons mapping using Lucide icons
const categoryIcons: Record<string, React.ReactNode> = {
    'Server': <Settings size={14} />,
    'Moderation': <Hammer size={14} />,
    'Information': <FileText size={14} />,
    'Roleplay': <Heart size={14} />,
    'Fun': <Gamepad2 size={14} />,
    'Misc': <Paperclip size={14} />,
    'Core': <Zap size={14} />,
    'Bully': <Skull size={14} />,
    'Assets': <Palette size={14} />,
    'Boards': <BarChart3 size={14} />,
};

const getCategoryIcon = (category: string): React.ReactNode => {
    return categoryIcons[category] || <Folder size={14} />;
};

const Commands: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0] || 'Server');
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const gridCommands = useMemo(() => {
        let filtered = allCommands.filter(cmd => cmd.category === activeCategory);

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = allCommands.filter(cmd =>
                cmd.name.toLowerCase().includes(query) ||
                cmd.description.toLowerCase().includes(query) ||
                (cmd.aliases && cmd.aliases.some(alias => alias.toLowerCase().includes(query)))
            );
        }

        return filtered;
    }, [activeCategory, searchQuery]);

    return (
        <div className="w-full min-h-screen bg-[#080808] animate-fade-in">

            {/* Header */}
            <div className="flex items-center justify-between px-6 md:px-12 py-8 max-w-7xl mx-auto">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/[0.05] border border-white/10 rounded-xl">
                        <Terminal size={24} className="text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Commands
                    </h1>
                </div>

                {/* Search */}
                <div className="relative">
                    {isSearchOpen ? (
                        <div className="flex items-center gap-2 bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2">
                            <Search size={18} className="text-gray-500" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search..."
                                className="bg-transparent border-none text-white text-sm w-48 focus:outline-none placeholder:text-gray-600"
                                autoFocus
                                onBlur={() => {
                                    if (!searchQuery) setIsSearchOpen(false);
                                }}
                            />
                        </div>
                    ) : (
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors"
                        >
                            <span className="text-xs">search</span>
                            <Search size={24} />
                        </button>
                    )}
                </div>
            </div>

            {/* Category Tabs */}
            <div className="px-6 md:px-12 max-w-7xl mx-auto mb-8">
                <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-2">
                    {categories.map(cat => {
                        const isActive = activeCategory === cat && !searchQuery;
                        const count = categoryCounts[cat] || 0;
                        return (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setSearchQuery('');
                                }}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${isActive
                                        ? 'bg-white/10 border border-white/20 text-white'
                                        : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.03]'
                                    }`}
                            >
                                <span>{getCategoryIcon(cat)}</span>
                                <span className="lowercase">{cat.toLowerCase()}</span>
                                <span className={`text-xs ${isActive ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Commands Grid */}
            <div className="px-6 md:px-12 max-w-7xl mx-auto pb-20">
                {gridCommands.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {gridCommands.map((cmd) => (
                            <CommandCard key={cmd.id} command={cmd} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-32 text-center">
                        <div className="p-6 rounded-2xl bg-white/[0.02] mb-6 border border-white/5">
                            <Terminal size={48} strokeWidth={1} className="text-gray-600" />
                        </div>
                        <h3 className="text-white font-bold text-2xl mb-2">No commands found</h3>
                        <p className="text-gray-500 max-w-md mx-auto mb-8">
                            We couldn't find any matches for "{searchQuery}"
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setActiveCategory(categories[0]);
                            }}
                            className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors"
                        >
                            Clear Search
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Commands;
