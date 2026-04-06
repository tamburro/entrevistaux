import { useState, useEffect, useRef } from 'react'

export default function TypewriterText({ words, className }) {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const wordIndex = useRef(0)
  const charIndex = useRef(0)

  useEffect(() => {
    const current = words[wordIndex.current]
    let timeout

    if (!isDeleting) {
      if (charIndex.current < current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex.current + 1))
          charIndex.current++
        }, 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (charIndex.current > 0) {
        timeout = setTimeout(() => {
          charIndex.current--
          setDisplayText(current.slice(0, charIndex.current))
        }, 40)
      } else {
        setIsDeleting(false)
        wordIndex.current = (wordIndex.current + 1) % words.length
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, words])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
