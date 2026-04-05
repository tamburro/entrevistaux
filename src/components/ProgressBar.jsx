export default function ProgressBar({ current, total }) {
  const pct = total > 0 ? (current / total) * 100 : 0

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs text-gray-500 tabular-nums">
        {current}/{total}
      </span>
    </div>
  )
}
