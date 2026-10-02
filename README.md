Personal portfolio of **Aniruddha Sil** (lawlesx) — frontend engineer, Blender artist, aspiring game dev.

# Portfolio versions

- **Version 3** — this branch. WebGL-heavy rebuild.
- Version 2 — [Uncertainty](https://lawlesx-git-v2-lawlesx.vercel.app/) (`v2` branch)
- Version 1 — [Madness](https://lawlesx-git-v1-lawlesx.vercel.app/) (`v1` branch)

## Stack

- Next.js 16 (App Router, TypeScript) · React 19
- React Three Fiber + drei + three.js
- Motion (Framer Motion) · Lenis smooth scroll
- Tailwind CSS 4

## What's in it

- **Fluid background** — one fixed WebGL canvas behind the whole page: a domain-warped noise gradient that the cursor smears through via a ping-pong trail texture. The palette changes per section (`data-theme` on each section → `src/lib/store.ts`).
- **Glass torus** — a `MeshTransmissionMaterial` torus that refracts the background, tilts toward the cursor and wobbles harder the faster you move. It leaves after the hero and comes back for the contact section.
- Preloader, custom cursor, magnetic buttons, letter-by-letter reveals, a velocity-driven marquee, a liquid-warp portrait, a scroll-linked timeline, cursor-following project previews, a pinned sideways gallery for the Blender renders and a game-dev teaser.
- Respects `prefers-reduced-motion`; lower-cost rendering on touch and low-core devices.

## Editing content

Everything (bio, jobs, projects, renders, game, socials) lives in [`src/lib/data.ts`](src/lib/data.ts). Search for `TODO` to find the placeholders.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
```
