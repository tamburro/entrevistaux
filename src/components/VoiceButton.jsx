import { Mic, MicOff } from 'lucide-react'

export default function VoiceButton({ isListening, isSupported, onToggle }) {
  if (!isSupported) return null

  return (
    <button
      onClick={onToggle}
      className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all ${
        isListening
          ? 'bg-red-500 text-white'
          : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
      }`}
      title={isListening ? 'Stop recording' : 'Start recording'}
    >
      {isListening && (
        <span className="absolute inset-0 rounded-full bg-red-500/50 animate-pulse-ring" />
      )}
      {isListening ? <MicOff size={18} /> : <Mic size={18} />}
    </button>
  )
}
