import React, { useRef } from 'react';
import { CalculationResult } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { AlertTriangle, TrendingUp, DollarSign, Calendar, Download } from 'lucide-react';
import html2canvas from 'html2canvas';

interface Props {
  data: CalculationResult;
}

const ResultsScreen: React.FC<Props> = ({ data }) => {
  const reportRef = useRef<HTMLDivElement>(null);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const chartData = [
    {
      name: 'Atual',
      Valor: data.financialAnalysis.inputs.reportedRevenue,
    },
    {
      name: 'Potencial',
      Valor: data.financialAnalysis.projections.potentialRevenue,
    },
  ];

  const handleDownload = async () => {
      if (reportRef.current) {
        // Add a slight delay to ensure fonts/styles are fully ready (optional but safer)
        const canvas = await html2canvas(reportRef.current, { 
          backgroundColor: '#0f172a',
          scale: 2 // Improve resolution
        });
        const link = document.createElement('a');
        link.download = `Diagnostico-NAI-${data.user.name.replace(/\s+/g, '-')}.png`;
        link.href = canvas.toDataURL();
        link.click();
      }
  };


  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in" ref={reportRef}>
        
        {/* Header */}
        <div className="text-center space-y-2 mb-10 pt-4">
          <h1 className="text-3xl md:text-4xl font-bold">Diagnóstico de Eficiência</h1>
          <p className="text-slate-400">NAI - Negócios de Alto Impacto</p>
        </div>

        {/* The Scare Card - Main Metric */}
        <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <AlertTriangle className="w-32 h-32 text-red-500" />
          </div>
          <div className="relative z-10">
            <h3 className="text-red-400 font-bold uppercase tracking-widest text-sm mb-2">Dinheiro na Mesa (Anual)</h3>
            <p className="text-4xl md:text-6xl font-extrabold text-white mb-2">
              {formatCurrency(data.financialAnalysis.opportunityCost.moneyOnTableRevenue)}
            </p>
            <p className="text-slate-300 max-w-xl">
              Este é o valor estimado de faturamento que sua empresa deixa de ganhar anualmente devido a ineficiências operacionais e de gestão.
            </p>
          </div>
        </div>

        {/* Secondary Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Profit Gap */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <DollarSign className="w-6 h-6 text-emerald-500" />
              </div>
              <h4 className="text-slate-300 font-semibold">Lucro Líquido Perdido</h4>
            </div>
            <p className="text-3xl font-bold text-emerald-400">
              {formatCurrency(data.financialAnalysis.opportunityCost.moneyOnTableProfit)}
            </p>
            <p className="text-sm text-slate-500 mt-2">Dinheiro limpo que não entra no seu bolso.</p>
          </div>

          {/* Maturity Score */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
             <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="text-slate-300 font-semibold">Maturidade de Gestão</h4>
            </div>
            <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-blue-400">{data.scoreDetails.maturityPercentage}</p>
                <p className="text-sm text-slate-500">do potencial máximo</p>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full mt-4">
                <div 
                    className="bg-blue-500 h-full rounded-full" 
                    style={{ width: data.scoreDetails.maturityPercentage }}
                />
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8">
            <h4 className="text-lg font-semibold text-white mb-6">Comparativo de Potencial</h4>
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="name" stroke="#94a3b8" />
                        <YAxis 
                            stroke="#94a3b8" 
                            tickFormatter={(value) => 
                                new Intl.NumberFormat('pt-BR', { notation: "compact", compactDisplay: "short" }).format(value)
                            } 
                        />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                            formatter={(value: number) => formatCurrency(value)}
                        />
                        <Bar dataKey="Valor" radius={[4, 4, 0, 0]}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === 0 ? '#64748b' : '#10b981'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Insights */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h4 className="text-white font-semibold mb-2">Diagnóstico NAI</h4>
            <p className="text-slate-300 leading-relaxed">
                Você está operando a <strong className="text-white">{data.scoreDetails.maturityPercentage}</strong> da sua capacidade. 
                Seu modelo atual desperdiça recursos e oportunidades que poderiam elevar seu patamar de faturamento para 
                <strong className="text-emerald-400"> {formatCurrency(data.financialAnalysis.projections.potentialRevenue)}</strong> sem necessariamente aumentar custos fixos, 
                apenas corrigindo processos, vendas e estratégia.
            </p>
        </div>

        {/* TEXTUAL REPORT - NEW SECTION */}
        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-white uppercase border-b border-slate-600 pb-4">
                QUANTO DINHEIRO VOCÊ ESTÁ DEIXANDO NA MESA?
            </h2>

            <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                    <span className="text-emerald-400 font-medium">{data.user.name}</span>, toda empresa tem um potencial inexplorado. E o objetivo da ferramenta DINHEIRO
                    NA MESA é exatamente te mostrar esse potencial e as oportunidades ocultas da <span className="text-emerald-400 font-medium">{data.user.company}</span>, para potencializar seu faturamento, seu LUCRO e seu IMPACTO no mercado.
                </p>

                <p>
                    Com base no formulário que você preencheu, buscamos avaliar o cenário da sua
                    empresa e oportunidades de melhoria nas seguintes áreas: ESTRUTURA E PROCESSOS DA
                    EMPRESA, PROCESSOS COMERCIAIS, AÇÕES PARA VENDER MAIS, AÇÕES PARA ATRAIR
                    MAIS CLIENTES e AÇÕES PARA GERAR MAIS VALOR.
                </p>

                <p>
                    O fato é que a implementação de algumas ações simples tem a capacidade de
                    aumentar — e muito! — o resultado da sua empresa! Em nossos cálculos, a não
                    implementação de ações nas ausências do seu diagnóstico indicam que:
                </p>

                <p className="bg-slate-900/50 p-4 border-l-4 border-red-500 text-white font-medium rounded-r-lg">
                    Você está deixando <span className="text-red-400">{formatCurrency(data.financialAnalysis.opportunityCost.moneyOnTableRevenue)}</span> de FATURAMENTO e <span className="text-red-400">{formatCurrency(data.financialAnalysis.opportunityCost.moneyOnTableProfit)}</span> de LUCRO anual na mesa!
                </p>

                <div className="space-y-6 mt-8">
                    <p>Com essa informação, entenda que novas ações, novos protocolos e novas decisões
                    precisarão ser tomadas. Antes de decidir o que fazer, reflita e descreva:</p>

                    <div className="space-y-2">
                        <label className="text-white block font-medium">O que você poderia fazer a mais com esse dinheiro na sua empresa?</label>
                        <textarea className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:ring-1 focus:ring-emerald-500 outline-none h-24 resize-none" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-white block font-medium">Qual impacto você está deixando de gerar nas pessoas e, por consequência, no mundo?</label>
                        <textarea className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:ring-1 focus:ring-emerald-500 outline-none h-24 resize-none" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-white block font-medium">O que (de verdade) está te impedindo de implementar ações nessas áreas?</label>
                        <textarea className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:ring-1 focus:ring-emerald-500 outline-none h-24 resize-none" />
                    </div>
                </div>

                <p className="pt-4">
                    Com base nessa análise, talvez você já tenha percebido que você precisa DECIDIR e
                    MUDAR sua realidade para resgatar o dinheiro que está deixando na mesa. Para que isso
                    aconteça, você precisa estar aberto a conhecer novos caminhos, investir mais em você nos
                    aspectos mentais, físicos e principalmente buscando tornar-se sua versão de máximo
                    potencial.
                </p>

                <p>
                    E se você está lendo até aqui é um sinal de que realmente tem disposição para mudar
                    e resgatar o SEU DINHEIRO NA MESA. Se depender de nós, você sairá daqui já com um
                    PLANO para sacar esse dinheiro na mesa.
                </p>

                <p className="font-bold text-white text-lg">
                    Vamos juntos?
                </p>
            </div>
        </div>

         {/* CTA Section */}
         <div className="pt-4 flex flex-col gap-4 pb-12">
             <a 
                href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20fiz%20o%20diagn%C3%B3stico%20Dinheiro%20na%20Mesa%20e%20quero%20agendar%20uma%20consultoria."
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-900/40"
             >
                <Calendar className="w-5 h-5" />
                Agendar Consultoria Estratégica
             </a>
             
             <button 
                onClick={handleDownload}
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all border border-slate-700"
             >
                <Download className="w-5 h-5" />
                Baixar Relatório Completo (Imagem)
             </button>
         </div>
         
         <p className="text-center text-xs text-slate-600 pb-8">
            *Este diagnóstico é uma simulação baseada em benchmarks de mercado.
         </p>

      </div>
    </div>
  );
};

export default ResultsScreen;