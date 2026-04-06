import { useState } from 'react'
import { roles } from '../data/roles'
import { getCategoriesForRole } from '../data/questions'
import CategoryCard from '../components/CategoryCard'
import TypewriterText from '../components/TypewriterText'
import { Flame, Target, MessageSquare, Sparkles, ExternalLink, X, ArrowLeft, Layers, MousePointerClick, Palette, Search, Code, Monitor, BarChart3 } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'
import { useT } from '../data/translations'

const roleIcons = { Layers, MousePointerClick, Palette, Search, Code, Monitor, Target: BarChart3 }

export default function Home({ stats, geminiReady, onSetApiKey }) {
  const { lang } = useLang()
  const t = useT(lang)
  const [selectedRole, setSelectedRole] = useState(null)
  const [seniority, setSeniority] = useState('pleno')
  const [keyInput, setKeyInput] = useState('')

  const currentRoles = roles[lang] || roles['en']
  const roleTitles = currentRoles.map((r) => r.title)

  const handleSaveKey = (e) => {
    e.preventDefault()
    if (keyInput.trim()) {
      onSetApiKey(keyInput.trim())
      setKeyInput('')
    }
  }

  const role = selectedRole ? currentRoles.find((r) => r.id === selectedRole) : null
  const roleCategories = role ? getCategoriesForRole(role.categories, lang) : []

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
          {t('home.title.1')}
          <TypewriterText words={roleTitles} className="text-primary-400" />
          {t('home.title.2')}
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {t('home.subtitle')}
        </p>
      </div>

      <div className="mb-10 flex justify-center gap-3">
        {['junior', 'pleno', 'senior'].map(level => (
          <button
            key={level}
            onClick={() => setSeniority(level)}
            className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-200 border ${
              seniority === level
                ? 'bg-primary-600 border-primary-500 text-white shadow-md shadow-primary-500/20'
                : 'bg-gray-900/50 border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-800'
            }`}
          >
            {lang === 'pt' ? level : (level === 'pleno' ? 'Mid-level' : level)}
          </button>
        ))}
      </div>

      {!selectedRole ? (
        <>
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">{t('home.choose.role')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {currentRoles.map((r) => {
              const Icon = roleIcons[r.icon]
              const completedForRole = r.categories.reduce(
                (sum, catId) => sum + (stats.categoriesCompleted?.[`${r.id}/${catId}`] || 0),
                0
              )
              return (
                <button
                  key={r.id}
                  onClick={() => setSelectedRole(r.id)}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-gray-800/50 bg-gray-900/30 hover:bg-gray-900/60 hover:border-gray-700/60 transition-all duration-200 hover:scale-[1.01] text-left group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-primary-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm group-hover:text-primary-300 transition-colors">{r.title}</h3>
                    <p className="text-gray-500 text-xs mt-0.5">{r.description}</p>
                    {completedForRole > 0 && (
                      <span className="text-xs text-gray-600 mt-1 inline-block">{completedForRole} {t('home.completed')}</span>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => setSelectedRole(null)}
              className="flex items-center gap-1 text-gray-400 hover:text-white text-sm transition-colors"
            >
              <ArrowLeft size={16} />
              {t('home.back.roles')}
            </button>
            <span className="text-gray-700">|</span>
            <span className="text-sm text-white font-medium">{role.title}</span>
          </div>
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">{t('home.choose.category')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {roleCategories.map((cat) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                completedCount={stats.categoriesCompleted?.[`${selectedRole}/${cat.id}`] || 0}
                lang={lang}
                linkTo={`/interview/${selectedRole}/${cat.id}?seniority=${seniority}`}
              />
            ))}
          </div>
        </>
      )}

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
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
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
