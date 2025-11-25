import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import links from '../links.ts';

const DiscordLogo = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.524 13.524 0 0 0-.62 1.25A19.74 19.74 0 0 0 9.246 4.14a13.52 13.52 0 0 0-.618-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.665 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.128 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.333-.946 2.419-2.157 2.419z"/>
  </svg>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Using the specific image URL provided by the user
  const [pfpUrl, setPfpUrl] = useState("https://images-ext-1.discordapp.net/external/x1cX6slT-VHhU0hyVFQqRP-Ek57OIQINctI7r48mRgo/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1439529198325596172/6ffb4be895931f8824b7b330c86a04ab.webp?format=webp&width=391&height=391");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-all duration-300 hover:text-white px-4 py-2 rounded-full ${
      isActive ? 'text-white bg-white/10' : 'text-white/70 hover:bg-white/5'
    }`;

  // Custom styles for the mobile menu items
  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block w-full text-center py-6 text-xl font-medium transition-all duration-200 ${
      isActive ? 'text-white' : 'text-gray-400 active:text-white'
    }`;

  return (
    <>
      {/* Full Screen Backdrop Blur for Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[55] bg-black/30 backdrop-blur-md md:hidden animate-fade-in transition-all duration-500"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <header className="fixed top-6 left-0 right-0 z-[60] flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto relative flex items-center justify-between px-3 py-2.5 rounded-full transition-all duration-500 ease-out ${
            isScrolled || mobileMenuOpen
              ? 'bg-black/40 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] w-full max-w-3xl'
              : 'bg-black/20 backdrop-blur-xl border border-white/5 shadow-lg w-full max-w-2xl'
          }`}
        >
          {/* Logo / Home Icon */}
          <NavLink 
            to="/" 
            className="flex items-center gap-2 pl-2 pr-2 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-white/10 group-hover:ring-white/30 transition-all shadow-inner">
              {/* Dynamic PFP */}
              <img 
                src={pfpUrl} 
                alt="ADORE Logo" 
                className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity" 
              />
            </div>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/commands" className={navLinkClass}>
              Commands
            </NavLink>
            <NavLink to="/faq" className={navLinkClass}>
              Information
            </NavLink>
          </div>

          {/* Discord Button (Desktop) */}
          <div className="hidden md:flex pl-2 pr-1">
            <a
              href={links.discordInvite}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white hover:bg-gray-200 text-black px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95"
            >
              <DiscordLogo size={18} />
              <span>Discord</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white pr-2 transition-transform active:scale-90"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>

          {/* Mobile Menu Dropdown (True iOS Glass Sheet) */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-4 mx-1 z-[70] animate-menu-spring origin-top">
              {/* The Glass Sheet - Updated to Whitish Rich Glass */}
              <div className="relative bg-white/[0.04] backdrop-blur-3xl backdrop-saturate-150 border border-white/10 rounded-[32px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
                
                {/* Inner highlight for 3D glass feel */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>

                <div className="flex flex-col p-2 relative z-10">
                  <div className="flex flex-col">
                    <NavLink
                      to="/commands"
                      className={mobileLinkClass}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Commands
                    </NavLink>
                    <div className="w-[85%] h-px bg-white/5 mx-auto"></div>
                    
                    <NavLink
                      to="/faq"
                      className={mobileLinkClass}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Information
                    </NavLink>
                  </div>
                  
                  <div className="pt-6 pb-3 px-3">
                    <a
                      href={links.discordInvite}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-center items-center gap-3 bg-white active:bg-gray-200 text-black py-4 rounded-2xl font-bold text-lg shadow-lg shadow-white/10 transition-transform active:scale-[0.98]"
                    >
                      <DiscordLogo size={22} />
                      Join Discord
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;