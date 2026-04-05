import { useLang } from '../contexts/LanguageContext'
import { useT } from '../data/translations'

export default function ChatBubble({ role, children }) {
  const { lang } = useLang()
  const t = useT(lang)
  const isInterviewer = role === 'interviewer'

  return (
    <div className={`flex ${isInterviewer ? 'justify-start' : 'justify-end'} animate-fade-in`}>
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          isInterviewer
            ? 'bg-gray-800 text-gray-100 rounded-tl-sm'
            : 'bg-primary-600 text-white rounded-tr-sm'
        }`}
      >
        {isInterviewer && (
          <span className="text-xs text-gray-400 block mb-1">{t('interview.interviewer')}</span>
        )}
        {children}
      </div>
    </div>
  )
}
