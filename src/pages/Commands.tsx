import React, { useState, useMemo } from 'react';
import { Search, Terminal, Folder, Sparkles } from 'lucide-react';
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

const getCategoryIcon = (category: string): React.ReactNode => {
    return <Folder size={14} />;
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
        <div className="w-full min-h-screen animate-fade-in pb-20">

            {/* Header / Title Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-4 md:px-0 mb-8 md:mb-12">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight flex items-center gap-3">
                        Commands
                        <div className="p-2 bg-white/5 rounded-full border border-white/10 hidden md:block">
                            <Sparkles size={20} className="text-gray-400" />
                        </div>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                        Explore the full list of commands available in Adore to manage your community properly.
                    </p>
                </div>

                {/* Search Bar - Glass Style */}
                <div className="relative group w-full md:w-auto">
                    <div className="absolute inset-0 bg-white/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center gap-3 bg-white/[0.03] border border-white/10 focus-within:border-white/20 focus-within:bg-white/[0.05] rounded-full px-5 py-3 transition-all duration-300 w-full md:w-80">
                        <Search size={18} className="text-gray-500 group-focus-within:text-white transition-colors" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Find a command..."
                            className="bg-transparent border-none text-white text-sm w-full focus:outline-none placeholder:text-gray-600"
                        />
                    </div>
                </div>
            </div>

            {/* Category Tabs - Segmented Control Style */}
            <div className="mb-10 overflow-x-auto hide-scrollbar pb-4 -mx-4 md:mx-0 px-4 md:px-0">
                <div className="flex items-center gap-2 md:flex-wrap">
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
                                className={`group relative flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${isActive
                                    ? 'text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                                    : 'text-gray-500 hover:text-white hover:bg-white/[0.03]'
                                    }`}
                            >
                                {isActive && (
                                    <div className="absolute inset-0 bg-white/10 border border-white/10 rounded-full"></div>
                                )}
                                <span className={`relative z-10 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                                    {isActive ? <Folder size={16} fill="currentColor" className="text-white" /> : <Folder size={16} />}
                                </span>
                                <span className="relative z-10 capitalize tracking-wide">{cat}</span>
                                <span className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded-full ${isActive
                                        ? 'bg-white text-black font-bold'
                                        : 'bg-white/5 text-gray-500 group-hover:bg-white/10 group-hover:text-gray-400'
                                    }`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Commands Grid */}
            <div>
                {gridCommands.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {gridCommands.map((cmd, idx) => (
                            <div key={cmd.id} className="animate-slide-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                                <CommandCard command={cmd} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-32 text-center animate-fade-in">
                        <div className="p-8 rounded-full bg-white/[0.02] mb-6 border border-white/5 shadow-2xl relative group">
                            <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
                            <Terminal size={48} strokeWidth={1} className="text-gray-500 relative z-10" />
                        </div>
                        <h3 className="text-white font-bold text-3xl mb-3 tracking-tight">No commands found</h3>
                        <p className="text-gray-500 max-w-md mx-auto mb-8 text-lg">
                            We couldn't find any matches for "<span className="text-white">{searchQuery}</span>"
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setActiveCategory(categories[0]);
                            }}
                            className="px-8 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
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
