import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in px-4 text-center">
      <h1 className="text-9xl md:text-[12rem] font-black text-white mb-4 tracking-tight select-none">
        404
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl mb-12 font-medium max-w-lg">
        The page you're looking for doesn't exist.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.08] text-gray-300 hover:text-white px-8 py-3.5 rounded-full transition-all duration-300 font-medium border border-white/5 hover:border-white/10"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>Go back</span>
        </button>
        
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-3 bg-white hover:bg-gray-200 text-black px-8 py-3.5 rounded-full transition-all duration-300 font-semibold"
        >
          <Home size={18} />
          <span>Home</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
