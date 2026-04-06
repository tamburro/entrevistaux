export const roles = [
  {
    id: 'product-designer',
    title: 'Product Designer',
    description: 'End-to-end product thinking, research, and UI',
    icon: 'Layers',
    categories: ['behavioral', 'portfolio', 'design-challenge'],
  },
  {
    id: 'ux-ui-designer',
    title: 'UX/UI Designer',
    description: 'User experience flows and interface design',
    icon: 'MousePointerClick',
    categories: ['behavioral', 'portfolio', 'design-challenge'],
  },
  {
    id: 'visual-designer',
    title: 'Visual Designer',
    description: 'Brand identity, typography, and visual systems',
    icon: 'Palette',
    categories: ['behavioral', 'portfolio', 'design-challenge'],
  },
  {
    id: 'ux-researcher',
    title: 'UX Researcher',
    description: 'User research methods, insights, and strategy',
    icon: 'Search',
    categories: ['behavioral', 'portfolio', 'design-challenge'],
  },
  {
    id: 'fullstack-developer',
    title: 'Full Stack Developer',
    description: 'Frontend, backend, APIs, and system design',
    icon: 'Code',
    categories: ['behavioral', 'technical', 'system-design'],
  },
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    description: 'UI implementation, performance, and accessibility',
    icon: 'Monitor',
    categories: ['behavioral', 'technical', 'system-design'],
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Strategy, prioritization, and stakeholder alignment',
    icon: 'Target',
    categories: ['behavioral', 'case-study', 'strategy'],
  },
]

export function getRoleById(roleId) {
  return roles.find((r) => r.id === roleId)
}
