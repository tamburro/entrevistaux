import { createContext, useContext, useState, useCallback } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('entrevistaux-lang') || 'en'
    } catch {
      return 'en'
    }
  })

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'en' ? 'pt' : 'en'
      localStorage.setItem('entrevistaux-lang', next)
      return next
    })
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
