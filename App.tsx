
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Background from './components/Background';
import Home from './pages/Home';
import Commands from './pages/Commands';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Authorized from './pages/Authorized';
import SpotifyCallback from './pages/SpotifyCallback';
import Profile from './pages/Profile';
import { SpotlightProvider } from './components/SpotlightCard';

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
      '/me': 'adore | me',
    };
    document.title = titles[pathname] || 'adore';
  }, [pathname]);
  return null;
};

// Layout for the main website pages (Home, Commands, etc.)
const MainLayout: React.FC = () => {
  return (
    <SpotlightProvider>
      <div 
        className="min-h-screen flex flex-col relative overflow-x-hidden text-white selection:bg-white selection:text-black font-sans antialiased"
      >
          
          {/* Shared Background */}
          <Background />

          <Navbar />
          
          <main className="flex-grow z-10 pt-24 md:pt-32 pb-12 px-4 md:px-6 max-w-7xl mx-auto w-full">
            <Outlet />
          </main>

          <Chatbot />
          <Footer />
      </div>
    </SpotlightProvider>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* All Routes wrapped in Layout to ensure consistent Design */}
        <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/commands" element={<Commands />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/authorized" element={<Authorized />} />
            <Route path="/spotify-callback" element={<SpotifyCallback />} />
            <Route path="/invite" element={<InviteRedirect />} />
            <Route path="/server" element={<ServerRedirect />} />
            <Route path="/help" element={<Navigate to="/commands" replace />} />
        </Route>

        {/* Standalone Profile Page - No Layout */}
        <Route path="/me" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;