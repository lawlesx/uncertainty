'use client'

import { Environment, Lightformer, PerformanceMonitor } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import * as THREE from 'three'
import FluidBackground from './FluidBackground'
import GlassCore from './GlassCore'

function Lights() {
  return (
    <Environment resolution={256} frames={1}>
      <group rotation={[-Math.PI / 3, 0, 1]}>
        <Lightformer form="circle" intensity={6} color="#ff3d81" position={[0, 5, -9]} scale={4} />
        <Lightformer form="circle" intensity={4} color="#22e1ff" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={3} />
        <Lightformer form="ring" intensity={5} color="#c6ff3d" position={[5, -1, -1]} rotation-y={-Math.PI / 2} scale={3} />
        <Lightformer form="rect" intensity={3} color="#7b5cff" position={[0, -4, 4]} rotation-x={-Math.PI / 2} scale={[10, 2, 1]} />
        <Lightformer form="rect" intensity={2} color="#ffffff" position={[0, 2, 6]} scale={[6, 1, 1]} />
      </group>
    </Environment>
  )
}

export default function Scene() {
  const [quality, setQuality] = useState<'high' | 'low' | null>(null)
  const [paused, setPaused] = useState(false)
  const [dpr, setDpr] = useState(1)

  // decide once, before the canvas mounts — context options can't change later
  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)').matches
    const cores = navigator.hardwareConcurrency ?? 8
    const q = coarse || cores <= 4 ? 'low' : 'high'
    setQuality(q)
    setDpr(Math.min(window.devicePixelRatio, q === 'high' ? 1.5 : 1))

    const onPause = (e: Event) => setPaused((e as CustomEvent<boolean>).detail)
    window.addEventListener('scene:pause', onPause)
    return () => window.removeEventListener('scene:pause', onPause)
  }, [])

  if (!quality) return null

  return (
    <Canvas
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100lvh', pointerEvents: 'none' }}
      dpr={dpr}
      frameloop={paused ? 'never' : 'always'}
      camera={{ position: [0, 0, 7], fov: 35 }}
      gl={{
        antialias: quality === 'high',
        alpha: false,
        powerPreference: 'high-performance',
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
    >
      {/* drop resolution when the device can't keep up, never raise it past the start */}
      <PerformanceMonitor
        onDecline={() => setDpr((d) => Math.max(0.6, +(d - 0.2).toFixed(2)))}
        flipflops={3}
      />
      <FluidBackground octaves={3} />
      <Suspense fallback={null}>
        <Lights />
        <GlassCore quality={quality} />
      </Suspense>
    </Canvas>
  )
}
