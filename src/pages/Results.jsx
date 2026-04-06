import { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { CheckCircle, RotateCcw, Home, Loader2 } from 'lucide-react'
import { categories } from '../data/questions'
import { getRoleById } from '../data/roles'
import { calculateLevel, xpProgress, xpForNextLevel } from '../data/gamification'
import { generateSessionSummary, isGeminiReady } from '../services/gemini'
import { useLang } from '../contexts/LanguageContext'
import { useT } from '../data/translations'

export default function Results({ stats }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { lang } = useLang()
  const t = useT(lang)
  const { roleId, categoryId, questionsCount, sessionQuestions, sessionAnswers, seniority } = location.state || {}

  const [aiSummary, setAiSummary] = useState(null)
  const [aiLoading, setAiLoading] = useState(false)

  const category = categories[lang]?.[categoryId] || categories['en'][categoryId]
  const role = getRoleById(roleId, lang)
  const level = calculateLevel(stats.xp)
  const progress = xpProgress(stats.xp)
  const needed = xpForNextLevel(stats.xp)

  useEffect(() => {
    if (isGeminiReady() && sessionQuestions?.length && sessionAnswers?.length) {
      setAiLoading(true)
      generateSessionSummary({
        questions: sessionQuestions,
        answers: sessionAnswers,
        categoryId,
        roleTitle: role?.title || '',
        lang,
        seniority,
      }).then((summary) => {
        setAiSummary(summary)
        setAiLoading(false)
      })
    }
  }, [categoryId, lang, sessionQuestions, sessionAnswers, seniority])

  if (!category) {
    navigate('/')
    return null
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-16 text-center animate-fade-in">
      <div className="w-16 h-16 rounded-full bg-success-500/20 flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={32} className="text-success-400" />
      </div>

      <h1 className="text-3xl font-bold text-white mb-2">{t('results.title')}</h1>
      <p className="text-gray-400 mb-8">
        {t('results.session')} <span className="text-white">{category.title}</span> {t('results.session.2')} {questionsCount} {t('results.session.3')}
      </p>

      <div className="bg-gray-900/50 border border-gray-800/50 rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-400">{t('results.level')} {level}</span>
          <span className="text-sm text-gray-500">{progress}/{needed} XP</span>
        </div>
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-primary-500 rounded-full transition-all duration-700"
            style={{ width: `${(progress / needed) * 100}%` }}
          />
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-white">{stats.totalInterviews}</p>
            <p className="text-xs text-gray-500">{t('results.interviews')}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{stats.currentStreak}</p>
            <p className="text-xs text-gray-500">{t('results.streak')}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{stats.unlockedBadges.length}</p>
            <p className="text-xs text-gray-500">{t('results.badges')}</p>
          </div>
        </div>
      </div>

      {(aiLoading || aiSummary) && (
        <div className="bg-gray-900/50 border border-accent-500/20 rounded-2xl p-6 mb-6 text-left">
          <h3 className="text-accent-400 font-semibold mb-4">{t('results.ai.title')}</h3>

          {aiLoading ? (
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Loader2 size={16} className="animate-spin" />
              {t('results.ai.loading')}
            </div>
          ) : aiSummary ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-400">{t('results.ai.score')}</span>
                <span className="text-2xl font-bold text-white">{aiSummary.overallScore}/10</span>
              </div>

              <div>
                <p className="text-sm text-success-400 font-medium mb-1">{t('results.ai.strengths')}</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {aiSummary.strengths?.map((s, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-success-400 shrink-0">+</span> {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm text-warning-400 font-medium mb-1">{t('results.ai.improvements')}</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {aiSummary.improvements?.map((s, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-warning-400 shrink-0">-</span> {s}
                    </li>
                  ))}
                </ul>
              </div>

              {aiSummary.tip && (
                <div className="bg-gray-800/50 rounded-xl p-3">
                  <p className="text-xs text-primary-400 font-medium mb-1">{t('results.ai.tip')}</p>
                  <p className="text-sm text-gray-300">{aiSummary.tip}</p>
                </div>
              )}
            </div>
          ) : null}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => navigate(`/interview/${roleId}/${categoryId}`)}
          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors"
        >
          <RotateCcw size={16} />
          {t('results.again')}
        </button>
        <Link
          to="/"
          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-800 text-gray-300 font-medium hover:bg-gray-700 transition-colors no-underline"
        >
          <Home size={16} />
          {t('results.home')}
        </Link>
      </div>
    </div>
  )
}
