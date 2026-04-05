import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { BADGES, calculateLevel, xpProgress, xpForNextLevel } from '../data/gamification'
import { useLang } from '../contexts/LanguageContext'
import { useT } from '../data/translations'

export default function Profile({ stats }) {
  const { lang } = useLang()
  const t = useT(lang)
  const level = calculateLevel(stats.xp)
  const progress = xpProgress(stats.xp)
  const needed = xpForNextLevel(stats.xp)

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-8 no-underline transition-colors"
      >
        <ArrowLeft size={16} />
        {t('profile.back')}
      </Link>

      <h1 className="text-3xl font-bold text-white mb-8">{t('profile.title')}</h1>

      <div className="bg-gray-900/50 border border-gray-800/50 rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-semibold text-white">{t('results.level')} {level}</span>
          <span className="text-sm text-gray-500">{stats.xp} {t('profile.xp.total')}</span>
        </div>
        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-primary-500 rounded-full transition-all duration-700"
            style={{ width: `${(progress / needed) * 100}%` }}
          />
        </div>
        <p className="text-xs text-gray-500">{needed - progress} {t('profile.xp.to')} {level + 1}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <Stat label={t('profile.stat.interviews')} value={stats.totalInterviews} />
        <Stat label={t('profile.stat.questions')} value={stats.totalQuestions} />
        <Stat label={t('profile.stat.streak')} value={stats.currentStreak} />
        <Stat label={t('profile.stat.voice')} value={stats.voiceAnswers} />
      </div>

      <h2 className="text-xl font-semibold text-white mb-4">{t('profile.badges')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {BADGES.map((badge) => {
          const unlocked = stats.unlockedBadges.includes(badge.id)
          return (
            <div
              key={badge.id}
              className={`flex items-center gap-3 p-4 rounded-xl border transition-colors ${
                unlocked
                  ? 'bg-gray-900/50 border-gray-700'
                  : 'bg-gray-900/20 border-gray-800/30 opacity-40'
              }`}
            >
              <span className="text-2xl">{badge.icon}</span>
              <div>
                <p className={`text-sm font-medium ${unlocked ? 'text-white' : 'text-gray-500'}`}>
                  {badge.title}
                </p>
                <p className="text-xs text-gray-500">{badge.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-4 text-center">
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  )
}
