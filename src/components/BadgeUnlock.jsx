import { useState, useEffect } from 'react'

export default function BadgeUnlock({ badge, onDismiss }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true))
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onDismiss, 300)
    }, 3000)
    return () => clearTimeout(timer)
  }, [onDismiss])

  return (
    <div
      className={`fixed top-20 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      <div className="bg-gray-900 border border-warning-400/40 rounded-2xl px-6 py-4 flex items-center gap-4 shadow-xl">
        <span className="text-3xl">{badge.icon}</span>
        <div>
          <p className="text-xs text-warning-400 font-medium uppercase tracking-wider">Badge Unlocked!</p>
          <p className="text-white font-semibold">{badge.title}</p>
          <p className="text-gray-400 text-xs">{badge.description}</p>
        </div>
      </div>
    </div>
  )
}
