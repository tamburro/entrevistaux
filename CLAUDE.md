# EntrevistaUX

## Convenções
- Interface do app em inglês (é para praticar inglês técnico)
- Textos de UI do sistema (header, labels) podem misturar PT-BR e EN
- Perguntas da entrevista sempre em inglês
- Dados do usuário persistem em localStorage (key: `entrevistaux-stats`)
- Web Speech API nativa do browser (sem API externa) — fallback automático para texto

## Rotas
- `/` — Home com seleção de categoria
- `/interview/:categoryId` — Sessão de entrevista
- `/results` — Tela de resultados pós-entrevista
- `/profile` — Progresso e badges
