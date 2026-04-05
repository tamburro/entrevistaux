import { useState } from 'react'
import { categories } from '../data/questions'
import CategoryCard from '../components/CategoryCard'
import { Flame, Target, MessageSquare, Sparkles, ExternalLink, X } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'
import { useT } from '../data/translations'

export default function Home({ stats, geminiReady, onSetApiKey }) {
  const { lang } = useLang()
  const t = useT(lang)
  const [keyInput, setKeyInput] = useState('')

  const handleSaveKey = (e) => {
    e.preventDefault()
    if (keyInput.trim()) {
      onSetApiKey(keyInput.trim())
      setKeyInput('')
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
          {t('home.title.1')}<span className="text-primary-400">{t('home.title.highlight')}</span>{t('home.title.2')}
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {t('home.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            completedCount={stats.categoriesCompleted?.[cat.id] || 0}
            lang={lang}
          />
        ))}
      </div>

      <div className="bg-gray-900/50 border border-gray-800/50 rounded-2xl p-5 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={18} className="text-accent-400" />
          <h3 className="text-sm font-semibold text-white">{t('home.apikey.title')}</h3>
        </div>
        {geminiReady ? (
          <div className="flex items-center justify-between">
            <span className="text-sm text-success-400">{t('home.apikey.active')}</span>
            <button
              onClick={() => onSetApiKey(null)}
              className="text-xs text-gray-500 hover:text-red-400 flex items-center gap-1 transition-colors"
            >
              <X size={12} />
              {t('home.apikey.remove')}
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-400 mb-3">{t('home.apikey.desc')}</p>
            <form onSubmit={handleSaveKey} className="flex gap-2 mb-2">
              <input
                type="password"
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                placeholder={t('home.apikey.placeholder')}
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50"
              />
              <button
                type="submit"
                disabled={!keyInput.trim()}
                className="px-4 py-2 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-500 transition-colors disabled:opacity-30"
              >
                {t('home.apikey.save')}
              </button>
            </form>
            <a
              href="https://aistudio.google.com/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-primary-400 hover:text-primary-300"
            >
              {t('home.apikey.get')}
              <ExternalLink size={10} />
            </a>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-900/50 rounded-xl p-5 border border-gray-800/50 flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-warning-400/10 flex items-center justify-center shrink-0">
            <Flame size={18} className="text-warning-400" />
          </div>
          <div className="text-left">
            <p className="text-white text-sm font-medium">{stats.currentStreak}{t('home.streak')}</p>
            <p className="text-gray-500 text-xs">{t('home.streak.sub')}</p>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-5 border border-gray-800/50 flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center shrink-0">
            <Target size={18} className="text-primary-400" />
          </div>
          <div className="text-left">
            <p className="text-white text-sm font-medium">{stats.totalInterviews}{t('home.interviews')}</p>
            <p className="text-gray-500 text-xs">{t('home.interviews.sub')}</p>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-5 border border-gray-800/50 flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-success-400/10 flex items-center justify-center shrink-0">
            <MessageSquare size={18} className="text-success-400" />
          </div>
          <div className="text-left">
            <p className="text-white text-sm font-medium">{stats.totalQuestions}{t('home.answers')}</p>
            <p className="text-gray-500 text-xs">{t('home.answers.sub')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
