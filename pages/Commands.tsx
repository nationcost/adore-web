import React, { useState, useMemo } from 'react';
import { Search, X, Command as CommandIcon, ListFilter, LayoutGrid, Hash } from 'lucide-react';
import CommandCard from '../components/CommandCard';
import { commandsData } from '../commands';
import { Command } from '../types';

// Transform JSON data to Command[] and Deduplicate
const getUniqueCommands = () => {
  const map = new Map<string, Command>();
  
  Object.entries(commandsData).forEach(([category, cmds]) => {
    (cmds as any[]).forEach(cmd => {
      // Normalize name to ensure case-insensitive deduplication
      const name = cmd.name.trim();
      const normalizedName = name.toLowerCase();
      
      // Only add if not already present (prevents duplicates)
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

// Dynamically generate categories from the unique data
const categories = ['All', ...Array.from(new Set(allCommands.map(c => c.category))).sort()];

const Commands: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const gridCommands = useMemo(() => {
    let filtered = allCommands;

    // Filter by Category
    if (activeCategory !== 'All') {
        filtered = filtered.filter(cmd => cmd.category === activeCategory);
    }

    // Filter by Search (Searches Name, Description, and Aliases)
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
    <div className="w-full animate-fade-in">
        
        {/* Page Header */}
        <div className="mb-8 md:mb-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
                Commands
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed mx-auto md:mx-0">
                Explore the complete library of {allCommands.length} commands.
            </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-start relative">
            
            {/* Left Panel: Search & Categories */}
            <aside className="w-full md:w-72 flex-shrink-0 md:sticky md:top-32 z-20">
                <div className="bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-[2rem] p-5 flex flex-col gap-6 shadow-2xl shadow-black/20">
                    
                    {/* Search Bar */}
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search size={18} className="text-gray-500 group-focus-within:text-white transition-colors duration-300" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-black/20 border border-white/5 text-white rounded-full py-3 pl-11 pr-10 text-sm focus:outline-none focus:border-white/10 focus:bg-black/40 focus:shadow-[0_0_20px_-5px_rgba(255,255,255,0.05)] transition-all placeholder:text-gray-600"
                        />
                        {searchQuery && (
                            <button 
                                onClick={() => setSearchQuery('')}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-white transition-colors"
                            >
                                <X size={14} />
                            </button>
                        )}
                    </div>

                    <div className="h-px bg-white/5 w-full"></div>

                    {/* Categories List */}
                    <div className="flex flex-col gap-3">
                        <div className="hidden md:flex items-center gap-2 px-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                            <ListFilter size={12} />
                            Categories
                        </div>
                        
                        <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-2 md:pb-0 hide-scrollbar -mx-2 px-2 md:mx-0 md:px-0">
                            {categories.map(cat => {
                                const count = cat === 'All' ? allCommands.length : allCommands.filter(c => c.category === cat).length;
                                const isActive = activeCategory === cat;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => {
                                            setActiveCategory(cat);
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        className={`group flex-shrink-0 flex items-center justify-between px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 w-auto md:w-full border ${
                                            isActive 
                                            ? 'bg-white text-black border-white shadow-lg shadow-white/5 scale-[1.02]' 
                                            : 'bg-white/5 text-gray-400 border-transparent hover:bg-white/10 hover:text-white hover:translate-x-1'
                                        }`}
                                    >
                                        <span className="whitespace-nowrap">{cat}</span>
                                        <span className={`ml-3 text-xs px-2 py-0.5 rounded-full font-bold transition-colors ${
                                            isActive 
                                            ? 'bg-black/10 text-black' 
                                            : 'bg-black/30 text-gray-500 group-hover:text-gray-300'
                                        }`}>
                                            {count}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </aside>

            {/* Right Panel: Content */}
            <div className="flex-1 min-w-0 w-full">
                
                {/* Content Header */}
                 <div className="flex items-center justify-between mb-4 px-2">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-full border border-white/5 text-gray-400">
                             {activeCategory === 'All' ? <LayoutGrid size={18} /> : <Hash size={18} />}
                        </div>
                        <h2 className="text-2xl font-bold text-white tracking-tight">
                            {activeCategory}
                        </h2>
                        <span className="bg-white/5 text-gray-400 text-xs font-bold px-2.5 py-1 rounded-full border border-white/5">
                            {gridCommands.length}
                        </span>
                    </div>
                </div>

                {/* Command List Container */}
                <div className="bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/20">
                    {/* List Header (Desktop) */}
                    <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-white/[0.02] border-b border-white/5 text-xs font-bold text-gray-500 uppercase tracking-widest">
                        <div className="col-span-4 pl-12">Command</div>
                        <div className="col-span-8">Description</div>
                    </div>

                    {/* List Body */}
                    <div className="min-h-[300px]">
                        {gridCommands.length > 0 ? (
                            gridCommands.map((cmd) => (
                                <CommandCard key={cmd.id} command={cmd} />
                            ))
                        ) : (
                            <div className="flex flex-col items-center justify-center h-80 text-center px-4">
                                    <div className="p-4 rounded-full bg-white/5 mb-4 text-gray-500 border border-white/5">
                                    <CommandIcon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-white font-bold text-xl mb-2">No commands found</h3>
                                    <p className="text-gray-500 max-w-sm mx-auto mb-6">
                                    We couldn't find any commands matching "{searchQuery}" in the {activeCategory} category.
                                    </p>
                                    <button 
                                    onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
                                    className="text-white hover:text-gray-300 font-medium text-sm transition-colors border-b border-dashed border-white/50 hover:border-white"
                                    >
                                    Clear filters
                                    </button>
                            </div>
                        )}
                    </div>
                    
                    {/* List Footer */}
                    {gridCommands.length > 0 && (
                        <div className="bg-white/[0.02] border-t border-white/5 p-4 text-center">
                            <p className="text-xs text-gray-600 font-mono">
                                End of list
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    </div>
  );
};

export default Commands;