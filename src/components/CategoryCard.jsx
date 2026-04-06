import { Link } from 'react-router-dom'
import { MessageCircle, Briefcase, Lightbulb, Code, Network, FileText, Compass } from 'lucide-react'
import { useT } from '../data/translations'

const icons = { MessageCircle, Briefcase, Lightbulb, Code, Network, FileText, Compass }

const colorMap = {
  primary: {
    border: 'border-primary-500/30',
    hoverBorder: 'hover:border-primary-400/60',
    bg: 'bg-primary-500/10',
    text: 'text-primary-400',
    iconBg: 'bg-primary-500/20',
  },
  accent: {
    border: 'border-accent-500/30',
    hoverBorder: 'hover:border-accent-400/60',
    bg: 'bg-accent-500/10',
    text: 'text-accent-400',
    iconBg: 'bg-accent-500/20',
  },
  warning: {
    border: 'border-warning-500/30',
    hoverBorder: 'hover:border-warning-400/60',
    bg: 'bg-warning-500/10',
    text: 'text-warning-400',
    iconBg: 'bg-warning-500/20',
  },
}

export default function CategoryCard({ category, completedCount, lang, linkTo }) {
  const t = useT(lang)
  const Icon = icons[category.icon]
  const c = colorMap[category.color]

  return (
    <Link
      to={linkTo}
      className={`block p-6 rounded-2xl border ${c.border} ${c.hoverBorder} ${c.bg} transition-all duration-200 hover:scale-[1.02] no-underline group`}
    >
      <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center mb-4`}>
        <Icon size={24} className={c.text} />
      </div>
      <h3 className={`text-lg font-semibold mb-1 ${c.text}`}>{category.title}</h3>
      <p className="text-gray-400 text-sm mb-3">{category.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded-full">
          {completedCount || 0} {t('home.completed')}
        </span>
        <span className={`text-sm font-medium ${c.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
          {t('home.start')} &rarr;
        </span>
      </div>
    </Link>
  )
}
