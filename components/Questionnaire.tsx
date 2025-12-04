import React, { useState } from 'react';
import { Question, Option } from '../types';
import { QUESTIONS } from '../constants';

interface Props {
  onComplete: (totalScore: number) => void;
}

const Questionnaire: React.FC<Props> = ({ onComplete }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [animating, setAnimating] = useState(false);

  const currentQuestion: Question = QUESTIONS[currentQIndex];
  const progress = ((currentQIndex) / QUESTIONS.length) * 100;

  const handleOptionSelect = (option: Option) => {
    setAnimating(true);
    
    // Delay to show selection and transition
    setTimeout(() => {
      const newScore = score + option.points;
      
      if (currentQIndex < QUESTIONS.length - 1) {
        setScore(newScore);
        setCurrentQIndex(prev => prev + 1);
        setAnimating(false);
        window.scrollTo(0, 0);
      } else {
        onComplete(newScore);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen flex flex-col max-w-2xl mx-auto px-4 py-6">
      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-800 rounded-full mb-8 sticky top-0 z-10 overflow-hidden">
        <div 
          className="h-full bg-emerald-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className={`flex-1 flex flex-col justify-center transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
        <span className="text-emerald-500 font-bold mb-4 tracking-wider text-sm uppercase">
          Questão {currentQIndex + 1} de {QUESTIONS.length}
        </span>
        
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 leading-snug">
          {currentQuestion.text}
        </h3>

        <div className="space-y-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option)}
              className="w-full text-left p-5 md:p-6 rounded-xl bg-slate-800 border-2 border-transparent hover:border-emerald-500/50 hover:bg-slate-750 transition-all duration-200 group flex items-start"
            >
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 text-emerald-400 font-bold mr-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                {option.id}
              </span>
              <span className="text-slate-200 text-lg leading-relaxed">
                {option.text}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;