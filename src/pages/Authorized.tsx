import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Authorized: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const error = searchParams.get('error');
  const errorDescription = searchParams.get('error_description');

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in px-4 text-center">
        
        {/* Title - Solid White */}
        <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tight select-none">
            {error ? 'Failed' : 'Authorized'}
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl mb-12 font-medium max-w-lg leading-relaxed">
            {error ? (errorDescription || "An error occurred during authorization.") : "Return back to discord to continue!"}
        </p>

        {/* Minimal Go Back Button - Fully Rounded */}
        <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.08] text-gray-300 hover:text-white px-8 py-3.5 rounded-full transition-all duration-300 font-medium border border-white/5 hover:border-white/10 shadow-lg shadow-black/20"
        >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Go back</span>
        </button>
    </div>
  );
};

export default Authorized;