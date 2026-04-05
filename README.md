# EntrevistaUX

Simulador interativo de entrevistas para Product Design. Pratique entrevistas reais em inglês, com feedback de IA e gamificação.

## Features

- **3 categorias**: Behavioral, Portfolio Review, Design Challenge
- **20+ perguntas** com follow-ups contextuais
- **Voz + Texto**: Web Speech API nativa (Chrome/Edge), fallback automático para texto
- **Feedback com IA**: Gemini Flash (free tier) avalia respostas, dá nota e dicas de inglês
- **Gamificação**: XP, níveis, streaks diários, 8 badges desbloqueáveis
- **Bilíngue**: Toggle PT-BR / EN em toda interface
- **Offline-first**: Dados persistem em localStorage

## Setup

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Feedback com IA (opcional)

O app funciona 100% sem IA. Para ativar o feedback inteligente:

1. Acesse [Google AI Studio](https://aistudio.google.com/apikey) e gere uma chave gratuita
2. Cole a chave no campo "Gemini API Key" na Home do app
3. A chave fica salva no localStorage do seu navegador (nunca sai da sua máquina)

**Free tier:** 15 req/min, 1.500 req/dia, 1M tokens/dia — suficiente para ~100 sessões/dia.

## Stack

| Tecnologia | Função |
|---|---|
| Vite | Build tool |
| React 19 | UI |
| Tailwind CSS 4 | Estilização |
| React Router | Navegação |
| Lucide React | Ícones |
| Google Generative AI | Feedback com IA (opcional) |
| Web Speech API | Reconhecimento e síntese de voz |

## Deploy

O projeto está configurado para deploy automático na Vercel. Cada push na `main` dispara um novo deploy.

```bash
# Deploy manual
vercel --prod
```
