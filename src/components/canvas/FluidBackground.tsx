'use client'

import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { palettes, pointer, scene } from '@/lib/store'
import { backgroundFragment, fullscreenVertex, trailFragment } from './shaders'

const TRAIL_SIZE = 256

function makeTarget() {
  return new THREE.WebGLRenderTarget(TRAIL_SIZE, TRAIL_SIZE, {
    type: THREE.HalfFloatType,
    format: THREE.RGBAFormat,
    // filtered manually in the shaders (see sampleSmooth)
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    depthBuffer: false,
    stencilBuffer: false,
  })
}

export default function FluidBackground({ octaves = 3 }: { octaves?: number }) {
  const gl = useThree((s) => s.gl)
  const size = useThree((s) => s.size)

  const trail = useMemo(() => {
    const targets = [makeTarget(), makeTarget()]
    const material = new THREE.ShaderMaterial({
      vertexShader: fullscreenVertex,
      fragmentShader: trailFragment,
      uniforms: {
        uPrev: { value: null },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uVel: { value: new THREE.Vector2() },
        uAspect: { value: 1 },
        uRadius: { value: 0.005 },
        uDecay: { value: 0.965 },
        uDt: { value: 0.016 },
        uTexel: { value: new THREE.Vector2(1 / TRAIL_SIZE, 1 / TRAIL_SIZE) },
      },
      depthTest: false,
      depthWrite: false,
    })
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)
    const trailScene = new THREE.Scene()
    trailScene.add(quad)
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    return { targets, material, trailScene, camera, index: 0 }
  }, [])

  const background = useMemo(() => {
    const p = palettes[0]
    return new THREE.ShaderMaterial({
      vertexShader: fullscreenVertex,
      fragmentShader: backgroundFragment,
      defines: { OCTAVES: octaves },
      uniforms: {
        uTrail: { value: trail.targets[0].texture },
        uTexel: { value: new THREE.Vector2(1 / TRAIL_SIZE, 1 / TRAIL_SIZE) },
        uTime: { value: 0 },
        uRes: { value: new THREE.Vector2(1, 1) },
        uA: { value: new THREE.Color(p.a) },
        uB: { value: new THREE.Color(p.b) },
        uC: { value: new THREE.Color(p.c) },
        uBg: { value: new THREE.Color(p.bg) },
        uIntensity: { value: p.intensity },
        uScroll: { value: 0 },
      },
      depthTest: false,
      depthWrite: false,
    })
  }, [octaves, trail])

  const targetColors = useMemo(
    () => palettes.map((p) => ({ a: new THREE.Color(p.a), b: new THREE.Color(p.b), c: new THREE.Color(p.c), bg: new THREE.Color(p.bg), intensity: p.intensity })),
    [],
  )

  useEffect(() => {
    return () => {
      trail.targets.forEach((t) => t.dispose())
      trail.material.dispose()
      background.dispose()
    }
  }, [trail, background])

  useFrame((_, delta) => {
    const dt = Math.min(delta, 1 / 20)
    const u = background.uniforms

    // decay pointer velocity so the ink stops when the mouse stops
    const damp = Math.exp(-dt * 6)
    pointer.vu *= damp
    pointer.vv *= damp

    // trail pass
    const tm = trail.material.uniforms
    const read = trail.targets[trail.index]
    const write = trail.targets[1 - trail.index]
    tm.uPrev.value = read.texture
    tm.uMouse.value.set(pointer.u, pointer.v)
    tm.uVel.value.set(scene.reducedMotion ? 0 : pointer.vu, scene.reducedMotion ? 0 : pointer.vv)
    tm.uAspect.value = size.width / size.height
    tm.uDt.value = dt
    tm.uDecay.value = Math.pow(0.965, dt * 60)
    gl.setRenderTarget(write)
    gl.render(trail.trailScene, trail.camera)
    gl.setRenderTarget(null)
    trail.index = 1 - trail.index
    u.uTrail.value = write.texture

    // background uniforms
    u.uTime.value += scene.reducedMotion ? dt * 0.15 : dt
    u.uRes.value.set(size.width, size.height)
    u.uScroll.value += (scene.scroll - u.uScroll.value) * Math.min(1, dt * 4)

    const target = targetColors[scene.theme] ?? targetColors[0]
    const k = 1 - Math.exp(-dt * 2.2)
    u.uA.value.lerp(target.a, k)
    u.uB.value.lerp(target.b, k)
    u.uC.value.lerp(target.c, k)
    u.uBg.value.lerp(target.bg, k)
    u.uIntensity.value += (target.intensity - u.uIntensity.value) * k

  })

  return (
    <mesh frustumCulled={false} renderOrder={-1}>
      <planeGeometry args={[2, 2]} />
      <primitive object={background} attach="material" />
    </mesh>
  )
}
