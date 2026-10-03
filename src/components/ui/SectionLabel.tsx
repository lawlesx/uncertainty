export default function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-paper/70">
      <span className="text-lime">({index})</span>
      <span className="h-px w-8 bg-paper/40" />
      {children}
    </div>
  )
}
