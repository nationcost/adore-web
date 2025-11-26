
import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, Command as CommandIcon, Hash, Layers } from 'lucide-react';
import CommandCard from '../components/CommandCard';
import { commandsData } from '../utils/commands';
import { Command } from '../utils/types';
import SpotlightCard from '../components/SpotlightCard';

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
const categories = ['All', ...Array.from(new Set(allCommands.map(c => c.category))).sort()];

const Commands: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSticky, setIsSticky] = useState(false);

  // Handle sticky category bar effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 200); // Adjust trigger point based on hero height
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gridCommands = useMemo(() => {
    let filtered = allCommands;

    if (activeCategory !== 'All') {
        filtered = filtered.filter(cmd => cmd.category === activeCategory);
    }

    if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(cmd => 
            cmd.name.toLowerCase().includes(query) || 
            cmd.description.toLowerCase().includes(query) ||
            (cmd.aliases && cmd.aliases.some(alias => alias.toLowerCase().includes(query)))
        );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full animate-fade-in pb-20">
        
        {/* HERO SECTION */}
        <div className="flex flex-col items-center text-center mb-8 px-4 pt-8">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8">
                Commands
            </h1>
            
            {/* Spotlight Search Bar */}
            <div className="relative w-full max-w-2xl group z-20">
                {/* Glow Effect behind */}
                <div className="absolute inset-0 bg-white/20 blur-3xl opacity-0 group-focus-within:opacity-20 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                
                <SpotlightCard className="rounded-full p-0">
                    <div className="relative flex items-center px-6 py-4 bg-transparent">
                        <Search className="text-gray-500 mr-4 group-focus-within:text-white transition-colors" size={24} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for a command..."
                            className="bg-transparent border-none text-white text-lg w-full focus:outline-none placeholder:text-gray-600 font-medium"
                        />
                        {searchQuery && (
                            <button onClick={() => setSearchQuery('')} className="p-1 hover:bg-white/10 rounded-full text-gray-500 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        )}
                    </div>
                </SpotlightCard>
            </div>
        </div>

        {/* STICKY CATEGORY NAV */}
        <div className={`sticky top-24 z-30 mb-8 transition-all duration-300 ${isSticky ? 'py-4' : 'py-0'}`}>
            <div className={`mx-auto max-w-5xl overflow-x-auto hide-scrollbar ${isSticky ? 'px-4' : 'px-0'}`}>
                <div className={`flex items-center gap-2 min-w-max p-1.5 ${
                    isSticky 
                    ? 'bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl shadow-black/50 mx-auto' 
                    : 'bg-transparent justify-center'
                }`}>
                    {categories.map(cat => {
                        const isActive = activeCategory === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    if (window.innerWidth < 768 && isSticky) {
                                        // Optional: scroll logic
                                    }
                                }}
                                className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                                    isActive 
                                    ? 'bg-white text-black shadow-lg shadow-white/10 scale-105' 
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {isActive && <Layers size={14} />}
                                {cat}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>

        {/* COMMAND LIST CONTENT */}
        <div className="max-w-4xl mx-auto w-full px-2 md:px-0">
            <SpotlightCard className="rounded-[2.5rem] overflow-hidden min-h-[400px]">
                
                {/* List Header */}
                <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-white/[0.01]">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                            <Hash size={18} className="text-gray-400" />
                        </div>
                        <h2 className="text-xl font-bold text-white tracking-tight">
                            {activeCategory} Commands
                        </h2>
                    </div>
                    <span className="text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                        {gridCommands.length} results
                    </span>
                </div>

                {/* The List */}
                <div>
                    {gridCommands.length > 0 ? (
                        gridCommands.map((cmd) => (
                            <CommandCard key={cmd.id} command={cmd} />
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-32 text-center px-4">
                            <div className="p-6 rounded-full bg-white/[0.02] mb-6 border border-white/5 ring-1 ring-white/5">
                                <CommandIcon size={48} strokeWidth={1} className="text-gray-600" />
                            </div>
                            <h3 className="text-white font-bold text-2xl mb-2">No commands found</h3>
                            <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
                                We couldn't find any matches for "{searchQuery}" in the {activeCategory} category.
                            </p>
                            <button 
                                onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
                                className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors"
                            >
                                Clear Search
                            </button>
                        </div>
                    )}
                </div>
                
                {gridCommands.length > 0 && (
                    <div className="py-8 text-center border-t border-white/5 bg-white/[0.01]">
                        <p className="text-xs text-gray-600 font-medium uppercase tracking-widest">
                            End of {activeCategory}
                        </p>
                    </div>
                )}
            </SpotlightCard>
        </div>
    </div>
  );
};

export default Commands;
