export const XP_VALUES = {
  ANSWER_QUESTION: 10,
  COMPLETE_INTERVIEW: 50,
  USE_VOICE: 5,
  DAILY_STREAK: 20,
  FIRST_INTERVIEW: 100,
}

export const BADGES = [
  {
    id: 'first-steps',
    title: 'First Steps',
    description: 'Complete your first interview',
    icon: '🎯',
    condition: (stats) => stats.totalInterviews >= 1,
  },
  {
    id: 'warming-up',
    title: 'Warming Up',
    description: 'Complete 5 interviews',
    icon: '🔥',
    condition: (stats) => stats.totalInterviews >= 5,
  },
  {
    id: 'interview-ready',
    title: 'Interview Ready',
    description: 'Complete 15 interviews',
    icon: '⭐',
    condition: (stats) => stats.totalInterviews >= 15,
  },
  {
    id: 'all-rounder',
    title: 'All-Rounder',
    description: 'Complete at least one interview in each category',
    icon: '🌟',
    condition: (stats) =>
      stats.categoriesCompleted?.behavioral &&
      stats.categoriesCompleted?.portfolio &&
      stats.categoriesCompleted?.['design-challenge'],
  },
  {
    id: 'streak-3',
    title: 'On a Roll',
    description: 'Maintain a 3-day streak',
    icon: '🔥',
    condition: (stats) => stats.currentStreak >= 3,
  },
  {
    id: 'streak-7',
    title: 'Dedicated',
    description: 'Maintain a 7-day streak',
    icon: '💎',
    condition: (stats) => stats.currentStreak >= 7,
  },
  {
    id: 'voice-explorer',
    title: 'Voice Explorer',
    description: 'Answer 10 questions using voice',
    icon: '🎙️',
    condition: (stats) => stats.voiceAnswers >= 10,
  },
  {
    id: 'level-5',
    title: 'Rising Star',
    description: 'Reach level 5',
    icon: '🚀',
    condition: (stats) => stats.level >= 5,
  },
]

export function calculateLevel(xp) {
  return Math.floor(xp / 100) + 1
}

export function xpForNextLevel(xp) {
  const currentLevel = calculateLevel(xp)
  return currentLevel * 100
}

export function xpProgress(xp) {
  return xp % 100
}
