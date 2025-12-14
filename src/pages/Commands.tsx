import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

const Commands: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Determine initial category
    // 1. Try to read from URL hash
    // 2. Fallback to first available category
    // 3. Fallback to 'Server' hardcoded default
    const getInitialCategory = () => {
        const hash = location.hash.replace('#', '').toLowerCase();
        if (hash) {
            const found = categories.find(c => c.toLowerCase() === hash);
            if (found) return found;
        }
        return categories[0] || 'Server';
    };

    const [activeCategory, setActiveCategory] = useState(getInitialCategory);
    const [searchQuery, setSearchQuery] = useState('');

    // Sync activeCategory with URL hash changes
    useEffect(() => {
        const hash = location.hash.replace('#', '').toLowerCase();
        if (hash) {
            const found = categories.find(c => c.toLowerCase() === hash);
            if (found && found !== activeCategory) {
                setActiveCategory(found);
            }
        }
    }, [location.hash, activeCategory]);

    // Update URL when category changes via interaction
    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setSearchQuery('');
        navigate(`#${category.toLowerCase()}`, { replace: true });
    };

    const gridCommands = useMemo(() => {
        let filtered = allCommands.filter(cmd => cmd.category === activeCategory);

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = allCommands.filter(cmd =>
                cmd.name.toLowerCase().includes(query) ||
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

                {/* Search Bar - Rounder Style */}
                <div className="w-full md:w-auto">
                    <div className="relative flex items-center gap-3 bg-[#0a0a0a] border border-white/5 focus-within:border-white/20 rounded-full px-5 py-3 transition-colors duration-200 w-full md:w-80">
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

            {/* Category Tabs - Rounder Tabs */}
            <div className="mb-10 overflow-x-auto hide-scrollbar pb-4 -mx-4 md:mx-0 px-4 md:px-0">
                <div className="flex items-center gap-2 md:flex-wrap">
                    {categories.map(cat => {
                        const isActive = activeCategory === cat && !searchQuery;
                        const count = categoryCounts[cat] || 0;
                        return (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border ${isActive
                                    ? 'bg-[#0a0a0a] border-white/5 text-white'
                                    : 'bg-transparent border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]'
                                    }`}
                            >
                                <Folder size={16} className={isActive ? "text-white" : "text-gray-500"} />
                                <span className="capitalize tracking-wide">{cat}</span>
                                <span className={`text-[10px] h-5 min-w-[1.25rem] px-1.5 flex items-center justify-center rounded-full ${isActive
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
