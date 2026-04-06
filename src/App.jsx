import { useState, useCallback, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import BadgeUnlock from './components/BadgeUnlock'
import Home from './pages/Home'
import Interview from './pages/Interview'
import Results from './pages/Results'
import Profile from './pages/Profile'
import { useGameStats } from './hooks/useGameStats'
import { BADGES } from './data/gamification'
import { initGemini } from './services/gemini'

export default function App() {
  const { stats, recordAnswer, completeInterview } = useGameStats()
  const [newBadge, setNewBadge] = useState(null)
  const [geminiReady, setGeminiReady] = useState(false)

  useEffect(() => {
    const key = sessionStorage.getItem('entrevistaux-gemini-key')
    if (key) {
      setGeminiReady(initGemini(key))
    }
  }, [])

  const handleSetApiKey = useCallback((key) => {
    if (key) {
      sessionStorage.setItem('entrevistaux-gemini-key', key)
      setGeminiReady(initGemini(key))
    } else {
      sessionStorage.removeItem('entrevistaux-gemini-key')
      setGeminiReady(false)
    }
  }, [])

  const handleComplete = useCallback(
    (compositeKey) => {
      const prevBadges = [...stats.unlockedBadges]
      completeInterview(compositeKey)

      setTimeout(() => {
        const currentStats = JSON.parse(localStorage.getItem('entrevistaux-stats') || '{}')
        const fresh = BADGES.find(
          (b) => currentStats.unlockedBadges?.includes(b.id) && !prevBadges.includes(b.id)
        )
        if (fresh) setNewBadge(fresh)
      }, 100)
    },
    [stats.unlockedBadges, completeInterview]
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Header stats={stats} />
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                stats={stats}
                geminiReady={geminiReady}
                onSetApiKey={handleSetApiKey}
              />
            }
          />
          <Route
            path="/interview/:roleId/:categoryId"
            element={
              <Interview
                onRecordAnswer={recordAnswer}
                onComplete={handleComplete}
                geminiReady={geminiReady}
              />
            }
          />
          <Route path="/results" element={<Results stats={stats} />} />
          <Route path="/profile" element={<Profile stats={stats} />} />
        </Routes>
      </main>
      {newBadge && <BadgeUnlock badge={newBadge} onDismiss={() => setNewBadge(null)} />}
    </div>
  )
}
