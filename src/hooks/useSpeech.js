import { useState, useCallback, useRef, useEffect } from 'react'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

export function useSpeech(lang = 'en') {
  const [isListening, setIsListening] = useState(false)
  const [isSupported] = useState(() => !!SpeechRecognition)
  const [transcript, setTranscript] = useState('')
  const recognitionRef = useRef(null)
  const utteranceRef = useRef(null)

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort()
      }
    }
  }, [])

  const startListening = useCallback(() => {
    if (!SpeechRecognition) return

    const recognition = new SpeechRecognition()
    recognition.lang = lang === 'pt' ? 'pt-BR' : 'en-US'
    recognition.interimResults = true
    recognition.continuous = true

    recognition.onresult = (event) => {
      let finalTranscript = ''
      let interimTranscript = ''
      for (let i = 0; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript
        } else {
          interimTranscript += event.results[i][0].transcript
        }
      }
      setTranscript(finalTranscript || interimTranscript)
    }

    recognition.onerror = () => {
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognitionRef.current = recognition
    recognition.start()
    setIsListening(true)
    setTranscript('')
  }, [lang])

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
      recognitionRef.current = null
    }
    setIsListening(false)
  }, [])

  const speak = useCallback((text) => {
    if (!window.speechSynthesis) return
    
    if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
      window.speechSynthesis.cancel()
    }
    
    const utterance = new SpeechSynthesisUtterance(text)
    utteranceRef.current = utterance 

    utterance.lang = lang === 'pt' ? 'pt-BR' : 'en-US'
    utterance.rate = lang === 'pt' ? 1.0 : 0.9
    
    window.speechSynthesis.speak(utterance)
  }, [lang])

  const resetTranscript = useCallback(() => {
    setTranscript('')
  }, [])

  return {
    isListening,
    isSupported,
    transcript,
    startListening,
    stopListening,
    speak,
    resetTranscript,
  }
}
