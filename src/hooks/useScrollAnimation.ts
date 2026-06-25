"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface SlideConfig {
  /** CSS selector or DOM element target (default: ".slide-up-and-fade") */
  target?: string | HTMLElement;
  /** Y offset (default: 150 for in, -150 for out) */
  y?: number;
  /** Opacity (default: 0) */
  opacity?: number;
  /** Stagger delay (default: 0.05 for in, 0.02 for out) */
  stagger?: number;
  /** ScrollTrigger start position (default: "top 70%" for in, "bottom 50%" for out) */
  start?: string;
  /** ScrollTrigger end position (default: "bottom bottom" for in, "bottom 10%" for out) */
  end?: string;
  /** Scrub value (default: 0.5) */
  scrub?: number;
}

export interface UseScrollAnimationOptions {
  /** Container ref — required for scope */
  scope: RefObject<HTMLDivElement | null>;
  /** Configuration for the "slide in" animation (elements come into view) */
  slideIn?: SlideConfig | false;
  /** Configuration for the "slide out" animation (elements leave view) */
  slideOut?: SlideConfig | false;
}

const DEFAULTS = {
  slideIn: {
    target: ".slide-up-and-fade",
    y: 150,
    opacity: 0,
    stagger: 0.05,
    start: "top 70%",
    end: "bottom bottom",
    scrub: 0.5,
  },
  slideOut: {
    target: ".slide-up-and-fade",
    y: -150,
    opacity: 0,
    stagger: 0.02,
    start: "bottom 50%",
    end: "bottom 10%",
    scrub: 0.5,
  },
} as const;

export function useScrollAnimation(options: UseScrollAnimationOptions) {
  const { scope, slideIn, slideOut } = options;

  // Helper to build a unique id from target for ScrollTrigger
  function targetId(target: string | HTMLElement, suffix: string): string {
    return typeof target === "string"
      ? `${target.replace(/[^a-zA-Z0-9]/g, "-")}-${suffix}`
      : `element-${suffix}`;
  }

  // ── Slide In ──────────────────────────────────────────────
  if (slideIn !== false) {
    const cfg = { ...DEFAULTS.slideIn, ...slideIn } as Required<SlideConfig>;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGSAP(
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            id: targetId(cfg.target, "in"),
            trigger: scope.current,
            start: cfg.start,
            end: cfg.end,
            scrub: cfg.scrub,
          },
        });

        tl.from(cfg.target, {
          y: cfg.y,
          opacity: cfg.opacity,
          stagger: cfg.stagger,
        });
      },
      { scope },
    );
  }

  // ── Slide Out ─────────────────────────────────────────────
  if (slideOut !== false) {
    const cfg = { ...DEFAULTS.slideOut, ...slideOut } as Required<SlideConfig>;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGSAP(
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            id: targetId(cfg.target, "out"),
            trigger: scope.current,
            start: cfg.start,
            end: cfg.end,
            scrub: cfg.scrub,
          },
        });

        tl.to(cfg.target, {
          y: cfg.y,
          opacity: cfg.opacity,
          stagger: cfg.stagger,
        });
      },
      { scope },
    );
  }
}