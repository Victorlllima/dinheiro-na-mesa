export interface Option {
  id: string; // 'A', 'B', 'C', 'D'
  text: string;
  points: number;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface HardData {
  name: string;
  companyName: string; // Added for completeness based on output mock
  annualRevenue: number;
  profitMargin: number; // 0-100
  email?: string;
  phone?: string;
}

export interface CalculationResult {
  user: {
    name: string;
    company: string;
  };
  scoreDetails: {
    rawScore: number;
    maxPossible: number;
    maturityIndex: number;
    maturityPercentage: string;
  };
  financialAnalysis: {
    inputs: {
      reportedRevenue: number;
      reportedMargin: number;
    };
    projections: {
      potentialRevenue: number;
      potentialProfit: number;
    };
    opportunityCost: {
      moneyOnTableRevenue: number;
      moneyOnTableProfit: number;
    };
  };
}

export enum AppStep {
  WELCOME = 'WELCOME',
  HARD_DATA = 'HARD_DATA',
  QUESTIONNAIRE = 'QUESTIONNAIRE',
  LEAD_GEN = 'LEAD_GEN', // Optional based on PRD, combining with Results logic if needed
  RESULTS = 'RESULTS'
}