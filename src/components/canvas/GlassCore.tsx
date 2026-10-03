'use client'

import { MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { pointer, scene } from '@/lib/store'

type MTM = THREE.Material & { distortion?: number; temporalDistortion?: number; chromaticAberration?: number }

const ORBITERS = [
  { radius: 1.9, speed: 0.35, offset: 0, size: 0.16, tilt: 0.4, color: '#c6ff3d' },
  { radius: 2.3, speed: -0.25, offset: 2.1, size: 0.1, tilt: -0.6, color: '#22e1ff' },
  { radius: 1.6, speed: 0.5, offset: 4.2, size: 0.07, tilt: 1.1, color: '#ff8a3d' },
]

const ease = (t: number) => t * t * (3 - 2 * t)

// Glass torus that refracts the fluid background. It tilts toward the cursor,
// wobbles harder the faster the cursor moves, leaves after the hero and comes back for the contact section.
export default function GlassCore({ quality = 'high' }: { quality?: 'high' | 'low' }) {
  const group = useRef<THREE.Group>(null)
  const mesh = useRef<THREE.Mesh>(null)
  const material = useRef<MTM>(null)
  const orbiters = useRef<THREE.Group>(null)
  const viewport = useThree((s) => s.viewport)
  const wobble = useRef(0)
  const spin = useRef(0)

  useFrame((state, delta) => {
    const dt = Math.min(delta, 1 / 20)
    const g = group.current
    const m = mesh.current
    const mat = material.current
    if (!g || !m || !mat) return

    const mobile = viewport.width < viewport.height
    const vw = viewport.width
    const vh = viewport.height

    const hero = ease(Math.min(1, scene.heroProgress))
    const contact = ease(Math.min(1, scene.contactProgress))

    // hero placement → flies up and away → returns from below for contact
    const homeX = mobile ? 0 : vw * 0.2
    const homeY = mobile ? vh * 0.14 : 0
    const homeScale = mobile ? vw * 0.2 : Math.min(vw, vh * 1.6) * 0.105
    let x = homeX + (mobile ? 0 : vw * 0.12) * hero
    let y = homeY + vh * 1.1 * hero
    let s = homeScale * (1 - 0.35 * hero)
    if (contact > 0) {
      x = THREE.MathUtils.lerp(mobile ? 0 : vw * 0.24, mobile ? 0 : vw * 0.22, contact)
      y = THREE.MathUtils.lerp(-vh * 1.1, mobile ? -vh * 0.18 : -vh * 0.04, contact)
      s = homeScale * THREE.MathUtils.lerp(0.7, 0.95, contact)
    }
    const k = 1 - Math.exp(-dt * 5)
    g.position.x += (x - g.position.x) * k
    g.position.y += (y - g.position.y) * k
    const sc = g.scale.x + (s - g.scale.x) * k
    g.scale.setScalar(sc)

    const visible = g.position.y < vh * 0.95 && g.position.y > -vh * 1.0
    m.visible = visible
    mat.visible = visible
    if (orbiters.current) orbiters.current.visible = visible
    if (!visible) return

    // tilt toward the cursor, plus a slow idle spin pushed by scroll velocity
    const motion = scene.reducedMotion ? 0.2 : 1
    spin.current += dt * (0.25 + Math.min(Math.abs(scene.velocity) * 0.02, 1.5)) * motion
    const tx = -pointer.y * 0.5 + 0.35
    const ty = pointer.x * 0.6 + spin.current
    m.rotation.x += (tx - m.rotation.x) * k
    m.rotation.y += (ty - m.rotation.y) * k
    m.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.15

    // cursor speed → jelly wobble
    const speed = Math.min(Math.hypot(pointer.vu, pointer.vv), 4)
    wobble.current += (speed * 0.35 - wobble.current) * (1 - Math.exp(-dt * 3))
    if (quality === 'high') {
      mat.distortion = 0.25 + wobble.current * 0.9 * motion
      mat.temporalDistortion = 0.08 + wobble.current * 0.25 * motion
      mat.chromaticAberration = 0.35 + wobble.current * 0.5
    } else {
      // no refraction to distort on phones: squash-and-stretch instead
      const j = Math.sin(state.clock.elapsedTime * 16) * Math.min(wobble.current, 1) * 0.07 * motion
      m.scale.set(1 + j, 1 - j, 1)
    }

    // gentle breathing
    g.position.y += Math.sin(state.clock.elapsedTime * 0.8) * 0.04 * sc

    if (orbiters.current) {
      orbiters.current.children.forEach((child, i) => {
        const o = ORBITERS[i]
        const a = state.clock.elapsedTime * o.speed * motion + o.offset
        child.position.set(Math.cos(a) * o.radius, Math.sin(a * 1.3) * 0.5 + Math.sin(a) * o.tilt, Math.sin(a) * o.radius * 0.6)
      })
    }
  })

  return (
    <group ref={group}>
      <mesh ref={mesh}>
        <torusGeometry args={[1, 0.42, quality === 'high' ? 96 : 48, quality === 'high' ? 200 : 96]} />
        {quality === 'high' ? (
          <MeshTransmissionMaterial
            ref={material as never}
            samples={8}
            resolution={768}
            backside
            backsideThickness={0.4}
            thickness={0.55}
            roughness={0.05}
            ior={1.3}
            chromaticAberration={0.35}
            anisotropicBlur={0.2}
            distortion={0.25}
            distortionScale={0.45}
            temporalDistortion={0.08}
            iridescence={1}
            iridescenceIOR={1.2}
            iridescenceThicknessRange={[100, 900]}
            clearcoat={1}
            attenuationDistance={2.5}
            attenuationColor="#ffffff"
            color="#ffffff"
          />
        ) : (
          // phones: the refraction pass re-renders the whole scene every frame — use a cheap
          // iridescent chrome finish that still picks up the coloured light
          <meshPhysicalMaterial
            ref={material as never}
            color="#ffffff"
            metalness={0.9}
            roughness={0.12}
            iridescence={1}
            iridescenceIOR={1.5}
            iridescenceThicknessRange={[100, 800]}
            clearcoat={1}
            clearcoatRoughness={0.05}
          />
        )}
      </mesh>
      <group ref={orbiters}>
        {ORBITERS.map((o, i) => (
          <mesh key={i} scale={o.size}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshPhysicalMaterial
              color={o.color}
              emissive={o.color}
              emissiveIntensity={0.6}
              metalness={0.1}
              roughness={0.15}
              clearcoat={1}
              clearcoatRoughness={0.05}
            />
          </mesh>
        ))}
      </group>
    </group>
  )
}
