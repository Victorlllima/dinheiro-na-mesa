import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import HardDataForm from './components/HardDataForm';
import Questionnaire from './components/Questionnaire';
import LoadingScreen from './components/LoadingScreen';
import ResultsScreen from './components/ResultsScreen';
import { AppStep, HardData, CalculationResult } from './types';
import { MAX_SCORE } from './constants';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.WELCOME);
  const [hardData, setHardData] = useState<HardData | null>(null);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const startApp = () => {
    setStep(AppStep.HARD_DATA);
  };

  const handleHardDataSubmit = (data: HardData) => {
    setHardData(data);
    setStep(AppStep.QUESTIONNAIRE);
  };

  const handleQuestionnaireComplete = (totalScore: number) => {
    if (!hardData) return;

    // Show loading screen first
    setStep(AppStep.CALCULATING);

    // Perform calculation after 5 seconds to match loading screen duration
    setTimeout(() => {
      // Calculation Engine (Business Logic)

      // 1. Maturity Index (0.1 to 1.0)
      let maturityIndex = totalScore / MAX_SCORE;
      if (maturityIndex < 0.1) maturityIndex = 0.1;

      // 2. Projections
      const potentialRevenue = hardData.annualRevenue / maturityIndex;
      const revenueGap = potentialRevenue - hardData.annualRevenue;

      // 3. Profit Analysis
      const currentProfit = hardData.annualRevenue * (hardData.profitMargin / 100);
      const profitGap = revenueGap * (hardData.profitMargin / 100);
      const potentialProfit = currentProfit + profitGap;

      const calculationResult: CalculationResult = {
        user: {
          name: hardData.name,
          company: hardData.companyName
        },
        scoreDetails: {
          rawScore: totalScore,
          maxPossible: MAX_SCORE,
          maturityIndex: maturityIndex,
          maturityPercentage: `${Math.round(maturityIndex * 100)}%`
        },
        financialAnalysis: {
          inputs: {
            reportedRevenue: hardData.annualRevenue,
            reportedMargin: hardData.profitMargin
          },
          projections: {
            potentialRevenue,
            potentialProfit
          },
          opportunityCost: {
            moneyOnTableRevenue: revenueGap,
            moneyOnTableProfit: profitGap
          }
        }
      };

      setResult(calculationResult);
      setStep(AppStep.RESULTS);
    }, 5000);
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      {step === AppStep.WELCOME && (
        <WelcomeScreen onStart={startApp} />
      )}

      {step === AppStep.HARD_DATA && (
        <HardDataForm onSubmit={handleHardDataSubmit} />
      )}

      {step === AppStep.QUESTIONNAIRE && (
        <Questionnaire onComplete={handleQuestionnaireComplete} />
      )}

      {step === AppStep.CALCULATING && (
        <LoadingScreen onComplete={() => {}} duration={5000} />
      )}

      {step === AppStep.RESULTS && result && (
        <ResultsScreen data={result} />
      )}
    </div>
  );
};

export default App;