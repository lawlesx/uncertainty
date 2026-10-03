const bilinear = /* glsl */ `
  // Manual bilinear filtering. Half-float textures aren't linearly filterable on every
  // GPU, and nearest sampling of the 256px trail shows up as blocky square edges.
  vec4 sampleSmooth(sampler2D tex, vec2 uv, vec2 texel) {
    vec2 st = uv / texel - 0.5;
    vec2 i = floor(st);
    vec2 f = fract(st);
    f = f * f * (3.0 - 2.0 * f);
    vec2 b = (i + 0.5) * texel;
    vec4 a = texture2D(tex, b);
    vec4 c = texture2D(tex, b + vec2(texel.x, 0.0));
    vec4 d = texture2D(tex, b + vec2(0.0, texel.y));
    vec4 e = texture2D(tex, b + texel);
    return mix(mix(a, c, f.x), mix(d, e, f.x), f.y);
  }
`

export const fullscreenVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

// Ping-pong trail: stores pointer velocity (xy) and ink amount (z).
// Each frame the previous state is advected along its own velocity and decays.
export const trailFragment = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uPrev;
  uniform vec2 uMouse;
  uniform vec2 uVel;
  uniform float uAspect;
  uniform float uRadius;
  uniform float uDecay;
  uniform float uDt;
  uniform vec2 uTexel;

  ${bilinear}

  void main() {
    vec4 here = sampleSmooth(uPrev, vUv, uTexel);
    vec4 prev = sampleSmooth(uPrev, vUv - here.xy * uDt * 0.35, uTexel);
    prev.xyz *= uDecay;

    vec2 d = vUv - uMouse;
    d.x *= uAspect;
    float speed = clamp(length(uVel), 0.0, 6.0);
    float splat = exp(-dot(d, d) / uRadius) * smoothstep(0.0, 0.6, speed);

    prev.xy += uVel * splat * 0.6;
    prev.z += splat * 0.35;
    prev.xy = clamp(prev.xy, vec2(-3.0), vec2(3.0));
    prev.z = clamp(prev.z, 0.0, 1.5);
    gl_FragColor = vec4(prev.xyz, 1.0);
  }
`

const noise = /* glsl */ `
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 r = mat2(0.8, -0.6, 0.6, 0.8);
    for (int i = 0; i < OCTAVES; i++) {
      v += a * snoise(p);
      p = r * p * 2.02;
      a *= 0.5;
    }
    return v;
  }
`

// Domain-warped aurora gradient, pushed around by the pointer trail.
export const backgroundFragment = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uTrail;
  uniform vec2 uTexel;
  uniform float uTime;
  uniform vec2 uRes;
  uniform vec3 uA;
  uniform vec3 uB;
  uniform vec3 uC;
  uniform vec3 uBg;
  uniform float uIntensity;
  uniform float uScroll;

  ${noise}
  ${bilinear}

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec4 trail = sampleSmooth(uTrail, vUv, uTexel);
    float ink = smoothstep(0.0, 1.0, clamp(trail.z, 0.0, 1.0));
    // the cursor pushes the liquid around rather than painting on top of it
    vec2 uv = vUv - trail.xy * 0.07;

    float aspect = uRes.x / uRes.y;
    vec2 p = (uv - 0.5) * vec2(aspect, 1.0) * 0.85;
    p.y += uScroll * 1.2;
    float t = uTime * 0.05;

    vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - t));
    vec2 r = vec2(
      fbm(p + 1.1 * q + vec2(1.7, 9.2) + t * 1.2),
      fbm(p + 1.1 * q + vec2(8.3, 2.8) - t)
    );
    float f = fbm(p * 0.9 + 1.2 * r);

    vec3 col = uBg;
    col = mix(col, uA, smoothstep(0.0, 0.75, f) * 0.9);
    col = mix(col, uB, smoothstep(0.35, 1.1, length(q) + f * 0.3) * 0.8);
    col = mix(col, uC, smoothstep(0.55, 1.2, r.x + f * 0.8) * 0.75);
    col = mix(col, uBg, smoothstep(0.0, -0.45, f) * 0.85);

    // soft sheen where the warp folds over itself
    float ridge = pow(1.0 - abs(f - 0.35), 8.0);
    col += mix(uB, uC, q.y * 0.5 + 0.5) * ridge * 0.18;

    // pointer wake: rotate the hue of whatever it passes through (no white glow),
    // with a faint coloured rim where the wake fades out
    vec3 rotated = col.brg * 1.25;
    col = mix(col, rotated, ink * 0.75);
    float rim = smoothstep(0.05, 0.22, ink) * (1.0 - smoothstep(0.22, 0.55, ink));
    col += mix(uB, uC, smoothstep(-1.0, 1.0, trail.x)) * rim * 0.22;

    // keep the middle-left darker for text; vignette edges
    vec2 c = vUv - vec2(0.5);
    float vig = smoothstep(1.05, 0.2, length(c * vec2(aspect * 0.85, 1.0)));
    col = mix(uBg, col, uIntensity * mix(0.35, 1.0, vig));

    // film grain
    float g = hash(vUv * uRes + fract(uTime) * 100.0) - 0.5;
    col += g * 0.03;

    gl_FragColor = vec4(max(col, 0.0), 1.0);
    #include <colorspace_fragment>
  }
`
