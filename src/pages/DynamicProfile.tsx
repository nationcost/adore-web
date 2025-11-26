import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Eye, Disc, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';

const API_URL = 'https://adore-api.vwsnx.workers.dev';

// Social Media Icons
const DiscordIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.524 13.524 0 0 0-.62 1.25A19.74 19.74 0 0 0 9.246 4.14a13.52 13.52 0 0 0-.618-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.665 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.128 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.333-.946 2.419-2.157 2.419z"/>
  </svg>
);

const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const GitHubIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const TwitterIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YouTubeIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TwitchIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
  </svg>
);

const RobloxIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.926 23.998L0 18.892 5.075.002 24 5.108l-5.074 18.89zm-9.147-8.144l5.109 1.355 1.355-5.109-5.11-1.355-1.354 5.109z"/>
  </svg>
);

const SpotifyIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const SteamIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
  </svg>
);

const LinkIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);

const getLinkIcon = (type: string, className: string = "") => {
  switch(type.toLowerCase()) {
    case 'discord': return <DiscordIcon className={className} />;
    case 'instagram': return <InstagramIcon className={className} />;
    case 'tiktok': return <TikTokIcon className={className} />;
    case 'github': return <GitHubIcon className={className} />;
    case 'twitter': return <TwitterIcon className={className} />;
    case 'youtube': return <YouTubeIcon className={className} />;
    case 'twitch': return <TwitchIcon className={className} />;
    case 'roblox': return <RobloxIcon className={className} />;
    case 'spotify': return <SpotifyIcon className={className} />;
    case 'steam': return <SteamIcon className={className} />;
    default: return <LinkIcon className={className} />;
  }
};

interface Profile {
  username: string;
  displayName: string;
  avatar: string | null;
  banner: string | null;
  bio: string;
  song: string | null;
  songArtist: string | null;
  songCover: string | null;
  songPreview: string | null;
  songUrl: string | null;
  discordId: string;
  links: Array<{ type: string; url: string }>;
  createdAt: string;
  updatedAt: string;
}

const DynamicProfile: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showOverlay, setShowOverlay] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -9999, y: -9999 });
  };

  const handleEnter = async () => {
    setShowOverlay(false);
    const audio = audioRef.current;
    if (audio && profile?.song) {
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

  // Fetch profile from API
  useEffect(() => {
    if (!username) return;

    fetch(`${API_URL}/profile/${username}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setProfile(data);
          // Update meta tags
          document.title = `${data.displayName} - adore`;
          updateMetaTags(data);
        }
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load profile');
        setLoading(false);
      });
  }, [username]);

  // Audio player logic
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !profile?.song) return;

    audio.volume = 0.7;
    const attemptPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setShowOverlay(false);
      } catch (err) {
        setShowOverlay(true);
        setIsPlaying(false);
      }
    };
    
    const timer = setTimeout(attemptPlay, 100);

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
  }, [profile]);

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-black animate-pulse">Loading...</h1>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center gap-6">
        <h1 className="text-6xl font-black">404</h1>
        <p className="text-gray-400 text-xl">{error || 'Profile not found'}</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Go Home
        </button>
      </div>
    );
  }

  const duration = profile.song ? 180 : 0; // Default 3 min
  const durationStr = "3:00";

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen w-full bg-black text-white font-sans flex flex-col items-center justify-center relative overflow-hidden p-4"
      style={{ cursor: 'crosshair' }}
    >
      {/* Audio Element */}
      {profile.song && (
        <audio 
          ref={audioRef}
          src={profile.songPreview || `/media/music/${profile.song}.mp3`}
          loop
          preload="auto"
        />
      )}

      {/* Frosted Glass Overlay */}
      {showOverlay && profile.song && (
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

      {/* Profile Card */}
      <SpotlightCard 
        mouseX={mousePos.x} 
        mouseY={mousePos.y}
        className="w-full max-w-[400px] rounded-[32px] overflow-hidden text-center flex flex-col items-center animate-fade-in relative"
      >
        {/* Banner */}
        {profile.banner && (
          <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
            <img 
              src={profile.banner} 
              alt="Banner" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />
          </div>
        )}

        {/* Avatar */}
        <div className={`relative z-10 ${profile.banner ? 'mt-20' : 'mt-8'}`}>
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-black/50 shadow-2xl bg-dark-700">
            <img 
              src={profile.avatar || 'https://cdn.discordapp.com/embed/avatars/0.png'}
              alt={profile.displayName} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
            />
          </div>
        </div>
        
        {/* Name */}
        <h1 className="relative z-10 text-4xl font-black text-white mb-2 mt-6 tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent px-8">
          {profile.displayName}
        </h1>
        
        {/* Bio */}
        <div className="relative z-10 mb-8 px-8">
          <p className="text-gray-500 text-sm font-light italic tracking-wide">{profile.bio || 'No bio set'}</p>
        </div>

        {/* Links */}
        {profile.links.length > 0 && (
          <div className="relative z-10 flex gap-3 justify-center w-full px-8 mb-8">
            {profile.links.map((link, idx) => (
              <a 
                key={idx}
                href={link.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3.5 bg-white/[0.05] hover:bg-white/[0.1] text-white rounded-2xl transition-all duration-300 group border border-white/5 hover:border-white/20 hover:shadow-lg hover:shadow-white/5"
                title={link.type}
              >
                {getLinkIcon(link.type, "w-5 h-5 text-gray-400 group-hover:text-white transition-colors")}
              </a>
            ))}
          </div>
        )}
      </SpotlightCard>

      {/* Spacer */}
      {profile.song && <div className="h-4"></div>}

      {/* Music Player */}
      {profile.song && (
        <SpotlightCard 
          mouseX={mousePos.x} 
          mouseY={mousePos.y}
          className="w-full max-w-[400px] rounded-[28px] p-5 animate-slide-up"
        >
          <div className="flex items-center gap-4">
            {/* Album Art */}
            <div className="w-14 h-14 rounded-xl bg-gray-900 overflow-hidden relative flex-shrink-0 shadow-lg border border-white/10">
              <img 
                src={profile.songCover || '/media/covers/default.jpg'} 
                alt="Album" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Song Info */}
            <div className="flex-1 min-w-0 text-left flex flex-col justify-center gap-1">
              <h3 className="text-white font-bold text-sm leading-tight truncate">
                {profile.song}
              </h3>
              <p className="text-gray-500 text-xs truncate">{profile.songArtist}</p>
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

          {/* Spotify Link */}
          {profile.songUrl && (
            <div className="mt-4 pt-4 border-t border-white/5">
              <a 
                href={profile.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs text-gray-500 hover:text-white transition-colors group"
              >
                <SpotifyIcon className="w-4 h-4 group-hover:text-[#1DB954] transition-colors" />
                <span>Open in Spotify</span>
              </a>
            </div>
          )}
        </SpotlightCard>
      )}
    </div>
  );
};

function updateMetaTags(profile: Profile) {
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', `https://adore.rest/${profile.username}`);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', profile.displayName);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', profile.bio);
  document.querySelector('meta[property="og:image"]')?.setAttribute('content', profile.avatar || '');
  document.querySelector('meta[name="twitter:url"]')?.setAttribute('content', `https://adore.rest/${profile.username}`);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', profile.displayName);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', profile.bio);
  document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', profile.avatar || '');
}

export default DynamicProfile;
