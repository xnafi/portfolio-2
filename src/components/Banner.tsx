"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import ArrowAnimation from "./Re-Ui/ArrowAnimation";
import Button from "./Re-Ui/Button";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // move the content a little up on scroll
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 70%",
          end: "bottom 10%",
          scrub: 1,
        },
      });

      tl.fromTo(
        ".slide-up-and-fade",
        { y: 0 },
        { y: -150, opacity: 0, stagger: 0.02 },
      );
    },
    { scope: containerRef },
  );

  return (
    <section className="relative overflow-hidden" id="banner">
      <ArrowAnimation />
      <div
        className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
        ref={containerRef}
      >
        <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[1200px]">
          <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
            <span className="text-primary">FRONTEND</span>
            <br /> <span className="ml-4">DEVELOPER</span>
          </h1>
          <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
            Hi! I&apos;m{" "}
            <span className="font-medium text-foreground">Forhad Khan</span>. I
            build scalable SaaS dashboards and product-focused web applications
            with clean architecture and performance-first design. I specialize
            in React, Next.js, and TypeScript, translating complex UI/UX designs
            into pixel-perfect, reusable, and accessible components. My work
            focuses on clean architecture, component-driven development, and
            performance optimization. I’ve worked with remote teams at Elegant
            Web Studio, Al Jaami Technologies, and Remostarts, contributing to
            modular frontend architectures, shared component libraries, and
            animation-driven user experiences. Through performance-focused
            improvements, I’ve helped applications achieve up to 35% faster load
            times. My technical toolkit includes React, Next.js, TypeScript,
            Tailwind CSS, SASS, Redux Toolkit, TanStack Query, Framer Motion,
            GSAP, React Hook Form, Firebase, Stripe integration, and SEO-focused
            Next.js development. I enjoy building intuitive digital products
            that balance design accuracy, performance, and long-term
            scalability. Open to Frontend / React / Next.js opportunities
          </p>
          <Button
            as="link"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="mt-9 banner-button slide-up-and-fade"
          >
            Let&apos;s Talk
          </Button>

          <div className="flex items-center gap-2 mt-3">
            <span className="size-3 rounded-full bg-white"></span>
            <span className="text-sm text-muted-foreground">
              Available for full-time opportunities
            </span>
          </div>
        </div>

        <div className="md:absolute bottom-[10%] right-[0%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
          <div className="slide-up-and-fade">
            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
              3+
            </h5>
            <p className="text-muted-foreground">Years of Experience</p>
          </div>
          <div className="slide-up-and-fade">
            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
              50+
            </h5>
            <p className="text-muted-foreground">Completed Projects</p>
          </div>
          <div className="slide-up-and-fade">
            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
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
