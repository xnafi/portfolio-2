"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AdaptiveDpr, Text } from "@react-three/drei";
import * as THREE from "three";

// ── Seeded pseudo-random (deterministic based on seed) ──
function createRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

// ── Particle sprite (glowing circle) ──
function createSpriteTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.15, "rgba(255, 255, 255, 0.9)");
  gradient.addColorStop(0.4, "rgba(200, 180, 255, 0.6)");
  gradient.addColorStop(0.7, "rgba(120, 80, 255, 0.2)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// ── Create realistic planet texture (land + ocean + clouds) ──
function createPlanetTexture(
  baseColor: string,
  accentColor: string
): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext("2d")!;
  const rng = createRng(42);

  // Fill with base (ocean)
  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, 256, 128);

  // Draw random "continents" with accent color
  for (let i = 0; i < 12; i++) {
    const cx = rng() * 256;
    const cy = rng() * 128;
    const rx = 10 + rng() * 40;
    const ry = 10 + rng() * 30;
    const rotation = rng() * Math.PI * 2;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);
    ctx.scale(1 + (rng() - 0.5) * 0.8, 1 + (rng() - 0.5) * 0.8);

    ctx.beginPath();
    // Draw irregular blob
    const points = 8 + Math.floor(rng() * 6);
    for (let p = 0; p < points; p++) {
      const a = (p / points) * Math.PI * 2;
      const dist = 1 + (rng() - 0.5) * 0.5;
      const px = Math.cos(a) * rx * dist;
      const py = Math.sin(a) * ry * dist;
      if (p === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();

    const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, rx);
    grad.addColorStop(0, accentColor);
    grad.addColorStop(0.7, accentColor);
    grad.addColorStop(1, baseColor);
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.restore();
  }

  // Highlight spots
  for (let i = 0; i < 20; i++) {
    const x = rng() * 256;
    const y = rng() * 128;
    const r = 2 + rng() * 6;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.08)";
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);
  texture.needsUpdate = true;
  return texture;
}

// ── Create glow sprite ──
function createGlowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, "rgba(255, 255, 255, 0.25)");
  gradient.addColorStop(0.3, "rgba(180, 150, 255, 0.1)");
  gradient.addColorStop(0.6, "rgba(100, 60, 200, 0.04)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// ── Interfaces ──
interface GalaxyParams {
  arms: number;
  armSpread: number;
  radius: number;
  particles: number;
  rotationSpeed: number;
  travelSpeed: number;
  color: THREE.Color;
  coreColor: THREE.Color;
  originX: number;
  originY: number;
  targetX: number;
  targetY: number;
  tilt: number;
  initDepthOffset: number;
}

interface GlobeData {
  name: string;
  baseColor: string;
  accentColor: string;
  glowColor: string;
  radius: number;
  travelSpeed: number;
  rotationSpeed: number;
  spawnX: number;
  spawnY: number;
  initProgress: number;
  initDepth: number;
}

const GALAXY_COLORS: { color: string; core: string }[] = [
  { color: "#7c5cfc", core: "#ffffff" },
  { color: "#ff6b9d", core: "#ffe0e8" },
  { color: "#4fc3f7", core: "#e1f5fe" },
  { color: "#ce93d8", core: "#f3e5f5" },
  { color: "#81c784", core: "#e8f5e9" },
  { color: "#ffb74d", core: "#fff3e0" },
];

const TECH_GLOBES: GlobeData[] = [
  { name: "React", baseColor: "#0a2a3a", accentColor: "#61dafb", glowColor: "#61dafb", radius: 0.5, travelSpeed: 0.8, rotationSpeed: 0.4, spawnX: -6, spawnY: 2, initProgress: 0.3, initDepth: -30 },
  { name: "Next.js", baseColor: "#1a1a2e", accentColor: "#ffffff", glowColor: "#ffffff", radius: 0.6, travelSpeed: 0.6, rotationSpeed: 0.3, spawnX: 5, spawnY: -2.5, initProgress: 0.7, initDepth: -25 },
  { name: "TypeScript", baseColor: "#0a1a2e", accentColor: "#3178c6", glowColor: "#3178c6", radius: 0.45, travelSpeed: 1.0, rotationSpeed: 0.5, spawnX: -3, spawnY: -2, initProgress: 0.1, initDepth: -32 },
  { name: "Tailwind", baseColor: "#0a1a2a", accentColor: "#06b6d4", glowColor: "#06b6d4", radius: 0.5, travelSpeed: 0.7, rotationSpeed: 0.35, spawnX: 6, spawnY: 3, initProgress: 0.5, initDepth: -28 },
  { name: "Node.js", baseColor: "#0a1a0a", accentColor: "#339933", glowColor: "#339933", radius: 0.5, travelSpeed: 0.9, rotationSpeed: 0.45, spawnX: -5, spawnY: -1.5, initProgress: 0.9, initDepth: -22 },
  { name: "Three.js", baseColor: "#1a1a2e", accentColor: "#ffffff", glowColor: "#4fc3f7", radius: 0.4, travelSpeed: 1.2, rotationSpeed: 0.6, spawnX: 3, spawnY: 3, initProgress: 0.2, initDepth: -33 },
];

const Z_NEAR = 15;
const SPAWN_Z_FAR = -35;
const SPAWN_Z_RANGE = 15;

// ═══════════════════════════════════════
//  GALAXY
// ═══════════════════════════════════════

function generateGalaxyConfigs(): GalaxyParams[] {
  const rng = createRng(42);
  const configs: GalaxyParams[] = [];
  const count = 6;
  for (let i = 0; i < count; i++) {
    const c = GALAXY_COLORS[i % GALAXY_COLORS.length];
    const angle = (i / count) * Math.PI * 2 + rng() * 0.5;
    const dist = 10 + rng() * 8;
    configs.push({
      arms: 2 + Math.floor(rng() * 2),
      armSpread: 0.3 + rng() * 0.5,
      radius: 1.5 + rng() * 2,
      particles: 800 + Math.floor(rng() * 600),
      rotationSpeed: 0.1 + rng() * 0.2,
      travelSpeed: 1.2 + rng() * 2,
      color: new THREE.Color(c.color),
      coreColor: new THREE.Color(c.core),
      originX: Math.cos(angle) * dist,
      originY: Math.sin(angle) * dist * 0.6,
      targetX: (rng() - 0.5) * 6,
      targetY: (rng() - 0.5) * 4,
      tilt: (rng() - 0.5) * 0.8,
      initDepthOffset: rng() * -SPAWN_Z_RANGE,
    });
  }
  return configs;
}

function buildGalaxyData(params: GalaxyParams) {
  const rng = createRng(137);
  const pos: number[] = [];
  const col: number[] = [];
  const siz: number[] = [];
  const { arms, armSpread, radius, particles, color, coreColor } = params;
  for (let i = 0; i < particles; i++) {
    const t = rng();
    const armAngle = (i % arms) * ((2 * Math.PI) / arms);
    const angle = t * Math.PI * 6 + armAngle;
    const r = t * radius + (rng() - 0.5) * armSpread;
    const x = Math.cos(angle) * r;
    const z = Math.sin(angle) * r;
    const y = (rng() - 0.5) * radius * 0.15;
    pos.push(x, y, z);
    const mixFactor = Math.min(1, r / (radius * 0.4));
    const c = coreColor.clone().lerp(color, mixFactor);
    const bright = 0.6 + rng() * 0.4;
    col.push(c.r * bright, c.g * bright, c.b * bright);
    siz.push(0.03 + rng() * 0.06);
  }
  return { positions: new Float32Array(pos), colors: new Float32Array(col), sizes: new Float32Array(siz) };
}

function GalaxyMesh({ params, sprite }: { params: GalaxyParams; sprite: THREE.Texture }) {
  const meshRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);
  const dataRef = useRef({ depth: SPAWN_Z_FAR + params.initDepthOffset, progress: 0 });
  const data = useMemo(() => buildGalaxyData(params), [params]);

  useFrame((_state, delta) => {
    const mesh = meshRef.current;
    const group = groupRef.current;
    if (!mesh || !group) return;
    const d = dataRef.current;
    d.progress += delta * params.travelSpeed * 0.02;
    if (d.progress > 1) {
      d.progress = 0;
      const rng2 = createRng(Math.floor(Math.random() * 9999));
      const a = rng2() * Math.PI * 2;
      const dist = 10 + rng2() * 8;
      group.position.x = Math.cos(a) * dist;
      group.position.y = Math.sin(a) * dist * 0.6;
    }
    const eased = d.progress * d.progress;
    const zPos = SPAWN_Z_FAR + eased * (Z_NEAR - SPAWN_Z_FAR);
    group.position.x = params.originX + (params.targetX - params.originX) * eased;
    group.position.y = params.originY + (params.targetY - params.originY) * eased;
    group.position.z = zPos;
    group.rotation.x = params.tilt;
    group.rotation.z += delta * params.rotationSpeed * 0.3;
    mesh.rotation.y += delta * params.rotationSpeed;
    const nearFadeStart = -5;
    if (zPos > nearFadeStart && mesh.material instanceof THREE.PointsMaterial) {
      mesh.material.opacity = Math.max(0, 1 - (zPos - nearFadeStart) / (Z_NEAR - nearFadeStart));
    } else if (mesh.material instanceof THREE.PointsMaterial) {
      mesh.material.opacity = 1;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute args={[data.positions, 3]} attach="attributes-position" count={data.positions.length / 3} itemSize={3} />
          <bufferAttribute args={[data.colors, 3]} attach="attributes-color" count={data.colors.length / 3} itemSize={3} />
          <bufferAttribute args={[data.sizes, 1]} attach="attributes-size" count={data.sizes.length} itemSize={1} />
        </bufferGeometry>
        <pointsMaterial size={0.12} map={sprite} transparent opacity={1} blending={THREE.AdditiveBlending} depthWrite={false} sizeAttenuation vertexColors />
      </points>
    </group>
  );
}

// ═══════════════════════════════════════
//  TECH GLOBE (now travels toward camera)
// ═══════════════════════════════════════

function TechGlobe({
  data,
  glowMap,
  planetTexture,
}: {
  data: GlobeData;
  glowMap: THREE.Texture;
  planetTexture: THREE.Texture;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Sprite>(null);
  const dataRef = useRef({
    progress: data.initProgress,
    depth: data.initDepth,
    x: data.spawnX,
    y: data.spawnY,
  });

  useFrame((state, delta) => {
    const group = groupRef.current;
    const sphere = sphereRef.current;
    const glow = glowRef.current;
    if (!group || !sphere || !glow) return;

    const d = dataRef.current;
    const speed = data.travelSpeed;
    const aspect = state.viewport.width / state.viewport.height;

    // Travel progress
    d.progress += delta * speed * 0.015;
    if (d.progress > 1) {
      d.progress = 0;
      const rng = createRng(Math.floor(Math.random() * 9999));
      const side = Math.floor(rng() * 4); // 0=left, 1=right, 2=top, 3=bottom
      if (side === 0) { d.x = -aspect * 2 - 2; d.y = (rng() - 0.5) * 3; }
      else if (side === 1) { d.x = aspect * 2 + 2; d.y = (rng() - 0.5) * 3; }
      else if (side === 2) { d.x = (rng() - 0.5) * aspect * 3; d.y = 3; }
      else { d.x = (rng() - 0.5) * aspect * 3; d.y = -3; }
    }

    const t = d.progress;
    const eased = t * t;
    const zPos = SPAWN_Z_FAR + eased * (Z_NEAR - SPAWN_Z_FAR);

    // Move straight across screen — maintain lateral offset, just travel in Z
    group.position.x = d.x;
    group.position.y = d.y;
    group.position.z = zPos;

    // Gentle float wobble on Y
    group.position.y += Math.sin(state.clock.elapsedTime * 0.5 + d.x + d.y) * 0.1;

    // Rotate sphere slowly like a real planet
    sphere.rotation.y += delta * data.rotationSpeed;
    sphere.rotation.x += delta * data.rotationSpeed * 0.2;

    // Pulse glow
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.2 + d.x) * 0.08;
    glow.scale.setScalar(pulse);

    // Fade near camera
    const nearFadeStart = -3;
    const mat = sphere.material as THREE.MeshPhongMaterial;
    const glowMat = glow.material as THREE.SpriteMaterial;
    if (zPos > nearFadeStart) {
      const opacity = Math.max(0, 1 - (zPos - nearFadeStart) / (Z_NEAR - nearFadeStart));
      mat.opacity = opacity * 0.95;
      glowMat.opacity = opacity * 0.35;
    } else {
      mat.opacity = 0.95;
      glowMat.opacity = 0.35;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Atmosphere glow ring */}
      <sprite ref={glowRef} scale={[data.radius * 5, data.radius * 5, 1]}>
        <spriteMaterial
          map={glowMap}
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          color={data.glowColor}
        />
      </sprite>

      {/* Planet sphere - high segment count for smooth circular appearance */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[data.radius, 48, 48]} />
        <meshPhongMaterial
          map={planetTexture}
          transparent
          opacity={0.95}
          emissive={data.glowColor}
          emissiveIntensity={0.08}
          shininess={30}
          specular={new THREE.Color(data.glowColor)}
        />
      </mesh>

      {/* Equatorial torus ring - 3D ring that stays circular from any angle */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[data.radius * 1.3, data.radius * 0.07, 16, 64]} />
        <meshBasicMaterial
          color={data.glowColor}
          transparent
          opacity={0.2}
          depthWrite={false}
        />
      </mesh>

      {/* Tech name label */}
      <Text
        position={[0, -data.radius - 0.6, 0]}
        fontSize={0.22}
        color={data.glowColor}
        anchorX="center"
        anchorY="top"
        fontWeight="bold"
      >
        {data.name}
      </Text>
    </group>
  );
}

// ═══════════════════════════════════════
//  SCENE
// ═══════════════════════════════════════

function GalaxyScene() {
  const particleSprite = useMemo(() => createSpriteTexture(), []);
  const glowSprite = useMemo(() => createGlowTexture(), []);
  const galaxyConfigs = useMemo(() => generateGalaxyConfigs(), []);

  // Pre-create planet textures
  const planetTextures = useMemo(
    () => TECH_GLOBES.map((g) => createPlanetTexture(g.baseColor, g.accentColor)),
    []
  );

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={0.4} />

      {/* Galaxies */}
      <group>
        {galaxyConfigs.map((params, idx) => (
          <GalaxyMesh key={idx} params={params} sprite={particleSprite} />
        ))}
      </group>

      {/* Tech Globes (traveling toward viewer) */}
      <group>
        {TECH_GLOBES.map((g, idx) => (
          <TechGlobe
            key={idx}
            data={g}
            glowMap={glowSprite}
            planetTexture={planetTextures[idx]}
          />
        ))}
      </group>
    </>
  );
}

// ═══════════════════════════════════════
//  EXPORTED COMPONENT
// ═══════════════════════════════════════

export default function GalaxyBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 120 }}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: true,
          stencil: false,
          depth: true,
        }}
        dpr={[0.5, 1.5]}
        frameloop="always"
      >
        <AdaptiveDpr pixelated />
        <GalaxyScene />
      </Canvas>
    </div>
  );
}