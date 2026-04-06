# EntrevistaUX

## Convenções
- Interface do app bilíngue (toggle PT-BR / EN)
- Perguntas da entrevista sempre em inglês
- Dados do usuário persistem em localStorage (key: `entrevistaux-stats`)
- Web Speech API nativa do browser (sem API externa) — fallback automático para texto
- Gemini Flash (free tier) para feedback com IA — chave salva no localStorage do usuário

## Rotas
- `/` — Home com seleção de role e categoria
- `/interview/:roleId/:categoryId` — Sessão de entrevista
- `/results` — Tela de resultados pós-entrevista
- `/profile` — Progresso e badges
