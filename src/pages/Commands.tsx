import React, { useState, useMemo } from 'react';
import { Search, Terminal, Folder } from 'lucide-react';
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
        <div className="w-full min-h-screen pb-20">

            {/* Header / Title Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-4 md:px-0 mb-8 md:mb-12">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight flex items-center gap-3">
                        Commands
                    </h1>
                    <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                        Explore the full list of commands available in Adore to manage your community properly.
                    </p>
                </div>

                {/* Search Bar - Simple Style */}
                <div className="w-full md:w-auto">
                    <div className="relative flex items-center gap-3 bg-white/[0.05] border border-white/10 focus-within:border-white/20 rounded-lg px-5 py-3 transition-colors duration-200 w-full md:w-80">
                        <Search size={18} className="text-gray-500" />
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

            {/* Category Tabs - Simple Tabs */}
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
                                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 ${isActive
                                    ? 'text-white bg-white/10'
                                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <Folder size={16} className={isActive ? "text-white" : ""} />
                                <span className="capitalize tracking-wide">{cat}</span>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive
                                    ? 'bg-white text-black font-bold'
                                    : 'bg-white/5 text-gray-500'
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {gridCommands.map((cmd) => (
                            <div key={cmd.id}>
                                <CommandCard command={cmd} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-32 text-center">
                        <div className="p-8 rounded-full bg-white/[0.02] mb-6 border border-white/5 relative">
                            <Terminal size={48} strokeWidth={1} className="text-gray-500 relative z-10" />
                        </div>
                        <h3 className="text-white font-bold text-3xl mb-3 tracking-tight">No commands found</h3>
                        <p className="text-gray-500 max-w-md mx-auto mb-8 text-lg">
                            We couldn't find any matches for "<span className="text-white">{searchQuery}</span>"
                        </p>
                        <button
                            onClick={() => {
                                searchQuery ? setSearchQuery('') : setActiveCategory(categories[0]);
                                setSearchQuery('');
                            }}
                            className="px-8 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors"
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
