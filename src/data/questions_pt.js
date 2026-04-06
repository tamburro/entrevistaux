export const categories_pt = {
  behavioral: {
    id: 'behavioral',
    title: 'Comportamental',
    description: 'Fale-me sobre uma vez em que...',
    icon: 'MessageCircle',
    color: 'primary',
    tip: 'Use o método STAR: Situação, Tarefa, Ação, Resultado.',
  },
  portfolio: {
    id: 'portfolio',
    title: 'Revisão de Portfólio',
    description: 'Me guie por um projeto...',
    icon: 'Briefcase',
    color: 'accent',
    tip: 'Estruture sua resposta: Contexto → Problema → Processo → Resultado → Aprendizados.',
  },
  'design-challenge': {
    id: 'design-challenge',
    title: 'Desafio de Design',
    description: 'Como você desenharia...',
    icon: 'Lightbulb',
    color: 'warning',
    tip: 'Pense em voz alta. Esclareça restrições, explore os usuários, idealize e então priorize.',
  },
  technical: {
    id: 'technical',
    title: 'Técnica',
    description: 'Explique como você implementaria...',
    icon: 'Code',
    color: 'primary',
    tip: 'Pense em voz alta. Esclareça os requisitos, discuta compromissos e considere casos extremos.',
  },
  'system-design': {
    id: 'system-design',
    title: 'Design de Sistema',
    description: 'Desenhe a arquitetura para...',
    icon: 'Network',
    color: 'accent',
    tip: 'Comece com os requisitos, estime a escala, desenhe os componentes e escale os desafios.',
  },
  'case-study': {
    id: 'case-study',
    title: 'Estudo de Caso',
    description: 'Como você abordaria este problema de produto...',
    icon: 'FileText',
    color: 'accent',
    tip: 'Estrutura: entenda o problema → defina métricas → crie soluções → priorize → execute o plano.',
  },
  strategy: {
    id: 'strategy',
    title: 'Estratégia',
    description: 'Qual seria sua estratégia para...',
    icon: 'Compass',
    color: 'warning',
    tip: 'Pense sobre mercado, usuários, modelo de negócios e cenário competitivo.',
  },
}

export const questions_pt = {
  'product-designer': {
    behavioral: [
      { id: 'pd-b1', question: 'Fale-me sobre uma vez que você teve que rejeitar o pedido de um stakeholder. Como você lidou com isso?', followUps: ['Qual foi o resultado?', 'Você lidaria diferente hoje?', 'Como ele reagiu inicialmente?'], keywords: ['resolução de conflitos'] },
      { id: 'pd-b2', question: 'Descreva uma situação em que você teve que tomar uma decisão de design com dados incompletos.', followUps: ['Como validou depois?', 'Quais os riscos?', 'O que faria com mais tempo?'], keywords: ['tomada de decisão'] },
      { id: 'pd-b3', question: 'Fale sobre uma vez em que recebeu críticas ao seu design. Como você respondeu?', followUps: ['O feedback mudou sua abordagem?', 'Pode dar um exemplo específico?'], keywords: ['feedback'] }
    ],
    portfolio: [
      { id: 'pd-p1', question: 'Guie-me por um projeto do qual você mais se orgulha. Qual foi o papel e impacto?', followUps: ['Qual foi a parte mais difícil?', 'Como você mediu o impacto?'], keywords: ['impacto'] },
      { id: 'pd-p2', question: 'Mostre-me um projeto onde você teve que simplificar um fluxo de usuário complexo.', followUps: ['Como identificou a complexidade?', 'Qual foi a experiência antes e depois?'], keywords: ['simplificação'] }
    ],
    'design-challenge': [
      { id: 'pd-d1', question: 'Como você redesenharia a experiência de integração (onboarding) para um aplicativo de produtividade com 60% de abandono na primeira semana?', followUps: ['Que métricas você acompanharia?', 'Como priorizaria as melhorias?'], keywords: ['onboarding'] },
      { id: 'pd-d2', question: 'Projete um recurso que ajuda equipes remotas a construir conexões sociais mais fortes.', followUps: ['Como você validaria a demanda?', 'Como você mediri a conexão?'], keywords: ['trabalho remoto'] }
    ]
  },
  'ux-ui-designer': {
    behavioral: [
      { id: 'ux-b1', question: 'Fale-me sobre uma vez que você defendeu o usuário enquanto a equipe queria pegar um atalho.', followUps: ['Como você defendeu sua ideia?', 'Qual foi o resultado?'], keywords: ['defesa do usuário'] },
      { id: 'ux-b2', question: 'Descreva uma situação em que teve que redesenhar uma funcionalidade adorada pelos usuários, mas que tinha métricas de usabilidade ruins.', followUps: ['Como você equilibrou sentimento x dados?', 'Como os usuários reagiram?'], keywords: ['redesign'] }
    ],
    portfolio: [
      { id: 'ux-p1', question: 'Guie-me por um fluxo de usuários que você desenhou do zero. Como lidou com a arquitetura de informação?', followUps: ['Que ferramentas utilizou?', 'Como validou o fluxo?'], keywords: ['ux flows'] },
      { id: 'ux-p2', question: 'Mostre-me um projeto de design responsivo. Como tratou a transição entre dispositivos?', followUps: ['Qual foi a estratégia mobile-first?', 'Qual componente foi mais difícil?'], keywords: ['responsivo'] }
    ],
    'design-challenge': [
      { id: 'ux-d1', question: 'Como faria o redesign de um fluxo de checkout com 40% de taxa de abandono do carrinho?', followUps: ['O que pesquisaria primeiro?', 'Que sinais de confiança adicionaria?'], keywords: ['checkout'] },
      { id: 'ux-d2', question: 'Projete uma página de configurações com 50+ opções. Como a tornaria utilizável?', followUps: ['Como organizaria as opções?', 'Como trataria as opções padrão?'], keywords: ['configurações'] }
    ]
  },
  'visual-designer': {
    behavioral: [
      { id: 'vd-b1', question: 'Conte-me sobre uma vez em que teve que adaptar uma identidade de marca para uma nova plataforma.', followUps: ['Quais foram as restrições?', 'Como manteve a consistência?'], keywords: ['marca'] }
    ],
    portfolio: [
      { id: 'vd-p1', question: 'Guie-me por uma identidade de marca que você criou. Qual foi o seu processo do briefing à entrega?', followUps: ['Como definiu a personalidade?', 'Como apresentou as opções?'], keywords: ['identidade'] }
    ],
    'design-challenge': [
      { id: 'vd-d1', question: 'Crie uma identidade visual para uma marca de moda sustentável focada na Geração Z.', followUps: ['Que referências usaria?', 'Qual abordagem tipográfica usaria?'], keywords: ['marca sustentável'] }
    ]
  },
  'ux-researcher': {
    behavioral: [
      { id: 'ur-b1', question: 'Fale-me sobre uma vez que suas descobertas contrariaram o que a equipe acreditava.', followUps: ['Como apresentou os achados?', 'Houve resistência?'], keywords: ['persuasão'] }
    ],
    portfolio: [
      { id: 'ur-p1', question: 'Guie-me por um projeto de pesquisa que teve grande impacto na direção do produto.', followUps: ['Qual foi o plano de pesquisa?', 'Como analisou os dados?'], keywords: ['impacto de pesquisa'] }
    ],
    'design-challenge': [
      { id: 'ur-d1', question: 'Você está ingressando em uma equipe B2B de analytics nova. Como estabeleceria a prática de pesquisa do zero?', followUps: ['O que priorizaria nos primeiros 30 dias?', 'Que ferramentas precisaria?'], keywords: ['pesquisa B2B'] }
    ]
  },
  'fullstack-developer': {
    behavioral: [
      { id: 'fs-b1', question: 'Conte-me quando você precisou debugar um problema crítico em produção sob pressão.', followUps: ['Como achou a causa raiz?', 'O que mudou no processo depois?'], keywords: ['produção'] }
    ],
    technical: [
      { id: 'fs-t1', question: 'Explique como você implementaria autenticação e autorização em uma aplicação full stack.', followUps: ['JWT x sessões: qual escolheria e por quê?', 'E o acesso baseado em roles?'], keywords: ['auth'] }
    ],
    'system-design': [
      { id: 'fs-s1', question: 'Projete um encurtador de URL como o bit.ly. Quais são os componentes?', followUps: ['Como geraria as URLs curtas?', 'E os redirecionamentos em escala?'], keywords: ['url'] }
    ]
  },
  'frontend-developer': {
    behavioral: [
      { id: 'fe-b1', question: 'Fale-me de uma vez que você precisou otimizar um frontend em relação à performance.', followUps: ['Quais métricas melhorou?', 'Que ferramentas utilizou?'], keywords: ['performance'] }
    ],
    technical: [
      { id: 'fe-t1', question: 'Explique como você faria o gerenciamento de estado numa grande aplicação React.', followUps: ['Quando usaria Redux, Zustand ou Context?', 'E estados de servidor?'], keywords: ['estados react'] }
    ],
    'system-design': [
      { id: 'fe-s1', question: 'Projete a arquitetura frontend de uma aplicação com micro-frontends em várias equipes.', followUps: ['Como as equipes compartilhariam componentes?', 'Como lidaria com roteamento?'], keywords: ['micro-frontend'] }
    ]
  },
  'product-manager': {
    behavioral: [
      { id: 'pm-b1', question: 'Como priorizou as demandas entre diferentes interessados?', followUps: ['Que dados usou?'], keywords: ['priorização'] }
    ],
    'case-study': [
      { id: 'pm-c1', question: 'Você é PM de app de entrega. As vendas caíram 15% neste mês. Como abordaria isso?', followUps: ['Quais dados analisaria?', 'Quais seriam suas 3 principais hipóteses?'], keywords: ['analytics'] }
    ],
    strategy: [
      { id: 'pm-s1', question: 'Como definiria a estratégia do produto para uma fintech em um mercado tão competitivo?', followUps: ['Como identificaria a oportunidade principal?'], keywords: ['fintech'] }
    ]
  }
}
