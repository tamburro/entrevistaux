const t = {
  en: {
    // Header
    'header.level': 'Lv',

    // Home
    'home.title.1': 'Practice your ',
    'home.title.highlight': 'Product Design',
    'home.title.2': ' interview',
    'home.subtitle': 'Train for real interviews in English. Choose a category, answer questions out loud or by typing, and build confidence.',
    'home.streak': '-day streak',
    'home.streak.sub': 'Practice daily to keep it going',
    'home.interviews': ' interviews',
    'home.interviews.sub': 'Total sessions completed',
    'home.answers': ' answers',
    'home.answers.sub': 'Questions answered so far',
    'home.completed': 'completed',
    'home.start': 'Start',
    'home.apikey.title': 'Gemini API Key',
    'home.apikey.desc': 'Add your free Gemini API key to get AI feedback on your answers.',
    'home.apikey.placeholder': 'Paste your API key...',
    'home.apikey.save': 'Save',
    'home.apikey.active': 'AI feedback active',
    'home.apikey.remove': 'Remove',
    'home.apikey.get': 'Get free key',

    // Interview
    'interview.back': 'Back',
    'interview.skip': 'Skip',
    'interview.tip': 'Tip:',
    'interview.placeholder': 'Type your answer in English...',
    'interview.listening': 'Listening...',
    'interview.next': "Great answer. Let's move to the next question.",
    'interview.evaluating': 'Evaluating your answer...',
    'interview.score': 'Score:',
    'interview.english': 'English tip:',
    'interview.interviewer': 'Interviewer',

    // Results
    'results.title': 'Interview Complete!',
    'results.session': 'You finished a',
    'results.session.2': 'session with',
    'results.session.3': 'questions.',
    'results.level': 'Level',
    'results.interviews': 'Interviews',
    'results.streak': 'Day Streak',
    'results.badges': 'Badges',
    'results.again': 'Practice Again',
    'results.home': 'Home',
    'results.ai.title': 'AI Assessment',
    'results.ai.score': 'Overall Score',
    'results.ai.strengths': 'Strengths',
    'results.ai.improvements': 'Areas to Improve',
    'results.ai.tip': 'Pro Tip',
    'results.ai.loading': 'Generating AI assessment...',

    // Profile
    'profile.back': 'Back',
    'profile.title': 'Your Progress',
    'profile.xp.total': 'XP total',
    'profile.xp.to': 'XP to level',
    'profile.stat.interviews': 'Interviews',
    'profile.stat.questions': 'Questions',
    'profile.stat.streak': 'Day Streak',
    'profile.stat.voice': 'Voice Answers',
    'profile.badges': 'Badges',
  },

  pt: {
    // Header
    'header.level': 'Nv',

    // Home
    'home.title.1': 'Pratique sua entrevista de ',
    'home.title.highlight': 'Product Design',
    'home.title.2': '',
    'home.subtitle': 'Treine para entrevistas reais em ingl\u00eas. Escolha uma categoria, responda em voz alta ou digitando, e ganhe confian\u00e7a.',
    'home.streak': ' dias seguidos',
    'home.streak.sub': 'Pratique diariamente para manter',
    'home.interviews': ' entrevistas',
    'home.interviews.sub': 'Sess\u00f5es completas',
    'home.answers': ' respostas',
    'home.answers.sub': 'Perguntas respondidas',
    'home.completed': 'completadas',
    'home.start': 'Iniciar',
    'home.apikey.title': 'Chave Gemini API',
    'home.apikey.desc': 'Adicione sua chave gratuita do Gemini para receber feedback com IA.',
    'home.apikey.placeholder': 'Cole sua chave API...',
    'home.apikey.save': 'Salvar',
    'home.apikey.active': 'Feedback com IA ativo',
    'home.apikey.remove': 'Remover',
    'home.apikey.get': 'Obter chave gratuita',

    // Interview
    'interview.back': 'Voltar',
    'interview.skip': 'Pular',
    'interview.tip': 'Dica:',
    'interview.placeholder': 'Digite sua resposta em ingl\u00eas...',
    'interview.listening': 'Ouvindo...',
    'interview.next': 'Boa resposta. Vamos para a pr\u00f3xima pergunta.',
    'interview.evaluating': 'Avaliando sua resposta...',
    'interview.score': 'Nota:',
    'interview.english': 'Dica de ingl\u00eas:',
    'interview.interviewer': 'Entrevistador',

    // Results
    'results.title': 'Entrevista Conclu\u00edda!',
    'results.session': 'Voc\u00ea completou uma sess\u00e3o de',
    'results.session.2': 'com',
    'results.session.3': 'perguntas.',
    'results.level': 'N\u00edvel',
    'results.interviews': 'Entrevistas',
    'results.streak': 'Dias Seguidos',
    'results.badges': 'Badges',
    'results.again': 'Praticar Novamente',
    'results.home': 'In\u00edcio',
    'results.ai.title': 'Avalia\u00e7\u00e3o da IA',
    'results.ai.score': 'Nota Geral',
    'results.ai.strengths': 'Pontos Fortes',
    'results.ai.improvements': 'Pontos a Melhorar',
    'results.ai.tip': 'Dica',
    'results.ai.loading': 'Gerando avalia\u00e7\u00e3o com IA...',

    // Profile
    'profile.back': 'Voltar',
    'profile.title': 'Seu Progresso',
    'profile.xp.total': 'XP total',
    'profile.xp.to': 'XP para n\u00edvel',
    'profile.stat.interviews': 'Entrevistas',
    'profile.stat.questions': 'Perguntas',
    'profile.stat.streak': 'Dias Seguidos',
    'profile.stat.voice': 'Respostas por Voz',
    'profile.badges': 'Badges',
  },
}

export function useT(lang) {
  return (key) => t[lang]?.[key] ?? t.en[key] ?? key
}
