import { useState, useCallback } from 'react'
import { BADGES, calculateLevel, XP_VALUES } from '../data/gamification'

const STORAGE_KEY = 'entrevistaux-stats'

function getInitialStats() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return JSON.parse(stored)
  } catch {}
  return {
    xp: 0,
    totalInterviews: 0,
    totalQuestions: 0,
    voiceAnswers: 0,
    currentStreak: 0,
    lastActiveDate: null,
    categoriesCompleted: {},
    unlockedBadges: [],
  }
}

function save(stats) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats))
}

export function useGameStats() {
  const [stats, setStats] = useState(getInitialStats)

  const addXP = useCallback((amount) => {
    setStats((prev) => {
      const next = { ...prev, xp: prev.xp + amount }
      save(next)
      return next
    })
  }, [])

  const recordAnswer = useCallback((usedVoice) => {
    setStats((prev) => {
      const next = {
        ...prev,
        xp: prev.xp + XP_VALUES.ANSWER_QUESTION + (usedVoice ? XP_VALUES.USE_VOICE : 0),
        totalQuestions: prev.totalQuestions + 1,
        voiceAnswers: prev.voiceAnswers + (usedVoice ? 1 : 0),
      }
      save(next)
      return next
    })
  }, [])

  const completeInterview = useCallback((categoryId) => {
    setStats((prev) => {
      const today = new Date().toISOString().split('T')[0]
      const isNewDay = prev.lastActiveDate !== today
      const isConsecutive =
        prev.lastActiveDate &&
        new Date(today) - new Date(prev.lastActiveDate) <= 86400000 * 1.5

      const isFirst = prev.totalInterviews === 0

      const next = {
        ...prev,
        xp:
          prev.xp +
          XP_VALUES.COMPLETE_INTERVIEW +
          (isNewDay ? XP_VALUES.DAILY_STREAK : 0) +
          (isFirst ? XP_VALUES.FIRST_INTERVIEW : 0),
        totalInterviews: prev.totalInterviews + 1,
        currentStreak: isConsecutive || isNewDay
          ? (isNewDay ? prev.currentStreak + 1 : prev.currentStreak)
          : 1,
        lastActiveDate: today,
        categoriesCompleted: {
          ...prev.categoriesCompleted,
          [categoryId]: (prev.categoriesCompleted[categoryId] || 0) + 1,
        },
      }

      const newBadges = BADGES.filter(
        (b) => !prev.unlockedBadges.includes(b.id) && b.condition({ ...next, level: calculateLevel(next.xp) })
      ).map((b) => b.id)

      if (newBadges.length > 0) {
        next.unlockedBadges = [...prev.unlockedBadges, ...newBadges]
      }

      save(next)
      return next
    })
  }, [])

  const newBadgesThisSession = useCallback(
    (prevBadgeIds) => {
      return BADGES.filter(
        (b) => stats.unlockedBadges.includes(b.id) && !prevBadgeIds.includes(b.id)
      )
    },
    [stats.unlockedBadges]
  )

  return {
    stats,
    level: calculateLevel(stats.xp),
    addXP,
    recordAnswer,
    completeInterview,
    newBadgesThisSession,
  }
}
