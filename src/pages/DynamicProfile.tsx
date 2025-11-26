import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Eye, Disc, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';

const API_URL = 'https://adore-api.vwsnx.workers.dev';

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

interface Profile {
  username: string;
  displayName: string;
  avatar: string | null;
  bio: string;
  song: string | null;
  songArtist: string | null;
  songCover: string | null;
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
          src={`/media/music/${profile.song}.mp3`}
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
        className="w-full max-w-[400px] rounded-[32px] p-8 text-center flex flex-col items-center animate-fade-in relative"
      >
        {/* Avatar */}
        <div className="relative mb-6 z-10">
          <div className="w-32 h-32 rounded-full overflow-hidden ring-1 ring-white/20 shadow-2xl bg-dark-700">
            <img 
              src={profile.avatar || 'https://cdn.discordapp.com/embed/avatars/0.png'}
              alt={profile.displayName} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
            />
          </div>
        </div>
        
        {/* Name */}
        <h1 className="relative z-10 text-4xl font-black text-white mb-2 tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {profile.displayName}
        </h1>
        
        {/* Bio */}
        <div className="relative z-10 mb-8">
          <p className="text-gray-500 text-sm font-light italic tracking-wide">{profile.bio || 'No bio set'}</p>
        </div>

        {/* Links */}
        <div className="relative z-10 flex gap-3 justify-center w-full px-2 mb-2">
          {profile.links.map((link, idx) => (
            <a 
              key={idx}
              href={link.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 p-3.5 bg-white/[0.05] hover:bg-white/[0.1] text-white rounded-2xl transition-all duration-300 group border border-white/5 hover:border-white/20 hover:shadow-lg hover:shadow-white/5"
            >
              {link.type === 'discord' && <DiscordIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />}
            </a>
          ))}
        </div>
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
