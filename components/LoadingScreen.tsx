import React, { useEffect } from 'react';
import { Loader } from 'lucide-react';

interface Props {
  onComplete: () => void;
  duration?: number; // Duration in milliseconds
}

const LoadingScreen: React.FC<Props> = ({ onComplete, duration = 5000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete, duration]);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 animate-fade-in">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Loading Animation */}
        <div className="flex justify-center">
          <div className="relative w-24 h-24">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 border-4 border-slate-800 border-t-emerald-500 rounded-full animate-spin" />
            {/* Middle rotating ring (slower) */}
            <div
              className="absolute inset-2 border-4 border-slate-800 border-b-emerald-400 rounded-full"
              style={{
                animation: 'spin 3s linear infinite reverse'
              }}
            />
            {/* Center dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Calculando quanto dinheiro você está deixando na mesa
          </h2>
          <p className="text-slate-400 text-sm">
            Analisando seus dados e gerando seu diagnóstico personalizado...
          </p>
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
              style={{
                animation: 'progress 5s ease-in-out forwards'
              }}
            />
          </div>
          <p className="text-xs text-slate-500">Processando...</p>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes progress {
          0% { width: 0%; }
          50% { width: 80%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
