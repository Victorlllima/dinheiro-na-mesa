import React, { useState } from 'react';
import { HardData } from '../types';
import { ArrowRight, DollarSign, Percent, User, Briefcase } from 'lucide-react';

interface Props {
  onSubmit: (data: HardData) => void;
}

const HardDataForm: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [revenue, setRevenue] = useState('');
  const [margin, setMargin] = useState('');
  const [isValid, setIsValid] = useState(false);

  // Currency masking logic
  const handleRevenueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    if (!rawValue) {
      setRevenue('');
      validate('', margin, name, companyName);
      return;
    }
    const numberValue = parseInt(rawValue, 10) / 100;
    
    const formatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(numberValue);
    
    setRevenue(formatted);
    validate(formatted, margin, name, companyName);
  };

  const handleMarginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^\d.]/g, '');
    if (parseFloat(value) > 100) value = '100';
    setMargin(value);
    validate(revenue, value, name, companyName);
  };

  const validate = (r: string, m: string, n: string, c: string) => {
    setIsValid(!!r && !!m && !!n && !!c && parseFloat(m) > 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    // Parse revenue back to float
    const cleanRevenue = parseFloat(revenue.replace(/[^\d,]/g, '').replace(',', '.'));
    
    onSubmit({
      name,
      companyName,
      annualRevenue: cleanRevenue,
      profitMargin: parseFloat(margin)
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 max-w-xl mx-auto animate-fade-in-up">
      <div className="w-full mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Dados da Operação</h2>
        <p className="text-slate-400">Para calcularmos seu potencial, precisamos de alguns dados base.</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-6">
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <User className="w-4 h-4" /> Seu Nome
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              validate(revenue, margin, e.target.value, companyName);
            }}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder-slate-600"
            placeholder="Ex: João Silva"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> Nome da Empresa
          </label>
          <input
            type="text"
            required
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
              validate(revenue, margin, name, e.target.value);
            }}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder-slate-600"
            placeholder="Ex: Indústrias ABC"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <DollarSign className="w-4 h-4" /> Faturamento Anual (Aproximado)
          </label>
          <input
            type="text"
            required
            value={revenue}
            onChange={handleRevenueChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder-slate-600"
            placeholder="R$ 0,00"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <Percent className="w-4 h-4" /> Margem de Lucro Média (%)
          </label>
          <input
            type="number"
            required
            min="1"
            max="100"
            step="0.1"
            value={margin}
            onChange={handleMarginChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder-slate-600"
            placeholder="Ex: 20"
          />
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={`w-full flex items-center justify-center p-4 rounded-lg font-bold text-lg transition-all duration-300 ${
            isValid 
              ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-900/50' 
              : 'bg-slate-700 text-slate-500 cursor-not-allowed'
          }`}
        >
          Continuar
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default HardDataForm;