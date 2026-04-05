import { Link } from 'react-router-dom'
import { Trophy, Globe } from 'lucide-react'
import { calculateLevel, xpProgress, xpForNextLevel } from '../data/gamification'
import { useLang } from '../contexts/LanguageContext'
import { useT } from '../data/translations'

export default function Header({ stats }) {
  const { lang, toggleLang } = useLang()
  const t = useT(lang)
  const level = calculateLevel(stats.xp)
  const progress = xpProgress(stats.xp)
  const needed = xpForNextLevel(stats.xp)

  return (
    <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white font-semibold text-lg no-underline">
          <span className="text-primary-400">&#9670;</span>
          EntrevistaUX
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-200 transition-colors bg-gray-800/50 px-2.5 py-1.5 rounded-lg"
            title="Toggle language"
          >
            <Globe size={14} />
            {lang === 'en' ? 'EN' : 'PT'}
          </button>

          <Link to="/profile" className="flex items-center gap-3 no-underline group">
            <div className="flex items-center gap-1.5 text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
              <Trophy size={16} className="text-warning-400" />
              <span>{t('header.level')} {level}</span>
            </div>
            <div className="w-20 h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-500 rounded-full transition-all duration-500"
                style={{ width: `${(progress / needed) * 100}%` }}
              />
            </div>
            <span className="text-xs text-gray-500">{progress}/{needed} XP</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
