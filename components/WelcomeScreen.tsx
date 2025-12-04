import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

interface Props {
  onStart: () => void;
}

const WelcomeScreen: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center animate-fade-in bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="mb-8 p-4 bg-emerald-500/10 rounded-full ring-1 ring-emerald-500/30">
        <TrendingUp className="w-12 h-12 text-emerald-400" />
      </div>
      
      <h2 className="text-emerald-500 font-semibold tracking-wider text-sm uppercase mb-4">
        NAI - Negócios de Alto Impacto
      </h2>
      
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl">
        Descubra quanto dinheiro sua empresa está <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">deixando na mesa</span>.
      </h1>
      
      <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
        Uma consultoria digital de 3 minutos para diagnosticar a maturidade da sua gestão e identificar o faturamento oculto na sua operação.
      </p>
      
      <button 
        onClick={onStart}
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 focus:ring-offset-slate-900"
      >
        Começar Diagnóstico
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        <div className="absolute inset-0 rounded-lg ring-2 ring-white/10 group-hover:ring-white/20" />
      </button>

      <div className="mt-12 flex gap-4 text-xs text-slate-600">
        <span>Gestão</span> • <span>Estratégia</span> • <span>Lucratividade</span>
      </div>
    </div>
  );
};

export default WelcomeScreen;