import { Question } from './types';

export const MAX_SCORE = 80;

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Sua empresa tem uma VISÃO DE FUTURO CLARA e um plano estratégico de como alcançar essa visão?",
    options: [
      { id: 'A', text: "Não temos visão de futuro. A empresa vive um dia após o outro e não possui um direcionamento preciso.", points: 1 },
      { id: 'B', text: "A empresa possui uma ideia da visão de futuro pretendida, porém não temos um direcionamento objetivo e um processo definido de como alcançar essa visão.", points: 2 },
      { id: 'C', text: "A empresa possui visão de futuro para os próximos anos e a meta de faturamento anual é baseada na visão que queremos alcançar.", points: 3 },
      { id: 'D', text: "A empresa possui visão de futuro e um planejamento estratégico mensal, semestral e anual de como alcançar a visão pretendida.", points: 4 },
    ]
  },
  {
    id: 2,
    text: "Fale um pouco sobre seu time. Sua equipe recebe direcionamento e treinamento constante para garantir a melhoria do processo já existente e uma melhor qualidade do trabalho executado?",
    options: [
      { id: 'A', text: "Não temos cultura de treinamento constante com a equipe, reuniões periódicas ou direcionamento específico. A equipe passa todo o tempo no operacional.", points: 1 },
      { id: 'B', text: "Fazemos uma reunião e confraternização anual, porém não fazemos treinamentos frequentes ou acompanhamento da produtividade da equipe.", points: 2 },
      { id: 'C', text: "A empresa possui uma rotina de reuniões periódicas e as reuniões têm um foco específico em ajustar e direcionar a execução da parte operacional, sem analisar quesitos táticos ou estratégicos.", points: 3 },
      { id: 'D', text: "A empresa possui rotinas de treinamento constante com a equipe, realizando ações para desenvolvimento pessoal e profissional, além de direcionar constantemente para melhoria contínua.", points: 4 },
    ]
  },
  {
    id: 3,
    text: "Sua equipe sabe o que precisa fazer, ou apenas executa tudo no automático?",
    options: [
      { id: 'A', text: "A equipe não possui um direcionamento claro de atribuições, e muitos cargos se confundem na execução das tarefas. Há vários donos para um único processo, o que dificulta a análise de métricas de desempenho de cada setor.", points: 1 },
      { id: 'B', text: "A equipe possui um direcionamento verbal do que é esperado dentre suas atribuições, porém não há um acompanhamento ou direcionamento para garantir a execução adequada ou avaliar o desempenho do time.", points: 2 },
      { id: 'C', text: "A equipe possui atribuições bem definidas do que precisam fazer diariamente, porém o processo não é documentado e não é utilizado como base para avaliação de desempenho do time.", points: 3 },
      { id: 'D', text: "A equipe possui um direcionamento claro das atividades por meio de procedimentos operacionais padrão, guia de atribuições e responsabilidades, que são utilizados como base para a avaliação de desempenho do time.", points: 4 },
    ]
  },
  {
    id: 4,
    text: "Você forma a liderança da sua equipe para que possa te auxiliar no crescimento da empresa?",
    options: [
      { id: 'A', text: "Não. Hoje sou o(a) único(a) líder da minha empresa e a atividade da empresa depende exclusivamente da minha presença e meu trabalho.", points: 1 },
      { id: 'B', text: "Hoje tenho um gerente, porém ainda assim a empresa depende da minha presença e minha liderança para funcionar e performar bem.", points: 2 },
      { id: 'C', text: "Tenho uma liderança em processo de formação e treinamento para assumir funções táticas que hoje ainda são executadas por mim na empresa.", points: 3 },
      { id: 'D', text: "Tenho uma liderança bem formada e sei que se eu não estiver na empresa os processos continuarão funcionando bem, pois a equipe será bem conduzida pela liderança que eu formei.", points: 4 },
    ]
  },
  {
    id: 5,
    text: "A empresa possui metas de faturamento diárias, semanais e mensais? Existe uma projeção para a meta de faturamento anual para 2025?",
    options: [
      { id: 'A', text: "A empresa possui meta, porém não possui o desdobramento da meta, projeções e rotinas para acompanhamento.", points: 1 },
      { id: 'B', text: "A empresa possui meta, possui a projeção, mas não possui o desdobramento e acompanhamento das rotinas para alcançar.", points: 2 },
      { id: 'C', text: "A empresa possui meta, possui a projeção, possui o desdobramento, porém não possui as ferramentas de acompanhamento para alcançar os resultados.", points: 3 },
      { id: 'D', text: "A empresa possui meta, projeção, desdobramento e as ferramentas necessárias de acompanhamento para alcançar os resultados.", points: 4 },
    ]
  },
  {
    id: 6,
    text: "A empresa possui metas pré-estabelecidas e um plano de ação prático para alcançar as metas desejadas?",
    options: [
      { id: 'A', text: "A empresa não possui metas pré-estabelecidas.", points: 1 },
      { id: 'B', text: "A empresa possui metas pré-estabelecidas, porém não possui o plano de ação e o alinhamento para performance.", points: 2 },
      { id: 'C', text: "A empresa possui metas pré-estabelecidas, possui o plano de ação, porém não possui o alinhamento da equipe para performance.", points: 3 },
      { id: 'D', text: "A empresa possui metas pré-estabelecidas, plano de ação e alinhamento junto com a equipe comercial.", points: 4 },
    ]
  },
  {
    id: 7,
    text: "Estrutura de captação de leads (Redes exploradas, Formatos do tráfego, anúncios, Público-alvo das campanhas)?",
    options: [
      { id: 'A', text: "A empresa não possui estrutura de captação de leads, campanhas, formato de tráfego, anuncios ou redes sociais.", points: 1 },
      { id: 'B', text: "A empresa posssui estrutura de captação de leads não estruturada, sem anúncios direcionados, sem modelo de campanhas ou ativação pela rede social própria.", points: 2 },
      { id: 'C', text: "A empresa possui captação de leads estruturada, com anúncios direcionados, sem modelo de campanha de validação, porém sem resultados expressivos.", points: 3 },
      { id: 'D', text: "A empresa possui captação de leads estruturada, com anúncios direcionados, com modelos de campanhas para validação e com resultados positivos.", points: 4 },
    ]
  },
  {
    id: 8,
    text: "Processo comercial do atendimento de leads?",
    options: [
      { id: 'A', text: "A empresa não possui um processo comercial de atendimento bem definido.", points: 1 },
      { id: 'B', text: "A empresa possui um processo comercial de forma 'prática', sem documentação comercial, sem mapeamento de fluxos e sem definição das rotinas comerciais.", points: 2 },
      { id: 'C', text: "A empresa possui um processo comercial estruturado, com documentação e mapeamento dos fluxos comerciais, sem definição das rotinas.", points: 3 },
      { id: 'D', text: "A empresa possui um processo comercial bem definido, com documentação, fluxos e rotinas comerciais claros e em plena execução.", points: 4 },
    ]
  },
  {
    id: 9,
    text: "Fale sobre o faturamento bruto e o lucro líquido da empresa nos últimos 12 meses?",
    options: [
      { id: 'A', text: "A empresa não possui resultados positivos.", points: 1 },
      { id: 'B', text: "A empresa está com o resultado empatado.", points: 2 },
      { id: 'C', text: "A empresa está com o resultado positivo, porém a margem de lucro ainda é baixa.", points: 3 },
      { id: 'D', text: "A empresa está com o resultado positivo e pode expandir.", points: 4 },
    ]
  },
  {
    id: 10,
    text: "A empresa realiza ações para vender mais aos clientes atuais da base?",
    options: [
      { id: 'A', text: "Não realizamos ações específicas para vender mais dentro da nossa base de clientes", points: 1 },
      { id: 'B', text: "Já realizamos no passado algumas ações e promoções para clientes, mas não fazemos isso de forma estruturada.", points: 2 },
      { id: 'C', text: "Já realizamos ações para vender novos produtos/serviços aos clientes da base, porém sem alinhamento do processo junto ao time, o que não trouxe resultados satisfatórios", points: 3 },
      { id: 'D', text: "Frequentemente realizamos ações para vender mais aos clientes já existentes na base da empresa, com estratégias bem definidas junto ao time comercial e obtendo resultados satisfatórios.", points: 4 },
    ]
  },
  {
    id: 11,
    text: "O ticket médio de venda dos produtos/serviços da empresa hoje é satisfatório?",
    options: [
      { id: 'A', text: "Não, estamos trabalhando com ticket médio abaixo do mercado ou abaixo do que pretendíamos trabalhar.", points: 1 },
      { id: 'B', text: "O ticket médio é satisfatório, porém não possui perspectiva de aumento.", points: 2 },
      { id: 'C', text: "O ticket médio é satisfatório, porém não há análise de precificação detalhada a fim de saber exatamente qual a margem em cada produto/serviço existente.", points: 3 },
      { id: 'D', text: "O ticket médio é satisfatório e foi estabelecido com base em estudo de precificação, garantindo uma margem de lucro líquida positiva e saudável para a empresa.", points: 4 },
    ]
  },
  {
    id: 12,
    text: "Você costuma refazer a oferta de produtos/serviços para potenciais clientes que disseram não anteriormente de forma estruturada no seu processo comercial?",
    options: [
      { id: 'A', text: "Não. Vendo apenas para novos clientes que surgem diariamente na empresa.", points: 1 },
      { id: 'B', text: "Em épocas de baixa nas vendas busco resgatar clientes antigos para comprarem novamente, porém não tenho processos e métricas para estabelecer o resultado dessa ação.", points: 2 },
      { id: 'C', text: "Buscamos constantemente resgatar potenciais clientes antigos que não compraram, mas não temos um processo diário e estruturado para trabalhar estes resgates.", points: 3 },
      { id: 'D', text: "Fazemos resgates diários de potenciais clientes que não compraram, a fim de entender o motivo da objeção e trabalhar na reversão, e este processo é monitorado com constância para garantir resultados positivos nos resgates.", points: 4 },
    ]
  },
  {
    id: 13,
    text: "Você tem uma pessoa ou equipe de MARKETING que cuida das redes sociais da sua empresa e prestam conta dos resultados com indicadores claros?",
    options: [
      { id: 'A', text: "Não tenho equipe de marketing e hoje faço por conta própria algumas postagens no instagram.", points: 1 },
      { id: 'B', text: "Não tenho equipe de marketing, mas tenho uma pessoa internamente na empresa que alimenta as redes sociais (especialmente instagrem)", points: 2 },
      { id: 'C', text: "Tenho uma equipe de marketing externo que cuida das redes sociais, mas não consigo metrificar os resultados produzidos e não tenho padrão de referência para saber a qualidade do trabalho.", points: 3 },
      { id: 'D', text: "Tenho equipe de marketing externo que cuida das redes sociais (todas as redes, incluindo o TikTok) e presta conta dos resultados constantemente, de modo que sinto a eficácia e segurança no trabalho realizado.", points: 4 },
    ]
  },
  {
    id: 14,
    text: "Você possui um programa estruturado de INDICAÇÕES pelos clientes e parceiros, com processo descrito, responsáveis e rotinas estabelecidas para avaliação?",
    options: [
      { id: 'A', text: "Não fazemos campanhas de indicação.", points: 1 },
      { id: 'B', text: "Fazemos campanhas de indicações pontuais em épocas comemorativas, como por exemplo dia das mães e dia dos pais.", points: 2 },
      { id: 'C', text: "Fazemos campanhas de indicações de forma eventual e sem um programa estruturado. Por vezes as indicações recebidas não possuem um acompanhamento preciso para avaliar a conversão.", points: 3 },
      { id: 'D', text: "Fazemos campanhas de indicações constantes e mensais a fim de garantir a retroalimentação da base de clientes com leads qualificados pelas indicações, medindo a conversão desses leads por meio de processo estruturado.", points: 4 },
    ]
  },
  {
    id: 15,
    text: "Você capta contatos de potenciais clientes oferecendo um BENEFÍCIO em troca, principalmente em campanhas online e eventos?",
    options: [
      { id: 'A', text: "Não faço campanhas online para captação de clientes.", points: 1 },
      { id: 'B', text: "Faço ações eventuais de captação de clientes como sorteios no instagram.", points: 2 },
      { id: 'C', text: "Faço ações estruturadas de captação de clientes por meio das redes sociais e ofereço benefícios aos clientes por meio de tais ações.", points: 3 },
      { id: 'D', text: "Faço ações constantes e estruturadas de captação de clientes por meio das redes sociais, oferecendo benefícios em troca de tais indicações e metrificando o resultado dos leads que chegam por meio.", points: 4 },
    ]
  },
  {
    id: 16,
    text: "Você costuma palestrar e/ou patrocinar eventos para partilhar sobre seus produtos e serviços, conforme estratégia comercial clara e documentada?",
    options: [
      { id: 'A', text: "Não fazemos palestras e patrocínio de eventos.", points: 1 },
      { id: 'B', text: "Faço palestras para estabelecer um nome no mercado no meu segmento, porém não utilizo as palestras de forma clara e estruturada.", points: 2 },
      { id: 'C', text: "Patrocinamos eventos de forma ocasional, porém sem estabelecer uma estratégia comercial específica para os eventos que são patrocinados pela empresa.", points: 3 },
      { id: 'D', text: "Fazemos palestras e patrocínio de eventos sempre de forma intencional e utilizando uma estratégia comercial para vender e faturar mais em cada um dos eventos em que palestramos ou patrocinamos.", points: 4 },
    ]
  },
  {
    id: 17,
    text: "Você organiza eventos onde os clientes terão maior interação com sua marca e atrairão novos clientes, reforçando seu posicionamento?",
    options: [
      { id: 'A', text: "Não costumamos fazer eventos para os clientes devido ao custo de investimento.", points: 1 },
      { id: 'B', text: "Costumamos fazer eventos apenas em datas comemorativas, como por exemplo uma comemoração de final de ano para os clientes.", points: 2 },
      { id: 'C', text: "Costumamos fazer eventos para atrair um senso de comunidade junto aos clientes e aumentar a interação deles com a marca.", points: 3 },
      { id: 'D', text: "Costumamos fazer eventos para gerar mais valor aos clientes, promovendo um senso de comunidade e metrificando o resultado gerado por tais ações nas vendas destes clientes e na atração de novos clientes.", points: 4 },
    ]
  },
  {
    id: 18,
    text: "Você já revisou as necessidades dos clientes, criando produtos ligeiramente diferentes e de MAIOR VALOR, para atender melhor uma parcela importante dos seus clientes?",
    options: [
      { id: 'A', text: "Não, tenho apenas uma categoria de produto/serviço oferecida igualmente a todos os meus clientes.", points: 1 },
      { id: 'B', text: "Nunca revisei as necessidades dos clientes, mas já ofereci produtos de categorias distintas a fim de aumentar o valor percebido nos serviços.", points: 2 },
      { id: 'C', text: "Já revisei as necessidades dos clientes, mas não consegui estruturar um produto/serviço ou algo de maior valor para oferecer a essa base, criando uma nova categoria de clientes.", points: 3 },
      { id: 'D', text: "Já revisei as necessidades dos clientes e estruturei, com base nesta análise, produtos de maior valor para uma parcela mais 'premium' dos clientes da minha base, e isto gerou resultados positivos em termos de aumento de vendas.", points: 4 },
    ]
  },
  {
    id: 19,
    text: "Você tem sua PERSONA definida? Sabe exatamente para quem sua marca está se comunicando e alinha as estratégias de produto e marketing para essa persona?",
    options: [
      { id: 'A', text: "Não tenho uma persona definida. Meu produto/serviço foi estruturado com base em uma dor que perebi na minha vida pessoal.", points: 1 },
      { id: 'B', text: "Já fiz pesquisas sobre como definir minha persona, mas nunca consegui chegar a uma conclusão exata ou entender de que forma isso poderia ser aplicado na realidade da empresa.", points: 2 },
      { id: 'C', text: "Já tenho uma persona definida para minha empresa, mas não consegui ainda utilizar essa informação de forma assertiva para agregar mais valor ao meu negócio.", points: 3 },
      { id: 'D', text: "Já tenho uma persona definida e toda a esteira de produtos/serviços da empresa é baseada na persona e na melhor oferta de modo a gerar mais valor para minha persona.", points: 4 },
    ]
  },
  {
    id: 20,
    text: "Você tem se conectado de forma intencional com pessoas que possam abrir sua visão, te dar oportunidades, gerar acesso a novos ambientes e te levar para o próximo nível?",
    options: [
      { id: 'A', text: "Não, acredito que eu posso desenvolver meu negócio sozinho sem o auxílio de parceiros estratégicos.", points: 1 },
      { id: 'B', text: "Busco estar em rodas de empresários e grupos, mas não tenho conhecimento ou intencionalidade suficiente para me posicionar da forma certa.", points: 2 },
      { id: 'C', text: "Busco novos ambientes e acesso a pessoas estratégicas, mas uma vez que obtenho o acesso, não sei a melhor forma de conduzir este relacionamento a fim de gerar resultados reais para minha empresa.", points: 3 },
      { id: 'D', text: "Sou intencional em todos os meus relacionamentos e gero resultados reais através deles, aumentando meu índice de valor pessoal e metrificando de forma objetiva estes resultados.", points: 4 },
    ]
  }
];