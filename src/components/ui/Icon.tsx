// Stroke icons drawn on a 24px grid so they sit dead-centre in round buttons
// (text glyphs like → carry font baseline offsets that shift them).
const paths = {
  right: 'M5 12h14M13 6l6 6-6 6',
  'up-right': 'M7 17L17 7M8 7h9v9',
  play: '',
} as const

export default function Icon({ name, className = 'h-4 w-4' }: { name: keyof typeof paths; className?: string }) {
  if (name === 'play') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={paths[name]} />
    </svg>
  )
}
