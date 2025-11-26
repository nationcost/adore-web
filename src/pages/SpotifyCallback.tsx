import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, Check } from 'lucide-react';

const SpotifyCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [code, setCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // 1. Read search parameters & check for error
    const errorParam = searchParams.get('error');
    if (errorParam) {
        setError(searchParams.get('error_description') || "An unknown error occurred.");
        return;
    }

    // 2. Check for code
    let authCode = searchParams.get('code');
    const state = searchParams.get('state');

    // 3. Check for state if code is missing
    if (!authCode && state && state.length > 64) {
        authCode = state.substring(64);
    }

    // 4. Final validation
    if (authCode) {
        setCode(authCode);
    } else {
        // Only show error if we've finished checking and found nothing
        if (!errorParam) {
             setError("No authorization code found.");
        }
    }
  }, [searchParams]);

  const handleCopy = () => {
    if (code) {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in px-4 text-center">
        
        {error ? (
           <>
             <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tight select-none">Failed</h1>
             <p className="text-gray-400 text-lg md:text-xl mb-12 font-medium max-w-lg">{error}</p>
           </>
        ) : code ? (
           <>
             <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tight select-none">Authorized</h1>
             <p className="text-gray-400 text-lg md:text-xl mb-10 font-medium">Return back to discord to continue!</p>
             
             {/* Minimal Code Display - More Rounded */}
             <div className="bg-white/[0.03] border border-white/5 rounded-[2rem] pl-6 pr-2 py-2 mb-10 max-w-md w-full flex items-center justify-between gap-4 shadow-xl shadow-black/20">
                <code className="text-sm font-mono text-gray-400 truncate flex-1 text-left">
                    {code}
                </code>
                <button 
                    onClick={handleCopy}
                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                        copied ? 'bg-green-500 text-white' : 'bg-white/10 text-gray-400 hover:text-white hover:bg-white/20'
                    }`}
                    title="Copy Code"
                >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
             </div>
           </>
        ) : (
             <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight animate-pulse select-none">Verifying...</h1>
        )}

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

export default SpotifyCallback;