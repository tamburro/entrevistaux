import { useState, useRef, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Send, SkipForward, Volume2, VolumeOff, Loader2 } from 'lucide-react'
import { categories, getRandomQuestions } from '../data/questions'
import { getRoleById } from '../data/roles'
import { useSpeech } from '../hooks/useSpeech'
import { evaluateAnswer, isGeminiReady } from '../services/gemini'
import { useLang } from '../contexts/LanguageContext'
import { useT } from '../data/translations'
import ChatBubble from '../components/ChatBubble'
import VoiceButton from '../components/VoiceButton'
import ProgressBar from '../components/ProgressBar'

const QUESTIONS_PER_SESSION = 5

export default function Interview({ onRecordAnswer, onComplete, geminiReady }) {
  const { roleId, categoryId } = useParams()
  const navigate = useNavigate()
  const { lang } = useLang()
  const t = useT(lang)
  const category = categories[categoryId]
  const role = getRoleById(roleId)
  const compositeKey = `${roleId}/${categoryId}`

  const [sessionQuestions] = useState(() => getRandomQuestions(roleId, categoryId, QUESTIONS_PER_SESSION))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [followUpIndex, setFollowUpIndex] = useState(0)
  const [autoSpeak, setAutoSpeak] = useState(true)
  const [usedVoiceThisAnswer, setUsedVoiceThisAnswer] = useState(false)
  const [isEvaluating, setIsEvaluating] = useState(false)
  const [sessionAnswers, setSessionAnswers] = useState([])

  const chatEndRef = useRef(null)
  const inputRef = useRef(null)

  const { isListening, isSupported, transcript, startListening, stopListening, speak, resetTranscript } = useSpeech()

  const currentQuestion = sessionQuestions[currentIndex]

  useEffect(() => {
    if (currentQuestion) {
      const text = currentQuestion.question
      setMessages([{ role: 'interviewer', text }])
      setFollowUpIndex(0)
      if (autoSpeak) speak(text)
    }
  }, [currentIndex, currentQuestion, autoSpeak, speak])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (transcript) {
      setInputValue(transcript)
    }
  }, [transcript])

  const goToNextOrFinish = useCallback(() => {
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex((i) => i + 1)
    } else {
      onComplete(compositeKey)
      navigate('/results', {
        state: {
          roleId,
          categoryId,
          questionsCount: sessionQuestions.length,
          sessionQuestions: sessionQuestions.map((q) => q.question),
          sessionAnswers,
        },
      })
    }
  }, [currentIndex, sessionQuestions, compositeKey, roleId, categoryId, navigate, onComplete, sessionAnswers])

  const moveToNext = useCallback(() => {
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'interviewer', text: t('interview.next') },
      ])
      setTimeout(goToNextOrFinish, 1500)
    }, 800)
  }, [t, goToNextOrFinish])

  const submitAnswer = useCallback(
    async (text) => {
      if (!text.trim() || isEvaluating) return

      const answerText = text.trim()
      const wasVoice = usedVoiceThisAnswer
      setMessages((prev) => [...prev, { role: 'user', text: answerText }])
      setInputValue('')
      resetTranscript()
      onRecordAnswer(wasVoice)
      setUsedVoiceThisAnswer(false)
      setSessionAnswers((prev) => [...prev, answerText])

      if (geminiReady && isGeminiReady()) {
        setIsEvaluating(true)
        setMessages((prev) => [...prev, { role: 'system', text: 'evaluating' }])

        const evaluation = await evaluateAnswer({
          question: currentQuestion.question,
          answer: answerText,
          categoryId,
          roleTitle: role.title,
          lang,
        })

        setMessages((prev) => prev.filter((m) => m.text !== 'evaluating'))
        setIsEvaluating(false)

        if (evaluation) {
          const feedbackText = `**${t('interview.score')}** ${evaluation.score}/10\n${evaluation.feedback}\n\n**${t('interview.languageTip')}** ${evaluation.languageTip}`
          setMessages((prev) => [...prev, { role: 'feedback', text: feedbackText }])

          setTimeout(() => {
            if (evaluation.followUp) {
              setMessages((prev) => [...prev, { role: 'interviewer', text: evaluation.followUp }])
              if (autoSpeak) speak(evaluation.followUp)
              setFollowUpIndex((i) => i + 1)
            } else {
              moveToNext()
            }
          }, 2000)
          return
        }
      }

      if (followUpIndex < currentQuestion.followUps.length) {
        const followUp = currentQuestion.followUps[followUpIndex]
        setTimeout(() => {
          setMessages((prev) => [...prev, { role: 'interviewer', text: followUp }])
          if (autoSpeak) speak(followUp)
          setFollowUpIndex((i) => i + 1)
        }, 800)
      } else {
        moveToNext()
      }
    },
    [
      followUpIndex, currentQuestion, autoSpeak, speak, resetTranscript,
      onRecordAnswer, usedVoiceThisAnswer, geminiReady, categoryId, lang, t, isEvaluating, moveToNext,
    ]
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isListening) {
      stopListening()
      setTimeout(() => submitAnswer(inputValue), 200)
    } else {
      submitAnswer(inputValue)
    }
  }

  const handleVoiceToggle = () => {
    if (isListening) {
      stopListening()
    } else {
      setUsedVoiceThisAnswer(true)
      startListening()
    }
  }

  const skipQuestion = () => {
    setSessionAnswers((prev) => [...prev, ''])
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex((i) => i + 1)
    } else {
      onComplete(compositeKey)
      navigate('/results', {
        state: {
          roleId,
          categoryId,
          questionsCount: sessionQuestions.length,
          sessionQuestions: sessionQuestions.map((q) => q.question),
          sessionAnswers: [...sessionAnswers, ''],
        },
      })
    }
  }

  if (!category || !role) {
    navigate('/')
    return null
  }

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)]">
      <div className="border-b border-gray-800 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 text-gray-400 hover:text-white text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            {t('interview.back')}
          </button>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="text-gray-400 font-medium">{role.title}</span>
            <span>·</span>
            <span>{category.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setAutoSpeak(!autoSpeak)}
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              {autoSpeak ? <Volume2 size={16} /> : <VolumeOff size={16} />}
            </button>
            <button
              onClick={skipQuestion}
              className="text-gray-500 hover:text-gray-300 text-xs flex items-center gap-1 transition-colors"
            >
              <SkipForward size={14} />
              {t('interview.skip')}
            </button>
          </div>
        </div>
        <div className="max-w-3xl mx-auto mt-2">
          <ProgressBar current={currentIndex + 1} total={sessionQuestions.length} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl px-4 py-3 mb-6">
            <p className="text-xs text-gray-500">
              <span className="text-primary-400 font-medium">{t('interview.tip')}</span> {category.tip}
            </p>
          </div>

          {messages.map((msg, i) => {
            if (msg.text === 'evaluating') {
              return (
                <div key={i} className="flex justify-start animate-fade-in">
                  <div className="bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-2 text-sm text-gray-400">
                    <Loader2 size={14} className="animate-spin" />
                    {t('interview.evaluating')}
                  </div>
                </div>
              )
            }
            if (msg.role === 'feedback') {
              return (
                <div key={i} className="flex justify-start animate-fade-in">
                  <div className="max-w-[80%] bg-gray-800/60 border border-accent-500/20 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-relaxed">
                    {msg.text.split('\n').map((line, j) => {
                      const boldMatch = line.match(/^\*\*(.+?)\*\*\s*(.*)$/)
                      if (boldMatch) {
                        return (
                          <p key={j} className={j > 0 ? 'mt-2' : ''}>
                            <span className="text-accent-400 font-medium">{boldMatch[1]}</span>{' '}
                            <span className="text-gray-300">{boldMatch[2]}</span>
                          </p>
                        )
                      }
                      if (line.trim()) return <p key={j} className="text-gray-300 mt-1">{line}</p>
                      return null
                    })}
                  </div>
                </div>
              )
            }
            return (
              <ChatBubble key={i} role={msg.role}>
                {msg.text}
              </ChatBubble>
            )
          })}
          <div ref={chatEndRef} />
        </div>
      </div>

      <div className="border-t border-gray-800 px-4 py-3 bg-gray-950">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex items-center gap-2">
          <VoiceButton
            isListening={isListening}
            isSupported={isSupported}
            onToggle={handleVoiceToggle}
          />
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={isListening ? t('interview.listening') : t('interview.placeholder')}
            className="flex-1 bg-gray-900 border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 transition-colors"
            disabled={isEvaluating}
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isEvaluating}
            className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  )
}
