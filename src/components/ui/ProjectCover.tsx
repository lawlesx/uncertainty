import Image from 'next/image'
import type { Project } from '@/lib/data'

// Screenshot when there is one, otherwise a generated cover in the project's colour.
export default function ProjectCover({ project, sizes }: { project: Project; sizes: string }) {
  if (project.image) {
    return <Image src={project.image} alt={`${project.title} screenshot`} fill sizes={sizes} className="object-cover object-top" />
  }
  const c = project.color
  return (
    <div
      className="absolute inset-0 flex flex-col justify-between overflow-hidden p-6"
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${c} 0%, transparent 55%), radial-gradient(90% 80% at 0% 100%, ${c}66 0%, transparent 60%), #0b0914`,
      }}
      role="img"
      aria-label={`${project.title} cover`}
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: 'linear-gradient(rgb(245 242 255 / 0.15) 1px, transparent 1px), linear-gradient(90deg, rgb(245 242 255 / 0.15) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to bottom, black, transparent)',
        }}
      />
      <span className="relative font-mono text-[10px] uppercase tracking-[0.25em] text-paper/80">{project.kind}</span>
      <span className="relative font-display text-5xl font-extrabold leading-none tracking-tight text-paper">{project.title}</span>
    </div>
  )
}
