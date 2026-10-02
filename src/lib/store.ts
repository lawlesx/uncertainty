// Mutable, render-free state shared between the DOM and the WebGL scene.
// Written by event listeners, read inside useFrame — never triggers React renders.

export type Palette = {
  a: string
  b: string
  c: string
  bg: string
  intensity: number
}

// One palette per section, indexed by the section's data-theme attribute.
export const palettes: Palette[] = [
  { a: '#7b5cff', b: '#ff3d81', c: '#22e1ff', bg: '#07060d', intensity: 1 }, // hero
  { a: '#ff8a3d', b: '#ff3d81', c: '#7b5cff', bg: '#0a0610', intensity: 0.75 }, // about
  { a: '#22e1ff', b: '#5b3dff', c: '#c6ff3d', bg: '#050a12', intensity: 0.7 }, // experience
  { a: '#ff2e63', b: '#ffb13d', c: '#7b5cff', bg: '#0c0610', intensity: 0.7 }, // work
  { a: '#c0122f', b: '#0f7a86', c: '#4a1478', bg: '#040306', intensity: 0.55 }, // after dark
  { a: '#c6ff3d', b: '#22e1ff', c: '#3d1cff', bg: '#03080a', intensity: 0.65 }, // game
  { a: '#ff3d81', b: '#7b5cff', c: '#c6ff3d', bg: '#08050d', intensity: 1 }, // contact
]

export const pointer = {
  // normalised device coords, -1..1
  x: 0,
  y: 0,
  // 0..1 uv coords with y up (for shaders)
  u: 0.5,
  v: 0.5,
  // smoothed velocity in uv units per second
  vu: 0,
  vv: 0,
  speed: 0,
  active: false,
}

export const scene = {
  theme: 0,
  scroll: 0, // page progress 0..1
  scrollY: 0,
  velocity: 0, // lenis velocity, px per frame
  heroProgress: 0, // 0 at top, 1 after scrolling past the hero
  contactProgress: 0, // 0 until contact section enters, 1 when it fills the screen
  reducedMotion: false,
}

let last = { u: 0.5, v: 0.5, t: 0 }

export function trackPointer(clientX: number, clientY: number) {
  const w = window.innerWidth
  const h = window.innerHeight
  const u = clientX / w
  const v = 1 - clientY / h
  const now = performance.now()
  const dt = Math.max(1, now - last.t) / 1000
  const vu = (u - last.u) / dt
  const vv = (v - last.v) / dt
  // ignore huge jumps (pointer entering the window)
  if (last.t && dt < 0.2) {
    pointer.vu += (vu - pointer.vu) * 0.5
    pointer.vv += (vv - pointer.vv) * 0.5
  }
  last = { u, v, t: now }
  pointer.u = u
  pointer.v = v
  pointer.x = u * 2 - 1
  pointer.y = v * 2 - 1
  pointer.active = true
}
