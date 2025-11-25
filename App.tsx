import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Commands from './pages/Commands';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

// Redirect components
const InviteRedirect = () => {
  React.useEffect(() => {
    window.location.href = 'https://discord.com/oauth2/authorize?client_id=1439529198325596172';
  }, []);
  return null;
};

const ServerRedirect = () => {
  React.useEffect(() => {
    window.location.href = 'https://discord.gg/dyjn7wzdyH';
  }, []);
  return null;
};

// Wrapper to reset scroll and update title
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update page title based on route
    const titles: { [key: string]: string } = {
      '/': 'adore',
      '/commands': 'adore | commands',
      '/faq': 'adore | information',
      '/terms': 'adore | terms',
      '/privacy': 'adore | privacy',
    };
    document.title = titles[pathname] || 'adore';
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative overflow-x-hidden text-white selection:bg-white selection:text-black font-sans antialiased">

        {/* Darker Black Background with Noise */}
        <div className="fixed inset-0 pointer-events-none z-0 bg-black">
          {/* Neutral Grayscale Gradient Layer - Removed Blue Tones */}
          <div
            className="absolute inset-0 transform scale-110"
            style={{
              background: `radial-gradient(
                      circle at 30% 20%,
                      rgba(80, 80, 80, 0.05) 0%,
                      rgba(40, 40, 40, 0.1) 35%,
                      rgba(20, 20, 20, 0.4) 60%,
                      rgba(0, 0, 0, 1) 100%
                    )`,
              filter: 'blur(60px)',
            }}
          />

          {/* Noise Overlay */}
          <div
            className="absolute inset-0 z-[1] opacity-[0.12] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
            }}
          />
        </div>

        <Navbar />

        <main className="flex-grow z-10 pt-24 md:pt-32 pb-12 px-4 md:px-6 max-w-7xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/commands" element={<Commands />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/invite" element={<InviteRedirect />} />
            <Route path="/server" element={<ServerRedirect />} />
            <Route path="/help" element={<Navigate to="/commands" replace />} />
          </Routes>
        </main>


        <Footer />
      </div>
    </Router>
  );
};

export default App;