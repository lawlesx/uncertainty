// Stroke icons drawn on a 24px grid so they sit dead-centre in round buttons
// (text glyphs like → carry font baseline offsets that shift them).
const paths = {
  right: 'M5 12h14M13 6l6 6-6 6',
  'up-right': 'M7 17L17 7M8 7h9v9',
  play: '',
  github: '',
} as const

export default function Icon({ name, className = 'h-4 w-4' }: { name: keyof typeof paths; className?: string }) {
  if (name === 'github') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path
          fill="currentColor"
          d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"
        />
      </svg>
    )
  }
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
