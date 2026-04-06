import { useState, useCallback, useRef, useEffect } from 'react'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

export function useSpeech(lang = 'en') {
  const [isListening, setIsListening] = useState(false)
  const [isSupported] = useState(() => !!SpeechRecognition)
  const [transcript, setTranscript] = useState('')
  const [voices, setVoices] = useState([])
  const [selectedVoice, setSelectedVoice] = useState(null)
  const recognitionRef = useRef(null)

  useEffect(() => {
    const synth = window.speechSynthesis
    if (!synth) return

    const loadVoices = () => {
      const availableVoices = synth.getVoices()
      const langPrefix = lang === 'pt' ? 'pt' : 'en'
      const matchedVoices = availableVoices.filter(v => v.lang.startsWith(langPrefix))
      const sortedVoices = matchedVoices.length > 0 ? matchedVoices : availableVoices
      setVoices(sortedVoices)
      
      setSelectedVoice(prev => {
        if (prev && prev.lang.startsWith(langPrefix)) return prev
        const preferredVoice = sortedVoices.find(v => 
          lang === 'pt' 
            ? v.name.includes('Luciana') || v.name.includes('Google português do Brasil') || v.name.includes('Daniel')
            : v.name.includes('Samantha') || v.name.includes('Google US') || v.name.includes('Fiona')
        )
        return preferredVoice || sortedVoices[0] || null
      })
    }

    loadVoices()
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = loadVoices
    }
  }, [lang])

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
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    if (selectedVoice) {
      utterance.voice = selectedVoice
    } else {
      utterance.lang = lang === 'pt' ? 'pt-BR' : 'en-US'
    }
    utterance.rate = lang === 'pt' ? 1.0 : 0.9
    window.speechSynthesis.speak(utterance)
  }, [selectedVoice, lang])

  const resetTranscript = useCallback(() => {
    setTranscript('')
  }, [])

  return {
    isListening,
    isSupported,
    transcript,
    voices,
    selectedVoice,
    setSelectedVoice,
    startListening,
    stopListening,
    speak,
    resetTranscript,
  }
}
