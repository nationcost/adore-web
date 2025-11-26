
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Eye, Heart, Disc, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { commandsData } from '../utils/commands';
import SpotlightCard from '../components/SpotlightCard';

const DiscordIcon = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.524 13.524 0 0 0-.62 1.25A19.74 19.74 0 0 0 9.246 4.14a13.52 13.52 0 0 0-.618-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.665 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.128 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.333-.946 2.419-2.157 2.419z"/>
  </svg>
);

const Bio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
  const [showOverlay, setShowOverlay] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Calculate total commands for view count
  const totalCommands = useMemo(() => {
    const uniqueNames = new Set<string>();
    Object.values(commandsData).forEach((categoryCommands) => {
      (categoryCommands as any[]).forEach((cmd) => {
        uniqueNames.add(cmd.name.trim().toLowerCase());
      });
    });
    return uniqueNames.size;
  }, []);

  // Song Duration for "Sign of the Times" approx 5:41
  const duration = 341; 
  const durationStr = "5:41";

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -9999, y: -9999 });
  };



  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle overlay click to enter and play music
  const handleEnter = async () => {
    setShowOverlay(false);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.7;
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.error('Play failed:', err);
        setIsPlaying(false);
      }
    }
  };

  // Update meta tags for social sharing
  useEffect(() => {
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', 'https://adore.rest/me');
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'rey');
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', 'I like to code sometimes');
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', 'https://adore.rest/media/avatar/avatar.jpeg');
    document.querySelector('meta[name="twitter:url"]')?.setAttribute('content', 'https://adore.rest/me');
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', 'rey');
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', 'I like to code sometimes');
    document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', 'https://adore.rest/media/avatar/avatar.jpeg');
  }, []);

  // Auto-play on mount and sync progress
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try autoplay immediately
    audio.volume = 0.7;
    const attemptPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setShowOverlay(false); // Hide overlay if autoplay works
      } catch (err) {
        // Browser blocked - show overlay
        setShowOverlay(true);
        setIsPlaying(false);
      }
    };
    
    const timer = setTimeout(attemptPlay, 100);

    // Update progress from actual audio time
    const updateProgress = () => {
      if (audio && audio.duration) {
        const percent = (audio.currentTime / audio.duration) * 100;
        setProgress(percent);
        const mins = Math.floor(audio.currentTime / 60);
        const secs = Math.floor(audio.currentTime % 60);
        setCurrentTime(`${mins}:${secs.toString().padStart(2, '0')}`);
      }
    };

    if (audio) {
      audio.addEventListener('timeupdate', updateProgress);
      audio.addEventListener('ended', () => {
        setProgress(0);
        setCurrentTime('0:00');
        if (audio) {
          audio.currentTime = 0;
          audio.play();
        }
      });
    }

    return () => {
      clearTimeout(timer);
      if (audio) {
        audio.removeEventListener('timeupdate', updateProgress);
      }
    };
  }, []);

  return (
    <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="min-h-screen w-full bg-black text-white font-sans flex flex-col items-center justify-center relative overflow-hidden p-4"
        style={{ cursor: 'crosshair' }}
    >
        
        {/* Frosted Glass Overlay */}
        {showOverlay && (
          <div 
            onClick={handleEnter}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-3xl flex items-center justify-center animate-fade-in cursor-crosshair"
          >
            <div className="text-center animate-scale-in">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                Click to Enter
              </h2>
              <p className="text-gray-400 text-lg">Experience awaits</p>
            </div>
          </div>
        )}
        
        
        {/* Hidden Audio Element */}
        <audio 
            ref={audioRef}
            src="/media/music/SignsOfTimes.mp3"
            loop
            preload="auto"
        />

        {/* Floating Particles (Optional Minimal Decor) */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[20%] left-[15%] w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-[30%] right-[25%] w-1 h-1 bg-white/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-[60%] left-[80%] w-0.5 h-0.5 bg-white/30 rounded-full animate-pulse delay-500"></div>
        </div>

        {/* Main Profile Card - With Proximity Spotlight Effect */}
        <SpotlightCard 
            mouseX={mousePos.x} 
            mouseY={mousePos.y}
            className="w-full max-w-[400px] rounded-[32px] p-8 text-center flex flex-col items-center animate-fade-in relative"
        >
            
            {/* Avatar */}
            <div className="relative mb-6 z-10">
                <div className="w-32 h-32 rounded-full overflow-hidden ring-1 ring-white/20 shadow-2xl bg-dark-700">
                    <img 
                        src="/media/avatar/avatar.jpeg"
                        alt="rey" 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                    />
                </div>
            </div>
            
            {/* Name */}
            <h1 className="relative z-10 text-4xl font-black text-white mb-2 tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                rey
            </h1>
            
            {/* Custom Status */}
            <div className="relative z-10 mb-8">
                 <p className="text-gray-500 text-sm font-light italic tracking-wide">I like to code sometimes</p>
            </div>

            {/* Action Buttons */}
            <div className="relative z-10 flex gap-3 justify-center w-full px-2 mb-2">
                <a 
                    href="https://discord.com/users/1442334476909809785" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3.5 bg-white/[0.05] hover:bg-white/[0.1] text-white rounded-2xl transition-all duration-300 group border border-white/5 hover:border-white/20 hover:shadow-lg hover:shadow-white/5"
                >
                    <DiscordIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                 <a 
                    href="https://adore.rest" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3.5 bg-white/[0.05] hover:bg-white/[0.1] text-white rounded-2xl transition-all duration-300 group border border-white/5 hover:border-white/20 hover:shadow-lg hover:shadow-white/5"
                >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                </a>
            </div>

        </SpotlightCard>

        {/* Spacer */}
        <div className="h-4"></div>

        {/* Custom Music Player UI - With Proximity Spotlight Effect */}
        <SpotlightCard 
            mouseX={mousePos.x} 
            mouseY={mousePos.y}
            className="w-full max-w-[400px] rounded-[28px] p-5 animate-slide-up"
        >
            <div className="flex items-center gap-4">
                {/* Album Art - Clean Square */}
                <div className="w-14 h-14 rounded-xl bg-gray-900 overflow-hidden relative flex-shrink-0 shadow-lg border border-white/10">
                    <img 
                        src="/media/covers/signoftimes.jpg" 
                        alt="Album" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.src = 'https://i.scdn.co/image/ab67616d0000b273ed317ec13d3de9e01fb99c9e';
                        }}
                    />
                </div>

                {/* Song Info - Static Text */}
                <div className="flex-1 min-w-0 text-left flex flex-col justify-center gap-1">
                    <h3 className="text-white font-bold text-sm leading-tight truncate">
                        Sign of the Times
                    </h3>
                    <p className="text-gray-500 text-xs truncate">Harry Styles</p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-5 mb-2">
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden cursor-pointer group">
                    <div 
                        className="h-full bg-white rounded-full transition-all duration-1000 ease-linear relative"
                        style={{ width: `${progress}%` }}
                    >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-gray-500 font-mono font-medium tracking-wide">
                    <span>{currentTime}</span>
                    <span>{durationStr}</span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-8 mt-2">
                <button className="text-gray-500 hover:text-white transition-colors active:scale-95">
                    <SkipBack size={20} fill="currentColor" className="opacity-70" />
                </button>
                <button 
                    onClick={togglePlay}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]"
                >
                    {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5" />}
                </button>
                <button className="text-gray-500 hover:text-white transition-colors active:scale-95">
                    <SkipForward size={20} fill="currentColor" className="opacity-70" />
                </button>
            </div>
        </SpotlightCard>
    </div>
  );
};

export default Bio;