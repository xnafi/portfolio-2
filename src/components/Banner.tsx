"use client";
import ArrowAnimation from "./Re-Ui/ArrowAnimation";
import Button from "./Re-Ui/Button";
import React from "react";
import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";

const Banner = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useScrollAnimation({
    scope: containerRef,
    slideIn: false,
    slideOut: {
      target: ".slide-up-and-fade",
      y: -150,
      opacity: 0,
      stagger: 0.02,
      start: "bottom 70%",
      end: "bottom 10%",
      scrub: 1,
    },
  });

  return (
    <section id="banner" className="relative overflow-hidden">
      <ArrowAnimation />

      <div
        ref={containerRef}
        className="container min-h-screen h-svh flex items-center justify-between max-md:flex-col max-md:pb-10"
      >
        <div className="max-w-200 max-md:flex max-md:grow max-md:flex-col max-md:justify-center max-md:items-start">
          <h1 className="banner-title slide-up-and-fade font-anton leading-[0.95] text-6xl sm:text-[80px]">
            <span className="text-primary">FRONTEND</span>
            <br />
            <span className="ml-4">DEVELOPER</span>
          </h1>

          <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
            Hi, I’m{" "}
            <span className="font-medium text-foreground">Forhad Khan</span>.
            Frontend Developer with 3+ years of experience building scalable
            SaaS platforms and modern web applications using React, Next.js,
            TypeScript, Tailwind CSS, and performance-focused frontend
            architecture.
          </p>

          <Button
            as="link"
            href="#contact"
            variant="primary"
            className="banner-button slide-up-and-fade mt-9"
          >
            Let&apos;s Talk
          </Button>

          <div className="mt-3 flex items-center gap-2">
            <span className="size-3 rounded-full bg-green-500" />

            <span className="text-sm text-muted-foreground slide-up-and-fade">
              Available for full-time opportunities
            </span>
          </div>
        </div>

        <div className="bottom-[10%] right-0 flex gap-4 text-center md:absolute md:flex-col md:gap-8 md:text-right">
          <div className="slide-up-and-fade">
            <h5 className="mb-1.5 font-anton text-3xl text-primary sm:text-4xl">
              3+
            </h5>
            <p className="text-muted-foreground">Years of Experience</p>
          </div>

          <div className="slide-up-and-fade">
            <h5 className="mb-1.5 font-anton text-3xl text-primary sm:text-4xl">
              50+
            </h5>
            <p className="text-muted-foreground">Completed Projects</p>
          </div>

          <div className="slide-up-and-fade">
            <h5 className="mb-1.5 font-anton text-3xl text-primary sm:text-4xl">
              10K+
            </h5>
            <p className="text-muted-foreground">Hours Worked</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
