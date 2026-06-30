"use client";

import { useCallback, useEffect, useRef } from "react";

interface CodeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  opacity: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  life: number;
  maxLife: number;
  color: string;
}

const CODE_SNIPPETS = [
  "</>",
  "{}",
  "()",
  "=>",
  "/*",
  "*/",
  "//",
  "const",
  "let",
  "var",
  "function",
  "return",
  "if",
  "else",
  "for",
  "while",
  "class",
  "import",
  "export",
  "from",
  "async",
  "await",
  "try",
  "catch",
  "true",
  "false",
  "null",
  "undefined",
  "new",
  "this",
  "===",
  "!==",
  "&&",
  "||",
  "...",
  "${}",
  "<div>",
  "</div>",
  "<span>",
  "<p>",
  "<a>",
  "npm",
  "yarn",
  "git",
  "push",
  "pull",
  "react",
  "next",
  "node",
  "ts",
  "jsx",
  "#",
  ".",
  "@",
  "$",
  "_",
  "-",
  "+",
  "=",
  "{|}",
  "[|]",
  "(|)",
  "<|/>",
];

const PARTICLE_COLORS = [
  "#f59e0b",
  "#14b8a6",
  "#8b5cf6",
  "#ec4899",
  "#3b82f6",
  "#10b981",
  "#f97316",
  "#22d3ee",
];

const MAX_PARTICLES = 60;
const PARTICLE_LIFE = 1.8;
const PARTICLE_SPEED = { min: 80, max: 300 };
const PARTICLE_SIZE = { min: 10, max: 18 };

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<CodeParticle[]>([]);
  const rafRef = useRef<number>(0);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animateRef = useRef<(timestamp: number) => void>(() => {});

  const randomFrom = <T,>(arr: T[]): T =>
    arr[Math.floor(Math.random() * arr.length)];

  const spawnParticles = useCallback((x: number, y: number) => {
    const count = Math.min(12 + Math.floor(Math.random() * 8), MAX_PARTICLES);

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed =
        PARTICLE_SPEED.min +
        Math.random() * (PARTICLE_SPEED.max - PARTICLE_SPEED.min);
      const size =
        PARTICLE_SIZE.min +
        Math.random() * (PARTICLE_SIZE.max - PARTICLE_SIZE.min);

      const particle: CodeParticle = {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 80,
        text: randomFrom(CODE_SNIPPETS),
        opacity: 1,
        size,
        rotation: (Math.random() - 0.5) * 0.6,
        rotationSpeed: (Math.random() - 0.5) * 4,
        life: PARTICLE_LIFE,
        maxLife: PARTICLE_LIFE,
        color: randomFrom(PARTICLE_COLORS),
      };

      particlesRef.current.push(particle);
    }

    if (particlesRef.current.length > MAX_PARTICLES) {
      particlesRef.current = particlesRef.current.slice(
        particlesRef.current.length - MAX_PARTICLES
      );
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    ctxRef.current = ctx;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Define animate using ref so it can self-reference
    animateRef.current = () => {
      const context = ctxRef.current;
      if (!context) return;

      const cvs = canvasRef.current;
      if (!cvs) return;

      context.clearRect(0, 0, cvs.width, cvs.height);

      const dt = 0.016;
      const particles = particlesRef.current;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.life -= dt;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        p.vy += 120 * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rotation += p.rotationSpeed * dt;

        const lifeRatio = Math.max(0, p.life / p.maxLife);

        context.save();
        context.translate(p.x, p.y);
        context.rotate(p.rotation);
        context.globalAlpha = lifeRatio;

        context.font = `bold ${p.size}px "JetBrains Mono", "Fira Code", "Consolas", monospace`;
        context.textAlign = "center";
        context.textBaseline = "middle";

        context.shadowColor = p.color;
        context.shadowBlur = 8 * lifeRatio;
        context.fillStyle = p.color;
        context.fillText(p.text, 0, 0);

        context.restore();
      }

      rafRef.current = requestAnimationFrame(animateRef.current);
    };

    rafRef.current = requestAnimationFrame(animateRef.current);

    const onClick = (e: MouseEvent) => {
      spawnParticles(e.clientX, e.clientY);
    };

    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const onLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
    };

    const onEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "1";
    };

    document.addEventListener("click", onClick);
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("click", onClick);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [spawnParticles]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed -top-4 -left-4 z-9999 pointer-events-none"
        style={{
          transform: "translate(-100px, -100px)",
          width: "30px",
          height: "30px",
          willChange: "transform",
        }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-amber-500/60 animate-pulse-scale" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-400" />
      </div>

      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-9998 pointer-events-none"
        style={{ willChange: "transform" }}
      />

      <style jsx>{`
        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }
        @keyframes pulse-scale {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.3;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;