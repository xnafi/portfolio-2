"use client";
import Image from "next/image";
import Me from "../../public/assets/me.png";
import React from "react";
import Button from "./Re-Ui/Button";
import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";

const AboutMe = () => {
  const container = React.useRef<HTMLDivElement>(null);

  useScrollAnimation({
    scope: container,
  });

  return (
    <section className="pb-section my-10" id="about-me">
      <div className="container" ref={container}>
        <h2 className="text-4xl md:text-5xl font-thin mb-20 slide-up-and-fade">
          I combine modern frontend technologies with performance-first
          development practices to create scalable products that deliver both
          business value and exceptional user experiences.
        </h2>

        <p className="pb-3 border-b text-muted-foreground slide-up-and-fade text-lg">
          About Me.
        </p>

        <div className="grid md:grid-cols-12 mt-9">
          <div className="md:col-span-5">
            <p className="text-5xl slide-up-and-fade">
              Hi, I&apos;m Forhad Khan.
            </p>
            <Image
              src={Me}
              alt="Forhad Khan"
              width={450}
              height={400}
              className="bg-green-500 mt-6 slide-up-and-fade"
            />
          </div>
          <div className="md:col-span-7">
            <div className="text-lg text-muted-foreground max-w-180">
              <p className="slide-up-and-fade">
                I build scalable SaaS dashboards and product-focused web
                applications with clean architecture and performance-first
                design.
              </p>

              <p className="mt-3 slide-up-and-fade">
                I specialize in React, Next.js, and TypeScript, translating
                complex UI/UX designs into pixel-perfect, reusable, and
                accessible components. My work focuses on clean architecture,
                component-driven development, and performance optimization.
              </p>
              <p className="mt-3 slide-up-and-fade">
                I’ve worked with remote teams at Elegant Web Studio, Al Jaami
                Technologies, and Remostarts, contributing to modular frontend
                architectures, shared component libraries, and animation-driven
                user experiences. Through performance-focused improvements, I’ve
                helped applications achieve up to 35% faster load times.
              </p>
              <p className="mt-3 slide-up-and-fade">
                My technical toolkit includes React, Next.js, TypeScript,
                Tailwind CSS, SASS, Redux Toolkit, TanStack Query, Framer
                Motion, GSAP, React Hook Form, Firebase, Stripe integration, and
                SEO-focused Next.js development.
              </p>
              <p className="mt-3 slide-up-and-fade">
                I enjoy building intuitive digital products that balance design
                accuracy, performance, and long-term scalability.
              </p>
              <p className="mt-3 slide-up-and-fade">
                Open to Frontend / React / Next.js opportunities
              </p>
              <Button
                href="https://drive.google.com/file/d/1uTiGGQJ6TmBtVpHFfUgqO5MguhQFPOJB/view"
                target="_blank"
                className="mt-6 slide-up-and-fade"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
